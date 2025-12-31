import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';
import { FormControl, InputLabel, MenuItem, Select as MuiSelect, SelectChangeEvent, TextField } from '@mui/material';
import ReactSelect from 'react-select';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Iban from "../../components/iban";
import CreditSection from '../../components/CreditSection';
import PaymentOk from '@/components/PaymentOk';

// --- SEÇENEKLER ---

// Türkiye şehirleri
const turkeyCities = [
  { value: 'Istanbul', label: 'Istanbul' },
  { value: 'Ankara', label: 'Ankara' },
  { value: 'Izmir', label: 'Izmir' },
  { value: 'Bursa', label: 'Bursa' },
  { value: 'Antalya', label: 'Antalya' },
  { value: 'Adana', label: 'Adana' },
  { value: 'Konya', label: 'Konya' },
  { value: 'Gaziantep', label: 'Gaziantep' },
  { value: 'Kayseri', label: 'Kayseri' },
  { value: 'Mersin', label: 'Mersin' },
  { value: 'Eskişehir', label: 'Eskişehir' },
  { value: 'Samsun', label: 'Samsun' },
  { value: 'Trabzon', label: 'Trabzon' },
  { value: 'Diyarbakır', label: 'Diyarbakır' },
  // ... Diğer iller eklenebilir
];

// Ülke listesi
const countryOptions = [
  { value: 'Turkey', label: 'Turkey' },
  { value: 'Germany', label: 'Germany' },
  { value: 'France', label: 'France' },
  { value: 'United States', label: 'United States' },
  { value: 'United Kingdom', label: 'United Kingdom' },
  { value: 'Italy', label: 'Italy' },
  { value: 'Spain', label: 'Spain' },
  { value: 'Russia', label: 'Russia' },
  { value: 'Azerbaijan', label: 'Azerbaijan' },
  { value: 'Netherlands', label: 'Netherlands' },
  { value: 'Greece', label: 'Greece' },
  { value: 'Ukraine', label: 'Ukraine' },
  { value: 'Poland', label: 'Poland' },
  { value: 'Other', label: 'Other' },
];

