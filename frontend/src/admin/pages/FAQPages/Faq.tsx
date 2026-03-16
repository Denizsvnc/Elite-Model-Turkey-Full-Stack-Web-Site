import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  TextField, 
  Switch, 
  FormControlLabel,
  Card,
  CardContent,
  Chip,
  Stack,
  Divider,
  Skeleton,
  Alert,
  IconButton
} from '@mui/material';
import api from '../../../services/api';
import Drawer from '../../components/Drawer';
import MultiLangText from '../../components/Text';

interface FAQItem {
  id?: string;
  order: number;
  isActive: boolean;
  question_tr: string; question_en: string; question_de: string; question_ru: string;
  answer_tr: string; answer_en: string; answer_de: string; answer_ru: string;
}

const emptyItem: FAQItem = {
  order: 1,
  isActive: true,
  question_tr: '', question_en: '', question_de: '', question_ru: '',
  answer_tr: '', answer_en: '', answer_de: '', answer_ru: '',
};

const Faq: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [current, setCurrent] = useState<FAQItem>(emptyItem);

  const fetchFaqs = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      const res = await api.get('/api/faqs', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setFaqs(res.data || []);
      setError(null);
    } catch (e) {
      console.error('SSS çekilemedi', e);
      setError('SSS yüklenirken bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchFaqs(); }, []);

  const handleQuestionChange = (code: string, value: string) => {
    setCurrent((c) => ({ ...c, [`question_${code}`]: value } as any));
  };
  const handleAnswerChange = (code: string, value: string) => {
    setCurrent((c) => ({ ...c, [`answer_${code}`]: value } as any));
  };

  const openCreate = () => { 
    setCurrent({ ...emptyItem, order: (faqs?.length || 0) + 1 }); 
    setDrawerOpen(true); 
  };
  const openEdit = (item: FAQItem) => { 
    setCurrent(item); 
    setDrawerOpen(true); 
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
    setError(null);
  };

  const save = async () => {
    if (!current.question_tr || !current.answer_tr) {
      setError('Lütfen en az Türkçe soru ve cevabı doldurun');
      return;
    }

    setSaving(true);
    setError(null);
    
    const token = localStorage.getItem('token');
    try {
      if (current.id) {
        await api.put(`/api/faqs/${current.id}`, current, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
      } else {
        await api.post('/api/faqs', current, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
      }
      setDrawerOpen(false);
      fetchFaqs();
    } catch (e) {
      console.error('Kaydetme hatası', e);
      setError('Kaydedilirken bir hata oluştu');
    } finally {
      setSaving(false);
    }
  };

  const remove = async (id?: string) => {
    if (!id) return;
    if (!confirm('Bu SSS kaydını silmek istediğinize emin misiniz?')) return;
    
    const token = localStorage.getItem('token');
    try {
      await api.delete(`/api/faqs/${id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchFaqs();
      setError(null);
    } catch (e) {
      console.error('Silme hatası', e);
      setError('Silinirken bir hata oluştu');
    }
  };

  const toggleActive = async (item: FAQItem) => {
    const token = localStorage.getItem('token');
    try {
      await api.put(`/api/faqs/${item.id}`, { isActive: !item.isActive }, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setFaqs((list) => list.map((f) => (f.id === item.id ? { ...f, isActive: !f.isActive } : f)));
    } catch (e) {
      console.error('Durum güncellenemedi', e);
      setError('Durum güncellenirken bir hata oluştu');
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
              SSS Yönetimi
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sıkça sorulan soruları ekleyin, düzenleyin ve yönetin.
            </Typography>
          </Box>
          <Button 
            variant="contained" 
            size="large"
            onClick={openCreate}
            sx={{ minWidth: 160 }}
          >
            + Yeni SSS Ekle
          </Button>
        </Box>
      </Box>

      {/* Error Alert */}
      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      {/* Loading State */}
      {loading ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {[1, 2, 3].map(i => (
            <Card key={i} elevation={2}>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Skeleton variant="circular" width={40} height={40} />
                  <Box sx={{ flex: 1 }}>
                    <Skeleton variant="text" height={30} width="60%" />
                    <Skeleton variant="text" height={20} width="40%" />
                  </Box>
                  <Skeleton variant="rectangular" width={100} height={36} />
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      ) : (
        <>
          {faqs.length === 0 ? (
            <Card elevation={0} sx={{ p: 6, textAlign: 'center', bgcolor: 'action.hover' }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Henüz SSS eklenmemiş
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                "Yeni SSS Ekle" butonuna tıklayarak ilk soruyu ekleyin.
              </Typography>
              <Button variant="outlined" onClick={openCreate}>
                İlk SSS'yi Ekle
              </Button>
            </Card>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {faqs.map((faq) => (
                <Card 
                  key={faq.id} 
                  elevation={2}
                  sx={{
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: 4
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      {/* Order Badge */}
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '1.1rem',
                          flexShrink: 0
                        }}
                      >
                        {faq.order}
                      </Box>

                      {/* Content */}
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {faq.question_tr}
                          </Typography>
                          <Chip 
                            label={faq.isActive ? 'Aktif' : 'Pasif'}
                            size="small"
                            color={faq.isActive ? 'success' : 'default'}
                          />
                        </Stack>
                        
                        <Typography 
                          variant="body2" 
                          color="text.secondary" 
                          sx={{ 
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}
                        >
                          {faq.answer_tr}
                        </Typography>
                      </Box>

                      {/* Actions */}
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Switch 
                          checked={faq.isActive} 
                          onChange={() => toggleActive(faq)}
                          color="success"
                        />
                        <IconButton 
                          onClick={() => openEdit(faq)}
                          color="primary"
                        >
                          <span className="material-symbols-outlined">edit</span>
                        </IconButton>
                        <IconButton 
                          color="error" 
                          onClick={() => remove(faq.id)}
                        >
                          <span className="material-symbols-outlined">delete</span>
                        </IconButton>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Box>
          )}
        </>
      )}

      {/* Edit/Add Drawer */}
      <Drawer 
        open={drawerOpen} 
        onClose={() => !saving && closeDrawer()} 
        onSave={save}
        onCancel={closeDrawer}
        title={current.id ? 'SSS Düzenle' : 'Yeni SSS Ekle'}
        saving={saving}
        disabled={!current.question_tr || !current.answer_tr}
      >
        {error && (
          <Alert severity="error" onClose={() => setError(null)} sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {/* Order and Active Status */}
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
            Sıra ve Durum
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <TextField 
              label="Sıra" 
              type="number" 
              value={current.order} 
              onChange={(e) => setCurrent((c) => ({ ...c, order: Number(e.target.value) }))}
              sx={{ width: 120 }}
            />
            <FormControlLabel 
              control={
                <Switch 
                  checked={current.isActive} 
                  onChange={(e) => setCurrent((c) => ({ ...c, isActive: e.target.checked }))}
                  color="success"
                />
              } 
              label={
                <Stack>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Aktif
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {current.isActive ? 'Web sitesinde gösteriliyor' : 'Gizli'}
                  </Typography>
                </Stack>
              }
            />
          </Stack>
        </Box>

        <Divider />

        {/* Question */}
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
            Soru (Çoklu Dil) *
          </Typography>
          <MultiLangText 
            label="Soru" 
            values={{ 
              tr: current.question_tr, 
              en: current.question_en, 
              de: current.question_de, 
              ru: current.question_ru 
            }} 
            onChange={handleQuestionChange} 
          />
        </Box>

        {/* Answer */}
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
            Cevap (Çoklu Dil) *
          </Typography>
          <MultiLangText 
            label="Cevap" 
            multiline 
            rows={6}
            values={{ 
              tr: current.answer_tr, 
              en: current.answer_en, 
              de: current.answer_de, 
              ru: current.answer_ru 
            }} 
            onChange={handleAnswerChange} 
          />
        </Box>
      </Drawer>
    </Box>
  );
};

export default Faq;
