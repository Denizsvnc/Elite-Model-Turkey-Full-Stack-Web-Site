import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "../services/api";
import { useLanguage } from "../contexts/LanguageContext";
import {
  Select as MuiSelect,
  TextField,
  Box,
  InputAdornment,
  Button,
  Tooltip,
  CircularProgress,
  Zoom,
  Snackbar,
  Alert,
  AlertColor,
  Dialog,
  DialogContent,
  Slide,
  Link,
} from "@mui/material";
import ReactSelect from "react-select";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import PaymentOk from "@/components/PaymentOk";

// --- SEÇENEKLER ---

// Türkiye şehirleri
const turkeyCities = [
  { value: "Istanbul", label: "Istanbul" },
  { value: "Ankara", label: "Ankara" },
  { value: "Izmir", label: "Izmir" },
  { value: "Bursa", label: "Bursa" },
  { value: "Antalya", label: "Antalya" },
  { value: "Adana", label: "Adana" },
  { value: "Konya", label: "Konya" },
  { value: "Gaziantep", label: "Gaziantep" },
  { value: "Kayseri", label: "Kayseri" },
  { value: "Mersin", label: "Mersin" },
  { value: "Eskişehir", label: "Eskişehir" },
  { value: "Samsun", label: "Samsun" },
  { value: "Trabzon", label: "Trabzon" },
  { value: "Diyarbakır", label: "Diyarbakır" },
  // ... Diğer iller eklenebilir
];

// Ülke listesi
const countryOptions = [
  { value: "Turkey", label: "Turkey" },
  { value: "Germany", label: "Germany" },
  { value: "France", label: "France" },
  { value: "United States", label: "United States" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "Italy", label: "Italy" },
  { value: "Spain", label: "Spain" },
  { value: "Russia", label: "Russia" },
  { value: "Azerbaijan", label: "Azerbaijan" },
  { value: "Netherlands", label: "Netherlands" },
  { value: "Greece", label: "Greece" },
  { value: "Ukraine", label: "Ukraine" },
  { value: "Poland", label: "Poland" },
  { value: "Other", label: "Other" },
];

