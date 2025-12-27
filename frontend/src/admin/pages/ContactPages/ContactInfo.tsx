import React, { useEffect, useState } from 'react';
import { Box, Grid, Paper, TextField, Typography, Button, Switch, FormControlLabel } from '@mui/material';
import api from '../../../services/api';

interface ContactForm {
  address_tr: string; address_en: string; address_de: string; address_ru: string;
  phone: string; email: string; locationUrl: string; isActive: boolean;
}

const ContactInfo: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    address_tr: '', address_en: '', address_de: '', address_ru: '',
    phone: '', email: '', locationUrl: '', isActive: true,
  });
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await api.get('/api/contact-info');
        const data = res.data || {};
        setForm((prev) => ({
          ...prev,
          address_tr: data.address_tr || '',
          address_en: data.address_en || '',
          address_de: data.address_de || '',
          address_ru: data.address_ru || '',
          phone: data.phone || '',
          email: data.email || '',
          locationUrl: data.locationUrl || '',
          isActive: data.isActive ?? true,
        }));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (key: keyof ContactForm, value: any) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const save = async () => {
    setSaving(true);
    try {
      await api.post('/api/contact-info', form);
      alert('İletişim bilgileri kaydedildi');
    } catch (e) {
      console.error(e);
      alert('Kaydetme başarısız');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>İletişim Bilgileri</Typography>
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField label="Adres (TR)" fullWidth value={form.address_tr} onChange={(e) => handleChange('address_tr', e.target.value)} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Adres (EN)" fullWidth value={form.address_en} onChange={(e) => handleChange('address_en', e.target.value)} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Adres (DE)" fullWidth value={form.address_de} onChange={(e) => handleChange('address_de', e.target.value)} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Adres (RU)" fullWidth value={form.address_ru} onChange={(e) => handleChange('address_ru', e.target.value)} />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField label="Telefon" fullWidth value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField type="email" label="E-posta" fullWidth value={form.email} onChange={(e) => handleChange('email', e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Harita URL" fullWidth value={form.locationUrl} onChange={(e) => handleChange('locationUrl', e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel control={<Switch checked={form.isActive} onChange={(e) => handleChange('isActive', e.target.checked)} />} label="Aktif" />
          </Grid>
        </Grid>

        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
          <Button variant="contained" onClick={save} disabled={saving || loading}>Kaydet</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ContactInfo;
