import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const API_BASE = (import.meta as any).env?.VITE_API_BASE || 'http://localhost:3005';

const Success: React.FC = () => {
  // 1. Context'ten 't', 'dict' ve 'language' alıyoruz
  const { t, dict, language } = useLanguage();
  
  const [heroData, setHeroData] = useState<any>(null);
  const [modelData, setModelData] = useState<any>(null);
  const [newsData, setNewsData] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`${API_BASE}/api/success-heroes`)
      .then(res => {
        const activeHero = res.data.find((h: any) => h.isActive);
        setHeroData(activeHero || res.data[0]);
      })
      .catch(err => console.error(err));

    axios.get(`${API_BASE}/api/success-model-reviews`)
      .then(res => {
        const activeModel = res.data.find((m: any) => m.isActive);
        setModelData(activeModel || res.data[0]);
      })
      .catch(err => console.error(err));

    axios.get(`${API_BASE}/api/news`)
      .then(res => {
        const activeNews = res.data.filter((n: any) => n.isActive).sort((a: any, b: any) => 
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
        setNewsData(activeNews.slice(0, 4));
      })
      .catch(err => console.error(err));
  }, []);

  // Tarih formatı için yardımcı fonksiyon
  const getLocale = (lang: string) => {
    switch (lang) {
      case 'tr': return 'tr-TR';
      case 'de': return 'de-DE';
      case 'ru': return 'ru-RU';
      default: return 'en-US';
    }
  };

  // İstatistikler için etiketleri dile göre seçme (JSON'da bu alanlar yoksa varsayılanı kullanır)
  const getStatLabel = (key: string, defaultText: string) => {
    // Eğer json'da Stats objesi oluşturursan oradan çeker, yoksa defaultText döner
    return dict?.Stats?.[key] || defaultText;
  };

  return (
    <div className="w-full bg-dark text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src={heroData?.imageUrl ? (heroData.imageUrl.startsWith('/') ? `${API_BASE}${heroData.imageUrl}` : heroData.imageUrl) : "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop"}
            alt="Runway"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 drop-shadow-2xl">
            {/* DB verisi yoksa JSON'dan 'Başarımız' başlığını çek */}
            {heroData ? t(heroData, 'title') : (dict?.NavLink?.Succes || 'Başarımız')}
          </h1>
          <p className="text-xl md:text-2xl font-light text-slate-300 tracking-wide">
            {heroData ? t(heroData, 'text') : (dict?.Slogan?.title || 'Defining Standards. Creating Icons.')}
          </p>
          <button className="mt-10 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors">
            {dict?.common?.Discover || 'View Portfolio'}
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-800 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'photo_camera', 
                label: dict?.Model?.Campaigns || 'Kampanyalar', 
                val: dict?.Model?.CampaignsNumber || '200+' },
              { icon: 'public', 
                label: dict?.Model?.GlobalPartners || 'Küresel Ortaklar', 
                val: dict?.Model?.GlobalPartnersNumber || '15' },
              { icon: 'trophy', 
                label: dict?.Model?.AwardsWon || 'Kazandığı Ödüller', 
                val: dict?.Model?.AwardsWonNumber || '4'}
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2 p-6 border border-slate-800 bg-[#0a0a0a] hover:border-slate-600 transition-colors rounded-lg">
                <div className="flex items-center gap-2 text-yellow-500 mb-2">
                  <span className="material-symbols-outlined">{stat.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</span>
                </div>
                <span className="text-5xl font-thin tracking-tight">{stat.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="aspect-[3/4] rounded-lg overflow-hidden relative group">
              <div className="absolute inset-0 bg-yellow-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <img
                src={modelData?.imageUrl ? (modelData.imageUrl.startsWith('/') ? `${API_BASE}${modelData.imageUrl}` : modelData.imageUrl) : "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop"}
                alt="Model Spotlight"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <p className="text-yellow-500 font-bold uppercase tracking-widest text-xs mb-2">
                {dict?.Model?.SpotLight || 'Model Spotlight'}
              </p>
              <h2 className="text-5xl md:text-6xl font-serif leading-tight">
                {modelData ? t(modelData, 'title') : 'The Breakout'}
              </h2>
            </div>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              {modelData ? t(modelData, 'text') : 'From her debut in Istanbul to walking the runways of Milan, Aylin has redefined the modern Turkish aesthetic.'}
            </p>
            
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">
            {dict?.Filigran?.title1 || 'Son Öne Çıkanlar'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
            {newsData.length > 0 ? (
              newsData.map((news, idx) => (
                <Link
                  key={news.id}
                  to={`/news/${news.id}`}
                  className={`${idx === 0 ? 'md:row-span-2' : idx === 3 ? 'md:col-span-2' : ''} relative group overflow-hidden rounded-lg cursor-pointer`}
                >
                  <img 
                    src={news.imageUrl.startsWith('/') ? `${API_BASE}${news.imageUrl}` : news.imageUrl} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={t(news, 'title')} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                    <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-1">
                      {(news[`category_${language}`] || news.category) || new Date(news.publishedAt).toLocaleDateString(getLocale(language), { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                    <span className={`${idx === 0 || idx === 3 ? 'text-2xl' : 'text-xl'} font-bold`}>
                      {t(news, 'title')}
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-3 text-center text-slate-400 py-12">
                {dict?.common?.loading || 'Henüz haber eklenmemiş'}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-12 border-t border-slate-900 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-600 mb-8">
            {/* Başlık: Referance */}
            {dict?.Model?.Referance || 'Sektör Liderleri Tarafından Güvenilen'}
          </p>
          
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Markalar: Referance1, 2, 3, 4 */}
            {[
                dict?.Model?.Referance1 || 'VAKKO',
                dict?.Model?.Referance2 || 'BEYMEN',
                dict?.Model?.Referance3 || 'ELLE',
                dict?.Model?.Referance4 || 'ROLEX'
            ].map((brand, index) => (
              <span key={index} className="text-2xl md:text-3xl font-serif font-bold text-white tracking-widest">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Success;