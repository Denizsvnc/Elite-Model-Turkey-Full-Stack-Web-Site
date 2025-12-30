import React, { useState, useEffect } from 'react';
import { 
    Box, 
    Typography, 
    Card, 
    CardContent, 
    Button, 
    IconButton, 
    TextField, 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    Switch, 
    FormControlLabel, 
    Snackbar, 
    Alert,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Chip
} from '@mui/material';
import { 
    Add, 
    Delete, 
    Edit, 
    Link as LinkIcon, 
    Save, 
    WhatsApp, 
    Facebook, 
    Instagram, 
    Twitter, 
    LinkedIn, 
    YouTube, 
    Email,
    Public
} from '@mui/icons-material';

// 1. API URL
const API_BASE = (import.meta as any).env?.VITE_API_BASE || 'http://localhost:3005';

// 2. TİP TANIMLARI
interface SocialMedia {
    id: number;
    platform: string;
    name: string;
    url: string;
    iconKey: string;
    isActive: boolean;
    order: number;
}

// 3. KULLANILABİLİR İKON LİSTESİ (Dropdown için)
const AVAILABLE_ICONS = [
    { key: 'Instagram', label: 'Instagram', icon: <Instagram /> },
    { key: 'WhatsApp', label: 'WhatsApp', icon: <WhatsApp /> },
    { key: 'Facebook', label: 'Facebook', icon: <Facebook /> },
    { key: 'Twitter', label: 'Twitter / X', icon: <Twitter /> },
    { key: 'LinkedIn', label: 'LinkedIn', icon: <LinkedIn /> },
    { key: 'YouTube', label: 'YouTube', icon: <YouTube /> },
    { key: 'Email', label: 'Email', icon: <Email /> },
    { key: 'Web', label: 'Website (Genel)', icon: <Public /> },
];

