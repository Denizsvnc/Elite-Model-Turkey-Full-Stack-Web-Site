import React, { useEffect, useState } from 'react';
import api, { getApiBaseUrl } from '../../../services/api';

const API_BASE = getApiBaseUrl();

// --- SEÇENEKLER ---
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

// --- MODAL BİLEŞENİ ---
function ImageModal({ src, alt, onClose }: { src: string, alt?: string, onClose: () => void }) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full flex justify-center items-center">
        <img
          src={src}
          alt={alt || 'Görsel'}
          className="max-h-[85vh] max-w-full rounded-lg shadow-2xl"
          onClick={e => e.stopPropagation()}
        />
        <button
          className="absolute -top-12 right-0 md:top-2 md:right-2 text-white text-2xl w-10 h-10 flex items-center justify-center font-bold bg-black bg-opacity-60 rounded-full hover:bg-opacity-80 transition-all"
          onClick={onClose}
        >
          ×
        </button>
        {alt && (
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap">
            {alt}
          </div>
        )}
      </div>
    </div>
  );
}

// --- ANA BİLEŞEN ---
const Applications = () => {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(20);
  
  // Filtreler
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [ageMin, setAgeMin] = useState('');
  const [ageMax, setAgeMax] = useState('');
  
  // Modal için
  const [modalImg, setModalImg] = useState<{ src: string, alt?: string } | null>(null);
  
  // Dropdown state - hangi kartın detayları açık
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  
  const toggleCardDetails = (id: string) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // Çoklu seçim kutusu değişimi (Tekil)
  const handleSelect = (id: string, checked: boolean) => {
    setSelectedIds(prev => checked ? [...prev, id] : prev.filter(i => i !== id));
  };

  // Listelenen (Filtrelenmiş) Tümünü Seç
  const handleSelectAllFiltered = () => {
    if (applications.length === 0) return;
    const allCurrentIds = applications.map(app => app.id);
    setSelectedIds(allCurrentIds);
  };

  // Tüm seçimleri temizle
  const clearSelection = () => setSelectedIds([]);

  // Toplu silme fonksiyonu
  const handleBulkDelete = async () => {
    if(selectedIds.length === 0) return;
    if(!window.confirm(`Seçili ${selectedIds.length} başvuruyu silmek istediğinize emin misiniz?`)) return;
    
    try {
      await Promise.all(selectedIds.map(id => api.delete(`/api/applications/${id}`)));
      setApplications(applications.filter(app => !selectedIds.includes(app.id)));
      clearSelection();
    } catch (error) {
      console.error("Silme işlemi başarısız", error);
      alert("Bazı kayıtlar silinemedi.");
    }
  };

  const fetchApplications = (pageNum = 1) => {
    setLoading(true);
    clearSelection(); 
    const params: any = { page: pageNum, limit };
    if (status) params.status = status;
    if (gender) params.gender = gender;
    if (year) params.year = year;
    if (month) params.month = month;
    if (ageMin) params.ageMin = ageMin;
    if (ageMax) params.ageMax = ageMax;
    api.get('/api/applications', { params })
      .then(res => {
        setApplications(res.data.data);
        setPage(res.data.meta.page);
        setLastPage(res.data.meta.lastPage);
        setTotal(res.data.meta.total);
        setLimit(res.data.meta.limit);
      })
      .catch(() => {
        setApplications([]);
        setPage(1);
        setLastPage(1);
        setTotal(0);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchApplications(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  const handleFilter = () => {
    setPage(1);
    fetchApplications(1);
  };

  const handleClearFilters = () => {
    setStatus('');
    setGender('');
    setYear('');
    setMonth('');
    setAgeMin('');
    setAgeMax('');
    setPage(1);
    fetchApplications(1);
  };

  const handleImgClick = (src: string, alt?: string) => {
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Durum</label>
                <select
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  value={status}
                  onChange={e => setStatus(e.target.value)}
                >
                  <option value="">Tümü</option>
                  <option value="NEW">Yeni</option>
                  <option value="ACCEPTED">Onaylanan</option>
                  <option value="REJECTED">Reddedilen</option>
                  <option value="REVIEW">İnceleniyor</option>
                </select>
              </div>
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
                onClick={handleSelectAllFiltered}
                disabled={applications.length === 0}
                className="bg-green-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ✅ Listelenenleri Seç
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

        {/* Toplu Sil Butonu ve Bilgi Çubuğu */}
        {applications.length > 0 && (
          <div className="mb-4 flex flex-wrap items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-slate-200">
            <div className="text-slate-600">
              <span className="font-semibold text-slate-900">{applications.length}</span> başvuru listeleniyor.
            </div>
            
            {selectedIds.length > 0 && (
              <>
                <div className="h-6 w-px bg-slate-300 mx-2 hidden sm:block"></div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full text-sm">
                    {selectedIds.length} seçili
                  </span>
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold shadow transition-all flex items-center gap-2"
                    onClick={e => { e.preventDefault(); handleBulkDelete(); }}
                  >
                    <span>🗑️</span> Seçilileri Sil
                  </button>
                  <button
                    className="text-slate-500 hover:text-slate-700 text-sm underline"
                    onClick={clearSelection}
                  >
                    Vazgeç
                  </button>
                </div>
              </>
            )}
          </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {applications.map(app => {
              const isExpanded = expandedCards.has(app.id);
              return (
              <div key={app.id} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative border-2 ${selectedIds.includes(app.id) ? 'border-blue-500 ring-2 ring-blue-100' : 'border-transparent'}`}>
                {/* Çoklu seçim kutusu */}
                <div className="absolute top-3 right-3 z-10">
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(app.id)}
                    onChange={e => handleSelect(app.id, e.target.checked)}
                    className="w-6 h-6 accent-blue-600 cursor-pointer shadow-sm"
                    title="Seç"
                  />
                </div>
                
                <div className="p-6">
                    {/* Görseller */}
                    <div className="flex gap-3 mb-4 overflow-x-auto pb-2 scrollbar-hide">
                      {app.selfieUrl && app.selfieUrl !== '' && (
                        <div className="flex-shrink-0 group relative">
                          <img
                            src={app.selfieUrl.startsWith('http') ? app.selfieUrl : `${API_BASE}${app.selfieUrl}`}
                            alt="Selfie"
                            className="w-24 h-24 object-cover rounded-lg cursor-pointer shadow-md group-hover:shadow-xl transition-all duration-300 ring-2 ring-transparent group-hover:ring-blue-500"
                            onClick={() => handleImgClick(app.selfieUrl.startsWith('http') ? app.selfieUrl : `${API_BASE}${app.selfieUrl}`, 'Selfie')}
                          />
                        </div>
                      )}
                      {app.profilePhoto && app.profilePhoto !== '' && (
                        <div className="flex-shrink-0 group relative">
                          <img
                            src={app.profilePhoto.startsWith('http') ? app.profilePhoto : `${API_BASE}${app.profilePhoto}`}
                            alt="Profil"
                            className="w-24 h-24 object-cover rounded-lg cursor-pointer shadow-md group-hover:shadow-xl transition-all duration-300 ring-2 ring-transparent group-hover:ring-blue-500"
                            onClick={() => handleImgClick(app.profilePhoto.startsWith('http') ? app.profilePhoto : `${API_BASE}${app.profilePhoto}`, 'Profil')}
                          />
                        </div>
                      )}
                      {app.fullBodyPhoto && app.fullBodyPhoto !== '' && (
                        <div className="flex-shrink-0 group relative">
                          <img
                            src={app.fullBodyPhoto.startsWith('http') ? app.fullBodyPhoto : `${API_BASE}${app.fullBodyPhoto}`}
                            alt="Tam Boy"
                            className="w-24 h-24 object-cover rounded-lg cursor-pointer shadow-md group-hover:shadow-xl transition-all duration-300 ring-2 ring-transparent group-hover:ring-blue-500"
                            onClick={() => handleImgClick(app.fullBodyPhoto.startsWith('http') ? app.fullBodyPhoto : `${API_BASE}${app.fullBodyPhoto}`, 'Tam Boy')}
                          />
                        </div>
                      )}
                    </div>

                    {/* İsim ve Detay Butonu */}
                    <div className="mb-3">
                      <h3 className="font-bold text-xl text-slate-800 mb-2">{app.fullName}</h3>
                      <button
                        onClick={() => toggleCardDetails(app.id)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <span>{isExpanded ? '▼' : '▶'}</span>
                        <span>{isExpanded ? 'Detayları Gizle' : 'Detayları Göster'}</span>
                      </button>
                    </div>
                    
                    {/* Detaylar - Dropdown */}
                    {isExpanded && (
                      <div className="space-y-3 border-t border-slate-200 pt-3 mt-3 animate-fadeIn">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center gap-2 text-slate-600">
                            <span className="text-lg">📧</span>
                            <span className="break-all">{app.email}</span>
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
                            <span className="text-lg">🌎</span>
                            <span>{app.nationality || '-'}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <span className="text-lg">👤</span>
                            <span>{app.gender === 'MALE' ? 'Erkek' : app.gender === 'FEMALE' ? 'Kadın' : 'Diğer'}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <span className="text-lg">🎂</span>
                            <span>{app.birthDate ? new Date(app.birthDate).toLocaleDateString('tr-TR') : '-'}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <span className="text-lg">📏</span>
                            <span>{Number(app.heightCm) ? Number(app.heightCm) + ' cm' : '-'}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <span className="text-lg">🦵</span>
                            <span>{app.footCm ? app.footCm + ' cm' : '-'}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <span className="text-lg">🦶</span>
                            <span>{app.hipsCm ? app.hipsCm + ' cm' : '-'}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <span className="text-lg">🦴</span>
                            <span>{app.waistCm ? app.waistCm + ' cm' : '-'}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <span className="text-lg">💪</span>
                            <span>{app.chestCm ? app.chestCm + ' cm' : '-'}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <span className="text-lg">👁️</span>
                            <span>{app.eyeColor || '-'}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <span className="text-lg">📅</span>
                            <span>{app.submittedAt ? new Date(app.submittedAt).toLocaleDateString('tr-TR') : '-'}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-between">
                    <div className="text-xs text-slate-500">
                      Başvuru Tarihi: {new Date(app.submittedAt).toLocaleString('tr-TR')}
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded-lg font-semibold shadow"
                        onClick={async () => {
                          if(window.confirm('Bu başvuruyu reddetmek istediğinize emin misiniz?')) {
                            try {
                              await api.patch(`/api/applications/${app.id}`, { status: 'REJECTED' });
                              setApplications(applications.filter(a => a.id !== app.id));
                            } catch (e) { console.error(e); }
                          }
                        }}
                      >Reddet</button>
                      <button
                        className="bg-slate-400 hover:bg-slate-600 text-white text-xs px-3 py-1 rounded-lg font-semibold shadow"
                        onClick={async () => {
                          if(window.confirm('Bu başvuruyu silmek istediğinize emin misiniz?')) {
                            try {
                              await api.delete(`/api/applications/${app.id}`);
                              setApplications(applications.filter(a => a.id !== app.id));
                            } catch (e) { console.error(e); }
                          }
                        }}
                      >Sil</button>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
         
        )}

        {/* Pagination Controls */}
        {!loading && applications.length > 0 && (
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-slate-600">
                Sayfa <span className="font-semibold text-slate-900">{page}</span> / <span className="font-semibold text-slate-900">{lastPage}</span>
                <span className="mx-2">•</span>
                Toplam <span className="font-semibold text-slate-900">{total}</span> başvuru
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPage(1)}
                  disabled={page <= 1}
                  className="px-3 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-sm"
                >
                  ⏮ İlk
                </button>
                <button
                  onClick={() => setPage(page - 1)}
                  disabled={page <= 1}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-sm shadow-md"
                >
                  ← Önceki
                </button>
                
                {/* Page Numbers */}
                <div className="hidden sm:flex items-center gap-1">
                  {Array.from({ length: Math.min(5, lastPage) }, (_, i) => {
                    let pageNum;
                    if (lastPage <= 5) {
                      pageNum = i + 1;
                    } else if (page <= 3) {
                      pageNum = i + 1;
                    } else if (page >= lastPage - 2) {
                      pageNum = lastPage - 4 + i;
                    } else {
                      pageNum = page - 2 + i;
                    }
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setPage(pageNum)}
                        className={`w-10 h-10 rounded-lg font-medium text-sm transition-all ${
                          page === pageNum
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                
                <button
                  onClick={() => setPage(page + 1)}
                  disabled={page >= lastPage}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-sm shadow-md"
                >
                  Sonraki →
                </button>
                <button
                  onClick={() => setPage(lastPage)}
                  disabled={page >= lastPage}
                  className="px-3 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium text-sm"
                >
                  Son ⏭
                </button>
              </div>
            </div>
            
            {/* Items per page selector */}
            <div className="mt-4 pt-4 border-t border-slate-200 flex items-center gap-3">
              <label className="text-sm text-slate-600 font-medium">Sayfa başına:</label>
              <select
                value={limit}
                onChange={(e) => {
                  setLimit(Number(e.target.value));
                  setPage(1);
                }}
                className="px-3 py-1.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Applications;