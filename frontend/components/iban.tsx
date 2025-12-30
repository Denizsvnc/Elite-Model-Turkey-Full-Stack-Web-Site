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

    const handleCopy = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setSnackbarMessage(`${label} Panoya Kopyalandı`);
        setSnackbarOpen(true);
    };

    const handleCodeGenerated = (code: string) => {
        setPaymentKey(code);
    };

    // Başvuru gönderildikten sonra paymentKey yenile
    const handleSubmitAndRefresh = (paymentKey: string) => {
        if (onSubmit) onSubmit(paymentKey);
        setTimeout(() => setRefreshKey(prev => prev + 1), 500); // kısa gecikme ile tetikle
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
                Not: Aşağıdaki kutuya tıklayarak açıklama kısmına yazmanız gereken <strong>tam metni</strong> kopyalayabilirsiniz:
            </Typography>

            {/* GÜNCELLENMİŞ KULLANIM: NameSurname Gönderiyoruz */}
            <PaymentCodeBox 
                onCodeGenerated={handleCodeGenerated} 
                NameSurname={NameSurname + " - "} 
                ApplicationName="Elite Model Başvuru Ücreti -" 
                refreshTrigger={refreshKey}
            />

            <Typography variant="body2" color="text.secondary" sx={{mt: 1, mb: 3}}>
                Eğer ödeme yaptıysanız, lütfen aşağıdaki butona tıklayın. Size 30 dakika içerisinde SMS ile dönüş yapacağız.
            </Typography>
            
            <Button  
                variant="contained" 
                fullWidth
                disabled={loading || !paymentKey}
                onClick={() => handleSubmitAndRefresh(paymentKey)}
                sx={{ height:"4rem", fontSize:"1.2rem", fontWeight:"bold" }}
            >
                {loading ? 'Gönderiliyor...' : 'Ödemeni Yaptıysan Tıkla ve Başvurunu Tamamla!'}     
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