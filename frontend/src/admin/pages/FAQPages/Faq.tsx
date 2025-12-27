import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Button, Dialog, DialogTitle, DialogContent, DialogActions, Grid, TextField, Switch, FormControlLabel } from '@mui/material';
import api from '../../../services/api';
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
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<FAQItem>(emptyItem);

  const fetchFaqs = async () => {
    setLoading(true);
    try {
      const res = await api.get('/api/faqs');
      setFaqs(res.data || []);
    } catch (e) {
      console.error('SSS çekilemedi', e);
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

  const openCreate = () => { setCurrent({ ...emptyItem, order: (faqs?.length || 0) + 1 }); setOpen(true); };
  const openEdit = (item: FAQItem) => { setCurrent(item); setOpen(true); };
  const closeDialog = () => setOpen(false);

  const save = async () => {
    try {
      if (current.id) {
        await api.put(`/api/faqs/${current.id}`, current);
      } else {
        await api.post('/api/faqs', current);
      }
      setOpen(false);
      fetchFaqs();
    } catch (e) {
      console.error('Kaydetme hatası', e);
      alert('Kaydetme başarısız');
    }
  };

  const remove = async (id?: string) => {
    if (!id) return;
    if (!confirm('Bu SSS kaydını silmek istediğinize emin misiniz?')) return;
    try {
      await api.delete(`/api/faqs/${id}`);
      fetchFaqs();
    } catch (e) {
      console.error('Silme hatası', e);
    }
  };

  const toggleActive = async (item: FAQItem) => {
    try {
      await api.put(`/api/faqs/${item.id}`, { isActive: !item.isActive });
      setFaqs((list) => list.map((f) => (f.id === item.id ? { ...f, isActive: !f.isActive } : f)));
    } catch (e) {
      console.error('Durum güncellenemedi', e);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h5">SSS Yönetimi</Typography>
        <Button variant="contained" onClick={openCreate}>Yeni SSS Ekle</Button>
      </Box>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sıra</TableCell>
              <TableCell>Başlık (TR)</TableCell>
              <TableCell>Aktif</TableCell>
              <TableCell align="right">İşlemler</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {faqs.map((faq) => (
              <TableRow key={faq.id} hover>
                <TableCell>{faq.order}</TableCell>
                <TableCell>{faq.question_tr}</TableCell>
                <TableCell>
                  <Switch checked={faq.isActive} onChange={() => toggleActive(faq)} />
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => openEdit(faq)}>
                    <span className="material-symbols-outlined">edit</span>
                  </IconButton>
                  <IconButton color="error" onClick={() => remove(faq.id)}>
                    <span className="material-symbols-outlined">delete</span>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {!loading && faqs.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">Kayıt yok</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>

      <Dialog open={open} onClose={closeDialog} maxWidth="md" fullWidth>
        <DialogTitle>SSS Düzenle</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={4}>
              <TextField label="Sıra" type="number" fullWidth value={current.order} onChange={(e) => setCurrent((c) => ({ ...c, order: Number(e.target.value) }))} />
              <FormControlLabel sx={{ mt: 2 }} control={<Switch checked={current.isActive} onChange={(e) => setCurrent((c) => ({ ...c, isActive: e.target.checked }))} />} label="Aktif" />
            </Grid>
            <Grid item xs={12} md={8}>
              <MultiLangText label="Soru" values={{ tr: current.question_tr, en: current.question_en, de: current.question_de, ru: current.question_ru }} onChange={handleQuestionChange} />
            </Grid>
            <Grid item xs={12}>
              <MultiLangText label="Cevap" multiline rows={4} values={{ tr: current.answer_tr, en: current.answer_en, de: current.answer_de, ru: current.answer_ru }} onChange={handleAnswerChange} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>İptal</Button>
          <Button variant="contained" onClick={save}>Kaydet</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Faq;
