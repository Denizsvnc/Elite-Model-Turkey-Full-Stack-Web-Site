import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';
import { FormControl, InputLabel, Menu, MenuItem, Select , SelectChangeEvent} from '@mui/material';
import Iban from  "../../components/iban";
import CreditSection from '../../components/CreditSection';
import { CreditCard } from '@mui/icons-material';
import { i } from 'framer-motion/client';
import PaymentOk from '@/components/PaymentOk';
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
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const {dict, t, language} = useLanguage();
  const [price, setPrice] = useState<number | null>(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const handleSubmit = async (paymentKeyParam?: string) => {
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
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Başvuru gönderme hatası:', error);
      alert('Başvurunuz gönderilemedi. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, files } = e.target as any;
    if (type === 'file' && files && files[0]) {
      const file = files[0];
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
      });
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  useEffect(()=>{
    const response = async ()=>{
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
  },[]);

  const handleChangePayment = (event: SelectChangeEvent) => {
    setPaymentMethod(event.target.value as string);
  };

  const formComponents = {
    creditCard: <CreditSection price={price} loading={loading} onSubmit={handleSubmit} />, 
    eft: <Iban price={price} loading={loading} onSubmit={handleSubmit} NameSurname={formData.fullName} />, 
    PaymentOk : <PaymentOk />

  }

  const rawText = dict?.ApplicationPage?.Warning || "* KATILIM ÜCRETİ {price} TL OLUP BANKA ÖDEMESİ GÖZÜKMEYEN BAŞVURULAR GEÇERSİZ SAYILACAKTIR.";
  const warningText = rawText.replace("{price}", price ?? 0);

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
        {/* Personal Details */}
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
                onChange={handleChange}
                required
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors" 
                placeholder="Enter your full name" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">{dict?.ApplicationPage?.DateOfBorn || "Doğum Tarihi (Date of Birth)"}</label>
              <input 
                type="date" 
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">{dict?.ApplicationPage?.Gender || "Cinsiyet (Gender)"}</label>
              <select 
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors appearance-none"
              >
                <option value="FEMALE">{dict?.ApplicationPage?.Female || "Kadın"}</option>
                <option value="MALE">{dict?.ApplicationPage?.Male || "Erkek"}</option>
                <option value="OTHER">{dict?.ApplicationPage?.DoNot || "Belirtmek İstemiyorum"}</option>
              </select>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b pb-4">
            <span className="material-symbols-outlined text-slate-400">contact_mail</span>
            <h2 className="text-xl font-bold">{dict?.ApplicationPage?.Contact || "Contact Information"}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">{dict?.ApplicationPage?.email || "E-posta (Email)"}</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors" 
                placeholder="example@domain.com" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">{dict?.ApplicationPage?.Phone || "Telefon (Phone)"}</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors" 
                placeholder="+90 (555) 000 0000" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">{dict?.ApplicationPage?.Nationality || "Ülke (Nationality)"}</label>
              <input 
                type="text" 
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                required
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors" 
                placeholder="Turkey" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">{dict?.ApplicationPage?.City || "Şehir (City)"}</label>
              <input 
                type="text" 
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors" 
                placeholder="Istanbul, Turkey" 
              />
            </div>
          </div>
        </section>

        {/* Measurements */}
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
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors" 
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
                onChange={handleChange}
                required
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors appearance-none"
              >
                <option value="">{dict?.ApplicationPage?.Select || "Select"}</option>
                <option value="Brown">{dict?.ApplicationPage?.Brown || "Kahverengi"}</option>
                <option value="Blue">{dict?.ApplicationPage?.Blue || "Mavi"}</option>
                <option value="Green">{dict?.ApplicationPage?.Green || "Yeşil"}</option>
                <option value="Hazel">{dict?.ApplicationPage?.Hazel || "Ela"}</option>
                <option value="Hazel">{dict?.ApplicationPage?.Black || "Siyah"}</option>

              </select>
            </div>
          </div>
        </section>

        {/* Photos */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b pb-4">
            <span className="material-symbols-outlined text-slate-400">photo_camera</span>
            <h2 className="text-xl font-bold">{dict?.ApplicationPage?.Photos ||  "Photos"}</h2>
          </div>
          <p className="text-slate-500 text-sm mb-6"> {dict?.ApplicationPage?.PhotosText ||  "Lütfen son zamanlarda çekilmiş polaroid fotoğraflarınızı yükleyin. Sade kıyafetler giyin (örneğin düz tişört ve kot pantolon), makyaj yapmayın ve doğal ışıkta çekim yapın."}
            
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Headshot */}
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all group h-64">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-blue-500">face</span>
              </div>
              <h3 className="font-bold text-slate-800">{dict?.ApplicationPage?.Portre ||  "Headshot"}</h3>
              <p className="text-xs text-slate-500 mt-1">{dict?.ApplicationPage?.Shot3 ||  "Face close-up, neutral expression"}</p>
              <label className="mt-2 inline-block cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors text-sm font-semibold">
                {dict?.ApplicationPage?.SelectFile || "Dosya Seç"}
                <input type="file" name="selfieUrl" accept="image/*" onChange={handleChange} className="hidden" />
              </label>
              {formData.selfieUrl && <img src={formData.selfieUrl} alt="Selfie" className="mt-2 rounded shadow w-24 h-24 object-cover" />}
            </div>
            {/* Profile */}
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all group h-64">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-blue-500">person_book</span>
              </div>
              <h3 className="font-bold text-slate-800">{dict?.ApplicationPage?.Profile ||  "Profile"}</h3>
              <p className="text-xs text-slate-500 mt-1">{dict?.ApplicationPage?.Shot2 || "Side view, clear jawline"}</p>
              <label className="mt-2 inline-block cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors text-sm font-semibold">
                {dict?.ApplicationPage?.SelectFile || "Dosya Seç"}
                <input type="file" name="profilePhoto" accept="image/*" onChange={handleChange} className="hidden" />
              </label>
              {formData.profilePhoto && <img src={formData.profilePhoto} alt="Profile" className="mt-2 rounded shadow w-24 h-24 object-cover" />}
            </div>
            {/* Full Body */}
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all group h-64">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-blue-500">accessibility_new</span>
              </div>
              <h3 className="font-bold text-slate-800">{dict?.ApplicationPage?.FullBody ||  "Full Body"}</h3>
              <p className="text-xs text-slate-500 mt-1">{dict?.ApplicationPage?.Shot1 || "Head to toe, form fitting clothes"}</p>
              <label className="mt-2 inline-block cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors text-sm font-semibold">
                {dict?.ApplicationPage?.SelectFile || "Dosya Seç"}
                <input type="file" name="fullBodyPhoto" accept="image/*" onChange={handleChange} className="hidden" />
              </label>
              {formData.fullBodyPhoto && <img src={formData.fullBodyPhoto} alt="Full Body" className="mt-2 rounded shadow w-24 h-24 object-cover" />}
            </div>
          </div>
        </section>


        <div className="pt-8">
          <p className="text-center text-xs text-slate-400 mt-6"> {dict?.ApplicationPage?.ToInform || "Bu formu göndererek Hizmet Şartlarımızı ve Gizlilik Politikamızı kabul etmiş olursunuz."}
          </p>
        </div>
        <div >
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
                      <h1 style={{fontFamily:"-apple-system", fontSize:"3rem", fontWeight:"bold"}}>Ödeme Yöntemi Seçiniz:</h1>

                       <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Ödeme Yöntemi</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={paymentMethod}
                            label="Ödeme Yöntemi"
                            onChange={handleChangePayment}
                          >
                            <MenuItem value={""} sx={{color:"blue", fontSize:"1rem", fontWeight:"bold"}} >Ödeme Yöntemi Seçiniz</MenuItem>
                            <MenuItem value={"creditCard"}>Kredi Kartı</MenuItem>
                            <MenuItem value={"eft"}>Havale & Eft ile Ödeme</MenuItem>
                           
                          </Select>
                        </FormControl>
                    </div>
                    <div>
                      {formComponents[paymentMethod]}
                    </div>
                    {!paymentMethod && (
                      <PaymentOk />
                    )}
                    {submitted && (
                    <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800 font-semibold">✓ Başvurunuz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.</p>
                    </div>
      )}
                   
                      
          </div>
                
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;