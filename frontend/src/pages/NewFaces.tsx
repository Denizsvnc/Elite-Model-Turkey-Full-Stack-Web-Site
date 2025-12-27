import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';
const API_BASE = (import.meta as any).env?.VITE_API_BASE || 'http://localhost:3005';

const NewFaces: React.FC = () => {
    const [heroImage, setHeroImage] = useState('https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2000&auto=format&fit=crop');
    const {dict, t, language} = useLanguage();
    useEffect(() => {
        api.get('/api/featured-items')
            .then(res => {
                const newFacesItem = res.data.find((item: any) => item.order === 3);
                if (newFacesItem?.imageUrl) {
                    const imgUrl = newFacesItem.imageUrl.startsWith('/') ? `${API_BASE}${newFacesItem.imageUrl}` : newFacesItem.imageUrl;
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
                    alt="New Faces"
                    className="w-full h-full object-cover"
                    style={{ opacity: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                    <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tighter mb-6">
                        {dict?.NewFacesPage?.HeroTitle || "NEW FACES"}
                    </h1>
                    <p className="text-lg md:text-xl font-light text-slate-300 max-w-2xl leading-relaxed">
                        {dict?.NewFacesPage?.HeroContent || "Yarının süpermodellerini bugün keşfediyoruz. Geleceğin ikonlarına hoş geldiniz."}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div>
                        <h2 className="text-4xl font-serif mb-6">{dict?.NewFacesPage?.NewFacesArea || "Yeni Yüzler"}</h2>
                        <p className="text-slate-300 leading-relaxed mb-6"> {dict?.NewFacesPage?.NewFacesAreaContent1 || "Elite Model Agency'nin New Faces bölümü, moda endüstrisinin gelecekteki yıldızlarını keşfetmek ve yetiştirmek  için özel olarak tasarlanmıştır. Genç yetenekleri bulup, profesyonel eğitim ve rehberlikle onları dünya sahnesine hazırlıyoruz."}
                            
                            
                           
                        </p>
                        <p className="text-slate-300 leading-relaxed mb-6"> {dict?.NewFacesPage?.NewFacesAreaContent2 || "16-21 yaş arasındaki yetenekli adaylar için özel gelişim programları, profesyonel fotoğraf çekimleri, podyum eğitimleri ve kişisel gelişim workshopları sunuyoruz."}
                            
                            
                        </p>
                    </div>
                    <div className="relative h-[500px]">
                        <img
                            src={dict?.NewFacesPage?.NewFacesAreaImg || "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800&auto=format&fit=crop"}
                            alt="Young Model"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>

                {/* Program Features */}
                <div className="mb-24">
                    <h3 className="text-3xl font-serif mb-12 text-center">{dict?.NewFacesPage?.Program || "Gelişim Programımız"}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: dict?.NewFacesPage?.ProgramCard1 || 'Portfolio Geliştirme',
                                description: dict?.NewFacesPage?.ProgramCardContent1 || 'Profesyonel fotoğraf çekimleri ve portfolio hazırlığı',
                                icon: 'photo_library'
                            },
                            {
                                title: dict?.NewFacesPage?.ProgramCard2 || 'Podyum Eğitimi',
                                description: dict?.NewFacesPage?.ProgramCardContent2 || 'Profesyonel yürüyüş ve sahne duruşu eğitimleri',
                                icon: 'directions_walk'
                            },
                            {
                                title: dict?.NewFacesPage?.ProgramCard3 || 'Kişisel Gelişim',
                                description: dict?.NewFacesPage?.ProgramCardContent3 || 'Özgüven, duruş ve iletişim becerileri',
                                icon: 'psychology'
                            },
                            {
                                title: dict?.NewFacesPage?.ProgramCard4 || 'Endüstri Bilgisi',
                                description: dict?.NewFacesPage?.ProgramCardContent4 || 'Moda endüstrisi ve profesyonel iş hayatı eğitimi',
                                icon: 'school'
                            }
                        ].map((feature, index) => (
                            <div key={index} className="border border-white/10 p-6 hover:border-white/30 transition-colors text-center">
                                <span className="material-symbols-outlined text-4xl mb-4 text-blue-500 block">
                                    {feature.icon}
                                </span>
                                <h4 className="text-xl font-serif mb-2">{feature.title}</h4>
                                <p className="text-sm text-slate-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Success Stories */}
                <div className="py-16 border-y border-white/10 mb-24">
                    <h3 className="text-3xl font-serif mb-12 text-center">{dict?.NewFacesPage?.SuccesStories || "Başarı Hikayeleri"}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: dict?.NewFacesPage?.Name1 || '',
                                age: dict?.NewFacesPage?.Name1Age || "",
                                achievement: dict?.NewFacesPage?.Name1Achievement || "",
                                image: dict?.NewFacesPage?.HeroImg1 || 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop'
                            },
                            {
                                name: dict?.NewFacesPage?.Name1 || '',
                                age:  dict?.NewFacesPage?.Name2Age || "",
                                achievement: dict?.NewFacesPage?.Name2Achievement || "",
                                image: dict?.NewFacesPage?.HeroImg2 ||  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
                            },
                            {   
                                name: dict?.NewFacesPage?.Name1 || '',
                                age: dict?.NewFacesPage?.Name3Age || "",
                                achievement: dict?.NewFacesPage?.Name3Achievement || "",
                                image: dict?.NewFacesPage?.HeroImg3 ||  'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop'
                            }
                        ].map((story, index) => (
                            <div key={index} className="group">
                                <div className="relative h-[400px] mb-4 overflow-hidden">
                                    <img
                                        src={story.image}
                                        alt={story.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h4 className="text-xl font-serif mb-1">{story.name}, {story.age}</h4>
                                <p className="text-blue-500 text-sm">{story.achievement}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Requirements */}
                <div className="bg-white/5 border border-white/10 p-12 mb-24">
                    <h3 className="text-3xl font-serif mb-8">{dict?.NewFacesPage?.Criteria || "Başvuru Kriterleri"}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-xl font-semibold mb-4 text-blue-500">{dict?.NewFacesPage?.Womens || "Kadınlar"}</h4>
                            <ul className="space-y-2 text-[#D4AF37]">
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
                            <ul className="space-y-2 text-[#D4AF37]">
                                <li>{dict?.NewFacesPage?.MenCriteria1 || " • Yaş: 16-21"}</li>
                                <li>{dict?.NewFacesPage?.MenCriteria2 || "• Boy: Minimum 182 cm"}</li>
                                <li>{dict?.NewFacesPage?.MenCriteria3 || "• Beden: 46-48"}</li>
                                <li>{dict?.NewFacesPage?.MenCriteria4 || "• Atletik veya fit yapı"}</li>
                                <li>{dict?.NewFacesPage?.MenCriteria5 || "• Kendine güven"}</li>
                                <li>{dict?.NewFacesPage?.MenCriteria6 || "• Kendine güven"}</li>

                            </ul>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center py-16">
                    <h2 className="text-4xl font-serif mb-6">{dict?.NewFacesPage?.Slogan || "Hayalleriniz Burada Başlıyor"}</h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto"> {dict?.NewFacesPage?.SloganContent || "Moda endüstrisinin parlayan yeni yıldızlarından biri olmak için bugün başvurunuzu yapın. Profesyonel ekibimiz, potansiyelinizi keşfetmek için sizinle iletişime geçecek."}
                        
                        
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Link
                            to={dict?.NewFacesPage?.Button1Link || "/basvuru"}
                            className="inline-block px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors"
                        >
                            {dict?.NewFacesPage?.Button1 || "Hemen Başvur"}
                        </Link>
                        <Link
                            to={dict?.NewFacesPage?.Button2Link || "/sss"}
                            className="inline-block px-10 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                        >
                            {dict?.NewFacesPage?.Button2 || "Sıkça Sorulan Sorular"}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NewFaces;
