import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api'; // Axios instance kullanmak daha sağlıklıdır
import { useLanguage } from '../contexts/LanguageContext';

const API_BASE = (import.meta as any).env?.VITE_API_BASE || 'http://localhost:3005';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // 1. Context'ten 't' (DB çevirisi), 'dict' (Statik metin) ve 'language' alıyoruz
  const { t, dict, language } = useLanguage();
  
  const [news, setNews] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [shareOpen, setShareOpen] = useState(false);

  useEffect(() => {
    if (!id) return;
    
    api.get(`/api/news/${id}`)
      .then(res => {
        setNews(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  // Tarih formatını dile göre ayarlayan yardımcı fonksiyon
  const getLocale = (lang: string) => {
    switch (lang) {
      case 'tr': return 'tr-TR';
      case 'de': return 'de-DE';
      case 'ru': return 'ru-RU';
      default: return 'en-US';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        {/* dict.common.loading varsa onu kullan, yoksa fallback */}
        <div className="text-xl">{dict?.common?.loading || 'Loading...'}</div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
        <div className="text-xl">
            {language === 'tr' ? 'Haber bulunamadı' : 'News not found'}
        </div>
        <button 
          onClick={() => navigate(-1)} 
          className="px-6 py-2 bg-white text-black hover:bg-slate-200 transition-colors"
        >
          {dict?.common?.back || 'Back'}
        </button>
      </div>
    );
  }

  const images: string[] = news.galleryUrls && news.galleryUrls.length > 0
    ? [news.imageUrl, ...news.galleryUrls]
    : [news.imageUrl];

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  // Kategori gösterimi için t() fonksiyonunu kullanıyoruz
  const categoryName = t(news, 'category');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          {/* Statik 'Geri' metni */}
          {dict?.common?.back || 'Back'}
        </button>

        {/* Category & Date */}
        <div className="flex items-center gap-4 mb-4">
          {categoryName && (
            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-widest rounded">
              {categoryName}
            </span>
          )}
          <span className="text-sm text-slate-500">
            {/* Dinamik Tarih Formatı */}
            {new Date(news.publishedAt).toLocaleDateString(getLocale(language), {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </span>
        </div>

        {/* Title (DB'den) */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {t(news, 'title')}
        </h1>

        {/* Description (DB'den) */}
        {t(news, 'description') && (
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            {t(news, 'description')}
          </p>
        )}

        {/* Featured Image / Slider */}
        <div className="mb-8 rounded-lg overflow-hidden relative group">
          <div className="aspect-video w-full bg-slate-900">
             <img
                src={images[activeIndex]?.startsWith('/') ? `${API_BASE}${images[activeIndex]}` : images[activeIndex]}
                alt={t(news, 'title')}
                className="w-full h-full object-cover"
            />
          </div>
          
          {images.length > 1 && (
            <>
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                onClick={prevSlide}
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                onClick={nextSlide}
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${idx === activeIndex ? 'bg-white w-4' : 'bg-white/40'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content (DB'den) */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="text-slate-300 leading-relaxed whitespace-pre-wrap">
            {t(news, 'content')}
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-sm text-slate-500 mb-4">
            {dict?.common?.share || 'Share'}
          </p>
          <div className="flex gap-4">
            <button 
              className="p-2 border border-slate-700 hover:border-white transition-colors rounded"
              onClick={() => setShareOpen(true)}
            >
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </div>
      </div>

      {shareOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShareOpen(false)}>
          <div className="bg-[#0f0f0f] border border-slate-800 rounded-xl p-6 w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-bold mb-4">{dict?.common?.share || 'Share'}</h3>
            <div className="flex flex-col gap-3">
              <button 
                className="flex items-center gap-3 px-4 py-3 border border-slate-800 bg-slate-900/50 rounded-lg hover:bg-slate-800 hover:border-slate-600 transition-all"
                onClick={async () => {
                  await navigator.clipboard.writeText(window.location.href);
                  setShareOpen(false);
                  alert(language === 'tr' ? 'Link kopyalandı' : 'Link copied');
                }}
              >
                <span className="material-symbols-outlined text-slate-400">content_copy</span> 
                {language === 'tr' ? 'Linki kopyala' : 'Copy Link'}
              </button>
              <a 
                className="flex items-center gap-3 px-4 py-3 border border-slate-800 bg-slate-900/50 rounded-lg hover:bg-slate-800 hover:border-slate-600 transition-all"
                href={`https://wa.me/?text=${encodeURIComponent(window.location.href)}`}
                target="_blank" rel="noreferrer"
              >
                <span className="material-symbols-outlined text-green-500">chat</span> WhatsApp
              </a>
              <a 
                className="flex items-center gap-3 px-4 py-3 border border-slate-800 bg-slate-900/50 rounded-lg hover:bg-slate-800 hover:border-slate-600 transition-all"
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(t(news,'title'))}`}
                target="_blank" rel="noreferrer"
              >
                <span className="material-symbols-outlined text-blue-400">public</span> X / Twitter
              </a>
              <a 
                className="flex items-center gap-3 px-4 py-3 border border-slate-800 bg-slate-900/50 rounded-lg hover:bg-slate-800 hover:border-slate-600 transition-all"
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank" rel="noreferrer"
              >
                <span className="material-symbols-outlined text-blue-600">share</span> Facebook
              </a>
            </div>
            <div className="text-right mt-6">
              <button className="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors" onClick={() => setShareOpen(false)}>
                {dict?.common?.cancel || (language === 'tr' ? 'İptal' : 'Cancel')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsDetail;