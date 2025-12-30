import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Table, 
  TableHead, 
  TableRow, 
  TableCell, 
  TableBody, 
  IconButton, 
  Chip, 
  Tooltip, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  useTheme, 
  useMediaQuery,
  Divider,
  Avatar
} from '@mui/material';
import { 
  Delete, 
  MarkEmailRead, 
  MarkEmailUnread, 
  Reply, 
  Visibility, 
  DateRange, 
  Person, 
  Email 
} from '@mui/icons-material';
import api from '../../../services/api';

// --- TİP TANIMLARI ---
interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(false);
  
  // Detay Modalı için State
  const [selectedMsg, setSelectedMsg] = useState<ContactMessage | null>(null);

  // Responsive Kontrolü
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Tablet ve altı için true

  // --- API İŞLEMLERİ ---
  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await api.get('/api/contact-messages');
      // Tarihe göre yeniden eskiye sırala
      const sorted = (res.data || []).sort((a: ContactMessage, b: ContactMessage) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setMessages(sorted);
    } catch (e) {
      console.error('Mesajlar çekilemedi', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const toggleRead = async (msg: ContactMessage, e?: React.MouseEvent) => {
    e?.stopPropagation(); // Tıklama event'inin yukarı taşmasını engelle
    try {
      await api.patch(`/api/contact-messages/${msg.id}`, { isRead: !msg.isRead });
      setMessages((list) => list.map((m) => (m.id === msg.id ? { ...m, isRead: !m.isRead } : m)));
      
      // Eğer modal açıksa oradaki veriyi de güncelle
      if (selectedMsg?.id === msg.id) {
        setSelectedMsg(prev => prev ? {...prev, isRead: !prev.isRead} : null);
      }
    } catch (e) {
      console.error('Durum güncellenemedi', e);
    }
  };

  const deleteMessage = async (msg: ContactMessage) => {
    if (!confirm('Bu mesajı kalıcı olarak silmek istediğinize emin misiniz?')) return;
    try {
      await api.delete(`/api/contact-messages/${msg.id}`);
      setMessages((list) => list.filter((m) => m.id !== msg.id));
      if (selectedMsg?.id === msg.id) setSelectedMsg(null); // Modal açıksa kapat
    } catch (e) {
      console.error('Mesaj silinemedi', e);
    }
  };

  // --- YARDIMCI FONKSİYONLAR ---
  const handleReply = (msg: ContactMessage) => {
    // mailto linki oluşturarak varsayılan mail istemcisini açar
    const subject = `Re: ${msg.subject}`;
    const body = `\n\n\n--- Orijinal Mesaj ---\nGönderen: ${msg.fullName}\nTarih: ${new Date(msg.createdAt).toLocaleString()}\nMesaj: ${msg.message}`;
    window.location.href = `mailto:${msg.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const formatDate = (iso: string) => {
    return new Date(iso).toLocaleDateString('tr-TR', { 
      day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' 
    });
  };

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      
      {/* BAŞLIK */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" fontWeight="bold" color="primary">
          Gelen Kutusu
        </Typography>
        <Chip label={`${messages.filter(m => !m.isRead).length} Okunmamış`} color="error" variant="outlined" />
      </Box>

      {/* --- MASAÜSTÜ GÖRÜNÜMÜ (TABLE) --- */}
      {!isMobile ? (
        <Paper sx={{ width: '100%', overflow: 'hidden', boxShadow: 3, borderRadius: 2 }}>
          <Table>
            <TableHead sx={{ bgcolor: '#f5f5f5' }}>
              <TableRow>
                <TableCell width="5%">Durum</TableCell>
                <TableCell width="20%">Gönderen</TableCell>
                <TableCell width="20%">Konu</TableCell>
                <TableCell width="30%">Mesaj Özeti</TableCell>
                <TableCell width="10%">Tarih</TableCell>
                <TableCell width="15%" align="right">İşlemler</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {messages.map((msg) => (
                <TableRow 
                  key={msg.id} 
                  hover 
                  onClick={() => setSelectedMsg(msg)} // Satıra tıklayınca detay aç
                  sx={{ 
                    cursor: 'pointer',
                    bgcolor: msg.isRead ? 'inherit' : '#f0f7ff', // Okunmamışsa hafif mavi
                    '&:hover': { bgcolor: '#f5f5f5' }
                  }}
                >
                  <TableCell>
                    {msg.isRead ? (
                      <Tooltip title="Okundu"><MarkEmailRead color="disabled" /></Tooltip>
                    ) : (
                      <Tooltip title="Yeni Mesaj"><MarkEmailUnread color="primary" /></Tooltip>
                    )}
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight={msg.isRead ? 'normal' : 'bold'}>{msg.fullName}</Typography>
                    <Typography variant="caption" color="text.secondary">{msg.email}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" fontWeight={msg.isRead ? 'normal' : 'bold'}>{msg.subject}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary" sx={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxWidth: '300px'
                    }}>
                      {msg.message}
                    </Typography>
                  </TableCell>
                  <TableCell>{formatDate(msg.createdAt)}</TableCell>
                  <TableCell align="right">
                    <Box onClick={(e) => e.stopPropagation()}> {/* Butonlara basınca detay açılmasın */}
                      <Tooltip title="Cevapla">
                        <IconButton color="primary" size="small" onClick={() => handleReply(msg)}>
                          <Reply />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title={msg.isRead ? 'Okunmadı İşaretle' : 'Okundu İşaretle'}>
                        <IconButton onClick={(e) => toggleRead(msg, e)} size="small">
                          {msg.isRead ? <MarkEmailUnread fontSize="small" /> : <MarkEmailRead fontSize="small" />}
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Sil">
                        <IconButton color="error" size="small" onClick={() => deleteMessage(msg)}>
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
              {messages.length === 0 && !loading && (
                <TableRow><TableCell colSpan={6} align="center" sx={{ py: 3 }}>Mesaj kutusu boş</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
      ) : (
        /* --- MOBİL GÖRÜNÜM (CARDS) --- */
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {messages.map((msg) => (
            <Card 
              key={msg.id} 
              onClick={() => setSelectedMsg(msg)}
              sx={{ 
                borderLeft: `5px solid ${msg.isRead ? 'transparent' : '#118DF2'}`, // Okunmamışsa sol taraf mavi çizgi
                boxShadow: 2
              }}
            >
              <CardContent sx={{ pb: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="subtitle1" fontWeight="bold">{msg.fullName}</Typography>
                  <Typography variant="caption" color="text.secondary">{formatDate(msg.createdAt)}</Typography>
                </Box>
                <Typography variant="body2" fontWeight="bold" gutterBottom>{msg.subject}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{
                   display: '-webkit-box',
                   WebkitLineClamp: 2,
                   WebkitBoxOrient: 'vertical',
                   overflow: 'hidden'
                }}>
                  {msg.message}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end', pt: 0 }}>
                <Button size="small" startIcon={<Reply />} onClick={(e) => { e.stopPropagation(); handleReply(msg); }}>Cevapla</Button>
                <IconButton size="small" color="error" onClick={(e) => { e.stopPropagation(); deleteMessage(msg); }}><Delete /></IconButton>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}

      {/* --- DETAY MODALI (DIALOG) --- */}
      <Dialog 
        open={!!selectedMsg} 
        onClose={() => setSelectedMsg(null)}
        maxWidth="md"
        fullWidth
      >
        {selectedMsg && (
          <>
            <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 2, borderBottom: '1px solid #eee' }}>
               <Avatar sx={{ bgcolor: '#118DF2' }}>{selectedMsg.fullName.charAt(0)}</Avatar>
               <Box>
                 <Typography variant="h6">{selectedMsg.subject}</Typography>
                 <Typography variant="caption" color="text.secondary">{formatDate(selectedMsg.createdAt)}</Typography>
               </Box>
            </DialogTitle>
            
            <DialogContent sx={{ mt: 2 }}>
                {/* Gönderen Bilgisi */}
                <Box sx={{ display: 'flex', flexDirection: {xs:'column', sm:'row'}, gap: 2, mb: 3, bgcolor: '#f9f9f9', p: 2, borderRadius: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Person color="action" /> 
                        <Typography variant="body2"><strong>İsim:</strong> {selectedMsg.fullName}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Email color="action" />
                        <Typography variant="body2"><strong>Email:</strong> <a href={`mailto:${selectedMsg.email}`}>{selectedMsg.email}</a></Typography>
                    </Box>
                </Box>

                <Typography variant="subtitle2" sx={{ mb: 1, color: 'text.secondary' }}>MESAJ İÇERİĞİ:</Typography>
                <Paper variant="outlined" sx={{ p: 2, minHeight: '150px', whiteSpace: 'pre-wrap', bgcolor: '#fff' }}>
                    {selectedMsg.message}
                </Paper>
            </DialogContent>

            <DialogActions sx={{ p: 2, borderTop: '1px solid #eee', justifyContent: 'space-between' }}>
                <Button 
                    color="error" 
                    startIcon={<Delete />} 
                    onClick={() => deleteMessage(selectedMsg)}
                >
                    Sil
                </Button>
                <Box>
                    <Button onClick={() => setSelectedMsg(null)} color="inherit" sx={{ mr: 1 }}>
                        Kapat
                    </Button>
                    {/* Okundu/Okunmadı Butonu */}
                    <Button 
                        onClick={() => toggleRead(selectedMsg)} 
                        color="secondary" 
                        sx={{ mr: 1 }}
                        startIcon={selectedMsg.isRead ? <MarkEmailUnread /> : <MarkEmailRead />}
                    >
                        {selectedMsg.isRead ? 'Okunmadı Yap' : 'Okundu Yap'}
                    </Button>
                    <Button 
                        variant="contained" 
                        startIcon={<Reply />} 
                        onClick={() => handleReply(selectedMsg)}
                    >
                        Cevapla
                    </Button>
                </Box>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Messages;