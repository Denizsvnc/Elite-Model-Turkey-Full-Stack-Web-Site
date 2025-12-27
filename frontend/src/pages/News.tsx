import React, { useEffect, useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useLanguage } from '../contexts/LanguageContext';

const API_BASE = (import.meta as any).env?.VITE_API_BASE || 'http://localhost:3005';

const News: React.FC = () => {
  const location = useLocation();
  
  // 1. Context'ten 't', 'dict' ve 'language' çekiyoruz
  const { t, dict, language } = useLanguage();
  
  const [newsData, setNewsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    // API çağrısını axios veya kendi api instance'ın ile yapabilirsin
    axios.get(`${API_BASE}/api/news`)
      .then(res => {
        const activeNews = res.data.filter((n: any) => n.isActive).sort((a: any, b: any) => 
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
        setNewsData(activeNews);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Tarih formatı yardımcısı
  const getLocale = (lang: string) => {
    switch (lang) {
      case 'tr': return 'tr-TR';
      case 'de': return 'de-DE';
      case 'ru': return 'ru-RU';
      default: return 'en-US';
    }
  };

  const featuredNews = newsData[0];
  const otherNews = newsData.slice(1);

  // Kategori ismini dile göre çeken yardımcı
  const categoryLabel = (n: any) => n[`category_${language}`] || n.category || 'News';

  // Kategorileri hesapla
  const categories = useMemo(() => {
    const allLabel = language === 'tr' ? 'Tümü' : 'All'; // "All" için basit çeviri
    const distinctCategories = Array.from(new Set(newsData.map(n => categoryLabel(n)).filter(Boolean)));
    return [allLabel, ...distinctCategories];
  }, [newsData, language]);

  // Filtreleme mantığı
  const filteredNews = useMemo(() => {
    const allLabel = language === 'tr' ? 'Tümü' : 'All';
    if (selectedCategory === 'All' || selectedCategory === 'Tümü' || selectedCategory === allLabel) {
      return otherNews;
    }
    return otherNews.filter(n => categoryLabel(n) === selectedCategory);
  }, [selectedCategory, otherNews, language]);

  // Sidebar öğelerini dile göre oluştur
  const sidebarItems = useMemo(() => [
    { label: dict?.NewsSidebar?.Models || 'Models', path: '/basarililar', icon: 'groups' },
    { label: dict?.NewsSidebar?.About || 'About', path: '/hakkimizda', icon: 'info' },
    { label: dict?.NewsSidebar?.News || 'News', path: '/haberler', icon: 'newspaper' },
    { label: dict?.NewsSidebar?.Contact || 'Contact', path: '/iletisim', icon: 'call' }
  ], [dict]);

  return (
    <div className="flex w-full min-h-screen bg-black text-white">
      {/* Sidebar - Visible on Desktop */}
      <aside className="w-72 hidden lg:flex flex-col border-r border-slate-900 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto">
        <div className="p-8">
          <h2 className="text-xl font-bold tracking-widest mb-8">
            {dict?.NavLink?.Title || 'THE ELITE'}
          </h2>
          <nav className="flex flex-col gap-4">
            {sidebarItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium tracking-wide transition-colors w-full text-left ${location.pathname === item.path ? 'bg-white/10 text-white border-l-2 border-white' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
              >
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-8 border-t border-slate-900">
          <div className="flex flex-col gap-2">
            <a href="#" className="text-xs text-slate-500 hover:text-white uppercase tracking-widest flex items-center gap-2"><span className="material-symbols-outlined text-sm">camera_alt</span> Instagram</a>
            <a href="#" className="text-xs text-slate-500 hover:text-white uppercase tracking-widest flex items-center gap-2"><span className="material-symbols-outlined text-sm">work</span> LinkedIn</a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <p className="text-xl text-slate-400">{dict?.common?.loading || 'Yükleniyor...'}</p>
            </div>
          ) : (
            <>
              {/* Featured Article */}
              {featuredNews && (
                <Link to={`/news/${featuredNews.id}`} className="relative w-full h-[500px] md:h-[600px] rounded-sm overflow-hidden group cursor-pointer shadow-2xl mb-16 block">
                  <div className="absolute inset-0">
                    <img
                      src={featuredNews.imageUrl.startsWith('/') ? `${API_BASE}${featuredNews.imageUrl}` : featuredNews.imageUrl}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      alt={t(featuredNews, 'title')}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
                    <span className="bg-white text-black px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                      {categoryLabel(featuredNews) || (dict?.Filigran?.title3 || 'Featured')}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4 uppercase">
                      {t(featuredNews, 'title')}
                    </h1>
                    {/* DB'den gelen açıklama */}
                    {t(featuredNews, 'description') && (
                      <p className="text-slate-300 text-lg font-light mb-6">
                        {t(featuredNews, 'description')}
                      </p>
                    )}
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-white pb-1 group-hover:text-slate-300 transition-colors">
                      {dict?.common?.ReadFullStory || 'Read Feature'} 
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </div>
                  </div>
                </Link>
              )}

          {/* Filters */}
          <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4 sticky top-0 bg-black/90 backdrop-blur z-30 pt-4">
            <h2 className="text-xl font-bold tracking-widest uppercase">
                {dict?.common?.LatestNews || 'Latest Stories'}
            </h2>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map(filter => (
                <button 
                  key={filter} 
                  onClick={() => setSelectedCategory(filter)}
                  className={`${selectedCategory === filter ? 'bg-white text-black' : 'border border-slate-700 text-slate-400 hover:border-white hover:text-white'} px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-colors whitespace-nowrap`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.length === 0 ? (
              <div className="col-span-3 text-center py-12 text-slate-400">
                {language === 'tr' ? 'Henüz haber bulunmuyor' : 'No news found'}
              </div>
            ) : (
              filteredNews.map((news) => (
                <Link to={`/news/${news.id}`} key={news.id}>
                  <article className="group cursor-pointer">
                    <div className="aspect-[3/4] bg-slate-900 mb-4 overflow-hidden rounded-sm relative">
                      <img
                        src={news.imageUrl.startsWith('/') ? `${API_BASE}${news.imageUrl}` : news.imageUrl}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        alt={t(news, 'title')}
                      />
                    </div>
                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                      <span className="text-white">{categoryLabel(news)}</span>
                      <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                      {/* Dinamik Tarih */}
                      <span>
                        {new Date(news.publishedAt).toLocaleDateString(getLocale(language), { day: 'numeric', month: 'short' })}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold leading-tight group-hover:text-slate-300 transition-colors">
                      {t(news, 'title')}
                    </h3>
                  </article>
                </Link>
              ))
            )}
          </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;