const ApplicationForm: React.FC = () => {
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
  const { dict } = useLanguage();
  const [price, setPrice] = useState<number | null>(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [photoPreviews, setPhotoPreviews] = useState<{[key: string]: string}>({});

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

  const handleSubmit = async (paymentKeyParam?: string) => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.fullName || !/^[a-zA-ZğüşöçıİĞÜŞÖÇ\s]+$/.test(formData.fullName)) errors.fullName = 'Geçerli bir ad soyad giriniz';
    if (!formData.birthDate) errors.birthDate = 'Doğum tarihi zorunlu';
    if (!formData.gender) errors.gender = 'Cinsiyet zorunlu';
    if (!formData.nationality) errors.nationality = 'Ülke zorunlu';
    if (!formData.email || !/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,})$/.test(formData.email)) errors.email = 'Geçerli bir e-posta giriniz';
    if (!formData.phone || !/^\+?[0-9\s]{10,20}$/.test(formData.phone)) errors.phone = 'Geçerli bir telefon numarası giriniz';
    if (!formData.city) errors.city = 'Şehir zorunlu';
    
    ['heightCm','chestCm','hipsCm','footCm','waistCm'].forEach(f => {
      // @ts-ignore
      if (!formData[f] || isNaN(Number(formData[f])) || Number(formData[f]) <= 0) errors[f] = 'Geçerli bir değer giriniz';
    });

    if (!formData.eyeColor) errors.eyeColor = 'Göz rengi zorunlu';
    if (!formData.selfieUrl) errors.selfieUrl = 'Selfie fotoğrafı zorunlu';
    if (!formData.profilePhoto) errors.profilePhoto = 'Profil fotoğrafı zorunlu';
    if (!formData.fullBodyPhoto) errors.fullBodyPhoto = 'Tam boy fotoğraf zorunlu';
    
    setFormErrors(errors);
    
    if (Object.keys(errors).length > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      alert("Lütfen kırmızı ile işaretlenen alanları kontrol ediniz.");
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
      setPhotoPreviews(prev => ({ ...prev, [name]: URL.createObjectURL(file) }));
      
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
      }).catch(err => {
          console.error("Fotoğraf yükleme hatası", err);
          alert("Fotoğraf yüklenirken bir hata oluştu.");
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleChangePayment = (event: SelectChangeEvent) => {
    setPaymentMethod(event.target.value as string);
  };

  // Düzeltildi: React.ReactNode kullanıldı
  const formComponents: { [key: string]: React.ReactNode } = {
    creditCard: <CreditSection price={price} loading={loading} onSubmit={handleSubmit} />, 
    eft: <Iban price={price} loading={loading} onSubmit={handleSubmit} NameSurname={formData.fullName} />, 
    PaymentOk : <PaymentOk />
  };

  const rawText = dict?.ApplicationPage?.Warning || "* KATILIM ÜCRETİ {price} TL OLUP BANKA ÖDEMESİ GÖZÜKMEYEN BAŞVURULAR GEÇERSİZ SAYILACAKTIR.";
  const warningText = rawText.replace("{price}", String(price ?? 0));

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

      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-12">
        {/* Kişisel Bilgiler */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b pb-4">
            <span className="material-symbols-outlined text-slate-400">person</span>
            <h2 className="text-xl font-bold">{dict?.ApplicationPage?.PersonalDetails || "Personal Details"}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-slate-700 mb-2">{dict?.ApplicationPage?.NameSurname || "Ad Soyad (Full Name)"}</label>
              <input 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                  const key = e.key;
                  if (!/^[a-zA-ZğüşöçıİĞÜŞÖÇ\s]$/.test(key) && key.length === 1 && key !== 'Backspace' && key !== 'Tab' && key !== 'ArrowLeft' && key !== 'ArrowRight') {
                    e.preventDefault();
                  }
                }}
                required
                className={`w-full p-4 bg-slate-50 border ${formErrors.fullName ? 'border-red-500' : 'border-slate-200'} rounded-lg focus:outline-none focus:border-blue-500 transition-colors`}
                placeholder="Adınız Soyadınız" 
              />
              {formErrors.fullName && <p className="text-red-500 text-xs mt-1">{formErrors.fullName}</p>}
            </div>

            {/* Tarih Seçici */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">{dict?.ApplicationPage?.DateOfBorn || "Doğum Tarihi (Date of Birth)"}</label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
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
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">{dict?.ApplicationPage?.email || "E-posta (Email)"}</label>
              <TextField
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                fullWidth
                className="bg-slate-50"
                placeholder="ornek@mail.com"
                error={Boolean(formErrors.email)}
                helperText={formErrors.email}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">{dict?.ApplicationPage?.Phone || "Telefon (Phone)"}</label>
              <TextField
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
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
                error={Boolean(formErrors.phone)}
                helperText={formErrors.phone}
              />
            </div>
            
            {/* Ülke Seçimi */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">{dict?.ApplicationPage?.Nationality || "Ülke (Nationality)"}</label>
              <ReactSelect
                options={countryOptions}
                value={countryOptions.find(opt => opt.value === formData.nationality) || null}
                onChange={option => {
                  setFormData(prev => ({ 
                    ...prev, 
                    nationality: option ? option.value : '',
                    city: '' 
                  }));
                }}
                placeholder="Ülke Seçiniz / Select Country"
                isClearable
                isSearchable
                styles={{
                  control: (base) => ({ 
                    ...base, 
                    minHeight: 56, 
                    background: '#f8fafc', 
                    borderColor: formErrors.nationality ? '#ef4444' : '#e2e8f0' 
                  }),
                  menu: (base) => ({ ...base, zIndex: 9999 }),
                }}
              />
              {formErrors.nationality && <p className="text-red-500 text-xs mt-1">{formErrors.nationality}</p>}
            </div>

            {/* Şehir Seçimi */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">{dict?.ApplicationPage?.City || "Şehir (City)"}</label>
              {formData.nationality === 'Turkey' ? (
                <ReactSelect
                  options={turkeyCities}
                  value={turkeyCities.find(opt => opt.value === formData.city) || null}
                  onChange={option => setFormData(prev => ({ ...prev, city: option ? option.value : '' }))}
                  placeholder="Şehir Seçiniz..."
                  isClearable
                  isSearchable
                  styles={{
                    control: (base) => ({ 
                      ...base, 
                      minHeight: 56, 
                      background: '#f8fafc', 
                      borderColor: formErrors.city ? '#ef4444' : '#e2e8f0' 
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
                  required
                  fullWidth
                  className="bg-slate-50"
                  placeholder="Şehir giriniz"
                  disabled={!formData.nationality} 
                  error={Boolean(formErrors.city)}
                  helperText={!formData.nationality ? "Önce ülke seçiniz" : formErrors.city}
                />
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
              <div key={m.name}>
                <label className="block text-sm font-bold text-slate-700 mb-2">{m.label}</label>
                <div className="relative">
                  <input 
                    type="number" 
                    name={m.name}
                    value={(formData as any)[m.name]}
                    onChange={handleInputChange}
                    required
                    className={`w-full p-4 bg-slate-50 border ${formErrors[m.name] ? 'border-red-500' : 'border-slate-200'} rounded-lg focus:outline-none focus:border-blue-500 transition-colors`}
                    placeholder={m.ph} 
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">{m.unit}</span>
                </div>
              </div>
            ))}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">{dict?.ApplicationPage?.Eyes ||  "Göz (Eyes)"}</label>
              <select 
                name="eyeColor"
                value={formData.eyeColor}
                onChange={handleSelectChange}
                required
                className={`w-full p-4 bg-slate-50 border ${formErrors.eyeColor ? 'border-red-500' : 'border-slate-200'} rounded-lg focus:outline-none focus:border-blue-500 transition-colors appearance-none`}
              >
                <option value="">{dict?.ApplicationPage?.Select || "Select"}</option>
                <option value="Brown">{dict?.ApplicationPage?.Brown || "Kahverengi"}</option>
                <option value="Blue">{dict?.ApplicationPage?.Blue || "Mavi"}</option>
                <option value="Green">{dict?.ApplicationPage?.Green || "Yeşil"}</option>
                <option value="Hazel">{dict?.ApplicationPage?.Hazel || "Ela"}</option>
                <option value="Black">{dict?.ApplicationPage?.Black || "Siyah"}</option>
              </select>
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
            <div className={`relative border-2 border-dashed ${formErrors.selfieUrl ? 'border-red-500 bg-red-50' : 'border-slate-300'} rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all group h-64`}>
              {(photoPreviews.selfieUrl || formData.selfieUrl) ? (
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
              <label className="absolute inset-0 cursor-pointer">
                <input type="file" name="selfieUrl" accept="image/*" onChange={handleInputChange} className="hidden" />
              </label>
            </div>

            {/* Profile */}
            <div className={`relative border-2 border-dashed ${formErrors.profilePhoto ? 'border-red-500 bg-red-50' : 'border-slate-300'} rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all group h-64`}>
              {(photoPreviews.profilePhoto || formData.profilePhoto) ? (
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
              <label className="absolute inset-0 cursor-pointer">
                <input type="file" name="profilePhoto" accept="image/*" onChange={handleInputChange} className="hidden" />
              </label>
            </div>

            {/* Full Body */}
            <div className={`relative border-2 border-dashed ${formErrors.fullBodyPhoto ? 'border-red-500 bg-red-50' : 'border-slate-300'} rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all group h-64`}>
              {(photoPreviews.fullBodyPhoto || formData.fullBodyPhoto) ? (
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
              <label className="absolute inset-0 cursor-pointer">
                <input type="file" name="fullBodyPhoto" accept="image/*" onChange={handleInputChange} className="hidden" />
              </label>
            </div>

          </div>
        </section>

        <div className="pt-8">
          <p className="text-center text-xs text-slate-400 mt-6"> {dict?.ApplicationPage?.ToInform || "Bu formu göndererek Hizmet Şartlarımızı ve Gizlilik Politikamızı kabul etmiş olursunuz."}
          </p>
        </div>
        
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
            
            <div style={{marginTop:"1rem",alignItems:"center", justifyContent:"center", textAlign:"left", }}>
              <h1 style={{fontFamily:"-apple-system", fontSize:"3rem", fontWeight:"bold"}}>{dict?.ApplicationPage?.PaymentMethod || "Ödeme Yöntemi Seçiniz:"}    </h1>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{dict?.ApplicationPage?.PaymentMethodBox   || "Ödeme Yöntemi"}</InputLabel>
                <MuiSelect
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={paymentMethod}
                  label="Ödeme Yöntemi"
                  onChange={handleChangePayment}
                >
                  <MenuItem value={""} sx={{color:"blue", fontSize:"1rem", fontWeight:"bold"}} >{dict?.ApplicationPage?.PaymentMethod || "Ödeme Yöntemi Seçiniz"}</MenuItem>
                  <MenuItem value={"creditCard"}> {dict?.ApplicationPage?.PaymentBox1 || "Kredi Kartı"}</MenuItem>
                  <MenuItem value={"eft"}>{dict?.ApplicationPage?.PaymentBox2 || "Havale & Eft ile Ödeme"}</MenuItem>
                </MuiSelect>
              </FormControl>
            </div>
            
            <div>
              {paymentMethod && formComponents[paymentMethod]}
            </div>
            
            {!paymentMethod && (
              <PaymentOk />
            )}
            
            {submitted && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-semibold"> {dict?.ApplicationPage?.ApplicationSubmitted || "✓ Başvurunuz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz."}</p>
              </div>
            )}
          </div>       
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;