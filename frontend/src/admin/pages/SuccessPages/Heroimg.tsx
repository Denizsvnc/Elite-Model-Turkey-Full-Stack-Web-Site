import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, Button, Switch, FormControlLabel, Stack } from '@mui/material';
import axios from 'axios';
import ImageUploader from '../../components/imageUploader';
import MultiLangText from '../../components/Text';

const API_BASE = (import.meta as any).env?.VITE_API_BASE || 'http://localhost:3005';

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
  const [form, setForm] = useState({
    imageUrl: '',
    title_tr: '', title_en: '', title_de: '', title_ru: '',
    text_tr: '', text_en: '', text_de: '', text_ru: '',
    isActive: true
  });
  const [files, setFiles] = useState<any[]>([]);

  const loadItem = () => {
    setLoading(true);
    axios.get(`${API_BASE}/api/success-heroes`)
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
    const url = item 
      ? `${API_BASE}/api/success-heroes/${item.id}` 
      : `${API_BASE}/api/success-heroes`;
    const method = item ? 'put' : 'post';

    axios[method](url, form)
      .then(() => {
        loadItem();
        alert('Kaydedildi!');
      })
      .catch(err => {
        console.error(err);
        alert('Hata oluştu!');
      });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>Başarı Sayfası Hero Görseli</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Sadece 1 adet hero görseli yüklenebilir. Mevcut görseli düzenleyin.
      </Typography>

      {loading ? <Typography>Yükleniyor...</Typography> : (
      <Card sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>{item ? 'Hero Görselini Düzenle' : 'Hero Görseli Ekle'}</Typography>
        
        <ImageUploader 
          files={files} 
          setFiles={setFiles} 
          folder="Success/hero" 
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

        <MultiLangText 
          label="Başlık" 
          values={{ tr: form.title_tr, en: form.title_en, de: form.title_de, ru: form.title_ru }}
          onChange={(lang, val) => setForm({ ...form, [`title_${lang}`]: val })}
        />

        <MultiLangText 
          label="Metin" 
          values={{ tr: form.text_tr, en: form.text_en, de: form.text_de, ru: form.text_ru }}
          onChange={(lang, val) => setForm({ ...form, [`text_${lang}`]: val })}
          multiline
        />

        <FormControlLabel 
          control={<Switch checked={form.isActive} onChange={(e) => setForm({ ...form, isActive: e.target.checked })} />} 
          label="Aktif" 
          sx={{ mt: 2 }}
        />

        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
          <Button variant="contained" onClick={handleSave} size="large">
            Kaydet
          </Button>
        </Stack>
      </Card>
      )}
    </Box>
  );
}

export default Heroimg;
