import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Button,
  Skeleton,
} from '@mui/material';
// Removed Grid due to MUI v7 typing conflicts; using responsive Box layout
import ImageUploader from '../../components/imageUploader';

type FeaturedItem = {
  id: string;
  imageUrl: string;
  title_tr: string;
  title_en?: string;
  order: number;
  isActive: boolean;
  isPlaceholder?: boolean;
};

const API_BASE = (import.meta as any).env?.VITE_API_BASE || 'http://localhost:3005';

export default function Featured() {
  const [items, setItems] = useState<FeaturedItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [uploadingFor, setUploadingFor] = useState<string | null>(null);
  const [files, setFiles] = useState<any[]>([]);

  const loadItems = () => {
    setLoading(true);
    fetch(`${API_BASE}/api/featured-items`)
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: FeaturedItem[]) => {
        setItems(data || []);
        setError(null);
      })
      .catch((err) => setError(err?.message || 'Veriler çekilemedi'))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadItems();
  }, []);

  // Fallback kartlar: Women, Men, New Faces  
  const PLACEHOLDERS: FeaturedItem[] = [
    { id: 'placeholder-women', imageUrl: '', title_tr: 'Women', title_en: 'Women', order: 1, isActive: true, isPlaceholder: true },
    { id: 'placeholder-men', imageUrl: '', title_tr: 'Men', title_en: 'Men', order: 2, isActive: true, isPlaceholder: true },
    { id: 'placeholder-new-faces', imageUrl: '', title_tr: 'New Faces', title_en: 'New Faces', order: 3, isActive: true, isPlaceholder: true },
  ];
  // DB'deki kayıtları 'order' alanına göre placeholderlarla birleştir
  const displayItems: FeaturedItem[] = PLACEHOLDERS.map((ph) => {
    const match = items.find((it) => it.order === ph.order);
    return match ? match : ph;
  });

  const updateImage = (id: string, url: string) => {
    fetch(`${API_BASE}/api/featured-items/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageUrl: url }),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error(await res.text());
        return res.json();
      })
      .then(() => {
        setUploadingFor(null);
        setFiles([]);
        loadItems();
      })
      .catch((err) => setError(err?.message || 'Görsel güncellenemedi'));
  };

  // Placeholder kart için ilk yüklemede DB'de kayıt oluştur
  const createFeaturedItem = (title: string, order: number, url: string) => {
    const payload = {
      imageUrl: url,
      order,
      isActive: true,
      // Zorunlu dil alanlarını basit değerlerle dolduruyoruz
      title_tr: title,
      title_en: title,
      title_de: title,
      title_ru: title,
      content_tr: '',
      content_en: '',
      content_de: '',
      content_ru: '',
    };

    fetch(`${API_BASE}/api/featured-items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error(await res.text());
        return res.json();
      })
      .then(() => {
        setUploadingFor(null);
        setFiles([]);
        loadItems();
      })
      .catch((err) => setError(err?.message || 'Kayıt oluşturulamadı'));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
        Öne Çıkan Kişiler
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Anasayfadaki "Mükemmelliği Temsil Etmek" alanındaki kartlar. Görselleri güncelleyebilirsiniz.
      </Typography>

      {loading ? (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <Box key={i} sx={{ width: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(25% - 12px)' } }}>
              <Skeleton variant="rectangular" height={180} />
              <Skeleton variant="text" sx={{ mt: 1 }} />
            </Box>
          ))}
        </Box>
      ) : (
        displayItems.length === 0 ? (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.secondary">Henüz öne çıkan kart bulunmuyor.</Typography>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {displayItems.map((item) => (
              <Box key={item.id} sx={{ width: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(25% - 12px)' } }}>
                <Card variant="outlined">
                  {item.imageUrl ? (
                    <CardMedia
                      component="img"
                      height="180"
                      image={item.imageUrl.startsWith('/') ? `${API_BASE}${item.imageUrl}` : item.imageUrl}
                      alt={item.title_tr}
                      sx={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <Box sx={{ height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'action.hover' }}>
                      <Typography variant="body2" color="text.secondary">Görsel yok</Typography>
                    </Box>
                  )}
                  <CardContent>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>{item.title_tr}</Typography>
                      <Button size="small" variant="outlined" onClick={() => { setUploadingFor(item.id); setFiles([]); }}>
                        Görseli Değiştir
                      </Button>
                    </Stack>
                    {uploadingFor === item.id && (
                      <Box sx={{ mt: 2 }}>
                        <ImageUploader
                          files={files}
                          setFiles={setFiles}
                          folder={'Home/featured'}
                          onUploaded={(url: string) => {
                            if (item.isPlaceholder) {
                              createFeaturedItem(item.title_tr, item.order, url);
                            } else {
                              updateImage(item.id, url);
                            }
                          }}
                        />
                      </Box>
                    )}
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        )
      )}

      {error && (
        <Box sx={{ mt: 2 }}>
          <Typography color="error">Hata: {error}</Typography>
        </Box>
      )}
    </Box>
  );
}
