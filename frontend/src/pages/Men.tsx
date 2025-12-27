import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import {useLanguage} from "../contexts/LanguageContext";
const API_BASE = (import.meta as any).env?.VITE_API_BASE || 'http://localhost:3005';

const Men: React.FC = () => {
    const [heroImage, setHeroImage] = useState('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2000&auto=format&fit=crop');
    const {dict, t, language} = useLanguage();
    useEffect(() => {
        api.get('/api/featured-items')
            .then(res => {
                const menItem = res.data.find((item: any) => item.order === 2);
                if (menItem?.imageUrl) {
                    const imgUrl = menItem.imageUrl.startsWith('/') ? `${API_BASE}${menItem.imageUrl}` : menItem.imageUrl;
                    setHeroImage(imgUrl);
                }
            })
            .catch(err => console.error('Failed to load hero image:', err));
    }, []);

    return (
        <div className="w-full bg-dark text-white">
            {/* Hero Section */}
            <section className="relative h-[70vh] w-full overflow-hidden">
                <img
                    src={heroImage}
                    alt="Men Models"
                    className="w-full h-full object-cover"
                    style={{ opacity: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                    <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tighter mb-6">
                        {dict?.MenPage?.HeroTitle || "MEN"}
                    </h1>
                    <p className="text-lg md:text-xl font-light text-slate-300 max-w-2xl leading-relaxed"> {dict?.MenPage?.HeroContent || "Güçlü, karizmatik ve profesyonel erkek modellerimiz, global moda sahnesinde fark yaratmaktadır."}
                        
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div className="relative h-[500px] order-2 md:order-1">
                        <img
                            src={dict?.MenPage?.MenAreaImg || "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=800&auto=format&fit=crop"}
                            alt="Male Model"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-4xl font-serif mb-6">{dict?.MenPage?.MenArea || "Erkek Modeller"}</h2>
                        <p className="text-slate-300 leading-relaxed mb-6"> {dict?.MenPage?.MenAreaContent1 || "Elite Model Agency erkek model bölümü, moda endüstrisinin en güçlü ve karizmatik yüzlerini temsil etmektedir.Portföyümüzdeki erkek modeller, uluslararası podyumlarda, prestijli kampanyalarda ve editoryal çekimlerde profesyonellikleriyle öne çıkmaktadır."}
                            
                            
                            
                        </p>
                        <p className="text-slate-300 leading-relaxed mb-6"> {dict?.MenPage?.MenAreaContent2 || "Armani, Hugo Boss, Dolce & Gabbana gibi dünya çapında tanınan markaların kampanyalarında yer alan modellerimiz, GQ, Esquire, Men's Health gibi prestijli erkek dergilerinin kapaklarını süslemektedir."}
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {[
                        {
                            title: dict?.MenPage?.Categories1 || "Yüksek Moda Anlayışı" ,
                            description: dict?.MenPage?.Cat1Content || "Lüks marka kampanyaları",
                            icon: 'diamond'
                        },
                        {
                            title: dict?.MenPage?.Categories2 || 'Sports & Fitness',
                            description: dict?.MenPage?.Cat2Content || 'Spor ve lifestyle çekimleri',
                            icon: 'exercise'
                        },
                        {
                            title: dict?.MenPage?.Categories3 || 'Character',
                            description: dict?.MenPage?.Cat3Content || 'Güçlü karakter ve duruş',
                            icon: 'star'
                        }
                    ].map((feature, index) => (
                        <div key={index} className="border border-white/10 p-8 hover:border-white/30 transition-colors">
                            <span className="material-symbols-outlined text-5xl mb-4 text-blue-500">
                                {feature.icon}
                            </span>
                            <h3 className="text-2xl font-serif mb-3">{feature.title}</h3>
                            <p className="text-slate-400">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-white/10 mb-24">
                    {[
                        { number: dict?.MenPage?.Content1 || "50+", label: dict?.MenPage?.Content1Text || 'Aktif Model' },
                        { number: dict?.MenPage?.Content2 || "200+", label: dict?.MenPage?.Content2Text || 'Podyum Şovu' },
                        { number: dict?.MenPage?.Content3 || '100+', label: dict?.MenPage?.Content3Text || 'Marka İşbirliği' },
                        { number: dict?.MenPage?.Content4 || '15+', label: dict?.MenPage?.Content4Text || 'Yıllık Deneyim' }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl font-serif mb-2">{stat.number}</div>
                            <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center py-16 border-t border-white/10">
                    <h2 className="text-4xl font-serif mb-6">{dict?.MenPage?.StartCareer || "Kariyerinizi Başlatın"}</h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        {dict?.MenPage?.StartContent || "Erkek modellik dünyasında yerinizi almak ve uluslararası kariyerinizi şekillendirmek için hemen başvurun."}
                    </p>
                    <Link
                        to= { dict?.MenPage?.ButtonLink || "/basvuru"}
                        className="inline-block px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors"
                    >
                        { dict?.MenPage?.Button || "Başvuru Yap"}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Men;
