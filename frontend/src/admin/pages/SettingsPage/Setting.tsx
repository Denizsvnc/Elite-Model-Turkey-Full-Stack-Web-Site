import React, { useState, useEffect } from 'react';
import { 
    Box, 
    Typography, 
    Card, 
    CardContent, 
    TextField, 
    Button, 
    CircularProgress, 
    Snackbar, 
    Alert,
    Tabs,
    Tab,
    Switch,
    FormControlLabel,
    Divider,
    IconButton,
    InputAdornment,
    Chip
} from '@mui/material';
import { Visibility, VisibilityOff, Save, Email, Telegram, WhatsApp, Settings as SettingsIcon } from '@mui/icons-material';

// 1. API ADRESİ ve TİP TANIMLARI
const API_BASE = (import.meta as any).env?.VITE_API_BASE || 'http://localhost:3005';

interface SystemSetting {
    id: number;
    key: string;
    value: string;
    description?: string;
    group: string;
    isSecret: boolean;
}

interface NotificationRule {
    id: number;
    slug: string;
    name: string;
    emailEnabled: boolean;
    telegramEnabled: boolean;
    whatsappEnabled: boolean;
    isActive: boolean;
}

const Setting = () => {
    // --- STATE TANIMLARI ---
    const [currentPrice, setCurrentPrice] = useState<number | null>(null);
    const [newPrice, setNewPrice] = useState<string>('');
    const [settings, setSettings] = useState<SystemSetting[]>([]);
    const [activeTab, setActiveTab] = useState(0); 
    const [showSecrets, setShowSecrets] = useState<{ [key: string]: boolean }>({}); 
    const [rules, setRules] = useState<NotificationRule[]>([]);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState(false); 
    const [notification, setNotification] = useState<{open: boolean, message: string, type: 'success' | 'error'}>({
        open: false, message: '', type: 'success'
    });

    const getToken = () => localStorage.getItem('token'); 

    // --- VERİ ÇEKME İŞLEMLERİ (GET) ---
    useEffect(() => {
        fetchAllData();
    }, []);

    const fetchAllData = async () => {
        setLoading(true);
        const token = getToken();
        const headers = { 'Authorization': `Bearer ${token}` };

        try {
            const feeRes = await fetch(`${API_BASE}/api/fee`);
            const feeData = await feeRes.json();
            if (feeData.success) {
                setCurrentPrice(feeData.amount);
                setNewPrice(feeData.amount.toString());
            }

            const settingsRes = await fetch(`${API_BASE}/api/admin/settings`, { headers });
            if (settingsRes.ok) {
                const settingsData = await settingsRes.json();
                setSettings(settingsData);
            }

            const rulesRes = await fetch(`${API_BASE}/api/admin/rules`, { headers });
            if (rulesRes.ok) {
                const rulesData = await rulesRes.json();
                setRules(rulesData);
            }

        } catch (error) {
            console.error("Veri çekme hatası:", error);
            showNotification("Veriler yüklenirken hata oluştu.", "error");
        } finally {
            setLoading(false);
        }
    };

    // --- GÜNCELLEME İŞLEMLERİ (PUT) ---
    const handleFeeUpdate = async () => {
        if (!newPrice) return;
        setActionLoading(true);
        try {
            const res = await fetch(`${API_BASE}/api/fee`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}` },
                body: JSON.stringify({ amount: newPrice })
            });
            const data = await res.json();
            if (data.success) {
                setCurrentPrice(data.amount);
                showNotification("Ücret güncellendi!", "success");
            }
        } catch {
            showNotification("Ücret güncellenemedi.", "error");
        } finally {
            setActionLoading(false);
        }
    };

    const handleRuleToggle = async (slug: string, field: string, currentValue: boolean) => {
        const updatedRules = rules.map(r => r.slug === slug ? { ...r, [field]: !currentValue } : r);
        setRules(updatedRules);

        try {
            const ruleToUpdate = updatedRules.find(r => r.slug === slug);
            if (!ruleToUpdate) return;

            await fetch(`${API_BASE}/api/admin/rules/${slug}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}` },
                body: JSON.stringify(ruleToUpdate)
            });
            showNotification("Kural güncellendi.", "success");
        } catch (error) {
            showNotification("Kural güncellenemedi.", "error");
            fetchAllData(); 
        }
    };

    // Input değişimi (Local State)
    const handleSettingChange = (key: string, newValue: string) => {
        setSettings(prev => prev.map(s => s.key === key ? { ...s, value: newValue } : s));
    };

    // Manuel Kaydetme (Inputlar için)
    const handleSettingSave = async (key: string) => {
        const setting = settings.find(s => s.key === key);
        if (!setting) return;

        setActionLoading(true);
        try {
            await fetch(`${API_BASE}/api/admin/settings/${key}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}` },
                body: JSON.stringify({ value: setting.value, isActive: true })
            });
            showNotification(`${setting.key} güncellendi!`, "success");
        } catch {
            showNotification("Ayar kaydedilemedi.", "error");
        } finally {
            setActionLoading(false);
        }
    };

    // OTOMATİK KAYDETME (Switchler İçin)
    // Switch değiştiği anda API'ye istek atar.
    const handleSwitchAutoSave = async (key: string, newValueBoolean: boolean) => {
        // 1. Önce UI'ı güncelle (Hızlı hissettirmek için)
        const newValueString = newValueBoolean ? "true" : "false";
        setSettings(prev => prev.map(s => s.key === key ? { ...s, value: newValueString } : s));

        // 2. Arka planda kaydet
        try {
            await fetch(`${API_BASE}/api/admin/settings/${key}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${getToken()}` },
                body: JSON.stringify({ value: newValueString, isActive: true })
            });
            showNotification(`${key} durumu değiştirildi.`, "success");
        } catch {
            showNotification("Değişiklik kaydedilemedi!", "error");
            fetchAllData(); // Hata varsa eski veriyi geri getir
        }
    };

    // --- YARDIMCILAR ---
    const showNotification = (msg: string, type: 'success' | 'error') => {
        setNotification({ open: true, message: msg, type: type });
    };

    const toggleSecret = (key: string) => {
        setShowSecrets(prev => ({ ...prev, [key]: !prev[key] }));
    };

    // Ayarın Boolean olup olmadığını anlayan fonksiyon
    const isBooleanSetting = (value: string) => {
        return value === "true" || value === "false";
    };

    const emailSettings = settings.filter(s => s.group === 'email');
    const telegramSettings = settings.filter(s => s.group === 'telegram');
    const whatsappSettings = settings.filter(s => s.group === 'whatsapp');

    const currentSettingsList = activeTab === 0 ? emailSettings : activeTab === 1 ? telegramSettings : whatsappSettings;

    if (loading) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}><CircularProgress /></Box>;
    }

    return (
        <Box sx={{ p: 4, minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
            
            <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
                <Typography sx={{ color: "#118DF2", fontSize: "2.5rem", fontWeight: "bold", display:'flex', alignItems:'center', gap: 2 }}>
                    <SettingsIcon fontSize="large" /> Yönetim Paneli
                </Typography>
            </Box>

            {/* --- FLEXBOX DÜZENİ --- */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                
                {/* --- ÜST SATIR (Ücret ve Bildirim Kuralları) --- */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                    
                    {/* --- KUTU 1: BAŞVURU ÜCRETİ --- */}
                    <Box sx={{ flex: 1, minWidth: { md: '300px' } }}>
                        <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2, height: '100%' }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>💰 Başvuru Ücreti</Typography>
                                <Box sx={{ textAlign: "center", my: 3 }}>
                                    <Typography variant="body2" color="text.secondary">Mevcut Tutar</Typography>
                                    <Typography variant="h3" color="#118DF2" fontWeight="bold">
                                        {currentPrice} ₺
                                    </Typography>
                                </Box>
                                <TextField 
                                    label="Yeni Tutar" 
                                    type="number" 
                                    fullWidth 
                                    value={newPrice}
                                    onChange={(e) => setNewPrice(e.target.value)}
                                    sx={{ mb: 2 }}
                                />
                                <Button variant="contained" fullWidth onClick={handleFeeUpdate} disabled={actionLoading}>
                                    {actionLoading ? "..." : "Fiyatı Güncelle"}
                                </Button>
                            </CardContent>
                        </Card>
                    </Box>

                    {/* --- KUTU 2: BİLDİRİM KURALLARI --- */}
                    <Box sx={{ flex: 2 }}>
                        <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2, height: '100%' }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 3 }}>📢 Bildirim Kuralları</Typography>
                                
                                {rules.map((rule) => (
                                    <Box key={rule.id} sx={{ mb: 3, p: 2, bgcolor: '#f0f7ff', borderRadius: 2 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                            <Typography variant="subtitle1" fontWeight="bold">{rule.name}</Typography>
                                            <Chip label={rule.isActive ? "Aktif" : "Pasif"} color={rule.isActive ? "success" : "default"} size="small" />
                                        </Box>
                                        <Divider sx={{ mb: 2 }} />
                                        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                                            <FormControlLabel
                                                control={<Switch checked={rule.emailEnabled} onChange={() => handleRuleToggle(rule.slug, 'emailEnabled', rule.emailEnabled)} />}
                                                label={<Box sx={{display:'flex', alignItems:'center', gap:1}}><Email color={rule.emailEnabled ? "primary" : "disabled"}/> Email</Box>}
                                            />
                                            <FormControlLabel
                                                control={<Switch checked={rule.telegramEnabled} onChange={() => handleRuleToggle(rule.slug, 'telegramEnabled', rule.telegramEnabled)} />}
                                                label={<Box sx={{display:'flex', alignItems:'center', gap:1}}><Telegram color={rule.telegramEnabled ? "primary" : "disabled"}/> Telegram</Box>}
                                            />
                                            <FormControlLabel
                                                control={<Switch checked={rule.whatsappEnabled} onChange={() => handleRuleToggle(rule.slug, 'whatsappEnabled', rule.whatsappEnabled)} />}
                                                label={<Box sx={{display:'flex', alignItems:'center', gap:1}}><WhatsApp color={rule.whatsappEnabled ? "success" : "disabled"}/> Whatsapp</Box>}
                                            />
                                        </Box>
                                    </Box>
                                ))}
                            </CardContent>
                        </Card>
                    </Box>

                </Box>

                {/* --- ALT SATIR (Sistem Ayarları) --- */}
                <Box sx={{ width: '100%' }}>
                    <Card sx={{ p: 2, boxShadow: 3, borderRadius: 2 }}>
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>⚙️ Sistem Entegrasyon Ayarları</Typography>
                            
                            <Tabs value={activeTab} onChange={(_, v) => setActiveTab(v)} sx={{ mb: 3, borderBottom: 1, borderColor: 'divider' }}>
                                <Tab label="Email Ayarları" icon={<Email />} iconPosition="start" />
                                <Tab label="Telegram Ayarları" icon={<Telegram />} iconPosition="start" />
                                <Tab label="Whatsapp Ayarları" icon={<WhatsApp />} iconPosition="start" />
                            </Tabs>

                            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                                {currentSettingsList.map((setting) => {
                                    
                                    // ÖZEL KONTROL: Eğer değer "true" veya "false" ise SWITCH göster
                                    if (isBooleanSetting(setting.value)) {
                                        return (
                                            <Box key={setting.id} sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Box>
                                                    <Typography variant="subtitle2" fontWeight="bold">
                                                        {setting.description || setting.key}
                                                    </Typography>
                                                    <Typography variant="caption" color="text.secondary">
                                                        {setting.key}
                                                    </Typography>
                                                </Box>
                                                <FormControlLabel
                                                    control={
                                                        <Switch 
                                                            checked={setting.value === "true"} 
                                                            onChange={(e) => handleSwitchAutoSave(setting.key, e.target.checked)} 
                                                            color="success"
                                                        />
                                                    }
                                                    label={setting.value === "true" ? "Aktif" : "Pasif"}
                                                />
                                            </Box>
                                        )
                                    }

                                    // Değilse (Metin, Şifre vb.) klasik INPUT göster
                                    return (
                                        <Box key={setting.id} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                                            <TextField
                                                label={setting.description || setting.key}
                                                value={setting.value || ''}
                                                fullWidth
                                                type={setting.isSecret && !showSecrets[setting.key] ? 'password' : 'text'}
                                                onChange={(e) => handleSettingChange(setting.key, e.target.value)}
                                                helperText={setting.key}
                                                InputProps={{
                                                    endAdornment: setting.isSecret && (
                                                        <InputAdornment position="end">
                                                            <IconButton onClick={() => toggleSecret(setting.key)} edge="end">
                                                                {showSecrets[setting.key] ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                            <Button 
                                                variant="contained" 
                                                color="success" 
                                                sx={{ height: 56 }}
                                                onClick={() => handleSettingSave(setting.key)}
                                            >
                                                <Save />
                                            </Button>
                                        </Box>
                                    );
                                })}
                                
                                {currentSettingsList.length === 0 && (
                                    <Typography sx={{ p: 2, color: 'text.secondary' }}>Bu grupta henüz bir ayar yok.</Typography>
                                )}
                            </Box>
                        </CardContent>
                    </Card>
                </Box>

            </Box>

            <Snackbar 
                open={notification.open} 
                autoHideDuration={4000} 
                onClose={() => setNotification({...notification, open: false})}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert severity={notification.type} variant="filled">
                    {notification.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Setting;