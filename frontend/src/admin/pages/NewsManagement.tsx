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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import axios from 'axios';
import ImageUploader from '../components/imageUploader';
import MultiLangText from '../components/Text';

const API_BASE = (import.meta as any).env?.VITE_API_BASE || 'http://localhost:3005';

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
  const [editingId, setEditingId] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
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
    axios.get(`${API_BASE}/api/news`)
      .then(res => {
        const sorted = (res.data || []).sort((a: any, b: any) => 
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
        setItems(sorted);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => { loadItems(); }, []);

  const handleSave = () => {
    const url = editingId 
      ? `${API_BASE}/api/news/${editingId}` 
      : `${API_BASE}/api/news`;
    const method = editingId ? 'put' : 'post';

    axios[method](url, form)
      .then(() => {
        loadItems();
        resetForm();
        setDialogOpen(false);
        alert('Kaydedildi!');
      })
      .catch(err => {
        console.error(err);
        alert('Hata oluştu!');
      });
  };

  const handleDelete = (id: string) => {
    if (!confirm('Silmek istediğinize emin misiniz?')) return;
    axios.delete(`${API_BASE}/api/news/${id}`)
      .then(() => {
        loadItems();
        alert('Silindi!');
      })
      .catch(err => console.error(err));
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
    setDialogOpen(true);
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

  const openAddDialog = () => {
    resetForm();
    setDialogOpen(true);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>Haber Yönetimi</Typography>
        <Button variant="contained" onClick={openAddDialog}>
          Yeni Haber Ekle
        </Button>
      </Box>

      {/* List */}
      {loading ? <Typography>Yükleniyor...</Typography> : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {items.length === 0 ? (
            <Typography color="text.secondary">Henüz haber eklenmemiş</Typography>
          ) : (
            items.map(item => (
              <Card key={item.id} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                <CardMedia 
                  component="img" 
                  sx={{ width: { xs: '100%', md: 250 }, height: { xs: 200, md: 'auto' } }} 
                  image={item.imageUrl.startsWith('/') ? `${API_BASE}${item.imageUrl}` : item.imageUrl} 
                />
                <CardContent sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                    {item.category && (
                      <Chip label={item.category} size="small" color="primary" />
                    )}
                    <Chip 
                      label={item.isActive ? 'Aktif' : 'Pasif'} 
                      size="small" 
                      color={item.isActive ? 'success' : 'default'}
                    />
                    {item.galleryUrls && item.galleryUrls.length > 0 && (
                      <Chip label={`Galeri: ${item.galleryUrls.length}`} size="small" color="secondary" />
                    )}
                  </Box>
                  <Typography variant="h6" gutterBottom>{item.title_tr}</Typography>
                  {item.description_tr && (
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {item.description_tr.substring(0, 150)}...
                    </Typography>
                  )}
                  <Typography variant="caption" display="block" sx={{ mb: 2 }}>
                    Yayın: {new Date(item.publishedAt).toLocaleDateString('tr-TR')}
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Button size="small" variant="outlined" onClick={() => handleEdit(item)}>
                      Düzenle
                    </Button>
                    <Button size="small" variant="outlined" color="error" onClick={() => handleDelete(item.id)}>
                      Sil
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            ))
          )}
        </Box>
      )}

      {/* Add/Edit Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>{editingId ? 'Haber Düzenle' : 'Yeni Haber Ekle'}</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <ImageUploader 
              files={files} 
              setFiles={setFiles} 
              folder="News" 
              onUploaded={(url) => setForm({ ...form, imageUrl: url })} 
            />
            
            {form.imageUrl && (
              <Box sx={{ my: 2 }}>
                <img 
                  src={form.imageUrl.startsWith('/') ? `${API_BASE}${form.imageUrl}` : form.imageUrl} 
                  alt="Preview" 
                  style={{ maxWidth: '100%', maxHeight: 300, borderRadius: 8 }} 
                />
              </Box>
            )}

            {/* Galeri Yükleme */}
            <Typography variant="subtitle1" sx={{ mt: 3, mb: 1 }}>Galeri Görselleri (opsiyonel)</Typography>
            <ImageUploader 
              files={files} 
              setFiles={setFiles} 
              folder="News" 
              onUploaded={(url) => setForm({ ...form, galleryUrls: [...form.galleryUrls, url] })} 
            />
            {form.galleryUrls.length > 0 && (
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', my: 2 }}>
                {form.galleryUrls.map((url) => (
                  <Box key={url} sx={{ position: 'relative' }}>
                    <img 
                      src={url.startsWith('/') ? `${API_BASE}${url}` : url} 
                      alt="Gallery" 
                      style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 6 }}
                    />
                    <Button 
                      size="small" 
                      color="error" 
                      variant="contained"
                      onClick={() => setForm({ ...form, galleryUrls: form.galleryUrls.filter((g) => g !== url) })}
                      sx={{ position: 'absolute', top: -10, right: -10, minWidth: 24, p: 0 }}
                    >
                      ×
                    </Button>
                  </Box>
                ))}
              </Box>
            )}

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
              label="Kategori (fallback, opsiyonel)" 
              value={form.category} 
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              placeholder="Örn: Editorial, Runway, Campaign"
              sx={{ mb: 2 }}
            />

            <MultiLangText 
              label="Başlık" 
              values={{ tr: form.title_tr, en: form.title_en, de: form.title_de, ru: form.title_ru }}
              onChange={(lang, val) => setForm({ ...form, [`title_${lang}`]: val })}
            />

            <MultiLangText 
              label="Kısa Açıklama (opsiyonel)" 
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

            <MultiLangText 
              label="İçerik / Haber Metni" 
              values={{ tr: form.content_tr, en: form.content_en, de: form.content_de, ru: form.content_ru }}
              onChange={(lang, val) => setForm({ ...form, [`content_${lang}`]: val })}
              multiline
              rows={8}
            />

            <TextField 
              fullWidth 
              label="Yayın Tarihi" 
              type="date" 
              value={form.publishedAt} 
              onChange={(e) => setForm({ ...form, publishedAt: e.target.value })}
              sx={{ my: 2 }}
              InputLabelProps={{ shrink: true }}
            />

            <FormControlLabel 
              control={<Switch checked={form.isActive} onChange={(e) => setForm({ ...form, isActive: e.target.checked })} />} 
              label="Aktif" 
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>İptal</Button>
          <Button variant="contained" onClick={handleSave}>
            Kaydet
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default NewsManagement;
