import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  Button, 
  Switch, 
  FormControlLabel, 
  Stack, 
  TextField,
  CardMedia,
  CardContent,
  Chip,
  Skeleton,
  Alert,
  Divider,
  IconButton
} from '@mui/material';
import axios from 'axios';
import Drawer from '../components/Drawer';
import ImageUploader from '../components/imageUploader';
import MultiLangText from '../components/Text';
import { getApiBaseUrl } from '../../services/api';

const API_BASE = getApiBaseUrl();

type NewsItem = {
  id: string;
  imageUrl: string;
  galleryUrls: string[];
  category?: string;
  category_tr?: string;
  category_en?: string;
  category_de?: string;
  category_ru?: string;
  title_tr: string;
  title_en: string;
  title_de: string;
  title_ru: string;
  description_tr?: string;
  description_en?: string;
  description_de?: string;
  description_ru?: string;
  content_tr: string;
  content_en: string;
  content_de: string;
  content_ru: string;
  publishedAt: string;
  isActive: boolean;
};

function NewsManagement() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [form, setForm] = useState({
    imageUrl: '',
    galleryUrls: [] as string[],
    category: '',
    category_tr: '', category_en: '', category_de: '', category_ru: '',
    title_tr: '', title_en: '', title_de: '', title_ru: '',
    description_tr: '', description_en: '', description_de: '', description_ru: '',
    content_tr: '', content_en: '', content_de: '', content_ru: '',
    publishedAt: new Date().toISOString().split('T')[0],
    isActive: true
  });
  const [files, setFiles] = useState<any[]>([]);

  const loadItems = () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    axios.get(`${API_BASE}/api/news`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => {
        const sorted = (res.data || []).sort((a: any, b: any) => 
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
        setItems(sorted);
      })
      .catch(err => {
        console.error(err);
        setError('Haberler yüklenirken bir hata oluştu');
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => { loadItems(); }, []);

  const handleSave = () => {
    if (!form.imageUrl) {
      setError('Lütfen bir görsel yükleyin');
      return;
    }
    
    setSaving(true);
    setError(null);
    
    const token = localStorage.getItem('token');
    const url = editingId 
      ? `${API_BASE}/api/news/${editingId}` 
      : `${API_BASE}/api/news`;
    const method = editingId ? 'put' : 'post';

    axios[method](url, form, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => {
        loadItems();
        resetForm();
        setDrawerOpen(false);
        setError(null);
      })
      .catch(err => {
        console.error(err);
        setError(err.response?.data?.message || 'Kaydedilirken bir hata oluştu');
      })
      .finally(() => setSaving(false));
  };

  const handleDelete = (id: string) => {
    if (!confirm('Silmek istediğinize emin misiniz?')) return;
    
    const token = localStorage.getItem('token');
    axios.delete(`${API_BASE}/api/news/${id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => {
        loadItems();
        setError(null);
      })
      .catch(err => {
        console.error(err);
        setError('Silinirken bir hata oluştu');
      });
  };

  const handleEdit = (item: NewsItem) => {
    setEditingId(item.id);
    setForm({
      imageUrl: item.imageUrl,
      galleryUrls: item.galleryUrls || [],
      category: item.category || '',
      category_tr: (item as any).category_tr || '',
      category_en: (item as any).category_en || '',
      category_de: (item as any).category_de || '',
      category_ru: (item as any).category_ru || '',
      title_tr: item.title_tr,
      title_en: item.title_en,
      title_de: item.title_de,
      title_ru: item.title_ru,
      description_tr: item.description_tr || '',
      description_en: item.description_en || '',
      description_de: item.description_de || '',
      description_ru: item.description_ru || '',
      content_tr: item.content_tr,
      content_en: item.content_en,
      content_de: item.content_de,
      content_ru: item.content_ru,
      publishedAt: item.publishedAt.split('T')[0],
      isActive: item.isActive
    });
    setDrawerOpen(true);
  };

  const resetForm = () => {
    setEditingId(null);
    setForm({
      imageUrl: '',
      galleryUrls: [],
      category: '',
      category_tr: '', category_en: '', category_de: '', category_ru: '',
      title_tr: '', title_en: '', title_de: '', title_ru: '',
      description_tr: '', description_en: '', description_de: '', description_ru: '',
      content_tr: '', content_en: '', content_de: '', content_ru: '',
      publishedAt: new Date().toISOString().split('T')[0],
      isActive: true
    });
    setFiles([]);
  };

  const openAddDrawer = () => {
    resetForm();
    setDrawerOpen(true);
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              Haber Yönetimi
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Haberlerinizi ekleyin, düzenleyin ve yönetin.
            </Typography>
          </Box>
          <Button 
            variant="contained" 
            size="large"
            onClick={openAddDrawer}
            sx={{ minWidth: 160 }}
          >
            + Yeni Haber Ekle
          </Button>
        </Box>
      </Box>

      {/* Error Alert */}
      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      {/* List */}
      {loading ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {[1, 2, 3].map(i => (
            <Card key={i} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
              <Skeleton variant="rectangular" sx={{ width: { xs: '100%', md: 250 }, height: { xs: 200, md: 180 } }} />
              <CardContent sx={{ flex: 1 }}>
                <Skeleton variant="text" height={40} sx={{ mb: 1 }} />
                <Skeleton variant="text" height={60} sx={{ mb: 2 }} />
                <Skeleton variant="rectangular" height={36} width={200} />
              </CardContent>
            </Card>
          ))}
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {items.length === 0 ? (
            <Card elevation={0} sx={{ p: 6, textAlign: 'center', bgcolor: 'action.hover' }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Henüz haber eklenmemiş
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                "Yeni Haber Ekle" butonuna tıklayarak ilk haberinizi ekleyin.
              </Typography>
              <Button variant="outlined" onClick={openAddDrawer}>
                İlk Haberi Ekle
              </Button>
            </Card>
          ) : (
            items.map(item => (
              <Card key={item.id} elevation={2} sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', md: 'row' },
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 4
                }
              }}>
                <CardMedia 
                  component="img" 
                  sx={{ 
                    width: { xs: '100%', md: 280 }, 
                    height: { xs: 200, md: 200 },
                    objectFit: 'cover'
                  }} 
                  image={item.imageUrl.startsWith('/') ? `${API_BASE}${item.imageUrl}` : item.imageUrl} 
                  alt={item.title_tr}
                />
                <CardContent sx={{ flex: 1, p: 3 }}>
                  <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                    {item.category && (
                      <Chip label={item.category} size="small" color="primary" variant="outlined" />
                    )}
                    <Chip 
                      label={item.isActive ? 'Aktif' : 'Pasif'} 
                      size="small" 
                      color={item.isActive ? 'success' : 'default'}
                    />
                    {item.galleryUrls && item.galleryUrls.length > 0 && (
                      <Chip 
                        label={`${item.galleryUrls.length} Galeri Görseli`} 
                        size="small" 
                        color="secondary" 
                        variant="outlined"
                      />
                    )}
                  </Box>
                  
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {item.title_tr}
                  </Typography>
                  
                  {item.description_tr && (
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {item.description_tr.substring(0, 200)}
                      {item.description_tr.length > 200 && '...'}
                    </Typography>
                  )}
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="caption" color="text.secondary">
                      📅 {new Date(item.publishedAt).toLocaleDateString('tr-TR', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </Typography>
                    
                    <Stack direction="row" spacing={1}>
                      <Button 
                        size="small" 
                        variant="outlined" 
                        onClick={() => handleEdit(item)}
                      >
                        Düzenle
                      </Button>
                      <Button 
                        size="small" 
                        variant="outlined" 
                        color="error" 
                        onClick={() => handleDelete(item.id)}
                      >
                        Sil
                      </Button>
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            ))
          )}
        </Box>
      )}

      {/* Add/Edit Drawer */}
      <Drawer 
        open={drawerOpen} 
        onClose={() => !saving && setDrawerOpen(false)} 
        onSave={handleSave}
        onCancel={() => setDrawerOpen(false)}
        title={editingId ? 'Haber Düzenle' : 'Yeni Haber Ekle'}
        saving={saving}
        disabled={!form.imageUrl}
      >
        {error && (
          <Alert severity="error" onClose={() => setError(null)} sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        
        {/* Main Image Upload */}
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
            Ana Görsel *
          </Typography>
          <ImageUploader 
            files={files} 
            setFiles={setFiles} 
            folder="News" 
            onUploaded={(url) => {
              setForm({ ...form, imageUrl: url });
              setError(null);
            }} 
          />
          
          {form.imageUrl && (
            <Box sx={{ mt: 2 }}>
              <img 
                src={form.imageUrl.startsWith('/') ? `${API_BASE}${form.imageUrl}` : form.imageUrl} 
                alt="Preview" 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: 200, 
                  borderRadius: 8,
                  border: '2px solid #e0e0e0'
                }} 
              />
              <Typography variant="caption" color="success.main" sx={{ display: 'block', mt: 1 }}>
                ✓ Ana görsel yüklendi
              </Typography>
            </Box>
          )}
        </Box>

        <Divider />

        {/* Gallery Images Upload */}
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
            Galeri Görselleri (opsiyonel)
          </Typography>
          <ImageUploader 
            files={files} 
            setFiles={setFiles} 
            folder="News" 
            onUploaded={(url) => setForm({ ...form, galleryUrls: [...form.galleryUrls, url] })} 
          />
          {form.galleryUrls.length > 0 && (
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
              {form.galleryUrls.map((url, idx) => (
                <Box key={url} sx={{ position: 'relative' }}>
                  <img 
                    src={url.startsWith('/') ? `${API_BASE}${url}` : url} 
                    alt={`Gallery ${idx + 1}`} 
                    style={{ 
                      width: 80, 
                      height: 80, 
                      objectFit: 'cover', 
                      borderRadius: 6,
                      border: '2px solid #e0e0e0'
                    }}
                  />
                  <IconButton 
                    size="small" 
                    color="error"
                    onClick={() => setForm({ ...form, galleryUrls: form.galleryUrls.filter((g) => g !== url) })}
                    sx={{ 
                      position: 'absolute', 
                      top: -8, 
                      right: -8,
                      bgcolor: 'error.main',
                      color: 'white',
                      width: 24,
                      height: 24,
                      '&:hover': { bgcolor: 'error.dark' }
                    }}
                  >
                    ×
                  </IconButton>
                </Box>
              ))}
            </Box>
          )}
        </Box>

        <Divider />

        {/* Category Section */}
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
            Kategori (Çoklu Dil)
          </Typography>
          <MultiLangText 
            label="Kategori (opsiyonel)" 
            values={{ 
              tr: form.category_tr, 
              en: form.category_en, 
              de: form.category_de, 
              ru: form.category_ru 
            }}
            onChange={(lang, val) => setForm({ ...form, [`category_${lang}`]: val })}
          />
          <TextField 
            fullWidth 
            label="Kategori (fallback)" 
            value={form.category} 
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            placeholder="Örn: Editorial, Runway"
            sx={{ mt: 2 }}
            size="small"
          />
        </Box>

        <Divider />

        {/* Title Section */}
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
            Başlık (Çoklu Dil) *
          </Typography>
          <MultiLangText 
            label="Başlık" 
            values={{ tr: form.title_tr, en: form.title_en, de: form.title_de, ru: form.title_ru }}
            onChange={(lang, val) => setForm({ ...form, [`title_${lang}`]: val })}
          />
        </Box>

        {/* Description Section */}
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
            Kısa Açıklama (opsiyonel)
          </Typography>
          <MultiLangText 
            label="Kısa Açıklama" 
            values={{ 
              tr: form.description_tr, 
              en: form.description_en, 
              de: form.description_de, 
              ru: form.description_ru 
            }}
            onChange={(lang, val) => setForm({ ...form, [`description_${lang}`]: val })}
            multiline
            rows={3}
          />
        </Box>

        {/* Content Section */}
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
            Haber İçeriği (Çoklu Dil) *
          </Typography>
          <MultiLangText 
            label="İçerik" 
            values={{ tr: form.content_tr, en: form.content_en, de: form.content_de, ru: form.content_ru }}
            onChange={(lang, val) => setForm({ ...form, [`content_${lang}`]: val })}
            multiline
            rows={8}
          />
        </Box>

        <Divider />

        {/* Publish Date & Active Status */}
        <Box>
          <TextField 
            fullWidth
            label="Yayın Tarihi" 
            type="date" 
            value={form.publishedAt} 
            onChange={(e) => setForm({ ...form, publishedAt: e.target.value })}
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 2 }}
          />

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
                  {form.isActive ? 'Aktif - Web sitesinde gösteriliyor' : 'Pasif - Gizli'}
                </Typography>
              </Stack>
            }
          />
        </Box>
          </Drawer>
    </Box>
  );
}

export default NewsManagement;
