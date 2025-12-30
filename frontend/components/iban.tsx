import React, { useState } from 'react';
import { Box, Button, Typography, Snackbar, Alert } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PaymentCodeBox from './PaymentCodeBox'; 

interface IbanSectionProps {
    price: number | null;
    loading: boolean;
    onSubmit: (paymentKey: string) => void; 
    NameSurname: string; // Bu prop zaten Iban bileşenine geliyor
}

const Iban: React.FC<IbanSectionProps> = ({ price, loading, onSubmit, NameSurname }) => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [paymentKey, setPaymentKey] = useState<string>("");
    const [refreshKey, setRefreshKey] = useState<number>(0);
    const [copied, setCopied] = useState<boolean>(false);

    const handleCopy = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setSnackbarMessage(`${label} Panoya Kopyalandı`);
        setSnackbarOpen(true);
    };

    const handleCodeGenerated = (code: string) => {
        setPaymentKey(code);
        setCopied(false); // yeni kod gelince kopyalanmadı olarak başla
    };

    // Başvuru gönderildikten sonra paymentKey yenile
    const handleSubmitAndRefresh = (paymentKey: string) => {
        if (onSubmit) onSubmit(paymentKey);
        setTimeout(() => setRefreshKey(prev => prev + 1), 500); // kısa gecikme ile tetikle
    };

    // PaymentCodeBox'ın kopyalama fonksiyonunu yakalamak için
    const handleCopied = () => {
        setCopied(true);
    };

    return (
        <Box sx={{ mt: 3, p: 2 }}>
            <Box sx={{ fontSize: "18px", fontWeight: "bold", mb: 2 }}>
                 <p>Katılım Ücreti:&nbsp;<span style={{color:"blue" , fontWeight:"larger", fontSize:"1.2rem"}}>{price} TL</span></p> 
                 
                 {/* ... Hesap Adı ve IBAN kısımları aynı ... */}
                 <Box display="flex" alignItems="center" gap={1} my={1}>
                    <span>Hesap Adı: GVK REKLAM VE ORGANİZASYON TİCARET LİMİT</span>
                    <ContentCopyIcon 
                        sx={{cursor:"pointer", color:"blue"}} 
                        onClick={() => handleCopy("GVK REKLAM VE ORGANİZASYON TİCARET LİMİT", "Hesap Adı")}
                    />
                 </Box>

                 <Box display="flex" alignItems="center" gap={1}>
                    <span>IBAN: TR56 0001 0019 7997 8059 3850 01</span>
                    <ContentCopyIcon 
                        sx={{cursor:"pointer", color:"blue"}} 
                        onClick={() => handleCopy("TR560001001979978059385001", "IBAN")}
                    />
                 </Box>
            </Box>
            
                        <Typography variant="body2" sx={{mt: 3}}>
                                <span style={{fontWeight:'bold', color:'#1976d2'}}>Başvuru ve ödeme adımları:</span><br/>
                                <ol style={{marginLeft:'1.2em', marginTop:'0.5em', marginBottom:'0.5em'}}>
                                    <li><span style={{color:'red', fontWeight:'bold'}}>1. Açıklama metnini aşağıdaki kutudan kopyalayın.</span></li>
                                    <li>2. <span style={{color:'#1976d2'}}>Başvuru gönderme butonuna tıklayın.</span></li>
                                    <li>3. <span style={{color:'#1976d2'}}>IBAN'a ödeme yaparken açıklama kısmına kopyaladığınız metni eksiksiz olarak yapıştırın.</span></li>
                                </ol>
                                <span style={{color:'red', fontWeight:'bold'}}>Açıklama metni kopyalanmadan başvuru gönderilemez. Ödeme açıklamasında bu metni kullanmak zorunludur.</span>
                        </Typography>

            {/* GÜNCELLENMİŞ KULLANIM: NameSurname Gönderiyoruz */}
            <PaymentCodeBox 
                onCodeGenerated={handleCodeGenerated} 
                NameSurname={NameSurname + " - "} 
                ApplicationName="Elite Model Başvuru Ücreti -" 
                refreshTrigger={refreshKey}
                onCopied={handleCopied}
            />

            <Typography variant="body2" color="text.secondary" sx={{mt: 1, mb: 3}}>
                Eğer ödeme yaptıysanız, lütfen aşağıdaki butona tıklayın. Size 30 dakika içerisinde SMS ile dönüş yapacağız.
            </Typography>
            
            <Button  
                variant="contained" 
                fullWidth
                disabled={loading || !paymentKey || !copied}
                onClick={() => handleSubmitAndRefresh(paymentKey)}
                sx={{ height:"4rem", fontSize:"1.2rem", fontWeight:"bold" }}
            >
                {loading ? 'Gönderiliyor...' : !copied ? 'Önce açıklama metnini kopyalayın!' : 'Ödemeni Yaptıysan Tıkla ve Başvurunu Tamamla!'}     
            </Button>    

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={2000}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert severity="success" variant="filled">
                    {snackbarMessage}
                </Alert>
            </Snackbar>                             
        </Box>
    );
};
export default Iban;