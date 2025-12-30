import React, { useEffect, useState } from 'react';
import api from '../../../services/api';

// Basit modal componenti
function ImageModal({ src, alt, onClose }: { src: string, alt?: string, onClose: () => void }) {
  console.log('ImageModal açıldı:', src);
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div className="relative max-w-7xl max-h-[90vh] flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="max-h-[85vh] max-w-full rounded-lg shadow-2xl"
          onClick={e => e.stopPropagation()}
        />
        <button
          className="absolute top-2 right-2 text-white text-2xl w-10 h-10 flex items-center justify-center font-bold bg-black bg-opacity-60 rounded-full hover:bg-opacity-80 transition-all"
          onClick={onClose}
          aria-label="Kapat"
        >
          ×
        </button>
        {alt && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm">
            {alt}
          </div>
        )}
      </div>
    </div>
  );
}

const API_BASE = 'http://localhost:3005';

const genderOptions = [
  { value: '', label: 'Tümü' },
  { value: 'MALE', label: 'Erkek' },
  { value: 'FEMALE', label: 'Kadın' },
  { value: 'OTHER', label: 'Diğer' },
];

const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: 60 }, (_, i) => currentYear - i);
const monthOptions = [
  { value: '', label: 'Tümü' },
  { value: 1, label: 'Ocak' },
  { value: 2, label: 'Şubat' },
  { value: 3, label: 'Mart' },
  { value: 4, label: 'Nisan' },
  { value: 5, label: 'Mayıs' },
  { value: 6, label: 'Haziran' },
  { value: 7, label: 'Temmuz' },
  { value: 8, label: 'Ağustos' },
  { value: 9, label: 'Eylül' },
  { value: 10, label: 'Ekim' },
  { value: 11, label: 'Kasım' },
  { value: 12, label: 'Aralık' },
];

