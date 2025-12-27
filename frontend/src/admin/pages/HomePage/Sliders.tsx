import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Divider,
  Stack,
  Skeleton,
  Button,
  TextField,
  FormControlLabel,
  Switch,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Drawer from '../../components/Drawer';
import MultiLangText from '../../components/Text';
import ImageUploader from '../../components/imageUploader';
// API base (fallback to backend default port)
const API_BASE = (import.meta as any).env?.VITE_API_BASE || 'http://localhost:3005';

// Types matching backend schema
type HomeSliderItem = {
  id: number;
  homeSliderId: number;
  imageUrl?: string | null;
  linkUrl?: string | null;
  order: number;
  isActive: boolean;
  title_tr?: string | null;
  title_en?: string | null;
  title_de?: string | null;
  title_ru?: string | null;
  description_tr?: string | null;
  description_en?: string | null;
  description_de?: string | null;
  description_ru?: string | null;
};

type HomeSlider = {
  id: number;
  key: string;
  name: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  items: HomeSliderItem[];
};

function Sliders() {
  const [groups, setGroups] = useState<HomeSlider[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [saving, setSaving] = useState<boolean>(false);
  const [titleInputs, setTitleInputs] = useState<Record<string, string>>({ tr: '', en: '', de: '', ru: '' });
  const [descriptionInputs, setDescriptionInputs] = useState<Record<string, string>>({ tr: '', en: '', de: '', ru: '' });
  const [imageUrl, setImageUrl] = useState<string>('');
  const [linkUrl, setLinkUrl] = useState<string>('');
  const [order, setOrder] = useState<number>(1);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [files, setFiles] = useState<any[]>([]);
  const HERO_SLIDER_KEY = (import.meta as any).env?.VITE_HERO_SLIDER_KEY || 'home-hero';

  const loadGroups = useCallback(() => {
    setLoading(true);
    fetch(`${API_BASE}/api/sliders`)
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: HomeSlider[]) => {
        setGroups(data || []);
        setError(null);
        // no UI selection needed; list remains for display only
      })
      .catch((err) => {
        setError(err?.message || 'Veri çekilemedi');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    loadGroups();
  }, [loadGroups]);
  // Yeni Slider Ekleme
  const handleAdd = () => {
    setTitleInputs({ tr: '', en: '', de: '', ru: '' });
    setDescriptionInputs({ tr: '', en: '', de: '', ru: '' });
    setImageUrl('');
    setLinkUrl('');
    setOrder(1);
    setIsActive(true);
    setFiles([]);
    setOpenDrawer(true);
  };

  const handleSave = () => {
    const payload = {
      sliderKey: HERO_SLIDER_KEY,
      imageUrl: imageUrl || null,
      order,
      linkUrl: linkUrl || null,
      isActive,
      title_tr: titleInputs.tr || null,
      title_en: titleInputs.en || null,
      title_de: titleInputs.de || null,
      title_ru: titleInputs.ru || null,
      description_tr: descriptionInputs.tr || null,
      description_en: descriptionInputs.en || null,
      description_de: descriptionInputs.de || null,
      description_ru: descriptionInputs.ru || null,
    };

    setSaving(true);
    fetch(`${API_BASE}/api/sliders/item`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        if (!res.ok) {
          const msg = await res.text();
          throw new Error(msg || `HTTP ${res.status}`);
        }
        return res.json();
      })
      .then(() => {
        setOpenDrawer(false);
        loadGroups();
      })
      .catch((err) => {
        setError(err?.message || 'Kaydedilemedi');
      })
      .finally(() => setSaving(false));
  };

  return (
    <>
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
        Anasayfa Slider Görselleri
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Mevcut slider grupları ve içindeki görseller aşağıda listelenir.
      </Typography> 
      <Button onClick={handleAdd}>Yeni Slider Ekle</Button>

      {loading && (
        <Box>
          <Skeleton variant="text" width={240} height={36} sx={{ mb: 2 }} />
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 2 }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <Box key={i}>
                <Skeleton variant="rectangular" height={160} />
                <Skeleton variant="text" sx={{ mt: 1 }} />
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {error && !loading && (
        <Box sx={{ p: 2, border: '1px solid', borderColor: 'error.light', borderRadius: 1, mb: 2 }}>
          <Typography color="error">Hata: {error}</Typography>
        </Box>
      )}

      {!loading && !error && groups.map((group) => (
        <Box key={group.id} sx={{ mb: 4 }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>{group.name}</Typography>
            <Chip size="small" label={group.isActive ? 'Aktif' : 'Pasif'} color={group.isActive ? 'success' : 'default'} />
            <Chip size="small" label={`KEY: ${group.key}`} variant="outlined" />
            <Chip size="small" label={`Görsel: ${group.items?.length ?? 0}`} variant="outlined" />
          </Stack>
          <Divider sx={{ mb: 2 }} />

          {group.items?.length ? (
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 2 }}>
              {group.items.map((item) => (
                <Card variant="outlined" sx={{ height: '100%' }} key={item.id}>
                  {item.imageUrl ? (
                    <CardMedia
                      component="img"
                      height="160"
                      image={item.imageUrl?.startsWith('/') ? `${API_BASE}${item.imageUrl}` : item.imageUrl}
                      alt={item.title_tr || `Slide #${item.order}`}
                      sx={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <Box sx={{ height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'action.hover' }}>
                      <Typography variant="body2" color="text.secondary">Görsel yok</Typography>
                    </Box>
                  )}
                  <CardContent>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {item.title_tr || item.title_en || `Slide #${item.order}`}
                      </Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Chip size="small" label={`Sıra: ${item.order}`} variant="outlined" />
                        <IconButton aria-label="Sil" size="small" onClick={() => {
                          fetch(`${API_BASE}/api/sliders/item/${item.id}`, { method: 'DELETE' })
                            .then(async (res) => {
                              if (!res.ok) throw new Error(await res.text());
                              return res.json();
                            })
                            .then(() => loadGroups())
                            .catch((err) => setError(err?.message || 'Silinemedi'));
                        }}>
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Stack>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                      <Chip size="small" label={item.isActive ? 'Aktif' : 'Pasif'} color={item.isActive ? 'success' : 'default'} />
                      {item.linkUrl ? <Chip size="small" label="Link" variant="outlined" /> : null}
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Box>
          ) : (
            <Box sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
              <Typography variant="body2" color="text.secondary">Bu grupta henüz görsel yok.</Typography>
            </Box>
          )}
        </Box>
      ))}
    </Box>

    <Drawer 
      open={openDrawer} 
      onClose={() => setOpenDrawer(false)} 
      onSave={handleSave}
      onCancel={() => setOpenDrawer(false)}
      title="Yeni Slider Ekle" 
    >
      <Stack gap={2}>
        <ImageUploader files={files} setFiles={setFiles} folder={'Home/sliders'} onUploaded={(url: string) => setImageUrl(url)} />
        <MultiLangText
          label="Başlık"
          values={titleInputs}
          onChange={(code, val) => setTitleInputs((prev) => ({ ...prev, [code]: val }))}
          required
        />
        <MultiLangText
          label="Açıklama"
          values={descriptionInputs}
          onChange={(code, val) => setDescriptionInputs((prev) => ({ ...prev, [code]: val }))}
          multiline
          rows={4}
        />
        <TextField
          label="Görsel URL"
          fullWidth
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          helperText="Yüklenen dosyanın URL'si (örn. CDN/S3)"
        />
        <TextField
          label="Link URL"
          fullWidth
          value={linkUrl}
          onChange={(e) => setLinkUrl(e.target.value)}
        />
        <TextField
          label="Sıra"
          type="number"
          fullWidth
          value={order}
          onChange={(e) => setOrder(Number(e.target.value) || 0)}
        />
        <FormControlLabel
          control={<Switch checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />}
          label="Aktif"
        />
      </Stack>
    </Drawer>
    </>
  );
}

export default Sliders;
