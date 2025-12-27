import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const API_BASE = (import.meta as any).env?.VITE_API_BASE || 'http://localhost:3005';
import { useLanguage } from '../contexts/LanguageContext';
const Women: React.FC = () => {
    const [heroImage, setHeroImage] = useState('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop');
    const { dict, t, language } = useLanguage();
    useEffect(() => {
        api.get('/api/featured-items')
            .then(res => {
                const womenItem = res.data.find((item: any) => item.order === 1);
                if (womenItem?.imageUrl) {
                    const imgUrl = womenItem.imageUrl.startsWith('/') ? `${API_BASE}${womenItem.imageUrl}` : womenItem.imageUrl;
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
                    alt="Women Models"
                    className="w-full h-full object-cover"
                    style={{ opacity: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                    <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tighter mb-6">
                        {dict?.WomenPage?.HeroTitle || "KADIN MODEL"}
                    </h1>
                    <p className="text-lg md:text-xl font-light text-slate-300 max-w-2xl leading-relaxed">
                        {dict?.WomenPage?.HeroContent || "Güçlü, karizmatik ve profesyonel erkek modellerimiz, global moda sahnesinde fark yaratmaktadır."}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div>
                        <h2 className="text-4xl font-serif mb-6">{dict?.WomenPage?.WomenArea || "Kadın Modeller"}</h2>
                        <p className="text-slate-300 leading-relaxed mb-6">{dict?.WomenPage?.WomenAreaContent1 || "Elite Model Agency olarak, kadın model portföyümüz moda endüstrisinin en parlak yıldızlarını barındırmaktadır. Uluslararası podyumlarda, prestijli dergilerde ve global kampanyalarda yer alan modellerimiz, sektörün zirvesini temsil etmektedir."}
                            
                        </p>
                        <p className="text-slate-300 leading-relaxed mb-6"> {dict?.WomenPage?.WomenAreaContent2 || "Paris, Milano, New York ve Londra Fashion Week'lerde düzenli olarak yer alan modellerimiz, Vogue, Harper's Bazaar, Elle gibi önde gelen moda dergilerinin kapaklarını süslemektedir."}
                            
                            
                        </p>
                    </div>
                    <div className="relative h-[500px]">
                        <img
                            src={dict?.WomenPage?.WomenAreaImg || "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"}
                            alt="Fashion Show"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {[
                        {
                            title: dict?.WomenPage?.Categories1 || "PİST",
                            description: dict?.WomenPage?.Cat1Content || "Dünya çapında podyum deneyimi",
                            icon: 'villa'
                        },
                        {
                            title: dict?.WomenPage?.Categories2 || "EDİTORYAL",
                            description: dict?.WomenPage?.Cat2Content || "Uluslararası dergi çekimleri",
                            icon: 'photo_camera'
                        },
                        {
                            title: dict?.WomenPage?.Categories3 ||'REKLAM',
                            description: dict?.WomenPage?.Cat3Content || 'Global marka kampanyaları',
                            icon: 'business_center'
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

                {/* CTA Section */}
                <div className="text-center py-16 border-t border-white/10">
                    <h2 className="text-4xl font-serif mb-6">{dict?.WomenPage?.JoinUs || "Siz de Aramıza Katılın"}</h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto"> {dict?.WomenPage?.JoinUsContent || "Moda endüstrisinde kariyerinizi başlatmak ve dünya sahnesinde yerinizi almak için başvurunuzu yapın." }
                        
                    </p>
                    <Link
                        to= {dict?.WomenPage?.ButtonLink || "/basvuru"}
                        className="inline-block px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors"
                    >
                        {dict?.WomenPage?.Button || "Başvuru Yap"}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Women;
