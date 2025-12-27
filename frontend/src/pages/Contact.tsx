import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // 1. Context'ten 'dict' (statik json) ve 't' (db çevirici) alıyoruz
  const { t, dict } = useLanguage();
  
  const [contactInfo, setContactInfo] = useState<any | null>(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await api.get('/api/contact-info');
        setContactInfo(res.data || null);
      } catch (e) {
        console.error('Contact info fetch failed', e);
      }
    };
    fetchContact();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post('/api/contact-messages', formData);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Mesaj gönderme hatası:', error);
      alert('Mesajınız gönderilemedi. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col gap-12">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif italic text-slate-900 mb-6">
              {dict?.ContactPage?.ContactMe || 'İletişim'}
            </h1>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              {dict?.ContactPage?.title || 'Sorularınız, iş birlikleri veya modellik başvuruları için bize ulaşın.'}
            </p>
          </div>

          <div className="flex flex-col gap-8 border-t border-slate-200 pt-10">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                {dict?.ContactPage?.Visit || 'Ziyaret Edin'}
              </h3>
              {(() => {
                const addressText = contactInfo ? t(contactInfo, 'address') : (dict?.common?.loading || 'Yükleniyor...');
                // Adres linki mantığını düzelttim ve güvenli hale getirdim
                const mapHref = contactInfo?.locationUrl || (addressText && addressText !== 'Yükleniyor...' ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressText)}` : undefined);
                
                return mapHref ? (
                  <a
                    href={mapHref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xl font-serif text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {addressText}
                  </a>
                ) : (
                  <p className="text-xl font-serif text-slate-900">{addressText}</p>
                );
              })()}
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                 {/* JSON'da 'Bizi Arayın' yoksa 'İletişim' başlığını kullanabiliriz veya statik bırakabiliriz */}
                 {dict?.Footer?.Contact || 'İletişim'} / Tel
              </h3>
              {contactInfo?.phone ? (
                <a
                  href={`tel:${String(contactInfo.phone).replace(/\s|\(|\)|-/g, '')}`}
                  className="text-xl font-serif text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {contactInfo.phone}
                </a>
              ) : (
                <p className="text-xl font-serif text-slate-900">...</p>
              )}
              <p className="text-sm text-slate-400 mt-1">09:00 - 18:00</p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                {dict?.ContactPage?.EMail || 'E-posta'}
              </h3>
              {contactInfo?.email ? (
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-xl font-serif text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {contactInfo.email}
                </a>
              ) : (
                <p className="text-xl font-serif text-slate-900">...</p>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="lg:col-span-7">
          {submitted && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-semibold">
                {dict?.common?.success || '✓ Mesajınız başarıyla gönderildi!'}
              </p>
            </div>
          )}
          <div className="bg-slate-50 p-8 md:p-12">
            <h2 className="text-3xl font-serif text-slate-900 mb-10">
              {dict?.ContactPage?.WriteUs || 'Bize Yazın'}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">
                    {dict?.ContactPage?.Name || 'Ad Soyad'}
                  </span>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-slate-300 py-3 focus:outline-none focus:border-black transition-colors" 
                    placeholder={dict?.ContactPage?.Name1 || 'Adınız Soyadınız'} 
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">
                    {dict?.ContactPage?.EMail || 'E-posta'}
                  </span>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-slate-300 py-3 focus:outline-none focus:border-black transition-colors" 
                    placeholder={dict?.ContactPage?.EMail1 || 'ornek@email.com'}
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">
                  {dict?.ContactPage?.Subject || 'Konu'}
                </span>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-slate-300 py-3 focus:outline-none focus:border-black transition-colors" 
                  placeholder={dict?.ContactPage?.Subject1 || 'Mesajınızın konusu'}
                />
              </label>
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">
                  {dict?.ContactPage?.Message || 'Mesajınız'}
                </span>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-slate-300 py-3 focus:outline-none focus:border-black transition-colors min-h-[120px] resize-y" 
                  placeholder="..."
                ></textarea>
              </label>
              
              <div className="flex justify-end pt-4">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="bg-black text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (dict?.common?.loading || 'Gönderiliyor...') : (dict?.ContactPage?.Send || 'Gönder')} 
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </form>
          </div>

          {/* Map */}
          {contactInfo?.locationUrl && (
            <div className="w-full h-64 mt-12 bg-slate-200 grayscale relative group overflow-hidden">
              <img src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Map" />
              <div className="absolute inset-0 flex items-center justify-center">
                <a href={contactInfo.locationUrl} target="_blank" rel="noreferrer" className="bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-slate-50 shadow-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">map</span> 
                  {dict?.ContactPage?.OpenInMap || 'Haritada Aç'}
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Contact;