const Applications = () => {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Filtreler
  const [gender, setGender] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [ageMin, setAgeMin] = useState('');
  const [ageMax, setAgeMax] = useState('');
  
  // Modal için
  const [modalImg, setModalImg] = useState<{ src: string, alt?: string } | null>(null);

  const fetchApplications = () => {
    setLoading(true);
    const params: any = {};
    if (gender) params.gender = gender;
    if (year) params.year = year;
    if (month) params.month = month;
    if (ageMin) params.ageMin = ageMin;
    if (ageMax) params.ageMax = ageMax;
    api.get('/api/applications', { params })
      .then(res => {
        setApplications(res.data);
      })
      .catch(() => setApplications([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleFilter = () => {
    fetchApplications();
  };

  const handleClearFilters = () => {
    setGender('');
    setYear('');
    setMonth('');
    setAgeMin('');
    setAgeMax('');
  };

    const handleImgClick = (src: string, alt?: string) => {
      console.log('Görsele tıklandı:', src);
      setModalImg({ src, alt });
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">Başvurular</h1>
          <p className="text-slate-600">Tüm başvuruları görüntüleyin ve filtreleyin</p>
        </div>

        {/* Filtre Kartı */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Filtreler</h2>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Cinsiyet</label>
                <select 
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  value={gender} 
                  onChange={e => setGender(e.target.value)}
                >
                  {genderOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Yıl</label>
                <select 
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  value={year} 
                  onChange={e => setYear(e.target.value)}
                >
                  <option value="">Tümü</option>
                  {yearOptions.map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Ay</label>
                <select 
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  value={month} 
                  onChange={e => setMonth(e.target.value)}
                >
                  {monthOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Min Yaş</label>
                <input 
                  type="number" 
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  value={ageMin} 
                  onChange={e => setAgeMin(e.target.value)} 
                  min={0}
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Maks Yaş</label>
                <input 
                  type="number" 
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  value={ageMax} 
                  onChange={e => setAgeMax(e.target.value)} 
                  min={0}
                  placeholder="99"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button 
                onClick={handleFilter}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
              >
                🔍 Filtrele
              </button>
              <button 
                onClick={handleClearFilters}
                className="bg-slate-200 text-slate-700 px-6 py-2.5 rounded-lg font-semibold hover:bg-slate-300 transition-all"
              >
                ✕ Temizle
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {modalImg && (
          <ImageModal src={modalImg.src} alt={modalImg.alt} onClose={() => setModalImg(null)} />
        )}

        {/* İçerik */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-slate-600 text-lg">Yükleniyor...</p>
          </div>
        ) : applications.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Başvuru Bulunamadı</h3>
            <p className="text-slate-600">Seçtiğiniz filtrelere uygun başvuru bulunmamaktadır.</p>
          </div>
        ) : (
          <>
            <div className="mb-4 text-slate-600">
              <span className="font-semibold">{applications.length}</span> başvuru bulundu
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {applications.map(app => (
                <div key={app.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    {/* Görseller */}
                    <div className="flex gap-3 mb-5 overflow-x-auto pb-2">
                      {app.selfieUrl && app.selfieUrl !== '' && (
                        <div className="flex-shrink-0 group relative">
                          <img
                            src={app.selfieUrl.startsWith('http') ? app.selfieUrl : `${API_BASE}${app.selfieUrl}`}
                            alt="Selfie"
                            className="w-28 h-28 object-cover rounded-lg cursor-pointer shadow-md group-hover:shadow-xl transition-all duration-300 ring-2 ring-transparent group-hover:ring-blue-500"
                            onClick={() => handleImgClick(app.selfieUrl.startsWith('http') ? app.selfieUrl : `${API_BASE}${app.selfieUrl}`, 'Selfie')}
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-all duration-300 flex items-center justify-center">
                            <span className="text-white opacity-0 group-hover:opacity-100 text-2xl">🔍</span>
                          </div>
                        </div>
                      )}
                      {app.profilePhoto && app.profilePhoto !== '' && (
                        <div className="flex-shrink-0 group relative">
                          <img
                            src={app.profilePhoto.startsWith('http') ? app.profilePhoto : `${API_BASE}${app.profilePhoto}`}
                            alt="Profil"
                            className="w-28 h-28 object-cover rounded-lg cursor-pointer shadow-md group-hover:shadow-xl transition-all duration-300 ring-2 ring-transparent group-hover:ring-blue-500"
                            onClick={() => handleImgClick(app.profilePhoto.startsWith('http') ? app.profilePhoto : `${API_BASE}${app.profilePhoto}`, 'Profil')}
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-all duration-300 flex items-center justify-center">
                            <span className="text-white opacity-0 group-hover:opacity-100 text-2xl">🔍</span>
                          </div>
                        </div>
                      )}
                      {app.fullBodyPhoto && app.fullBodyPhoto !== '' && (
                        <div className="flex-shrink-0 group relative">
                          <img
                            src={app.fullBodyPhoto.startsWith('http') ? app.fullBodyPhoto : `${API_BASE}${app.fullBodyPhoto}`}
                            alt="Tam Boy"
                            className="w-28 h-28 object-cover rounded-lg cursor-pointer shadow-md group-hover:shadow-xl transition-all duration-300 ring-2 ring-transparent group-hover:ring-blue-500"
                            onClick={() => handleImgClick(app.fullBodyPhoto.startsWith('http') ? app.fullBodyPhoto : `${API_BASE}${app.fullBodyPhoto}`, 'Tam Boy')}
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-all duration-300 flex items-center justify-center">
                            <span className="text-white opacity-0 group-hover:opacity-100 text-2xl">🔍</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bilgiler */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-bold text-xl text-slate-800">{app.fullName}</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2 text-slate-600">
                          <span className="text-lg">📧</span>
                          <span>{app.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                          <span className="text-lg">📱</span>
                          <span>{app.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                          <span className="text-lg">📍</span>
                          <span>{app.city}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                          <span className="text-lg">👤</span>
                          <span>{app.gender === 'MALE' ? 'Erkek' : app.gender === 'FEMALE' ? 'Kadın' : 'Diğer'}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                          <span className="text-lg">📏</span>
                          <span>{app.heightCm} cm</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                          <span className="text-lg">📅</span>
                          <span>{new Date(app.submittedAt).toLocaleDateString('tr-TR')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 px-6 py-3 border-t border-slate-200">
                    <div className="text-xs text-slate-500">
                      Başvuru Tarihi: {new Date(app.submittedAt).toLocaleString('tr-TR')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Applications;