const ApplicationForm: React.FC = () => {
  const { dict } = useLanguage();
  const [birthDateValue, setBirthDateValue] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [price, setPrice] = useState<number | null>(null);
  const [photoPreviews, setPhotoPreviews] = useState<{ [key: string]: string }>(
    {},
  );

  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [verificationCodeSent, setVerificationCodeSent] = useState(false);
  const [enteredVerificationCode, setEnteredVerificationCode] = useState("");
  const [verificationLoading, setVerificationLoading] = useState(false);

  const [notification, setNotification] = useState<{
    open: boolean;
    message: string;
    severity: AlertColor;
  }>({
    open: false,
    message: "",
    severity: "info",
  });

  const showNotify = (message: string, severity: AlertColor = "info") => {
    setNotification({ open: true, message, severity });
  };

  const handleCloseNotify = (
    _?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") return;
    setNotification((prev) => ({ ...prev, open: false }));
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required(
        dict?.ApplicationPage?.NameSurnameRequired || "Ad Soyad zorunlu",
      )
      .matches(/^[a-zA-ZğüşöçıİĞÜŞÖÇ\s]+$/, "Geçerli bir ad soyad giriniz"),
    birthDate: Yup.string().required(
      dict?.ApplicationPage?.DateOfBornRequired || "Doğum tarihi zorunlu",
    ),
    gender: Yup.string().required(
      dict?.ApplicationPage?.GenderRequired || "Cinsiyet zorunlu",
    ),
    nationality: Yup.string().required(
      dict?.ApplicationPage?.NationalityRequired || "Ülke zorunlu",
    ),
    email: Yup.string()
      .email("Geçerli bir e-posta giriniz")
      .required(dict?.ApplicationPage?.EmailRequired || "E-posta zorunlu"),
    phone: Yup.string()
      .matches(/^\+?[0-9\s]{10,20}$/, "Geçerli bir telefon numarası giriniz")
      .required(
        dict?.ApplicationPage?.PhoneRequired || "Telefon numarası zorunlu",
      ),
    city: Yup.string().required(
      dict?.ApplicationPage?.CityRequired || "Şehir zorunlu",
    ),
    heightCm: Yup.number().positive().required("Boy zorunlu"),
    chestCm: Yup.number().positive().required("Göğüs zorunlu"),
    waistCm: Yup.number().positive().required("Bel zorunlu"),
    hipsCm: Yup.number().positive().required("Basen zorunlu"),
    footCm: Yup.number().positive().required("Ayak zorunlu"),
    eyeColor: Yup.string().required(
      dict?.ApplicationPage?.EyeColorRequired || "Göz rengi zorunlu",
    ),
    selfieUrl: Yup.string().required(
      dict?.ApplicationPage?.PhotoRequired || "Selfie fotoğrafı zorunlu",
    ),
    profilePhoto: Yup.string().required(
      dict?.ApplicationPage?.PhotoRequired || "Profil fotoğrafı zorunlu",
    ),
    fullBodyPhoto: Yup.string().required(
      dict?.ApplicationPage?.PhotoRequired || "Tam boy fotoğraf zorunlu",
    ),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      birthDate: "",
      gender: "FEMALE",
      nationality: "",
      email: "",
      phone: "",
      city: "",
      heightCm: "",
      chestCm: "",
      hipsCm: "",
      footCm: "",
      waistCm: "",
      eyeColor: "",
      selfieUrl: "",
      profilePhoto: "",
      fullBodyPhoto: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      if (!isEmailVerified) {
        showNotify("Lütfen önce e-posta adresinizi doğrulayın.", "warning");
        return;
      }

      setLoading(true);
      try {
        const response = await api.post("/api/applications", {
          ...values,
          heightCm: Number(values.heightCm),
          chestCm: Number(values.chestCm),
          hipsCm: Number(values.hipsCm),
          footCm: Number(values.footCm),
          waistCm: Number(values.waistCm),
        });

        if (response.data.paymentPageUrl) {
          window.location.assign(response.data.paymentPageUrl);
        } else if (response.data.checkoutFormContent) {
          setCheckoutFormHtml(response.data.checkoutFormContent);
          setIsPaymentModalOpen(true);
        } else {
          setSubmitted(true);
          resetForm();
          setBirthDateValue(null);
          setPhotoPreviews({});
          setIsEmailVerified(false);
          setVerificationCodeSent(false);
          setTimeout(() => setSubmitted(false), 5000);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } catch (error) {
        console.error("Başvuru gönderme hatası:", error);
        showNotify("Başvurunuz gönderilemedi. Lütfen tekrar deneyin.", "error");
      } finally {
        setLoading(false);
      }
    },
  });

  const [checkoutFormHtml, setCheckoutFormHtml] = useState<string>("");
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  useEffect(() => {
    api.get("/api/fee").then((res) => {
      if (res.data?.amount) setPrice(res.data.amount);
    }).catch(() => {});
  }, []);
  useEffect(() => {
    if (checkoutFormHtml && isPaymentModalOpen) {
      const scriptContainer = document.getElementById(
        "iyzico-payment-form-container",
      );
      if (scriptContainer) {
        scriptContainer.innerHTML = checkoutFormHtml;
        const scripts = scriptContainer.getElementsByTagName("script");
        for (let i = 0; i < scripts.length; i++) {
          const newScript = document.createElement("script");
          newScript.type = "text/javascript";
          if (scripts[i].src) {
            newScript.src = scripts[i].src;
          } else {
            newScript.innerHTML = scripts[i].innerHTML;
          }
          document.body.appendChild(newScript);
        }
      }
    }
  }, [checkoutFormHtml, isPaymentModalOpen]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    const files = (e.target as HTMLInputElement).files;

    if (type === "file" && files && files[0]) {
      const file = files[0];
      setPhotoPreviews((prev) => ({
        ...prev,
        [name]: URL.createObjectURL(file),
      }));

      const form = new FormData();
      form.append("file", file);

      let folder = "";
      if (name === "selfieUrl") folder = "Applications/selfie";
      if (name === "profilePhoto") folder = "Applications/profile";
      if (name === "fullBodyPhoto") folder = "Applications/fullbody";

      api
        .post(`/api/uploads?folder=${folder}`, form, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          let url = res.data.url;
          if (url && !url.startsWith("/uploads")) {
            url = `/uploads/${folder}/${url}`;
          }
          formik.setFieldValue(name, url);
        })
        .catch((err) => {
          console.error("Fotoğraf yükleme hatası", err);
          showNotify("Fotoğraf yüklenirken bir hata oluştu.", "error");
        });
    } else {
      formik.handleChange(e);
      if (name === "email") {
        setIsEmailVerified(false);
        setVerificationCodeSent(false);
      }
    }
  };

  const sendVerificationCode = async () => {
    if (!formik.values.email || formik.errors.email) {
      formik.setFieldTouched("email", true);
      return;
    }

    setVerificationLoading(true);
    try {
      await api.put("/api/applications/send-verification-email", {
        email: formik.values.email,
      });
      setVerificationCodeSent(true);
      showNotify("Doğrulama kodu e-posta adresinize gönderildi.", "success");
    } catch (error) {
      console.error("Kod gönderim hatası:", error);
      showNotify("Kod gönderilemedi. Lütfen tekrar deneyin.", "error");
    } finally {
      setVerificationLoading(false);
    }
  };

  const verifyCode = async () => {
    if (enteredVerificationCode.length !== 6) {
      showNotify("Lütfen 6 haneli kodu eksiksiz giriniz.", "warning");
      return;
    }

    setVerificationLoading(true);
    try {
      const res = await api.post("/api/applications/verify-code", {
        email: formik.values.email,
        code: enteredVerificationCode,
      });
      if (res.data.success) {
        setIsEmailVerified(true);
        showNotify("E-posta başarıyla doğrulandı.", "success");
      }
    } catch (error: any) {
      console.error("Doğrulama hatası:", error);
      showNotify(
        error.response?.data?.error || "Doğrulama kodu hatalı.",
        "error",
      );
    } finally {
      setVerificationLoading(false);
    }
  };

  // Calculate form completion progress
  const calculateProgress = () => {
    const totalFields = Object.keys(FormData).length;
    const filledFields = Object.values(FormData).filter(
      (val) => val && val !== "",
    ).length;
    return Math.round((filledFields / totalFields) * 100);
  };

  const progress = calculateProgress();

  
  function handleFieldBlur(fieldName: string): void {
	formik.setFieldTouched(fieldName, true);
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">
          {dict?.ApplicationPage?.HeroTitle || "Başvuru Formu"}
        </h1>
        <p className="text-slate-500 text-lg md:text-xl font-light max-w-2xl mx-auto">
          {dict?.ApplicationPage?.HeroContent ||
            "Join The Elite Model Turkey. Please fill out the form below with accurate measurements and natural light polaroids."}
        </p>
      </div>

      <form onSubmit={formik.handleSubmit} className="space-y-12">
        {/* Kişisel Bilgiler */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b pb-4">
            <span className="material-symbols-outlined text-slate-400">
              person
            </span>
            <h2 className="text-xl font-bold">
              {dict?.ApplicationPage?.PersonalDetails || "Personal Details"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-2">
                {dict?.ApplicationPage?.NameSurname || "Ad Soyad (Full Name)"}
              </label>
              <input
                type="text"
                name="fullName"
                value={formik.values.fullName}
                onChange={handleInputChange}
                onBlur={() => handleFieldBlur("fullName")}
                onKeyDown={(e) => {
                  const key = e.key;
                  if (
                    !/^[a-zA-ZğüşöçıİĞÜŞÖÇ\s]$/.test(key) &&
                    key.length === 1 &&
                    key !== "Backspace" &&
                    key !== "Tab" &&
                    key !== "ArrowLeft" &&
                    key !== "ArrowRight"
                  ) {
                    e.preventDefault();
                  }
                }}
                required
                className={`w-full p-4 bg-slate-50 border ${formik.touched.fullName && formik.errors.fullName ? "border-red-500" : "border-slate-200"} rounded-lg focus:outline-none focus:border-blue-500 transition-colors`}
                placeholder="Adınız Soyadınız"
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <p className="text-red-500 text-xs mt-1 pl-2">
                  {formik.errors.fullName}
                </p>
              )}
            </div>

            {/* Tarih Seçici */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                {dict?.ApplicationPage?.DateOfBorn ||
                  "Doğum Tarihi (Date of Birth)"}
              </label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={birthDateValue}
                  onChange={(newValue) => {
                    setBirthDateValue(newValue);
                    formik.setFieldValue(
                      "birthDate",
                      newValue ? newValue.toISOString().split("T")[0] : "",
                    );
                  }}
                  format="dd/MM/yyyy"
                  disableFuture
                  openTo="year"
                  views={["year", "month", "day"]}
                  slotProps={{
                    textField: {
                      required: true,
                      fullWidth: true,
                      error: !!(
                        formik.touched.birthDate && formik.errors.birthDate
                      ),
                      helperText:
                        formik.touched.birthDate && formik.errors.birthDate,
                      className: "bg-slate-50",
                    },
                  }}
                />
              </LocalizationProvider>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                {dict?.ApplicationPage?.Gender || "Cinsiyet (Gender)"}
              </label>
              <select
                name="gender"
                value={formik.values.gender}
                onChange={handleInputChange}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors appearance-none"
              >
                <option value="FEMALE">
                  {dict?.ApplicationPage?.Female || "Kadın"}
                </option>
                <option value="MALE">
                  {dict?.ApplicationPage?.Male || "Erkek"}
                </option>
                <option value="OTHER">
                  {dict?.ApplicationPage?.DoNot || "Belirtmek İstemiyorum"}
                </option>
              </select>
            </div>
          </div>
        </section>

        {/* İletişim Bilgileri */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b pb-4">
            <span className="material-symbols-outlined text-slate-400">
              contact_mail
            </span>
            <h2 className="text-xl font-bold">
              {dict?.ApplicationPage?.Contact || "Contact Information"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                {dict?.ApplicationPage?.email || "E-posta (Email)"}
              </label>
              <TextField
                type="email"
                name="email"
                value={formik.values.email}
                onChange={handleInputChange}
                onBlur={() => handleFieldBlur("email")}
                required
                fullWidth
                variant="outlined"
                className="bg-slate-50"
                placeholder="ornek@mail.com"
                error={Boolean(formik.touched.email && formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                disabled={isEmailVerified}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {!isEmailVerified ? (
                        <button
                          type="button"
                          onClick={sendVerificationCode}
                          disabled={verificationLoading || !formik.values.email}
                          className="text-sm font-semibold text-blue-600 hover:text-blue-800 disabled:text-slate-400 px-2 py-1 transition-colors"
                        >
                          {verificationLoading ? (
                            <CircularProgress size={20} color="inherit" />
                          ) : verificationCodeSent ? (
                            "Tekrar Gönder"
                          ) : (
                            "Kod Gönder"
                          )}
                        </button>
                      ) : (
                        <Zoom in={isEmailVerified}>
                          <div className="flex items-center text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full text-xs border border-green-100">
                            <span className="material-symbols-outlined text-sm mr-1">
                              check_circle
                            </span>
                            Onaylandı
                          </div>
                        </Zoom>
                      )}
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderRadius: "12px" },
                    "&.Mui-disabled fieldset": { borderColor: "#22c55e" },
                  },
                }}
              />

              {verificationCodeSent && !isEmailVerified && (
                <div className="bg-blue-50/30 p-4 rounded-xl border border-blue-100 mt-2 animate-in fade-in slide-in-from-top-2 duration-400">
                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
                    <div className="flex-1 w-full sm:w-auto">
                      <p className="text-[10px] font-bold text-blue-600 mb-1 uppercase tracking-widest pl-1">
                        Doğrulama Kodu
                      </p>
                      <TextField
                        type="text"
                        value={enteredVerificationCode}
                        onChange={(e) =>
                          setEnteredVerificationCode(
                            e.target.value.replace(/\D/g, "").slice(0, 6),
                          )
                        }
                        placeholder="000 000"
                        variant="standard"
                        fullWidth
                        inputProps={{
                          maxLength: 6,
                          style: {
                            fontSize: "1.25rem",
                            letterSpacing: "6px",
                            textAlign: "left",
                            paddingLeft: "4px",
                            fontWeight: "600",
                            color: "#1e293b",
                          },
                        }}
                        InputProps={{ disableUnderline: false }}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={verifyCode}
                      disabled={
                        verificationLoading ||
                        enteredVerificationCode.length !== 6
                      }
                      className="w-full sm:w-auto h-10 px-6 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 disabled:bg-slate-300 transition-all active:scale-95"
                    >
                      {verificationLoading ? (
                        <CircularProgress size={18} color="inherit" />
                      ) : (
                        "Doğrula"
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                {dict?.ApplicationPage?.Phone || "Telefon (Phone)"}
              </label>
              <TextField
                type="tel"
                name="phone"
                value={formik.values.phone}
                onChange={handleInputChange}
                onBlur={() => handleFieldBlur("phone")}
                onKeyDown={(e) => {
                  const key = e.key;
                  if (
                    !/[0-9+\s]/.test(key) &&
                    key.length === 1 &&
                    key !== "Backspace" &&
                    key !== "Tab" &&
                    key !== "ArrowLeft" &&
                    key !== "ArrowRight"
                  ) {
                    e.preventDefault();
                  }
                }}
                required
                fullWidth
                className="bg-slate-50"
                placeholder="+90 555 000 0000"
                inputProps={{ maxLength: 20 }}
                error={Boolean(formik.touched.phone && formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
              />
            </div>

            {/* Ülke Seçimi */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                {dict?.ApplicationPage?.Nationality || "Ülke (Nationality)"}
              </label>
              <ReactSelect
                options={countryOptions}
                value={
                  countryOptions.find(
                    (opt) => opt.value === formik.values.nationality,
                  ) || null
                }
                onChange={(option) => {
                  formik.setFieldValue(
                    "nationality",
                    option ? option.value : "",
                  );
                  formik.setFieldValue("city", "");
                }}
                onBlur={() => handleFieldBlur("nationality")}
                placeholder="Ülke Seçiniz / Select Country"
                isClearable
                isSearchable
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: 56,
                    background: "#f8fafc",
                    borderColor:
                      formik.touched.nationality && formik.errors.nationality
                        ? "#ef4444"
                        : "#e2e8f0",
                    borderRadius: "12px",
                    borderWidth: "2px",
                  }),
                  menu: (base) => ({ ...base, zIndex: 9999 }),
                }}
              />
              {formik.touched.nationality && formik.errors.nationality && (
                <p className="text-red-500 text-xs mt-1 pl-2">
                  {formik.errors.nationality}
                </p>
              )}
            </div>

            {/* Şehir Seçimi */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                {dict?.ApplicationPage?.City || "Şehir (City)"}
              </label>
              {formik.values.nationality === "Turkey" ? (
                <ReactSelect
                  options={turkeyCities}
                  value={
                    turkeyCities.find(
                      (opt) => opt.value === formik.values.city,
                    ) || null
                  }
                  onChange={(option) =>
                    formik.setFieldValue("city", option ? option.value : "")
                  }
                  placeholder="Şehir Seçiniz..."
                  isClearable
                  isSearchable
                  styles={{
                    control: (base) => ({
                      ...base,
                      minHeight: 56,
                      background: "#f8fafc",
                      borderColor:
                        formik.touched.city && formik.errors.city
                          ? "#ef4444"
                          : "#e2e8f0",
                      borderRadius: "12px",
                      borderWidth: "2px",
                    }),
                    menu: (base) => ({ ...base, zIndex: 9999 }),
                  }}
                />
              ) : (
                <TextField
                  type="text"
                  name="city"
                  value={formik.values.city}
                  onChange={handleInputChange}
                  onBlur={() => handleFieldBlur("city")}
                  required
                  fullWidth
                  className="bg-slate-50"
                  placeholder="Şehir giriniz"
                  disabled={!formik.values.nationality}
                  error={Boolean(formik.touched.city && formik.errors.city)}
                  helperText={
                    !formik.values.nationality
                      ? "Önce ülke seçiniz"
                      : formik.touched.city && formik.errors.city
                  }
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                />
              )}
              {formik.touched.city &&
                formik.errors.city &&
                formik.values.nationality === "Turkey" && (
                  <p className="text-red-500 text-xs mt-1 pl-2">
                    {formik.errors.city}
                  </p>
                )}
            </div>
          </div>
        </section>

        {/* Ölçüler */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b pb-4">
            <span className="material-symbols-outlined text-slate-400">
              straighten
            </span>
            <h2 className="text-xl font-bold">
              {dict?.ApplicationPage?.Measurements || "Measurements"}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                label: dict?.ApplicationPage?.Height || "Boy",
                unit: "cm",
                name: "heightCm",
                ph: "175",
              },
              {
                label: dict?.ApplicationPage?.Bust || "Göğüs (Bust)",
                unit: "cm",
                name: "chestCm",
                ph: "85",
              },
              {
                label: dict?.ApplicationPage?.Waist || "Bel (Waist)",
                unit: "cm",
                name: "waistCm",
                ph: "60",
              },
              {
                label: dict?.ApplicationPage?.Hips || "Basen (Hips)",
                unit: "cm",
                name: "hipsCm",
                ph: "90",
              },
              {
                label: dict?.ApplicationPage?.Shoe || "Ayak (Shoe)",
                unit: "EU",
                name: "footCm",
                ph: "38",
              },
            ].map((m) => (
              <div key={m.name}>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  {m.label}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name={m.name}
                    value={(formik.values as any)[m.name]}
                    onChange={handleInputChange}
                    onBlur={() => handleFieldBlur(m.name)}
                    required
                    className={`w-full p-4 bg-slate-50 border ${(formik.touched as any)[m.name] && (formik.errors as any)[m.name] ? "border-red-500" : "border-slate-200"} rounded-lg focus:outline-none focus:border-blue-500 transition-colors`}
                    placeholder={m.ph}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                    {m.unit}
                  </span>
                </div>
                {(formik.touched as any)[m.name] &&
                  (formik.errors as any)[m.name] && (
                    <p className="text-red-500 text-xs mt-1">
                      {(formik.errors as any)[m.name]}
                    </p>
                  )}
              </div>
            ))}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                {dict?.ApplicationPage?.Eyes || "Göz (Eyes)"}
              </label>
              <select
                name="eyeColor"
                value={formik.values.eyeColor}
                onChange={handleInputChange}
                required
                className={`w-full p-4 bg-slate-50 border ${formik.touched.eyeColor && formik.errors.eyeColor ? "border-red-500" : "border-slate-200"} rounded-lg focus:outline-none focus:border-blue-500 transition-colors appearance-none`}
              >
                <option value="">
                  {dict?.ApplicationPage?.Select || "Select"}
                </option>
                <option value="Brown">
                  {dict?.ApplicationPage?.Brown || "Kahverengi"}
                </option>
                <option value="Blue">
                  {dict?.ApplicationPage?.Blue || "Mavi"}
                </option>
                <option value="Green">
                  {dict?.ApplicationPage?.Green || "Yeşil"}
                </option>
                <option value="Hazel">
                  {dict?.ApplicationPage?.Hazel || "Ela"}
                </option>
                <option value="Black">
                  {dict?.ApplicationPage?.Black || "Siyah"}
                </option>
              </select>
              {formik.touched.eyeColor && formik.errors.eyeColor && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.eyeColor}
                </p>
              )}
            </div>
          </div>
        </section>

       
        <section>
          <div className="flex items-center gap-3 mb-8 border-b pb-4">
            <span className="material-symbols-outlined text-slate-400">
              photo_camera
            </span>
            <h2 className="text-xl font-bold">
              {dict?.ApplicationPage?.Photos || "Photos"}
            </h2>
          </div>
          <p className="text-slate-500 text-sm mb-6">
            {" "}
            {dict?.ApplicationPage?.PhotosText ||
              "Lütfen son zamanlarda çekilmiş polaroid fotoğraflarınızı yükleyin. Sade kıyafetler giyin (örneğin düz tişört ve kot pantolon), makyaj yapmayın ve doğal ışıkta çekim yapın."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Selfie */}
            <div
              className={`relative border-2 border-dashed ${formik.touched.selfieUrl && formik.errors.selfieUrl ? "border-red-500 bg-red-50" : "border-slate-300"} rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all group h-64`}
            >
              {photoPreviews.selfieUrl || formik.values.selfieUrl ? (
                <div className="relative w-full h-full">
                  <img
                    src={photoPreviews.selfieUrl || formik.values.selfieUrl}
                    alt="Selfie Preview"
                    className="w-full h-full object-contain rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                    <span className="text-white font-bold">Değiştir</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-blue-500">
                      face
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-800">
                    {dict?.ApplicationPage?.Portre || "Headshot"}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 mb-2">
                    {dict?.ApplicationPage?.Shot3 ||
                      "Face close-up, neutral expression"}
                  </p>
                </>
              )}
              <label className="absolute inset-0 cursor-pointer">
                <input
                  type="file"
                  name="selfieUrl"
                  accept="image/*"
                  onChange={handleInputChange}
                  className="hidden"
                />
              </label>
              {formik.touched.selfieUrl && formik.errors.selfieUrl && (
                <div className="absolute bottom-2 left-0 right-0">
                  <p className="text-red-500 text-[10px] font-bold">
                    {formik.errors.selfieUrl}
                  </p>
                </div>
              )}
            </div>

            {/* Profile */}
            <div
              className={`relative border-2 border-dashed ${formik.touched.profilePhoto && formik.errors.profilePhoto ? "border-red-500 bg-red-50" : "border-slate-300"} rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all group h-64`}
            >
              {photoPreviews.profilePhoto || formik.values.profilePhoto ? (
                <div className="relative w-full h-full">
                  <img
                    src={
                      photoPreviews.profilePhoto || formik.values.profilePhoto
                    }
                    alt="Profile Preview"
                    className="w-full h-full object-contain rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                    <span className="text-white font-bold">Değiştir</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-blue-500">
                      person_book
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-800">
                    {dict?.ApplicationPage?.Profile || "Profile"}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 mb-2">
                    {dict?.ApplicationPage?.Shot2 || "Side view, clear jawline"}
                  </p>
                </>
              )}
              <label className="absolute inset-0 cursor-pointer">
                <input
                  type="file"
                  name="profilePhoto"
                  accept="image/*"
                  onChange={handleInputChange}
                  className="hidden"
                />
              </label>
              {formik.touched.profilePhoto && formik.errors.profilePhoto && (
                <div className="absolute bottom-2 left-0 right-0">
                  <p className="text-red-500 text-[10px] font-bold">
                    {formik.errors.profilePhoto}
                  </p>
                </div>
              )}
            </div>

            {/* Full Body */}
            <div
              className={`relative border-2 border-dashed ${formik.touched.fullBodyPhoto && formik.errors.fullBodyPhoto ? "border-red-500 bg-red-50" : "border-slate-300"} rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all group h-64`}
            >
              {photoPreviews.fullBodyPhoto || formik.values.fullBodyPhoto ? (
                <div className="relative w-full h-full">
                  <img
                    src={
                      photoPreviews.fullBodyPhoto || formik.values.fullBodyPhoto
                    }
                    alt="Full Body Preview"
                    className="w-full h-full object-contain rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                    <span className="text-white font-bold">Değiştir</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-blue-500">
                      accessibility_new
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-800">
                    {dict?.ApplicationPage?.FullBody || "Full Body"}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 mb-2">
                    {dict?.ApplicationPage?.Shot1 ||
                      "Head to toe, form fitting clothes"}
                  </p>
                </>
              )}
              <label className="absolute inset-0 cursor-pointer">
                <input
                  type="file"
                  name="fullBodyPhoto"
                  accept="image/*"
                  onChange={handleInputChange}
                  className="hidden"
                />
              </label>
              {formik.touched.fullBodyPhoto && formik.errors.fullBodyPhoto && (
                <div className="absolute bottom-2 left-0 right-0">
                  <p className="text-red-500 text-[10px] font-bold">
                    {formik.errors.fullBodyPhoto}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Payment Section */}
        <div>
          <div className="bg-white/5 border border-white/10 p-12 mb-24">
            <h3 className="text-3xl font-serif mb-8">
              {dict?.NewFacesPage?.Criteria || "Başvuru Kriterleri"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-500">
                  {dict?.NewFacesPage?.Womens || "Kadınlar"}
                </h4>
                <ul className="space-y-2 text-[#050401]">
                  <li>
                    {dict?.NewFacesPage?.WomenCriteria1 || "• Yaş: 16-21"}
                  </li>
                  <li>
                    {dict?.NewFacesPage?.WomenCriteria2 ||
                      "• Boy: Minimum 172 cm"}
                  </li>
                  <li>
                    {dict?.NewFacesPage?.WomenCriteria3 || "• Beden: 34-36"}
                  </li>
                  <li>
                    {dict?.NewFacesPage?.WomenCriteria4 ||
                      "• Fotoğenik yüz yapısı"}
                  </li>
                  <li>
                    {dict?.NewFacesPage?.WomenCriteria5 ||
                      "• Profesyonel tutum"}
                  </li>
                  <li>
                    {dict?.NewFacesPage?.WomenCriteria6 ||
                      "• Adli sicil kaydı olmamak."}
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-500">
                  {dict?.NewFacesPage?.Mens || "Erkekler"}
                </h4>
                <ul className="space-y-2 text-[#050401]">
                  <li>{dict?.NewFacesPage?.MenCriteria1 || " • Yaş: 16-21"}</li>
                  <li>
                    {dict?.NewFacesPage?.MenCriteria2 ||
                      "• Boy: Minimum 182 cm"}
                  </li>
                  <li>
                    {dict?.NewFacesPage?.MenCriteria3 || "• Beden: 46-48"}
                  </li>
                  <li>
                    {dict?.NewFacesPage?.MenCriteria4 ||
                      "• Atletik veya fit yapı"}
                  </li>
                  <li>
                    {dict?.NewFacesPage?.MenCriteria5 || "• Kendine güven"}
                  </li>
                  <li>
                    {dict?.NewFacesPage?.MenCriteria6 || "• Kendine güven"}
                  </li>
                </ul>
              </div>
            </div>

            <PaymentOk />

            {submitted && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-semibold">
                  {" "}
                  {dict?.ApplicationPage?.ApplicationSubmitted ||
                    "✓ Başvurunuz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz."}
                </p>
              </div>
            )}
	    {price !== null && price > 0 && (
              <p className="text-center text-lg font-bold text-red-600 mb-4 mt-8">
                {(dict?.ApplicationPage?.FeeInfo || "Başvuru ücreti {price} TL'dir.").replace("{price}", String(price))}
              </p>
            )}
            <div className="pt-8 flex flex-col items-center">
              <Tooltip
                title={
                  !isEmailVerified
                    ? dict?.ApplicationPage?.VerifyEmailTooltip ||
                      "Lütfen önce e-posta adresinizi doğrulayın."
                    : ""
                }
                arrow
                placement="top"
                enterDelay={100}
                PopperProps={{
                  modifiers: [
                    { name: "offset", options: { offset: [0, 8] } },
                    { name: "preventOverflow", options: { padding: 8 } },
                  ],
                }}
              >
                <span>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disableElevation
                    disabled={!isEmailVerified || submitted}
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: "12px",
                      mb: 4,
                      fontWeight: "700",
                    }}
                  >
                    Başvuruyu Gönder
                  </Button>
                </span>
              </Tooltip>
              <p className="text-center text-xs text-slate-400 mt-2">
                {dict?.ApplicationPage?.ToInform ||
                  "Bu formu göndererek Hizmet Şartlarımızı ve Gizlilik Politikamızı kabul etmiş olursunuz."}
              </p>
	     
             
             
            </div>
          </div>
        </div>
      </form>

      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotify}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseNotify}
          severity={notification.severity}
          sx={{ width: "100%", borderRadius: "12px" }}
          variant="filled"
        >
          {notification.message}
        </Alert>
      </Snackbar>

      <Dialog
        open={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        maxWidth="sm"
        fullWidth
        TransitionComponent={Slide}
        TransitionProps={{ direction: "up" } as any}
      >
        <DialogContent sx={{ p: 0 }}>
          <div className="bg-white p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-800">
                Ödemeyi Tamamla
              </h2>
              <button
                onClick={() => setIsPaymentModalOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div
              id="iyzico-payment-form-container"
              className="min-h-[400px]"
            ></div>
            <div id="iyzipay-checkout-form" className="responsive"></div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ApplicationForm;
function setNotificationSubmitting(arg0: boolean) {
  throw new Error("Function not implemented.");
}
