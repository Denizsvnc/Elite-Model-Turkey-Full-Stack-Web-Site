import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../src/contexts/LanguageContext';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // 1. Context'ten 'dict' (statik json) ve 't' (db çevirici) fonksiyonunu alıyoruz
  const { language, setLanguage, dict, t } = useLanguage();

  // Dynamic contact info state
  const [contactInfo, setContactInfo] = useState<any>(null);
  
  React.useEffect(() => {
    // Servis import yapını korudum
    import('../src/services/api').then(({ default: axiosInstance }) => {
      axiosInstance.get('/api/contact-info').then(res => {
        setContactInfo(res.data);
      });
    });
  }, []);

  // Different header styles based on page context (Light/Dark)
  const isDarkModePage = ['/', '/basarililar', '/haberler'].includes(location.pathname);

  const headerBgClass = isDarkModePage
    ? 'bg-dark/80 border-slate-800 text-white'
    : 'bg-white/80 border-slate-200 text-slate-900';

  // 2. Navigasyon öğelerini seçili dile (dict) göre oluşturuyoruz.
  // dict?.NavLink?.Home gibi "optional chaining (?.)" kullanıyoruz ki veri henüz yüklenmediyse patlamasın.
  const navItems = useMemo(() => [
    { path: '/', label: dict?.NavLink?.Home || 'ANASAYFA' },
    { path: '/basarililar', label: dict?.NavLink?.Succes || 'BAŞARIMIZ' },
    { path: '/haberler', label: dict?.NavLink?.News || 'HABERLER' },
    { path: '/hakkimizda', label: dict?.NavLink?.AboutUs || 'HAKKIMIZDA' },
    { path: '/iletisim', label: dict?.NavLink?.Contact || 'İLETİŞİM' },
    { path: '/sss', label: dict?.NavLink?.FAQ || 'SSS' },
  ], [dict]); // dict değişince menüyü yeniden hesapla

  return (
    <div className={`min-h-screen flex flex-col ${isDarkModePage ? 'bg-dark text-white' : 'bg-white text-slate-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b ${headerBgClass} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">diamond</span>
            </div>
            <span className="font-serif font-bold text-xl tracking-tighter uppercase group-hover:opacity-80 transition-opacity">
              {dict?.NavLink?.Title || 'The Elite Model Turkey'}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors ${location.pathname === item.path ? 'text-blue-600' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Selector */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'tr' | 'en' | 'de' | 'ru')}
              className={`px-3 py-2 text-xs font-bold uppercase tracking-widest border rounded cursor-pointer transition-colors ${
                isDarkModePage
                  ? 'bg-dark border-slate-700 text-white hover:border-slate-500'
                  : 'bg-white border-slate-300 text-slate-900 hover:border-slate-400'
              }`}
            >
              <option value="tr">TR</option>
              <option value="en">EN</option>
              <option value="de">DE</option>
              <option value="ru">RU</option>
            </select>

            <Link
              to="/basvuru"
              className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all ${isDarkModePage
                ? 'bg-white text-black hover:bg-slate-200'
                : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
            >
              {dict?.NavLink?.Application || 'BAŞVURU'}
            </Link>
          </div>

          {/* Mobile: Language Selector + Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            {/* Language Selector - Mobile */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'tr' | 'en' | 'de' | 'ru')}
              className={`px-2 py-1 text-xs font-bold uppercase border rounded cursor-pointer transition-colors ${
                isDarkModePage
                  ? 'bg-dark border-slate-700 text-white hover:border-slate-500'
                  : 'bg-white border-slate-300 text-slate-900 hover:border-slate-400'
              }`}
            >
              <option value="tr">TR</option>
              <option value="en">EN</option>
              <option value="de">DE</option>
              <option value="ru">RU</option>
            </select>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden absolute top-20 left-0 w-full h-screen ${isDarkModePage ? 'bg-dark' : 'bg-white'} p-6 flex flex-col gap-6`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif font-medium text-left"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/basvuru"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-6 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest text-center"
            >
               {dict?.common?.ApplyNow || 'BAŞVURU YAP'}
            </Link>
          </div>
        )}
      </nav>

      {/* Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className={`${isDarkModePage ? 'bg-black border-slate-800' : 'bg-slate-50 border-slate-200'} border-t py-14 md:py-20`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {/* Brand / CTA */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div>
              <span className={`inline-flex items-center gap-2 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] rounded-full ${isDarkModePage ? 'bg-slate-900 text-slate-200' : 'bg-white text-slate-600 border border-slate-200'}`}>
                {dict?.Footer?.Name || 'The Elite Model Turkey'}
              </span>
            </div>
            <h3 className="font-serif font-bold text-2xl md:text-3xl leading-tight">
              {dict?.Footer?.title || 'Küresel podyuma açılan seçkin yetenekler.'}
            </h3>
            <p className={`${isDarkModePage ? 'text-slate-400' : 'text-slate-600'} text-sm leading-relaxed`}>
               {dict?.Footer?.Content || 'İstanbul merkezli, uluslararası sahnede konumlandırılan modeller için stratejik temsil.'}
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Link to="/basvuru" className={`${isDarkModePage ? 'bg-white text-black hover:bg-slate-200' : 'bg-slate-900 text-white hover:bg-slate-800'} px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors`}>
                {dict?.common?.Apply || 'Başvuru Yap'}
              </Link>
              <Link to="/iletisim" className={`${isDarkModePage ? 'border border-slate-700 text-slate-200 hover:border-slate-500' : 'border border-slate-300 text-slate-800 hover:border-slate-500'} px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors`}>
                {dict?.common?.ContactUs || 'İletişim'}
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className={`${isDarkModePage ? 'text-slate-200' : 'text-slate-800'} text-sm font-semibold uppercase tracking-[0.2em]`}>
                {dict?.Footer?.Travel || 'Gezin'}
            </h4>
            <div className="grid grid-cols-1 gap-2 text-sm">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} className={`${isDarkModePage ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className={`${isDarkModePage ? 'text-slate-200' : 'text-slate-800'} text-sm font-semibold uppercase tracking-[0.2em]`}>
                {dict?.Footer?.Contact || 'İletişim'}
            </h4>
            <div className={`${isDarkModePage ? 'text-slate-400' : 'text-slate-600'} text-sm space-y-2`}>
              {contactInfo ? (
                <>
                  {/* 3. DB'den gelen veriyi 't' fonksiyonu ile çeviriyoruz */}
                  <p className="leading-relaxed">{t(contactInfo, 'address')}</p> 
                  <p className="leading-relaxed">
                    <a href={`tel:${contactInfo.phone}`} className={`${isDarkModePage ? 'hover:text-white' : 'hover:text-slate-900'} transition-colors`}>{contactInfo.phone}</a><br />
                    <a href={`mailto:${contactInfo.email}`} className={`${isDarkModePage ? 'hover:text-white' : 'hover:text-slate-900'} transition-colors`}>{contactInfo.email}</a>
                  </p>
                  {contactInfo.locationUrl && (
                    <a href={contactInfo.locationUrl} target="_blank" rel="noopener noreferrer" className="underline block">
                        {language === 'tr' ? 'Haritada Aç' : 'Open in Maps'}
                    </a>
                  )}
                </>
              ) : (
                <span>{dict?.common?.loading || 'Yükleniyor...'}</span>
              )}
              <div className="flex gap-3 pt-2">
                {['instagram', 'facebook', 'linkedin'].map((social) => (
                  <a key={social} href="#" className={`w-10 h-10 rounded-full flex items-center justify-center border ${isDarkModePage ? 'border-slate-700 text-slate-200 hover:border-slate-500 hover:text-white' : 'border-slate-300 text-slate-700 hover:border-slate-600 hover:text-slate-900'} transition-colors`}>
                    <span className="material-symbols-outlined text-lg">share</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-10 md:mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wide">
          <span className={`${isDarkModePage ? 'text-slate-500' : 'text-slate-500'}`}>
            {dict?.Footer?.CopyRight || '© 2024 The Elite Model Turkey. Tüm hakları saklıdır.'}
          </span>
          <div className="flex gap-6">
            <a href="#" className={`${isDarkModePage ? 'text-slate-500 hover:text-white' : 'text-slate-500 hover:text-slate-900'} transition-colors`}>
                {dict?.Footer?.KVKK || 'KVKK'}
            </a>
            <a href="#" className={`${isDarkModePage ? 'text-slate-500 hover:text-white' : 'text-slate-500 hover:text-slate-900'} transition-colors`}>
                {dict?.Footer?.Security || 'Gizlilik'}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;