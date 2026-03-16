import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography, Card, CardContent, CircularProgress } from '@mui/material';
import api from '../../services/api';

const Dashboard: React.FC = () => {
    const [stats, setStats] = useState([
        { title: 'Toplam Başvuru', value: 0, icon: 'people', color: '#667eea', change: '', key: 'total' },
        { title: 'Bekleyen Başvuru', value: 0, icon: 'pending', color: '#f59e0b', change: '', key: 'pending' },
        { title: 'Aktif Modeller', value: 0, icon: 'stars', color: '#10b981', change: '', key: 'active' },
        { title: 'Mesajlar', value: 0, icon: 'mail', color: '#ef4444', change: '', key: 'messages' },
    ]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            setLoading(true);
            try {
                // Tüm istatistikleri tek bir API çağrısında al
                const response = await api.get('/api/stats/dashboard');
                const data = response.data;

                setStats([
                    { 
                        title: 'Toplam Başvuru', 
                        value: data.totalApplications || 0, 
                        icon: 'people', 
                        color: '#667eea', 
                        change: '', 
                        key: 'total' 
                    },
                    { 
                        title: 'Bekleyen Başvuru', 
                        value: data.pendingApplications || 0, 
                        icon: 'pending', 
                        color: '#f59e0b', 
                        change: '', 
                        key: 'pending' 
                    },
                    { 
                        title: 'Aktif Modeller', 
                        value: data.activeModels || 0, 
                        icon: 'stars', 
                        color: '#10b981', 
                        change: '', 
                        key: 'active' 
                    },
                    { 
                        title: 'Mesajlar', 
                        value: data.totalMessages || 0, 
                        icon: 'mail', 
                        color: '#ef4444', 
                        change: '', 
                        key: 'messages' 
                    },
                ]);
            } catch (e) {
                console.error('Dashboard stats fetch error:', e);
                // Hata durumunda varsayılan değerler
                setStats([
                    { title: 'Toplam Başvuru', value: 0, icon: 'people', color: '#667eea', change: '', key: 'total' },
                    { title: 'Bekleyen Başvuru', value: 0, icon: 'pending', color: '#f59e0b', change: '', key: 'pending' },
                    { title: 'Aktif Modeller', value: 0, icon: 'stars', color: '#10b981', change: '', key: 'active' },
                    { title: 'Mesajlar', value: 0, icon: 'mail', color: '#ef4444', change: '', key: 'messages' },
                ]);
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
