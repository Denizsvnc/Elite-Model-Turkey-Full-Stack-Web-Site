import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';

// Types
interface SliderItem {
  id: number;
  imageUrl?: string | null;
  title_tr?: string | null;
  title_en?: string | null;
  description_tr?: string | null;
  description_en?: string | null;
  linkUrl?: string | null;
  order: number;
  isActive: boolean;
}

interface HomeSlider {
  id: number;
  key: string;
  name: string;
  isActive: boolean;
  items: SliderItem[];
}

interface NewsItem {
  id: number;
  imageUrl: string;
  title_tr: string;
  title_en?: string;
  content_tr?: string;
  content_en?: string;
  publishedAt: string;
  isActive: boolean;
}

interface FeaturedItem {
  id: number;
  imageUrl: string;
  title_tr: string;
  order: number;
}

const API_BASE = (import.meta as any).env?.VITE_API_BASE || 'http://localhost:3005';
const HERO_SLIDER_KEY = (import.meta as any).env?.VITE_HERO_SLIDER_KEY || 'home-hero';

const Home: React.FC = () => {
  // 1. Context'ten 'dict' (statik json) ve 't' (db çevirici) alıyoruz
  const { t, dict } = useLanguage();
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [sliderItems, setSliderItems] = useState<SliderItem[]>([]);
  const [latestNews, setLatestNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [featuredItems, setFeaturedItems] = useState<FeaturedItem[]>([]);

  // Fetch slider data
  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setLoading(true);
        
        // Fetch sliders
        const slidersResponse = await api.get<HomeSlider[]>('/api/sliders');
        const homeSlider = slidersResponse.data.find(s => s.key === HERO_SLIDER_KEY || s.key === 'home' || s.key === 'homepage');
        
        if (homeSlider && homeSlider.items.length > 0) {
          const activeItems = homeSlider.items
            .filter(item => item.isActive)
            .sort((a, b) => a.order - b.order);
          setSliderItems(activeItems);
        }

        // Fetch latest news
        const newsResponse = await api.get<NewsItem[]>('/api/news');
        const activeNews = newsResponse.data
          .filter(n => n.isActive)
          .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        if (activeNews.length > 0) {
          setLatestNews(activeNews[0]);
        }

        // Fetch featured cards (Women, Men, New Faces)
        const featuredResponse = await api.get<FeaturedItem[]>('/api/featured-items');
        const sortedFeatured = (featuredResponse.data || []).sort((a, b) => a.order - b.order);
        setFeaturedItems(sortedFeatured);

      } catch (error) {
        console.error('Error fetching home data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  useEffect(() => {
    if (sliderItems.length === 0) return;
    
    const timer = setInterval(() => {
      handleNextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide, sliderItems.length]);

  const handleNextSlide = () => {
    if (sliderItems.length === 0) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrevSlide = () => {
    if (sliderItems.length === 0) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + sliderItems.length) % sliderItems.length);
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide && sliderItems.length > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 500);
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div className="w-full h-screen bg-dark text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-sm uppercase tracking-widest">{dict?.common?.loading || 'Loading...'}</p>
        </div>
      </div>
    );
  }

  // Fallback slider data if API returns empty
  const defaultSlide = {
    id: 0,
    imageUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2000&auto=format&fit=crop',
    title_tr: 'THE ELITE',
    title_en: 'THE ELITE',
    description_tr: 'Redefining the standards of beauty and professionalism.',
    description_en: 'Redefining the standards of beauty and professionalism.',
    order: 1,
    isActive: true
  };

  const displaySlides = sliderItems.length > 0 ? sliderItems : [defaultSlide];

  // Build categories from featured items with fallbacks
  // useMemo kullandık ki render sırasında gereksiz hesaplama olmasın
  const categoryData = [1, 2, 3].map((order) => {
    const item = featuredItems.find((fi) => fi.order === order);
    
    // Varsayılan başlıkları JSON'dan çekiyoruz
    let defaultTitle = '';
    let defaultLink = '/';
    let defaultImg = '';

    if (order === 1) {
        defaultTitle = dict?.bolumlerimiz?.Women || 'Women';
        defaultLink = '/kadinlar';
        defaultImg = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop';
    } else if (order === 2) {
        defaultTitle = dict?.bolumlerimiz?.Men || 'Men';
        defaultLink = '/erkekler';
        defaultImg = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop';
    } else {
        defaultTitle = dict?.bolumlerimiz?.NewFaces || 'New Faces';
        defaultLink = '/yeni-yuzler';
        defaultImg = 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop';
    }

    const title = item ? t(item, 'title') : defaultTitle;
    const img = item?.imageUrl
      ? (item.imageUrl.startsWith('/') ? `${API_BASE}${item.imageUrl}` : item.imageUrl)
      : defaultImg;

    return { title, img, link: defaultLink };
  });

  return (
    <div className="w-full bg-dark text-white -mt-20">

      {/* Hero Slider Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Slides */}
        {displaySlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            <img
              src={slide.imageUrl
                ? (slide.imageUrl.startsWith('/') ? `${API_BASE}${slide.imageUrl}` : slide.imageUrl)
                : 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2000&auto=format&fit=crop'}
              alt={t(slide, 'title') || 'Slide'}
              className={`w-full h-full object-cover transition-transform duration-[8000ms] ${index === currentSlide ? 'scale-105' : 'scale-100'
                }`}
              style={{ opacity: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 backdrop-blur-sm bg-black/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/30 backdrop-blur-sm bg-black/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 group"
          aria-label="Next slide"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>

        {/* Content */}
        <div className={`relative z-10 h-full flex flex-col justify-center items-center text-center px-6 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}>
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.5em] text-white/80 mb-6 animate-[fadeIn_1s_ease-out]">
            Istanbul • Paris • Milan
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium tracking-tighter mb-8 animate-[slideUp_1s_ease-out]">
            {t(displaySlides[currentSlide], 'title') || 'THE ELITE'}
          </h1>
          <p className="text-lg md:text-xl font-light text-slate-300 max-w-xl mb-12 leading-relaxed animate-[fadeIn_1.5s_ease-out]">
            {t(displaySlides[currentSlide], 'description') || 'Redefining the standards of beauty and professionalism.'}
          </p>
          <div className="flex flex-col md:flex-row gap-6 animate-[fadeIn_2s_ease-out]">
            <Link
              to="/basvuru"
              className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-slate-200 transition-colors text-center"
            >
              {dict?.common?.ApplyNow || 'Başvuru Yap'}
            </Link>
            <Link
              to="/basarililar"
              className="px-10 py-4 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors text-center"
            >
              {dict?.common?.Discover || 'Keşfet'}
            </Link>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {displaySlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${index === currentSlide
                ? 'w-12 h-1.5 bg-white'
                : 'w-8 h-1.5 bg-white/40 hover:bg-white/60'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <span className="material-symbols-outlined text-white/50 text-3xl">keyboard_arrow_down</span>
        </div>
      </section>

      {/* Marquee (JSON'dan gelen filigranlar) */}
      <div className="bg-white text-black py-4 overflow-hidden border-y border-slate-200 whitespace-nowrap">
        <div className="inline-block animate-[scroll_20s_linear_infinite]">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-lg font-bold uppercase tracking-widest mx-8">
               {dict?.Filigran?.title1} • {dict?.Filigran?.title2} • {dict?.Filigran?.title3} • {dict?.Filigran?.title4} • {dict?.Filigran?.title5} • 
            </span>
          ))}
        </div>
      </div>

      {/* Categories / Teaser */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-2 block">
                {dict?.bolumlerimiz?.OurDivisions || 'Our Divisions'}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif">
              {/* Anahtarın sonunda boşluk olduğu için ["Representing "] şeklinde çağırdık */}
              {dict?.bolumlerimiz?.["Representing "] || 'Mükemmelliği Temsil Etmek'}
            </h2>
          </div>
          <Link to="/hakkimizda" className="text-sm font-bold uppercase tracking-widest border-b border-white/30 pb-1 hover:border-white transition-colors">
            {dict?.bolumlerimiz?.About || 'About Agency'}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {categoryData.map((cat) => (
            <Link key={cat.title} to={cat.link} className="group relative h-[600px] overflow-hidden cursor-pointer block">
              <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-serif italic">{cat.title}</h3>
                <div className="h-px w-12 bg-white mt-4 group-hover:w-24 transition-all duration-500"></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Video / Statement Section */}
      <section className="relative py-32 bg-[#050505] text-center px-6">
        <div className="max-w-4xl mx-auto">
          <span className="material-symbols-outlined text-6xl text-slate-700 mb-8">diamond</span>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8 text-white/90">
            "{dict?.Slogan?.title || 'Biz sadece trendleri takip etmiyoruz...'}"
          </h2>
          <p className="text-slate-500 font-light text-lg mb-12">
            {dict?.Slogan?.content || 'İstanbul merkezli ve küresel bir ağa sahip olan Elite Model Türkiye...'}
          </p>
          <Link
            to="/iletisim"
            className="text-white border border-slate-700 px-8 py-3 uppercase text-xs font-bold tracking-widest hover:border-white transition-colors inline-block"
          >
            {dict?.common?.ContactUs || 'İletişime Geçin'}
          </Link>
        </div>
      </section>

      {/* Latest News Teaser */}
      <section className="py-24 bg-white text-black px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">
                {dict?.common?.LatestNews || 'Latest News'}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-6">
              {t(latestNews, 'title') || 'Fashion Week 2024 Recap'}
            </h2>
            <p className="text-slate-600 text-lg font-light mb-8">
              {(latestNews ? t(latestNews, 'content').substring(0, 200) : '') || 'Our models dominated the runways this season...'}
              {latestNews && t(latestNews, 'content').length > 200 && '...'}
            </p>
            <Link
              to="/haberler"
              className="flex items-center gap-2 font-bold uppercase tracking-widest text-sm border-b-2 border-black pb-1 hover:text-slate-600 hover:border-slate-600 transition-colors"
            >
              {dict?.common?.ReadFullStory || 'Read Full Story'} 
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="order-1 md:order-2 h-[500px] bg-slate-100 relative group overflow-hidden">
            <img
              src={latestNews?.imageUrl
                ? (latestNews.imageUrl.startsWith('/') ? `${API_BASE}${latestNews.imageUrl}` : latestNews.imageUrl)
                : 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop'}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              alt={latestNews?.title_tr || 'News'}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-blue-700 text-white text-center px-6">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6">
            {dict?.Discovered?.slogan || 'Keşfedilecek'}
        </h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            {dict?.Discovered?.title || 'Dünya sizi bekliyor. Yolculuğunuza bugün başlayın.'}
        </p>
        <Link
          to="/basvuru"
          className="bg-white text-blue-700 px-12 py-5 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors shadow-2xl inline-block"
        >
          {dict?.common?.ApplyNow || 'Şimdi Başvur'}
        </Link>
      </section>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Home;