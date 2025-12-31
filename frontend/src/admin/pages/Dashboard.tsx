import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography, Card, CardContent, CircularProgress } from '@mui/material';
import api from '../../services/api';

const Dashboard: React.FC = () => {
    const [stats, setStats] = useState([
        { title: 'Toplam Başvuru', value: '-', icon: 'people', color: '#667eea', change: '', key: 'total' },
        { title: 'Bekleyen Başvuru', value: '-', icon: 'pending', color: '#f59e0b', change: '', key: 'pending' },
        { title: 'Aktif Modeller', value: '-', icon: 'stars', color: '#10b981', change: '', key: 'active' },
        { title: 'Mesajlar', value: '-', icon: 'mail', color: '#ef4444', change: '', key: 'messages' },
    ]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            setLoading(true);
            try {
                // Toplam başvuru
                const totalRes = await api.get('/api/applications');
                // Bekleyen başvuru
                const pendingRes = await api.get('/api/applications?status=REVIEW');
                // Aktif modeller (ACCEPTED başvurular)
                const activeRes = await api.get('/api/applications?status=ACCEPTED');
                // Mesajlar
                const msgRes = await api.get('/api/contact-messages');

                setStats([
                    { title: 'Toplam Başvuru', value: totalRes.data.length, icon: 'people', color: '#667eea', change: '', key: 'total' },
                    { title: 'Bekleyen Başvuru', value: pendingRes.data.length, icon: 'pending', color: '#f59e0b', change: '', key: 'pending' },
                    { title: 'Aktif Modeller', value: activeRes.data.length, icon: 'stars', color: '#10b981', change: '', key: 'active' },
                    { title: 'Mesajlar', value: msgRes.data.length, icon: 'mail', color: '#ef4444', change: '', key: 'messages' },
                ]);
            } catch (e) {
                // Hata durumunda değerler - olarak kalır
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Dashboard
            </Typography>

            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 200 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }}>
                    {stats.map((stat, index) => (
                        <Card
                            key={index}
                            sx={{
                                height: '100%',
                                position: 'relative',
                                overflow: 'visible',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: 3,
                                    transition: 'all 0.3s',
                                },
                            }}
                        >
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <Box>
                                        <Typography color="text.secondary" variant="body2" gutterBottom>
                                            {stat.title}
                                        </Typography>
                                        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                                            {stat.value}
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            width: 56,
                                            height: 56,
                                            borderRadius: 2,
                                            bgcolor: `${stat.color}15`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <span
                                            className="material-symbols-outlined"
                                            style={{ color: stat.color, fontSize: '28px' }}
                                        >
                                            {stat.icon}
                                        </span>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            )}

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 3, mt: 3 }}>
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        Son Başvurular
                    </Typography>
                    <Typography color="text.secondary">
                        Başvurular listesi burada gösterilecek...
                    </Typography>
                </Paper>
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        Hızlı İşlemler
                    </Typography>
                    <Typography color="text.secondary">
                        Hızlı erişim menüsü...
                    </Typography>
                </Paper>
            </Box>
        </Box>
    );
};

export default Dashboard;
