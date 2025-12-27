import React, { useEffect, useState, useMemo } from 'react';
import api from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';

const API_BASE = (import.meta as any).env?.VITE_API_BASE || 'http://localhost:3005';

interface AboutPageData {
  intro_title_tr: string; intro_title_en: string; intro_title_de: string; intro_title_ru: string;
  intro_text_tr: string; intro_text_en: string; intro_text_de: string; intro_text_ru: string;
  vision_imageUrl: string;
  vision_title_tr: string; vision_title_en: string; vision_title_de: string; vision_title_ru: string;
  vision_slogan_tr: string; vision_slogan_en: string; vision_slogan_de: string; vision_slogan_ru: string;
  vision_text_tr: string; vision_text_en: string; vision_text_de: string; vision_text_ru: string;
  mission_imageUrl: string;
  mission_title_tr: string; mission_title_en: string; mission_title_de: string; mission_title_ru: string;
  mission_slogan_tr: string; mission_slogan_en: string; mission_slogan_de: string; mission_slogan_ru: string;
  mission_text_tr: string; mission_text_en: string; mission_text_de: string; mission_text_ru: string;
}

const About: React.FC = () => {
  // 1. Context'ten 'dict' (statik) ve 't' (db) çekiyoruz
  const { t, dict } = useLanguage();
  const [about, setAbout] = useState<Partial<AboutPageData> | null>(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await api.get('/api/about');
        setAbout(res.data || null);
      } catch (e) {
        console.error('About fetch failed', e);
      }
    };
    fetchAbout();
  }, []);

  // 2. İlkeler (Principles) dizisini dil değiştikçe yeniden hesaplamak için useMemo kullandık.
  // Not: JSON dosyasında bu açıklamalar (desc) yoksa, json'a eklemen gerekebilir. 
  // Şimdilik Başlıkları JSON'dan, açıklamaları sabit bıraktım (veya json'a ekleyebilirsin).
  const principles = useMemo(() => [
    { 
      title: dict?.AboutPage?.Integrity || 'Integrity', 
      icon: 'verified', 
      desc: 'Trust is the currency of our business, and we earn it every day.' 
    },
    { 
      title: dict?.AboutPage?.Global || 'Global Reach', 
      icon: 'public', 
      desc: 'Connecting local potential with international opportunities.' 
    },
    { 
      title: dict?.AboutPage?.Excellence || 'Excellence', 
      icon: 'diamond', 
      desc: 'Striving for the exceptional in every booking and contract.' 
    },
  ], [dict]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full px-6 py-20 md:py-32 flex flex-col items-center justify-center text-center bg-white">
        <span className="text-xs font-bold tracking-[0.3em] uppercase text-slate-400 mb-6">
          {dict?.AboutPage?.AboutUs || 'About Us'}
        </span>
        <h1 className="text-5xl md:text-8xl font-serif text-slate-900 leading-tight mb-8">
          {about ? t(about, 'intro_title') : (dict?.common?.loading || '...')}
        </h1>
        <div className="h-px w-24 bg-slate-200 mb-8"></div>
        <p className="max-w-2xl text-lg md:text-xl font-light text-slate-600 leading-relaxed">
          {about ? t(about, 'intro_text') : ''}
        </p>
      </section>

      {/* Vision Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[3/4] overflow-hidden bg-slate-100">
              {about?.vision_imageUrl ? (
                <img 
                  src={`${API_BASE}${about.vision_imageUrl}`} 
                  alt="Vision" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              ) : (
                <div className="w-full h-full bg-slate-200" />
              )}
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border border-slate-200 -z-10 hidden md:block"></div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <span className="text-xs font-bold tracking-[0.2em] text-slate-300">01</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900">
                {about ? t(about, 'vision_title') : 'Vizyonumuz'}
            </h2>
            {about && t(about, 'vision_slogan') && (
              <blockquote className="text-2xl md:text-3xl font-serif italic text-slate-800 leading-snug border-l-4 border-slate-900 pl-6">
                {t(about, 'vision_slogan')}
              </blockquote>
            )}
            <div className="text-slate-600 font-light leading-loose text-lg space-y-4">
              {about && (
                <p>{t(about, 'vision_text')}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24 bg-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-xs font-bold tracking-[0.2em] text-slate-300">02</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900">
                {about ? t(about, 'mission_title') : 'Misyonumuz'}
            </h2>
            {about && t(about, 'mission_slogan') && (
              <blockquote className="text-2xl md:text-3xl font-serif italic text-slate-800 leading-snug border-l-4 border-slate-900 pl-6">
                {t(about, 'mission_slogan')}
              </blockquote>
            )}
            <p className="text-slate-600 font-light leading-loose text-lg mb-4">
              {about ? t(about, 'mission_text') : ''}
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[16/10] overflow-hidden bg-slate-200 shadow-xl">
              {about?.mission_imageUrl ? (
                <img 
                  src={`${API_BASE}${about.mission_imageUrl}`} 
                  alt="Mission" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              ) : (
                <div className="w-full h-full bg-slate-300" />
              )}
            </div>
             <div className="absolute -top-6 -right-6 w-full h-full border border-slate-200 -z-10 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="w-full py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-20">
            {dict?.AboutPage?.Principles || 'Core Principles'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {principles.map((item) => (
              <div key={item.title} className="flex flex-col items-center group p-8 hover:bg-slate-50 transition-colors duration-500">
                <span className="material-symbols-outlined text-5xl mb-6 text-slate-300 group-hover:text-slate-900 transition-colors">{item.icon}</span>
                <h3 className="text-2xl font-serif text-slate-900 mb-4">{item.title}</h3>
                <div className="w-8 h-px bg-slate-300 mb-6 group-hover:w-16 transition-all duration-500"></div>
                <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-slate-900 text-white py-32 text-center px-6">
        <h2 className="text-4xl md:text-6xl font-serif mb-8">
            {dict?.AboutPage?.Join || 'Join the Elite'}
        </h2>
        <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto mb-12">
          {dict?.AboutPage?.title || 'Whether you are an aspiring model or a brand seeking unique talent...'}
        </p>
        <button className="bg-white text-slate-900 px-10 py-4 font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors">
          {dict?.AboutPage?.BecomeModel || 'Become a Model'}
        </button>
      </section>
    </div>
  );
};

export default About;