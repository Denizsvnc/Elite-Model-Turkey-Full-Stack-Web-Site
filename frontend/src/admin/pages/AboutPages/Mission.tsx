import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography, Button, Grid, Paper } from '@mui/material';
import api from '../../../services/api';
import ImageUploader from '../../components/imageUploader';

const API_BASE = (import.meta as any).env?.VITE_API_BASE || 'http://localhost:3005';

interface MissionForm {
  mission_imageUrl: string;
  mission_title_tr: string; mission_title_en: string; mission_title_de: string; mission_title_ru: string;
  mission_slogan_tr: string; mission_slogan_en: string; mission_slogan_de: string; mission_slogan_ru: string;
  mission_text_tr: string; mission_text_en: string; mission_text_de: string; mission_text_ru: string;
}

const Mission: React.FC = () => {
  const [form, setForm] = useState<MissionForm>({
    mission_imageUrl: '',
    mission_title_tr: '', mission_title_en: '', mission_title_de: '', mission_title_ru: '',
    mission_slogan_tr: '', mission_slogan_en: '', mission_slogan_de: '', mission_slogan_ru: '',
    mission_text_tr: '', mission_text_en: '', mission_text_de: '', mission_text_ru: '',
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
          mission_imageUrl: data.mission_imageUrl || '',
          mission_title_tr: data.mission_title_tr || '',
          mission_title_en: data.mission_title_en || '',
          mission_title_de: data.mission_title_de || '',
          mission_title_ru: data.mission_title_ru || '',
          mission_slogan_tr: data.mission_slogan_tr || '',
          mission_slogan_en: data.mission_slogan_en || '',
          mission_slogan_de: data.mission_slogan_de || '',
          mission_slogan_ru: data.mission_slogan_ru || '',
          mission_text_tr: data.mission_text_tr || '',
          mission_text_en: data.mission_text_en || '',
          mission_text_de: data.mission_text_de || '',
          mission_text_ru: data.mission_text_ru || '',
        }));
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  const handleChange = (key: keyof MissionForm, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const save = async () => {
    setSaving(true);
    try {
      await api.post('/api/about', form);
      alert('Misyon içeriği kaydedildi');
    } catch (e) {
      console.error(e);
      alert('Kaydetme başarısız');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Hakkımızda - Misyon İçeriği</Typography>
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <ImageUploader
              files={files}
              setFiles={setFiles}
              folder={'About/mission'}
              onUploaded={(url: string) => setForm((f) => ({ ...f, mission_imageUrl: url }))}
            />
            {form.mission_imageUrl && (
              <Box sx={{ mt: 2 }}>
                <img src={`${API_BASE}${form.mission_imageUrl}`} alt="mission" style={{ width: '100%', borderRadius: 8 }} />
              </Box>
            )}
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField label="Başlık (TR)" fullWidth value={form.mission_title_tr} onChange={(e) => handleChange('mission_title_tr', e.target.value)} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Başlık (EN)" fullWidth value={form.mission_title_en} onChange={(e) => handleChange('mission_title_en', e.target.value)} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Başlık (DE)" fullWidth value={form.mission_title_de} onChange={(e) => handleChange('mission_title_de', e.target.value)} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Başlık (RU)" fullWidth value={form.mission_title_ru} onChange={(e) => handleChange('mission_title_ru', e.target.value)} />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField label="Slogan (TR)" fullWidth value={form.mission_slogan_tr} onChange={(e) => handleChange('mission_slogan_tr', e.target.value)} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Slogan (EN)" fullWidth value={form.mission_slogan_en} onChange={(e) => handleChange('mission_slogan_en', e.target.value)} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Slogan (DE)" fullWidth value={form.mission_slogan_de} onChange={(e) => handleChange('mission_slogan_de', e.target.value)} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Slogan (RU)" fullWidth value={form.mission_slogan_ru} onChange={(e) => handleChange('mission_slogan_ru', e.target.value)} />
              </Grid>

              <Grid item xs={12}>
                <TextField label="Metin (TR)" multiline minRows={3} fullWidth value={form.mission_text_tr} onChange={(e) => handleChange('mission_text_tr', e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Metin (EN)" multiline minRows={3} fullWidth value={form.mission_text_en} onChange={(e) => handleChange('mission_text_en', e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Metin (DE)" multiline minRows={3} fullWidth value={form.mission_text_de} onChange={(e) => handleChange('mission_text_de', e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Metin (RU)" multiline minRows={3} fullWidth value={form.mission_text_ru} onChange={(e) => handleChange('mission_text_ru', e.target.value)} />
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

export default Mission;
