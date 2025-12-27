import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const FAQ: React.FC = () => {
  // 1. Context'ten 'dict' (statik json) ve 't' (db çevirici) çekiyoruz
  const { t, dict } = useLanguage();
  
  const [faqs, setFaqs] = useState<any[]>([]);
  const [defaultOpenId, setDefaultOpenId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await api.get('/api/faqs');
        const items = res.data || [];
        setFaqs(items);
        const first = items.find((f: any) => f.order === 1) || items[0];
        setDefaultOpenId(first?.id || null);
      } catch (e) {
        console.error('FAQ fetch failed', e);
      }
    };
    fetchFaqs();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6">
          {/* JSON'dan gelen başlık */}
          {dict?.FAQ?.HeroTitle || 'Sıkça Sorulan Sorular'}
        </h1>
        <p className="text-lg text-slate-500 font-light max-w-lg mx-auto">
          {dict?.FAQ?.Content || 'Becoming a part of The Elite. Everything you need to know about our process.'}
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((item, idx) => (
          <details key={item.id || idx} className="group border-b border-slate-200" open={item.id === defaultOpenId}>
            <summary className="flex cursor-pointer items-center justify-between py-6 list-none hover:bg-slate-50 px-4 transition-colors">
              <h3 className="text-lg font-medium text-slate-900 group-open:text-blue-600 transition-colors">
                {/* DB'den gelen soru */}
                {t(item, 'question')}
              </h3>
              <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform duration-300">
                expand_more
              </span>
            </summary>
            <div className="pb-6 px-4 text-slate-600 leading-relaxed animate-[fadeIn_0.3s_ease-out]">
              {/* DB'den gelen cevap */}
              {t(item, 'answer')}
            </div>
          </details>
        ))}
      </div>

      <div className="mt-20 p-10 bg-slate-50 rounded-lg text-center border border-slate-100">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
          <span className="material-symbols-outlined">support_agent</span>
        </div>
        <h3 className="text-2xl font-serif text-slate-900 mb-2">
            {dict?.FAQ?.Questions || 'Hala sorularınız mı var?'}
        </h3>
        <p className="text-slate-500 mb-8">
            {dict?.FAQ?.Content1 || 'Ekibimiz size yardımcı olmaktan mutluluk duyacaktır.'}
        </p>
        <button onClick={()=> navigate('/iletisim')} className="flex items-center justify-center gap-2 mx-auto text-blue-600 font-bold hover:gap-4 transition-all">
          {dict?.common?.ContactUs || 'Bize Ulaşın'} 
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default FAQ;