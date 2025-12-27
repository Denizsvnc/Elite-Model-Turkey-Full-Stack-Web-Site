import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Chip, Tooltip } from '@mui/material';
import api from '../../../services/api';

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

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await api.get('/api/contact-messages');
      setMessages(res.data || []);
    } catch (e) {
      console.error('Mesajlar çekilemedi', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const toggleRead = async (msg: ContactMessage) => {
    try {
      await api.patch(`/api/contact-messages/${msg.id}`, { isRead: !msg.isRead });
      setMessages((list) => list.map((m) => (m.id === msg.id ? { ...m, isRead: !m.isRead } : m)));
    } catch (e) {
      console.error('Durum güncellenemedi', e);
    }
  };

  const deleteMessage = async (msg: ContactMessage) => {
    if (!confirm('Mesajı silmek istediğinize emin misiniz?')) return;
    try {
      await api.delete(`/api/contact-messages/${msg.id}`);
      setMessages((list) => list.filter((m) => m.id !== msg.id));
    } catch (e) {
      console.error('Mesaj silinemedi', e);
    }
  };

  const formatDate = (iso: string) => new Date(iso).toLocaleString();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Gelen Mesajlar</Typography>
      <Paper sx={{ p: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Durum</TableCell>
              <TableCell>Gönderen</TableCell>
              <TableCell>E-posta</TableCell>
              <TableCell>Konu</TableCell>
              <TableCell>Mesaj</TableCell>
              <TableCell>Tarih</TableCell>
              <TableCell align="right">İşlemler</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messages.map((msg) => (
              <TableRow key={msg.id} hover>
                <TableCell>
                  <Chip label={msg.isRead ? 'Okundu' : 'Yeni'} color={msg.isRead ? 'default' : 'primary'} size="small" />
                </TableCell>
                <TableCell>{msg.fullName}</TableCell>
                <TableCell>
                  <a href={`mailto:${msg.email}`}>{msg.email}</a>
                </TableCell>
                <TableCell>{msg.subject}</TableCell>
                <TableCell sx={{ maxWidth: 300 }}>
                  <Tooltip title={msg.message}>
                    <span>{msg.message.length > 60 ? msg.message.slice(0, 60) + '…' : msg.message}</span>
                  </Tooltip>
                </TableCell>
                <TableCell>{formatDate(msg.createdAt)}</TableCell>
                <TableCell align="right">
                  <Tooltip title={msg.isRead ? 'Okunmadı yap' : 'Okundu yap'}>
                    <IconButton onClick={() => toggleRead(msg)}>
                      <span className="material-symbols-outlined">{msg.isRead ? 'mark_chat_unread' : 'done_all'}</span>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Sil">
                    <IconButton color="error" onClick={() => deleteMessage(msg)}>
                      <span className="material-symbols-outlined">delete</span>
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
            {!loading && messages.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} align="center">Gösterilecek mesaj yok</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default Messages;
