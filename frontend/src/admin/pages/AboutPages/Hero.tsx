import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography, Button, Grid, Paper } from '@mui/material';
import api from '../../../services/api';

interface AboutPageData {
  intro_title_tr: string;
  intro_title_en: string;
  intro_title_de: string;
  intro_title_ru: string;
  intro_text_tr: string;
  intro_text_en: string;
  intro_text_de: string;
  intro_text_ru: string;
}

const Hero: React.FC = () => {
  const [form, setForm] = useState<AboutPageData>({
    intro_title_tr: '', intro_title_en: '', intro_title_de: '', intro_title_ru: '',
    intro_text_tr: '', intro_text_en: '', intro_text_de: '', intro_text_ru: '',
  });
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await api.get('/api/about');
        const data = res.data || {};
        setForm((prev) => ({
          ...prev,
          intro_title_tr: data.intro_title_tr || '',
          intro_title_en: data.intro_title_en || '',
          intro_title_de: data.intro_title_de || '',
          intro_title_ru: data.intro_title_ru || '',
          intro_text_tr: data.intro_text_tr || '',
          intro_text_en: data.intro_text_en || '',
          intro_text_de: data.intro_text_de || '',
          intro_text_ru: data.intro_text_ru || '',
        }));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (key: keyof AboutPageData, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const save = async () => {
    setSaving(true);
    try {
      await api.post('/api/about', form);
      alert('Hero içeriği kaydedildi');
    } catch (e) {
      console.error(e);
      alert('Kaydetme başarısız');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Hakkımızda - Hero İçeriği</Typography>
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField label="Başlık (TR)" fullWidth value={form.intro_title_tr} onChange={(e) => handleChange('intro_title_tr', e.target.value)} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField label="Başlık (EN)" fullWidth value={form.intro_title_en} onChange={(e) => handleChange('intro_title_en', e.target.value)} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField label="Başlık (DE)" fullWidth value={form.intro_title_de} onChange={(e) => handleChange('intro_title_de', e.target.value)} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField label="Başlık (RU)" fullWidth value={form.intro_title_ru} onChange={(e) => handleChange('intro_title_ru', e.target.value)} />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField label="Metin (TR)" multiline minRows={3} fullWidth value={form.intro_text_tr} onChange={(e) => handleChange('intro_text_tr', e.target.value)} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField label="Metin (EN)" multiline minRows={3} fullWidth value={form.intro_text_en} onChange={(e) => handleChange('intro_text_en', e.target.value)} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField label="Metin (DE)" multiline minRows={3} fullWidth value={form.intro_text_de} onChange={(e) => handleChange('intro_text_de', e.target.value)} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField label="Metin (RU)" multiline minRows={3} fullWidth value={form.intro_text_ru} onChange={(e) => handleChange('intro_text_ru', e.target.value)} />
          </Grid>
        </Grid>
        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
          <Button variant="contained" onClick={save} disabled={saving || loading}>Kaydet</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Hero;
