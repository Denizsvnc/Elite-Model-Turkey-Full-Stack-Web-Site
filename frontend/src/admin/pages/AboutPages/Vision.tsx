import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography, Button, Grid, Paper } from '@mui/material';
import api from '../../../services/api';
import ImageUploader from '../../components/imageUploader';

const API_BASE = (import.meta as any).env?.VITE_API_BASE || 'http://localhost:3005';

interface VisionForm {
  vision_imageUrl: string;
  vision_title_tr: string; vision_title_en: string; vision_title_de: string; vision_title_ru: string;
  vision_slogan_tr: string; vision_slogan_en: string; vision_slogan_de: string; vision_slogan_ru: string;
  vision_text_tr: string; vision_text_en: string; vision_text_de: string; vision_text_ru: string;
}

const Vision: React.FC = () => {
  const [form, setForm] = useState<VisionForm>({
    vision_imageUrl: '',
    vision_title_tr: '', vision_title_en: '', vision_title_de: '', vision_title_ru: '',
    vision_slogan_tr: '', vision_slogan_en: '', vision_slogan_de: '', vision_slogan_ru: '',
    vision_text_tr: '', vision_text_en: '', vision_text_de: '', vision_text_ru: '',
  });
  const [files, setFiles] = useState<any[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get('/api/about');
        const data = res.data || {};
        setForm((prev) => ({
          ...prev,
          vision_imageUrl: data.vision_imageUrl || '',
          vision_title_tr: data.vision_title_tr || '',
          vision_title_en: data.vision_title_en || '',
          vision_title_de: data.vision_title_de || '',
          vision_title_ru: data.vision_title_ru || '',
          vision_slogan_tr: data.vision_slogan_tr || '',
          vision_slogan_en: data.vision_slogan_en || '',
          vision_slogan_de: data.vision_slogan_de || '',
          vision_slogan_ru: data.vision_slogan_ru || '',
          vision_text_tr: data.vision_text_tr || '',
          vision_text_en: data.vision_text_en || '',
          vision_text_de: data.vision_text_de || '',
          vision_text_ru: data.vision_text_ru || '',
        }));
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  const handleChange = (key: keyof VisionForm, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const save = async () => {
    setSaving(true);
    try {
      await api.post('/api/about', form);
      alert('Vizyon içeriği kaydedildi');
    } catch (e) {
      console.error(e);
      alert('Kaydetme başarısız');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Hakkımızda - Vizyon İçeriği</Typography>
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <ImageUploader
              files={files}
              setFiles={setFiles}
              folder={'About/vision'}
              onUploaded={(url: string) => setForm((f) => ({ ...f, vision_imageUrl: url }))}
            />
            {form.vision_imageUrl && (
              <Box sx={{ mt: 2 }}>
                <img src={`${API_BASE}${form.vision_imageUrl}`} alt="vision" style={{ width: '100%', borderRadius: 8 }} />
              </Box>
            )}
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField label="Başlık (TR)" fullWidth value={form.vision_title_tr} onChange={(e) => handleChange('vision_title_tr', e.target.value)} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Başlık (EN)" fullWidth value={form.vision_title_en} onChange={(e) => handleChange('vision_title_en', e.target.value)} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Başlık (DE)" fullWidth value={form.vision_title_de} onChange={(e) => handleChange('vision_title_de', e.target.value)} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Başlık (RU)" fullWidth value={form.vision_title_ru} onChange={(e) => handleChange('vision_title_ru', e.target.value)} />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField label="Slogan (TR)" fullWidth value={form.vision_slogan_tr} onChange={(e) => handleChange('vision_slogan_tr', e.target.value)} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Slogan (EN)" fullWidth value={form.vision_slogan_en} onChange={(e) => handleChange('vision_slogan_en', e.target.value)} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Slogan (DE)" fullWidth value={form.vision_slogan_de} onChange={(e) => handleChange('vision_slogan_de', e.target.value)} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Slogan (RU)" fullWidth value={form.vision_slogan_ru} onChange={(e) => handleChange('vision_slogan_ru', e.target.value)} />
              </Grid>

              <Grid item xs={12}>
                <TextField label="Metin (TR)" multiline minRows={3} fullWidth value={form.vision_text_tr} onChange={(e) => handleChange('vision_text_tr', e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Metin (EN)" multiline minRows={3} fullWidth value={form.vision_text_en} onChange={(e) => handleChange('vision_text_en', e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Metin (DE)" multiline minRows={3} fullWidth value={form.vision_text_de} onChange={(e) => handleChange('vision_text_de', e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Metin (RU)" multiline minRows={3} fullWidth value={form.vision_text_ru} onChange={(e) => handleChange('vision_text_ru', e.target.value)} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
          <Button variant="contained" onClick={save} disabled={saving}>Kaydet</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Vision;