function Social() {
    // --- STATE ---
    const [socials, setSocials] = useState<SocialMedia[]>([]);
    const [loading, setLoading] = useState(true);
    const [openDialog, setOpenDialog] = useState(false);
    
    // Form State (Ekleme/Düzenleme için)
    const [formData, setFormData] = useState<Partial<SocialMedia>>({
        platform: '',
        name: '',
        url: '',
        iconKey: 'Instagram',
        order: 0,
        isActive: true
    });

    // Bildirim State
    const [notification, setNotification] = useState<{open: boolean, message: string, type: 'success' | 'error'}>({
        open: false, message: '', type: 'success'
    });

    const getToken = () => localStorage.getItem('token');

    // --- VERİ ÇEKME ---
    useEffect(() => {
        fetchSocials();
    }, []);

    const fetchSocials = async () => {
        try {
            const res = await fetch(`${API_BASE}/api/socials`);
            const data = await res.json();
            if (Array.isArray(data)) {
                setSocials(data);
            }
        } catch (error) {
            console.error("Veri çekilemedi:", error);
        } finally {
            setLoading(false);
        }
    };

    // --- CRUD İŞLEMLERİ ---

    // 1. KAYDET (YENİ EKLE veya GÜNCELLE)
    const handleSave = async () => {
        const token = getToken();
        const isEdit = !!formData.id;
        const method = isEdit ? 'PUT' : 'POST';
        const url = isEdit ? `${API_BASE}/api/socials/${formData.id}` : `${API_BASE}/api/socials`;

        try {
            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                showNotification(isEdit ? "Güncellendi" : "Başarıyla Eklendi", "success");
                setOpenDialog(false);
                fetchSocials(); // Listeyi yenile
            } else {
                const err = await res.json();
                showNotification(err.error || "İşlem başarısız", "error");
            }
        } catch (error) {
            showNotification("Sunucu hatası", "error");
        }
    };

    // 2. SİL
    const handleDelete = async (id: number) => {
        if (!confirm("Bu hesabı silmek istediğine emin misin?")) return;

        try {
            const res = await fetch(`${API_BASE}/api/socials/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${getToken()}` }
            });

            if (res.ok) {
                showNotification("Silindi", "success");
                setSocials(prev => prev.filter(s => s.id !== id));
            }
        } catch (error) {
            showNotification("Silinemedi", "error");
        }
    };

    // 3. AKTİF/PASİF YAP (Toggle)
    const handleToggleActive = async (item: SocialMedia) => {
        // UI'da hemen güncelle (Optimistic Update)
        const newStatus = !item.isActive;
        setSocials(prev => prev.map(s => s.id === item.id ? { ...s, isActive: newStatus } : s));

        try {
            await fetch(`${API_BASE}/api/socials/${item.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}` },
                body: JSON.stringify({ isActive: newStatus })
            });
        } catch (error) {
            showNotification("Durum güncellenemedi", "error");
            fetchSocials(); // Hata varsa geri al
        }
    };

    // --- YARDIMCILAR ---
    const handleOpenDialog = (item?: SocialMedia) => {
        if (item) {
            setFormData(item);
        } else {
            setFormData({
                platform: '',
                name: '',
                url: '',
                iconKey: 'Instagram',
                order: socials.length + 1, // Otomatik sıra numarası ver
                isActive: true
            });
        }
        setOpenDialog(true);
    };

    const showNotification = (msg: string, type: 'success' | 'error') => {
        setNotification({ open: true, message: msg, type: type });
    };

    // İkon Render Helper
    const renderIcon = (key: string) => {
        const found = AVAILABLE_ICONS.find(i => i.key === key);
        return found ? found.icon : <Public />;
    };

    return (
        <Box sx={{ p: 4, minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
            
            {/* BAŞLIK VE EKLE BUTONU */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
                <Typography variant="h4" sx={{ color: "#118DF2", fontWeight: "bold" }}>
                    Sosyal Medya Hesapları
                </Typography>
                <Button 
                    variant="contained" 
                    startIcon={<Add />} 
                    onClick={() => handleOpenDialog()}
                    sx={{ bgcolor: "#118DF2", fontWeight: "bold" }}
                >
                    Yeni Ekle
                </Button>
            </Box>

            {/* LİSTELEME ALANI (Flexbox Grid) */}
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 3 }}>
                {socials.map((social) => (
                    <Card key={social.id} sx={{ boxShadow: 3, borderRadius: 2, position: 'relative', opacity: social.isActive ? 1 : 0.6 }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                <Box sx={{ 
                                    width: 50, h: 50, borderRadius: '50%', 
                                    bgcolor: '#e3f2fd', color: '#118DF2', 
                                    display: 'flex', alignItems: 'center', justifyContent: 'center' 
                                }}>
                                    {renderIcon(social.iconKey)}
                                </Box>
                                <Box>
                                    <Typography variant="h6" fontWeight="bold">{social.name}</Typography>
                                    <Typography variant="caption" color="text.secondary">{social.platform}</Typography>
                                </Box>
                                <Chip label={`Sıra: ${social.order}`} size="small" sx={{ ml: 'auto' }} />
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, color: 'text.secondary', fontSize: '0.9rem' }}>
                                <LinkIcon fontSize="small" />
                                <a href={social.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {social.url}
                                </a>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, pt: 2, borderTop: '1px solid #eee' }}>
                                <FormControlLabel
                                    control={<Switch checked={social.isActive} onChange={() => handleToggleActive(social)} color="success" />}
                                    label={social.isActive ? "Yayında" : "Gizli"}
                                />
                                <Box>
                                    <IconButton color="primary" onClick={() => handleOpenDialog(social)}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton color="error" onClick={() => handleDelete(social.id)}>
                                        <Delete />
                                    </IconButton>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            {socials.length === 0 && !loading && (
                <Typography textAlign="center" color="text.secondary" mt={5}>Henüz hiç sosyal medya hesabı eklenmemiş.</Typography>
            )}

            {/* --- EKLEME / DÜZENLEME MODALI --- */}
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
                <DialogTitle>{formData.id ? "Hesabı Düzenle" : "Yeni Hesap Ekle"}</DialogTitle>
                <DialogContent>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
                        
                        {/* Platform Adı (Kod tarafı için) */}
                        <TextField
                            label="Platform (Kod)"
                            placeholder="örn: instagram (küçük harf, boşluksuz)"
                            fullWidth
                            value={formData.platform}
                            onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                            helperText="Sistem içinde benzersiz olmalı (örn: instagram, whatsapp)"
                            disabled={!!formData.id} // Düzenlerken değiştirilemez yapalım
                        />

                        {/* Görünen İsim */}
                        <TextField
                            label="Görünen İsim"
                            placeholder="örn: Instagram Sayfamız"
                            fullWidth
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />

                        {/* İkon Seçimi */}
                        <FormControl fullWidth>
                            <InputLabel>İkon Seç</InputLabel>
                            <Select
                                value={formData.iconKey}
                                label="İkon Seç"
                                onChange={(e) => setFormData({ ...formData, iconKey: e.target.value })}
                            >
                                {AVAILABLE_ICONS.map((icon) => (
                                    <MenuItem key={icon.key} value={icon.key}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            {icon.icon} {icon.label}
                                        </Box>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {/* URL */}
                        <TextField
                            label="Link (URL)"
                            placeholder="https://..."
                            fullWidth
                            value={formData.url}
                            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                        />

                        {/* Sıralama */}
                        <TextField
                            label="Sıralama"
                            type="number"
                            fullWidth
                            value={formData.order}
                            onChange={(e) => setFormData({ ...formData, order: Number(e.target.value) })}
                        />

                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenDialog(false)} color="inherit">İptal</Button>
                    <Button onClick={handleSave} variant="contained" color="primary" startIcon={<Save />}>
                        Kaydet
                    </Button>
                </DialogActions>
            </Dialog>

            {/* BİLDİRİM */}
            <Snackbar 
                open={notification.open} 
                autoHideDuration={4000} 
                onClose={() => setNotification({...notification, open: false})}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert severity={notification.type} variant="filled">{notification.message}</Alert>
            </Snackbar>

        </Box>
    )
}

export default Social