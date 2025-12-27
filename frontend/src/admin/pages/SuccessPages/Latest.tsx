import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, Switch, FormControlLabel, Stack, TextField } from '@mui/material';
import axios from 'axios';
import ImageUploader from '../../components/imageUploader';
import MultiLangText from '../../components/Text';

const API_BASE = (import.meta as any).env?.VITE_API_BASE || 'http://localhost:3005';

type NewsItem = {
  id: string;
  imageUrl: string;
  title_tr: string;
  title_en: string;
  title_de: string;
  title_ru: string;
  content_tr: string;
  content_en: string;
  content_de: string;
  content_ru: string;
  publishedAt: string;
  isActive: boolean;
};

function Latest() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({
    imageUrl: '',
    title_tr: '', title_en: '', title_de: '', title_ru: '',
    content_tr: '', content_en: '', content_de: '', content_ru: '',
    publishedAt: new Date().toISOString().split('T')[0],
    isActive: true
  });
  const [files, setFiles] = useState<any[]>([]);

  const loadItems = () => {
    setLoading(true);
    axios.get(`${API_BASE}/api/news`)
      .then(res => setItems(res.data || []))
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
      })
      .catch(err => console.error(err));
  };

  const handleDelete = (id: string) => {
    if (!confirm('Silmek istediğinize emin misiniz?')) return;
    axios.delete(`${API_BASE}/api/news/${id}`)
      .then(() => loadItems())
      .catch(err => console.error(err));
  };

  const handleEdit = (item: NewsItem) => {
    setEditingId(item.id);
    setForm({
      imageUrl: item.imageUrl,
      title_tr: item.title_tr, title_en: item.title_en, title_de: item.title_de, title_ru: item.title_ru,
      content_tr: item.content_tr, content_en: item.content_en, content_de: item.content_de, content_ru: item.content_ru,
      publishedAt: item.publishedAt.split('T')[0],
      isActive: item.isActive
    });
  };

  const resetForm = () => {
    setEditingId(null);
    setForm({ 
      imageUrl: '', 
      title_tr: '', title_en: '', title_de: '', title_ru: '', 
      content_tr: '', content_en: '', content_de: '', content_ru: '', 
      publishedAt: new Date().toISOString().split('T')[0], 
      isActive: true 
    });
    setFiles([]);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>Haberler</Typography>

      {/* Form */}
      <Card sx={{ mb: 3, p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>{editingId ? 'Düzenle' : 'Yeni Haber Ekle'}</Typography>
        
        <ImageUploader files={files} setFiles={setFiles} folder="News" onUploaded={(url) => setForm({ ...form, imageUrl: url })} />
        
        {form.imageUrl && (
          <Box sx={{ my: 2 }}>
            <img src={form.imageUrl.startsWith('/') ? `${API_BASE}${form.imageUrl}` : form.imageUrl} alt="Preview" style={{ maxWidth: 200, maxHeight: 150 }} />
          </Box>
        )}

        <MultiLangText 
          label="Başlık" 
          values={{ tr: form.title_tr, en: form.title_en, de: form.title_de, ru: form.title_ru }}
          onChange={(lang, val) => setForm({ ...form, [`title_${lang}`]: val })}
        />

        <MultiLangText 
          label="İçerik" 
          values={{ tr: form.content_tr, en: form.content_en, de: form.content_de, ru: form.content_ru }}
          onChange={(lang, val) => setForm({ ...form, [`content_${lang}`]: val })}
          multiline
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

        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Button variant="contained" onClick={handleSave}>Kaydet</Button>
          {editingId && <Button variant="outlined" onClick={resetForm}>İptal</Button>}
        </Stack>
      </Card>

      {/* List */}
      {loading ? <Typography>Yükleniyor...</Typography> : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {items.map(item => (
            <Card key={item.id} sx={{ display: 'flex' }}>
              <CardMedia component="img" sx={{ width: 200 }} image={item.imageUrl.startsWith('/') ? `${API_BASE}${item.imageUrl}` : item.imageUrl} />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">{item.title_tr}</Typography>
                <Typography variant="body2" color="text.secondary">{item.content_tr.substring(0, 100)}...</Typography>
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  Yayın: {new Date(item.publishedAt).toLocaleDateString('tr-TR')}
                </Typography>
                <Typography variant="caption" color={item.isActive ? 'success.main' : 'error.main'}>
                  {item.isActive ? 'Aktif' : 'Pasif'}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Button size="small" variant="outlined" onClick={() => handleEdit(item)}>Düzenle</Button>
                  <Button size="small" variant="outlined" color="error" onClick={() => handleDelete(item.id)}>Sil</Button>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Latest;
