import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, Button, Switch, FormControlLabel, Stack, Skeleton, Alert, CardMedia, CardContent, Divider, Chip } from '@mui/material';
import axios from 'axios';
import ImageUploader from '../../components/imageUploader';
import MultiLangText from '../../components/Text';
import { getApiBaseUrl } from '../../../services/api';

const API_BASE = getApiBaseUrl();

type HeroItem = {
  id: string;
  imageUrl: string;
  title_tr: string;
  title_en: string;
  title_de: string;
  title_ru: string;
  text_tr: string;
  text_en: string;
  text_de: string;
  text_ru: string;
  isActive: boolean;
};

function Heroimg() {
  const [item, setItem] = useState<HeroItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    imageUrl: '',
    title_tr: '', title_en: '', title_de: '', title_ru: '',
    text_tr: '', text_en: '', text_de: '', text_ru: '',
    isActive: true
  });
  const [files, setFiles] = useState<any[]>([]);

  const loadItem = () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    axios.get(`${API_BASE}/api/success-heroes`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => {
        const existing = res.data?.[0];
        if (existing) {
          setItem(existing);
          setForm({
            imageUrl: existing.imageUrl,
            title_tr: existing.title_tr,
            title_en: existing.title_en,
            title_de: existing.title_de,
            title_ru: existing.title_ru,
            text_tr: existing.text_tr,
            text_en: existing.text_en,
            text_de: existing.text_de,
            text_ru: existing.text_ru,
            isActive: existing.isActive
          });
        }
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => { loadItem(); }, []);

  const handleSave = () => {
    if (!form.imageUrl) {
      setError('Lütfen bir görsel yükleyin');
      return;
    }
    
    setSaving(true);
    setError(null);
    
    const token = localStorage.getItem('token');
    const url = item 
      ? `${API_BASE}/api/success-heroes/${item.id}` 
      : `${API_BASE}/api/success-heroes`;
    const method = item ? 'put' : 'post';

    axios[method](url, form, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => {
        loadItem();
        setFiles([]); // Upload edilen dosyaları temizle
        setError(null);
        // Success notification - could use a snackbar here
      })
      .catch(err => {
        console.error(err);
        setError(err.response?.data?.message || 'Kaydedilirken bir hata oluştu');
      })
      .finally(() => setSaving(false));
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Başarı Sayfası Hero Görseli
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Başarı sayfasının hero bölümünde görünecek görsel ve metinleri yönetin.
        </Typography>
      </Box>

      {/* Error Alert */}
      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      {/* Loading State */}
      {loading ? (
        <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
          <Box sx={{ flex: { xs: '1', md: '0 0 40%' } }}>
            <Card>
              <Skeleton variant="rectangular" height={300} />
              <CardContent>
                <Skeleton variant="text" height={40} />
                <Skeleton variant="text" height={80} />
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ flex: { xs: '1', md: '0 0 calc(60% - 24px)' } }}>
            <Card>
              <CardContent>
                <Skeleton variant="text" height={60} />
                <Skeleton variant="rectangular" height={200} sx={{ my: 2 }} />
                <Skeleton variant="text" height={60} />
              </CardContent>
            </Card>
          </Box>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
         
          <Box sx={{ flex: { xs: '1', md: '0 0 40%' } }}>
            <Card elevation={3}>
              <Box sx={{ position: 'relative' }}>
                {form.imageUrl ? (
                  <>
                    <CardMedia
                      component="img"
                      height="400"
                      image={form.imageUrl.startsWith('/') ? `${API_BASE}${form.imageUrl}` : form.imageUrl}
                      alt="Hero Preview"
                      sx={{ 
                        objectFit: 'cover',
                        borderRadius: '4px 4px 0 0'
                      }}
                    />
                    <Chip 
                      label={form.isActive ? 'Aktif' : 'Pasif'}
                      color={form.isActive ? 'success' : 'default'}
                      size="small"
                      sx={{ 
                        position: 'absolute', 
                        top: 16, 
                        right: 16,
                        fontWeight: 600
                      }}
                    />
                  </>
                ) : (
                  <Box 
                    sx={{ 
                      height: 400, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      bgcolor: 'action.hover',
                      borderRadius: '4px 4px 0 0'
                    }}
                  >
                    <Stack alignItems="center" spacing={1}>
                      <Box 
                        sx={{ 
                          width: 80, 
                          height: 80, 
                          borderRadius: '50%', 
                          bgcolor: 'action.selected',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Typography variant="h3">🖼️</Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        Henüz görsel yüklenmedi
                      </Typography>
                    </Stack>
                  </Box>
                )}
              </Box>
              <CardContent>
                <Stack spacing={1}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {form.title_tr || 'Başlık girilmedi'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {form.text_tr || 'Açıklama girilmedi'}
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="caption" color="text.secondary">
                      Durum:
                    </Typography>
                    <Chip 
                      label={form.isActive ? 'Yayında' : 'Taslak'}
                      size="small"
                      color={form.isActive ? 'success' : 'default'}
                      variant="outlined"
                    />
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Box>

          {/* Right Side - Form */}
          <Box sx={{ flex: { xs: '1', md: '0 0 calc(60% - 24px)' } }}>
            <Card elevation={3}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
                  {item ? 'Hero Görselini Düzenle' : 'Yeni Hero Görseli'}
                </Typography>
                
                {/* Image Upload Section */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Hero Görseli
                  </Typography>
                  <ImageUploader 
                    files={files} 
                    setFiles={setFiles} 
                    folder="Success/hero" 
                    onUploaded={(url) => {
                      setForm({ ...form, imageUrl: url });
                      setError(null);
                    }} 
                  />
                  {form.imageUrl && (
                    <Typography variant="caption" color="success.main" sx={{ display: 'block', mt: 1 }}>
                      ✓ Görsel yüklendi
                    </Typography>
                  )}
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Title Section */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Başlık (Çoklu Dil)
                  </Typography>
                  <MultiLangText 
                    label="Başlık" 
                    values={{ tr: form.title_tr, en: form.title_en, de: form.title_de, ru: form.title_ru }}
                    onChange={(lang, val) => setForm({ ...form, [`title_${lang}`]: val })}
                  />
                </Box>

                {/* Text Section */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Açıklama Metni (Çoklu Dil)
                  </Typography>
                  <MultiLangText 
                    label="Metin" 
                    values={{ tr: form.text_tr, en: form.text_en, de: form.text_de, ru: form.text_ru }}
                    onChange={(lang, val) => setForm({ ...form, [`text_${lang}`]: val })}
                    multiline
                  />
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Active Toggle */}
                <Box sx={{ mb: 3 }}>
                  <FormControlLabel 
                    control={
                      <Switch 
                        checked={form.isActive} 
                        onChange={(e) => setForm({ ...form, isActive: e.target.checked })} 
                        color="success"
                      />
                    } 
                    label={
                      <Stack>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          Yayın Durumu
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {form.isActive ? 'Hero görseli web sitesinde gösteriliyor' : 'Hero görseli gizli (taslak)'}
                        </Typography>
                      </Stack>
                    }
                  />
                </Box>

                <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                  <Button 
                    variant="contained" 
                    size="large"
                    onClick={handleSave} 
                    disabled={saving || !form.imageUrl}
                    sx={{ minWidth: 140 }}
                  >
                    {saving ? 'Kaydediliyor...' : 'Kaydet'}
                  </Button>
                  {item && (
                    <Button 
                      variant="outlined" 
                      size="large"
                      onClick={loadItem}
                      disabled={saving}
                    >
                      İptal
                    </Button>
                  )}
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Heroimg;
