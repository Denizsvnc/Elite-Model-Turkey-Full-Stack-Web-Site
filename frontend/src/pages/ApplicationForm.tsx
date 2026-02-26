import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';
import { FormControl, InputLabel, MenuItem, Select as MuiSelect, SelectChangeEvent, TextField, LinearProgress, CircularProgress } from '@mui/material';
import ReactSelect from 'react-select';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import PaymentOk from '@/components/PaymentOk';
import { getCountryOptions, getCityOptions } from '../data/countries';

// Date-fns locales
import { tr } from 'date-fns/locale/tr';
import { enGB } from 'date-fns/locale/en-GB';
import { de } from 'date-fns/locale/de';
import { ru } from 'date-fns/locale/ru';

// --- SEÇENEKLER ---

const ApplicationForm: React.FC = () => {
  const { dict, language } = useLanguage();
  
  
  const getDateLocale = () => {
    switch (language) {
      case 'tr': return tr;
      case 'en': return enGB;
      case 'de': return de;
      case 'ru': return ru;
      default: return tr;
    }
  };
  
  const [formData, setFormData] = useState({
    fullName: '',
    birthDate: '',
    gender: 'FEMALE',
    nationality: '',
    email: '',
    phone: '',
    city: '',
    heightCm: '',
    chestCm: '',
    hipsCm: '',
    footCm: '',
    waistCm: '',
    eyeColor: '',
    selfieUrl: '',
    profilePhoto: '',
    fullBodyPhoto: ''
  });
  
  const [birthDateValue, setBirthDateValue] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [price, setPrice] = useState<number | null>(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [photoPreviews, setPhotoPreviews] = useState<{[key: string]: string}>({});
  const [uploadingPhotos, setUploadingPhotos] = useState<{[key: string]: boolean}>({});
  const [touchedFields, setTouchedFields] = useState<{[key: string]: boolean}>({});
  const [isApplicationActive, setIsApplicationActive] = useState<boolean>(true);
  
  // Notification form states
  const [notificationForm, setNotificationForm] = useState({
    fullName: '',
    phone: '',
    email: ''
  });
  const [notificationSubmitting, setNotificationSubmitting] = useState(false);
  const [notificationSuccess, setNotificationSuccess] = useState(false);
  const [notificationError, setNotificationError] = useState('');
  
  
  const fieldRefs = useRef<{[key: string]: HTMLDivElement | null}>({});
  
  // Dinamik şehir seçenekleri
  const cityOptions = formData.nationality ? getCityOptions(formData.nationality) : [];
  const countryOptions = getCountryOptions();

  // Başvuru sayfası aktiflik kontrolü
  useEffect(() => {
    const checkApplicationStatus = async () => {
      try {
        const res = await api.get('/api/application-page/status');
        if (res.data?.success && res.data?.data) {
          setIsApplicationActive(res.data.data.isActive);
        }
      } catch (error) {
        console.error("Başvuru sayfası durum kontrolü hatası:", error);
      }
    };
    checkApplicationStatus();
  }, []);

  useEffect(() => {
    const response = async () => {
      try {
        const res = await api.get('/api/fee');
        if(res.data.success){
          setPrice(res.data.amount);
        }
      } catch (error) {
        console.error("Fiyat çekme hatası:", error);
      }
    };
    response();
  }, []);

  // Field-level validation function
  const validateField = (name: string, value: any): string => {
    switch (name) {
      case 'fullName':
        if (!value || !/^[a-zA-ZğüşöçıİĞÜŞÖÇ\s]+$/.test(value)) {
          return 'Geçerli bir ad soyad giriniz (sadece harfler)';
        }
        if (value.length < 3) {
          return 'Ad soyad en az 3 karakter olmalıdır';
        }
        break;
      case 'birthDate':
        if (!value) return 'Doğum tarihi zorunludur';
        break;
      case 'nationality':
        if (!value) return 'Ülke seçimi zorunludur';
        break;
      case 'email':
        if (!value) return 'E-posta zorunludur';
        if (!/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,})$/.test(value)) {
          return 'Geçerli bir e-posta adresi giriniz';
        }
        break;
      case 'phone':
        if (!value) return 'Telefon numarası zorunludur';
        if (!/^\+?[0-9\s]{10,20}$/.test(value)) {
          return 'Geçerli bir telefon numarası giriniz';
        }
        break;
      case 'city':
        if (!value) return 'Şehir seçimi zorunludur';
        break;
      case 'heightCm':
      case 'chestCm':
      case 'hipsCm':
      case 'footCm':
      case 'waistCm':
        if (!value || isNaN(Number(value)) || Number(value) <= 0) {
          return 'Geçerli bir sayı giriniz';
        }
        break;
      case 'eyeColor':
        if (!value) return 'Göz rengi seçimi zorunludur';
        break;
      case 'selfieUrl':
        if (!value) return 'Selfie fotoğrafı zorunludur';
        break;
      case 'profilePhoto':
        if (!value) return 'Profil fotoğrafı zorunludur';
        break;
      case 'fullBodyPhoto':
        if (!value) return 'Tam boy fotoğraf zorunludur';
        break;
    }
    return '';
  };

  // Smooth scroll to first error
  const scrollToError = (errors: {[key: string]: string}) => {
    const firstErrorField = Object.keys(errors)[0];
    if (firstErrorField && fieldRefs.current[firstErrorField]) {
      fieldRefs.current[firstErrorField]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
      // Focus on the field after scroll
      setTimeout(() => {
        const input = fieldRefs.current[firstErrorField]?.querySelector('input, select, textarea');
        (input as HTMLElement)?.focus();
      }, 500);
    }
  };

  // paymentKey sadece backend'den alınır ve başvuruya iletilir
  const handleSubmit = async (paymentKeyParam?: string) => {
    const errors: {[key: string]: string} = {};
    
    // Validate all fields
    Object.keys(formData).forEach(key => {
      const error = validateField(key, (formData as any)[key]);
      if (error) errors[key] = error;
    });
    
    setFormErrors(errors);
    setTouchedFields(Object.keys(formData).reduce((acc, key) => ({...acc, [key]: true}), {}));
    
    if (Object.keys(errors).length > 0) {
      scrollToError(errors);
      return;
    }

    setLoading(true);
    try {
      await api.post('/api/applications', {
        ...formData,
        heightCm: Number(formData.heightCm),
        chestCm: Number(formData.chestCm),
        hipsCm: Number(formData.hipsCm),
        footCm: Number(formData.footCm),
        waistCm: Number(formData.waistCm),
        status: paymentMethod === 'creditCard' ? 'APPROVED' : 'REVIEW',
        paymentKey: paymentMethod === 'eft' ? paymentKeyParam : undefined
      });
      setSubmitted(true);
      setFormData({
        fullName: '',
        birthDate: '',
        gender: 'FEMALE',
        nationality: '',
        email: '',
        phone: '',
        city: '',
        heightCm: '',
        chestCm: '',
        hipsCm: '',
        footCm: '',
        waistCm: '',
        eyeColor: '',
        selfieUrl: '',
        profilePhoto: '',
        fullBodyPhoto: ''
      });
      setBirthDateValue(null);
      setPhotoPreviews({});
      setTimeout(() => setSubmitted(false), 5000);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Başvuru gönderme hatası:', error);
      alert('Başvurunuz gönderilemedi. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const files = (e.target as HTMLInputElement).files;

    if (type === 'file' && files && files[0]) {
      const file = files[0];
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Dosya boyutu 5MB\'dan küçük olmalıdır');
        return;
      }
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Sadece resim dosyaları yüklenebilir');
        return;
      }
      
      setPhotoPreviews(prev => ({ ...prev, [name]: URL.createObjectURL(file) }));
      setUploadingPhotos(prev => ({ ...prev, [name]: true }));
      
      const form = new FormData();
      form.append('file', file);
      
      let folder = '';
      if (name === 'selfieUrl') folder = 'Applications/selfie';
      if (name === 'profilePhoto') folder = 'Applications/profile';
      if (name === 'fullBodyPhoto') folder = 'Applications/fullbody';
      
      api.post(`/api/uploads?folder=${folder}`, form, {
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then(res => {
        let url = res.data.url;
        if (url && !url.startsWith('/uploads')) {
          url = `/uploads/${folder}/${url}`;
        }
        setFormData(prev => ({ ...prev, [name]: url }));
        setUploadingPhotos(prev => ({ ...prev, [name]: false }));
        
        // Validate field after upload
        if (touchedFields[name]) {
          const error = validateField(name, url);
          setFormErrors(prev => ({ ...prev, [name]: error }));
        }
      }).catch(err => {
          console.error("Fotoğraf yükleme hatası", err);
          alert("Fotoğraf yüklenirken bir hata oluştu.");
          setUploadingPhotos(prev => ({ ...prev, [name]: false }));
          setPhotoPreviews(prev => {
            const newPreviews = { ...prev };
            delete newPreviews[name];
            return newPreviews;
          });
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      
      // Real-time validation for touched fields
      if (touchedFields[name]) {
        const error = validateField(name, value);
        setFormErrors(prev => ({ ...prev, [name]: error }));
      }
    }
  };

  const handleFieldBlur = (name: string) => {
    setTouchedFields(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, (formData as any)[name]);
    setFormErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChangePayment = (event: SelectChangeEvent) => {
    setPaymentMethod(event.target.value as string);
  };

  const rawText = dict?.ApplicationPage?.Warning || "* KATILIM ÜCRETİ {price} TL OLUP BANKA ÖDEMESİ GÖZÜKMEYEN BAŞVURULAR GEÇERSİZ SAYILACAKTIR.";
  const warningText = rawText.replace("{price}", String(price ?? 0));

  // Calculate form completion progress
  const calculateProgress = () => {
    const totalFields = Object.keys(formData).length;
    const filledFields = Object.values(formData).filter(val => val && val !== '').length;
    return Math.round((filledFields / totalFields) * 100);
  };

  const progress = calculateProgress();

  // Notification form submit handler
  const handleNotificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNotificationSubmitting(true);
    setNotificationError('');

    try {
      const res = await api.post('/api/application-notifications', notificationForm);
      
      if (res.data.success) {
        setNotificationSuccess(true);
        setNotificationForm({ fullName: '', phone: '', email: '' });
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Bir hata oluştu. Lütfen tekrar deneyin.';
      setNotificationError(errorMessage);
    } finally {
      setNotificationSubmitting(false);
    }
  };

  // Eğer başvurular kapalıysa bilgilendirme mesajı göster
  if (!isApplicationActive) {
    return (
      <div className="w-full max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-slate-100 mb-8">
            <span className="material-symbols-outlined text-6xl text-slate-400">block</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 text-slate-800">
            {dict?.ApplicationPage?.ClosedTitle || "Başvurular Şu Anda Kapalı"}
          </h1>
          <p className="text-slate-600 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            {dict?.ApplicationPage?.ClosedDescription || "Üzgünüz, şu anda başvuru kabul etmiyoruz. Lütfen daha sonra tekrar kontrol edin veya daha fazla bilgi için bizimle iletişime geçin."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              to="/iletisim" 
              className="px-8 py-4 bg-slate-900 text-white font-bold uppercase tracking-widest text-sm rounded hover:bg-slate-800 transition-colors"
            >
              {dict?.ApplicationPage?.ClosedContact || "Bize Ulaşın"}
            </Link>
            <Link 
              to="/" 
              className="px-8 py-4 border-2 border-slate-300 text-slate-800 font-bold uppercase tracking-widest text-sm rounded hover:border-slate-500 transition-colors"
            >
              {dict?.ApplicationPage?.ClosedBackHome || "Ana Sayfaya Dön"}
            </Link>
          </div>

          {/* Notification Request Form */}
          {!notificationSuccess ? (
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                  <span className="material-symbols-outlined text-4xl text-blue-600">notifications_active</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-800">
                  {dict?.ApplicationPage?.NotifyTitle || "Başvurular açıldığında size haber verelim mi?"}
                </h2>
                <p className="text-slate-600">
                  {dict?.ApplicationPage?.NotifyDescription || "Bilgilerinizi bırakın, başvurular açıldığında size e-posta gönderelim."}
                </p>
              </div>

              <form onSubmit={handleNotificationSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    {dict?.ApplicationPage?.NotifyFullName || "Ad Soyad"} *
                  </label>
                  <input
                    type="text"
                    required
                    value={notificationForm.fullName}
                    onChange={(e) => setNotificationForm({ ...notificationForm, fullName: e.target.value })}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder={dict?.ApplicationPage?.NotifyFullName || "Ad Soyad"}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    {dict?.ApplicationPage?.NotifyPhone || "Telefon Numarası"} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={notificationForm.phone}
                    onChange={(e) => setNotificationForm({ ...notificationForm, phone: e.target.value })}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="+90 555 123 4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    {dict?.ApplicationPage?.NotifyEmail || "E-posta Adresi"} *
                  </label>
                  <input
                    type="email"
                    required
                    value={notificationForm.email}
                    onChange={(e) => setNotificationForm({ ...notificationForm, email: e.target.value })}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="ornek@email.com"
                  />
                </div>

                {notificationError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start gap-2">
                    <span className="material-symbols-outlined text-xl">error</span>
                    <span className="text-sm">{notificationError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={notificationSubmitting}
                  className="w-full px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {notificationSubmitting ? (
                    <>
                      <CircularProgress size={20} sx={{ color: 'white' }} />
                      {dict?.ApplicationPage?.NotifySubmitting || "Gönderiliyor..."}
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined">send</span>
                      {dict?.ApplicationPage?.NotifySubmit || "Bilgilendirme İste"}
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto bg-green-50 border-2 border-green-200 rounded-2xl shadow-xl p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                <span className="material-symbols-outlined text-5xl text-green-600">check_circle</span>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                {dict?.ApplicationPage?.NotifySuccess || "✓ Talebiniz kaydedildi! Başvurular açıldığında size e-posta göndereceğiz."}
              </h3>
              <p className="text-green-700 mb-6">
                {notificationForm.email}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">
          {dict?.ApplicationPage?.HeroTitle || "Başvuru Formu"}
        </h1>
        <p className="text-slate-500 text-lg md:text-xl font-light max-w-2xl mx-auto">
          {dict?.ApplicationPage?.HeroContent || "Join The Elite Model Turkey. Please fill out the form below with accurate measurements and natural light polaroids."}
        </p>
      </div>

      {/* Success Notification */}
      {submitted && (
        <div className="mb-8 bg-green-50 border-2 border-green-200 rounded-xl shadow-lg p-6 animate-fade-in">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-green-600">check_circle</span>
            <p className="text-green-800 font-semibold text-lg">
              {dict?.ApplicationPage?.ApplicationSubmitted || "✓ Başvurunuz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz."}
            </p>
          </div>
        </div>
      )}

      {/* Progress Indicator */}
      <div className="mb-8 bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-slate-700">Form İlerlemesi</h3>
          <span className="text-sm font-bold text-blue-600">{progress}%</span>
        </div>
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          sx={{
            height: 8,
            borderRadius: 4,
            backgroundColor: '#e2e8f0',
            '& .MuiLinearProgress-bar': {
              borderRadius: 4,
              backgroundColor: progress === 100 ? '#10b981' : '#3b82f6'
            }
          }}
        />
        <p className="text-xs text-slate-500 mt-2">
          {progress === 100 ? '✓ Tüm alanlar dolduruldu!' : `${Object.values(formData).filter(v => v === '').length} alan eksik`}
        </p>
      </div>
      
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-12">
        {/* Kişisel Bilgiler */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b pb-4">
            <span className="material-symbols-outlined text-slate-400">person</span>
            <h2 className="text-xl font-bold">{dict?.ApplicationPage?.PersonalDetails || "Personal Details"}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2" ref={el => { fieldRefs.current['fullName'] = el; }}>
              <label className="block text-sm font-bold text-slate-700 mb-2">{dict?.ApplicationPage?.NameSurname || "Ad Soyad (Full Name)"}</label>
              <input 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                onBlur={() => handleFieldBlur('fullName')}
                onKeyDown={(e) => {
                  const key = e.key;
                  if (!/^[a-zA-ZğüşöçıİĞÜŞÖÇ\s]$/.test(key) && key.length === 1 && key !== 'Backspace' && key !== 'Tab' && key !== 'ArrowLeft' && key !== 'ArrowRight') {
                    e.preventDefault();
                  }
                }}
                required
                className={`w-full p-4 bg-slate-50 border ${formErrors.fullName && touchedFields.fullName ? 'border-red-500 bg-red-50' : 'border-slate-200'} rounded-lg focus:outline-none focus:border-blue-500 transition-colors`}
                placeholder="Adınız Soyadınız"
                aria-label="Ad Soyad"
                aria-invalid={!!formErrors.fullName}
                aria-describedby={formErrors.fullName ? "fullName-error" : undefined}
              />
              {formErrors.fullName && touchedFields.fullName && (
                <p id="fullName-error" className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">error</span>
                  {formErrors.fullName}
                </p>
              )}
            </div>

            {/* Tarih Seçici */}
            <div ref={el => { fieldRefs.current['birthDate'] = el; }}>
              <label className="block text-sm font-bold text-slate-700 mb-2">{dict?.ApplicationPage?.DateOfBorn || "Doğum Tarihi (Date of Birth)"}</label>
              <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={getDateLocale()}>
                <DatePicker
                  value={birthDateValue}
                  onChange={(newValue) => {
                    setBirthDateValue(newValue);
                    setFormData(prev => ({ ...prev, birthDate: newValue ? newValue.toISOString().split('T')[0] : '' }));
                  }}
                  format="dd/MM/yyyy"
                  disableFuture
                  openTo="year"
                  views={["year", "month", "day"]}
                  slotProps={{
                    textField: { 
                      required: true, 
                      fullWidth: true, 
                      error: !!formErrors.birthDate,
                      helperText: formErrors.birthDate,
                      className: "bg-slate-50"
                    }
                  }}
                />
              </LocalizationProvider>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">{dict?.ApplicationPage?.Gender || "Cinsiyet (Gender)"}</label>
              <select 
                name="gender"
                value={formData.gender}
                onChange={handleSelectChange}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors appearance-none"
              >
                <option value="FEMALE">{dict?.ApplicationPage?.Female || "Kadın"}</option>
                <option value="MALE">{dict?.ApplicationPage?.Male || "Erkek"}</option>
                <option value="OTHER">{dict?.ApplicationPage?.DoNot || "Belirtmek İstemiyorum"}</option>
              </select>
            </div>
          </div>
        </section>

        {/* İletişim Bilgileri */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b pb-4">
            <span className="material-symbols-outlined text-slate-400">contact_mail</span>
            <h2 className="text-xl font-bold">{dict?.ApplicationPage?.Contact || "Contact Information"}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div ref={el => { fieldRefs.current['email'] = el; }}>
              <label className="block text-sm font-bold text-slate-700 mb-2">{dict?.ApplicationPage?.email || "E-posta (Email)"}</label>
              <TextField
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={() => handleFieldBlur('email')}
                required
                fullWidth
                className="bg-slate-50"
                placeholder="ornek@mail.com"
                error={Boolean(formErrors.email && touchedFields.email)}
                helperText={touchedFields.email && formErrors.email}
              />
            </div>
            <div ref={el => { fieldRefs.current['phone'] = el; }}>
              <label className="block text-sm font-bold text-slate-700 mb-2">{dict?.ApplicationPage?.Phone || "Telefon (Phone)"}</label>
              <TextField
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                onBlur={() => handleFieldBlur('phone')}
                onKeyDown={(e) => {
                  const key = e.key;
                  if (!/[0-9+\s]/.test(key) && key.length === 1 && key !== 'Backspace' && key !== 'Tab' && key !== 'ArrowLeft' && key !== 'ArrowRight') {
                    e.preventDefault();
                  }
                }}
                required
                fullWidth
                className="bg-slate-50"
                placeholder="+90 555 000 0000"
                inputProps={{ maxLength: 20 }}
                error={Boolean(formErrors.phone && touchedFields.phone)}
                helperText={touchedFields.phone && formErrors.phone}
              />
            </div>
            
            {/* Ülke Seçimi */}
            <div ref={el => { fieldRefs.current['nationality'] = el; }}>
              <label className="block text-sm font-bold text-slate-700 mb-2">{dict?.ApplicationPage?.Nationality || "Ülke (Nationality)"}</label>
              <ReactSelect
                options={countryOptions}
                value={countryOptions.find(opt => opt.value === formData.nationality) || null}
                onChange={option => {
                  const newNationality = option ? option.value : '';
                  setFormData(prev => ({ 
                    ...prev, 
                    nationality: newNationality,
                    city: '' 
                  }));
                  setTouchedFields(prev => ({ ...prev, nationality: true, city: false }));
                  const error = validateField('nationality', newNationality);
                  setFormErrors(prev => ({ ...prev, nationality: error, city: '' }));
                }}
                onBlur={() => handleFieldBlur('nationality')}
                placeholder="Ülke Seçiniz / Select Country"
                isClearable
                isSearchable
                styles={{
                  control: (base) => ({ 
                    ...base, 
                    minHeight: 56, 
                    background: '#f8fafc', 
                    borderColor: (formErrors.nationality && touchedFields.nationality) ? '#ef4444' : '#e2e8f0' 
                  }),
                  menu: (base) => ({ ...base, zIndex: 9999 }),
                }}
              />
              {formErrors.nationality && touchedFields.nationality && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">error</span>
                  {formErrors.nationality}
                </p>
              )}
            </div>

            {/* Şehir Seçimi */}
            <div ref={el => { fieldRefs.current['city'] = el; }}>
              <label className="block text-sm font-bold text-slate-700 mb-2">{dict?.ApplicationPage?.City || "Şehir (City)"}</label>
              {cityOptions.length > 0 ? (
                <ReactSelect
                  options={cityOptions}
                  value={cityOptions.find(opt => opt.value === formData.city) || null}
                  onChange={option => {
                    const newCity = option ? option.value : '';
                    setFormData(prev => ({ ...prev, city: newCity }));
                    setTouchedFields(prev => ({ ...prev, city: true }));
                    const error = validateField('city', newCity);
                    setFormErrors(prev => ({ ...prev, city: error }));
                  }}
                  onBlur={() => handleFieldBlur('city')}
                  placeholder="Şehir Seçiniz / Select City"
                  isClearable
                  isSearchable
                  styles={{
                    control: (base) => ({ 
                      ...base, 
                      minHeight: 56, 
                      background: '#f8fafc', 
                      borderColor: (formErrors.city && touchedFields.city) ? '#ef4444' : '#e2e8f0' 
                    }),
                    menu: (base) => ({ ...base, zIndex: 9999 }),
                  }}
                />
              ) : (
                <TextField
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  onBlur={() => handleFieldBlur('city')}
                  required
                  fullWidth
                  className="bg-slate-50"
                  placeholder="Şehir giriniz / Enter city"
                  disabled={!formData.nationality} 
                  error={Boolean(formErrors.city && touchedFields.city)}
                  helperText={!formData.nationality ? "Önce ülke seçiniz" : (touchedFields.city && formErrors.city)}
                />
              )}
              {formErrors.city && touchedFields.city && cityOptions.length > 0 && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">error</span>
                  {formErrors.city}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Ölçüler */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b pb-4">
            <span className="material-symbols-outlined text-slate-400">straighten</span>
            <h2 className="text-xl font-bold">{dict?.ApplicationPage?.Measurements || "Measurements"}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { label: dict?.ApplicationPage?.Height || "Boy" , unit: 'cm', name: 'heightCm', ph: '175' },
              { label: dict?.ApplicationPage?.Bust || 'Göğüs (Bust)', unit: 'cm', name: 'chestCm', ph: '85' },
              { label: dict?.ApplicationPage?.Waist || 'Bel (Waist)', unit: 'cm', name: 'waistCm', ph: '60' },
              { label: dict?.ApplicationPage?.Hips || 'Basen (Hips)', unit: 'cm', name: 'hipsCm', ph: '90' },
              { label: dict?.ApplicationPage?.Shoe || 'Ayak (Shoe)', unit: 'EU', name: 'footCm', ph: '38' },
            ].map((m) => (
              <div key={m.name} ref={el => { fieldRefs.current[m.name] = el; }}>
                <label className="block text-sm font-bold text-slate-700 mb-2">{m.label}</label>
                <div className="relative">
                  <input 
                    type="number" 
                    name={m.name}
                    value={(formData as any)[m.name]}
                    onChange={handleInputChange}
                    onBlur={() => handleFieldBlur(m.name)}
                    required
                    className={`w-full p-4 bg-slate-50 border ${formErrors[m.name] && touchedFields[m.name] ? 'border-red-500 bg-red-50' : 'border-slate-200'} rounded-lg focus:outline-none focus:border-blue-500 transition-colors`}
                    placeholder={m.ph}
                    min="0"
                    step="1"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">{m.unit}</span>
                </div>
                {formErrors[m.name] && touchedFields[m.name] && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">error</span>
                    {formErrors[m.name]}
                  </p>
                )}
              </div>
            ))}
            <div ref={el => { fieldRefs.current['eyeColor'] = el; }}>
              <label className="block text-sm font-bold text-slate-700 mb-2">{dict?.ApplicationPage?.Eyes ||  "Göz (Eyes)"}</label>
              <select 
                name="eyeColor"
                value={formData.eyeColor}
                onChange={(e) => {
                  handleSelectChange(e);
                  setTouchedFields(prev => ({ ...prev, eyeColor: true }));
                }}
                onBlur={() => handleFieldBlur('eyeColor')}
                required
                className={`w-full p-4 bg-slate-50 border ${formErrors.eyeColor && touchedFields.eyeColor ? 'border-red-500 bg-red-50' : 'border-slate-200'} rounded-lg focus:outline-none focus:border-blue-500 transition-colors appearance-none`}
              >
                <option value="">{dict?.ApplicationPage?.Select || "Select"}</option>
                <option value="Brown">{dict?.ApplicationPage?.Brown || "Kahverengi"}</option>
                <option value="Blue">{dict?.ApplicationPage?.Blue || "Mavi"}</option>
                <option value="Green">{dict?.ApplicationPage?.Green || "Yeşil"}</option>
                <option value="Hazel">{dict?.ApplicationPage?.Hazel || "Ela"}</option>
                <option value="Black">{dict?.ApplicationPage?.Black || "Siyah"}</option>
              </select>
              {formErrors.eyeColor && touchedFields.eyeColor && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">error</span>
                  {formErrors.eyeColor}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Fotoğraflar - DÜZELTİLDİ: 'relative' eklendi */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b pb-4">
            <span className="material-symbols-outlined text-slate-400">photo_camera</span>
            <h2 className="text-xl font-bold">{dict?.ApplicationPage?.Photos ||  "Photos"}</h2>
          </div>
          <p className="text-slate-500 text-sm mb-6"> {dict?.ApplicationPage?.PhotosText ||  "Lütfen son zamanlarda çekilmiş polaroid fotoğraflarınızı yükleyin. Sade kıyafetler giyin (örneğin düz tişört ve kot pantolon), makyaj yapmayın ve doğal ışıkta çekim yapın."}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Selfie */}
            <div ref={el => { fieldRefs.current['selfieUrl'] = el; }} className={`relative border-2 border-dashed ${formErrors.selfieUrl && touchedFields.selfieUrl ? 'border-red-500 bg-red-50' : 'border-slate-300'} rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer ${!uploadingPhotos.selfieUrl && 'hover:border-blue-500 hover:bg-blue-50'} transition-all group h-64`}>
              {uploadingPhotos.selfieUrl ? (
                <div className="flex flex-col items-center justify-center gap-3">
                  <CircularProgress size={40} />
                  <p className="text-sm text-slate-600">Yükleniyor...</p>
                </div>
              ) : (photoPreviews.selfieUrl || formData.selfieUrl) ? (
                <div className="relative w-full h-full">
                  <img src={photoPreviews.selfieUrl || formData.selfieUrl} alt="Selfie Preview" className="w-full h-full object-contain rounded-lg" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                    <span className="text-white font-bold">Değiştir</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-blue-500">face</span>
                  </div>
                  <h3 className="font-bold text-slate-800">{dict?.ApplicationPage?.Portre ||  "Headshot"}</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-2">{dict?.ApplicationPage?.Shot3 ||  "Face close-up, neutral expression"}</p>
                </>
              )}
              {!uploadingPhotos.selfieUrl && (
                <label className="absolute inset-0 cursor-pointer">
                  <input type="file" name="selfieUrl" accept="image/*" onChange={handleInputChange} className="hidden" />
                </label>
              )}
              {formErrors.selfieUrl && touchedFields.selfieUrl && (
                <div className="absolute -bottom-8 left-0 right-0">
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1 justify-center">
                    <span className="material-symbols-outlined text-sm">error</span>
                    {formErrors.selfieUrl}
                  </p>
                </div>
              )}
            </div>

            {/* Profile */}
            <div ref={el => { fieldRefs.current['profilePhoto'] = el; }} className={`relative border-2 border-dashed ${formErrors.profilePhoto && touchedFields.profilePhoto ? 'border-red-500 bg-red-50' : 'border-slate-300'} rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer ${!uploadingPhotos.profilePhoto && 'hover:border-blue-500 hover:bg-blue-50'} transition-all group h-64`}>
              {uploadingPhotos.profilePhoto ? (
                <div className="flex flex-col items-center justify-center gap-3">
                  <CircularProgress size={40} />
                  <p className="text-sm text-slate-600">Yükleniyor...</p>
                </div>
              ) : (photoPreviews.profilePhoto || formData.profilePhoto) ? (
                <div className="relative w-full h-full">
                  <img src={photoPreviews.profilePhoto || formData.profilePhoto} alt="Profile Preview" className="w-full h-full object-contain rounded-lg" />
                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                    <span className="text-white font-bold">Değiştir</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-blue-500">person_book</span>
                  </div>
                  <h3 className="font-bold text-slate-800">{dict?.ApplicationPage?.Profile ||  "Profile"}</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-2">{dict?.ApplicationPage?.Shot2 || "Side view, clear jawline"}</p>
                </>
              )}
              {!uploadingPhotos.profilePhoto && (
                <label className="absolute inset-0 cursor-pointer">
                  <input type="file" name="profilePhoto" accept="image/*" onChange={handleInputChange} className="hidden" />
                </label>
              )}
              {formErrors.profilePhoto && touchedFields.profilePhoto && (
                <div className="absolute -bottom-8 left-0 right-0">
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1 justify-center">
                    <span className="material-symbols-outlined text-sm">error</span>
                    {formErrors.profilePhoto}
                  </p>
                </div>
              )}
            </div>

            {/* Full Body */}
            <div ref={el => { fieldRefs.current['fullBodyPhoto'] = el; }} className={`relative border-2 border-dashed ${formErrors.fullBodyPhoto && touchedFields.fullBodyPhoto ? 'border-red-500 bg-red-50' : 'border-slate-300'} rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer ${!uploadingPhotos.fullBodyPhoto && 'hover:border-blue-500 hover:bg-blue-50'} transition-all group h-64`}>
              {uploadingPhotos.fullBodyPhoto ? (
                <div className="flex flex-col items-center justify-center gap-3">
                  <CircularProgress size={40} />
                  <p className="text-sm text-slate-600">Yükleniyor...</p>
                </div>
              ) : (photoPreviews.fullBodyPhoto || formData.fullBodyPhoto) ? (
                <div className="relative w-full h-full">
                  <img src={photoPreviews.fullBodyPhoto || formData.fullBodyPhoto} alt="Full Body Preview" className="w-full h-full object-contain rounded-lg" />
                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                    <span className="text-white font-bold">Değiştir</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-blue-500">accessibility_new</span>
                  </div>
                  <h3 className="font-bold text-slate-800">{dict?.ApplicationPage?.FullBody ||  "Full Body"}</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-2">{dict?.ApplicationPage?.Shot1 || "Head to toe, form fitting clothes"}</p>
                </>
              )}
              {!uploadingPhotos.fullBodyPhoto && (
                <label className="absolute inset-0 cursor-pointer">
                  <input type="file" name="fullBodyPhoto" accept="image/*" onChange={handleInputChange} className="hidden" />
                </label>
              )}
              {formErrors.fullBodyPhoto && touchedFields.fullBodyPhoto && (
                <div className="absolute -bottom-8 left-0 right-0">
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1 justify-center">
                    <span className="material-symbols-outlined text-sm">error</span>
                    {formErrors.fullBodyPhoto}
                  </p>
                </div>
              )}
            </div>

          </div>
        </section>

        
        
        {/* Payment Section */}
        <div>
          <div className="bg-white/5 border border-white/10 p-12 mb-24">
            <h3 className="text-3xl font-serif mb-8">{dict?.NewFacesPage?.Criteria || "Başvuru Kriterleri"}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-500">{dict?.NewFacesPage?.Womens || "Kadınlar"}</h4>
                <ul className="space-y-2 text-[#050401]">
                  <li>{dict?.NewFacesPage?.WomenCriteria1 || "• Yaş: 16-21"}</li>
                  <li>{dict?.NewFacesPage?.WomenCriteria2 || "• Boy: Minimum 172 cm"}</li>
                  <li>{dict?.NewFacesPage?.WomenCriteria3 || "• Beden: 34-36"}</li>
                  <li>{dict?.NewFacesPage?.WomenCriteria4 || "• Fotoğenik yüz yapısı"}</li>
                  <li>{dict?.NewFacesPage?.WomenCriteria5 || "• Profesyonel tutum"}</li>
                  <li>{dict?.NewFacesPage?.WomenCriteria6 || "• Adli sicil kaydı olmamak."}</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-500">{dict?.NewFacesPage?.Mens || "Erkekler"}</h4>
                <ul className="space-y-2 text-[#050401]">
                  <li>{dict?.NewFacesPage?.MenCriteria1 || " • Yaş: 16-21"}</li>
                  <li>{dict?.NewFacesPage?.MenCriteria2 || "• Boy: Minimum 182 cm"}</li>
                  <li>{dict?.NewFacesPage?.MenCriteria3 || "• Beden: 46-48"}</li>
                  <li>{dict?.NewFacesPage?.MenCriteria4 || "• Atletik veya fit yapı"}</li>
                  <li>{dict?.NewFacesPage?.MenCriteria5 || "• Kendine güven"}</li>
                  <li>{dict?.NewFacesPage?.MenCriteria6 || "• Kendine güven"}</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h1 className='text-red-500 font-bold text-xl mr-auto mt-4'>{warningText}</h1>
            </div>
            
            
            <PaymentOk />
              
            <div className="pt-8 flex flex-col items-center">
              <button
                type="submit"
                className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow transition-all duration-200 mb-4 min-w-[200px] flex items-center justify-center gap-2 ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <CircularProgress size={20} sx={{ color: 'white' }} />
                    <span>Gönderiliyor...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined">send</span>
                    <span>Başvuruyu Gönder</span>
                  </>
                )}
              </button>
              <p className="text-center text-xs text-slate-400 mt-2">{dict?.ApplicationPage?.ToInform || "Bu formu göndererek Hizmet Şartlarımızı ve Gizlilik Politikamızı kabul etmiş olursunuz."}</p>
            </div>


          </div>       
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;