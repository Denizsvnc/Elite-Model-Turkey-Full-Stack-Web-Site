import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Tooltip, CircularProgress, Alert } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import api from ".././src/services/api";

interface PaymentCodeBoxProps {
  onCodeGenerated: (code: string) => void;
  NameSurname: string;
  ApplicationName?: string;
  refreshTrigger?: any; // dışarıdan tetikleme için
  onCopied?: () => void;
}

const PaymentCodeBox: React.FC<PaymentCodeBoxProps> = ({ 
  onCodeGenerated, 
  NameSurname, 
  ApplicationName = "Elite Model Başvuru",
  refreshTrigger,
  onCopied
}) => {
  const [code, setCode] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Hata yönetimi için

  // Kod yenileme fonksiyonu dışarıdan da tetiklenebilir
  const fetchUniqueCode = async () => {
    try {
      setLoading(true);
      const response = await api.get('/api/payment/generate-key');
      const uniqueCode = response.data.code;
      if (uniqueCode) {
        setCode(uniqueCode);
        if (onCodeGenerated) {
          onCodeGenerated(uniqueCode);
        }
      }
    } catch (err) {
      console.error("Kod üretme hatası:", err);
      setError("Kod alınamadı");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUniqueCode();
    // eslint-disable-next-line
  }, [refreshTrigger]);

  const fullTextToCopy = `${NameSurname} ${ApplicationName} ${code}`;

  const handleCopy = () => {
    if (!code) return;
    navigator.clipboard.writeText(fullTextToCopy);
    setCopied(true);
    if (typeof onCopied === 'function') onCopied();
    setTimeout(() => setCopied(false), 2000);
  };

  const displayCode = code ? code.split("").join("-") : "";

  return (
    <Paper 
      elevation={0} 
      sx={{ 
        p: 3, 
        mt: 2, 
        mb: 2,
        backgroundColor: '#f8faff', 
        border: '1px solid #e3e8f0', 
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center" gap={1} mb={2}>
        <Box sx={{ p: 1, backgroundColor: '#e0e7ff', borderRadius: '50%', color: '#3730a3' }}>
          <CreditCardIcon />
        </Box>
        <Typography variant="subtitle1" fontWeight="bold">
          Ödeme Açıklama Metni
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Aşağıdaki kutuya tıklayarak <strong>hazır açıklama metnini</strong> kopyalayıp banka açıklama kısmına yapıştırınız.
        </Typography>
      </Box>

      {/* Tıklanabilir Alan */}
      <Box 
        onClick={!loading && !error ? handleCopy : undefined} // Yüklenirken veya hatada tıklamayı engelle
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: '350px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          border: '2px dashed #90caf9',
          borderRadius: '12px',
          p: 2,
          cursor: loading || error ? 'default' : 'pointer', // Cursor yönetimi
          transition: 'all 0.2s',
          '&:hover': {
            borderColor: loading || error ? '#90caf9' : '#1976d2',
            backgroundColor: loading || error ? '#fff' : '#f0f7ff'
          },
          '&:active': {
            transform: !loading && !error ? 'scale(0.98)' : 'none'
          }
        }}
      >
        {loading ? (
           <CircularProgress size={24} />
        ) : error ? (
           <Typography color="error" variant="body2">Kod Oluşturulamadı</Typography>
        ) : (
          <>
             {/* Görsel olarak sadece KOD öne çıkarılır ama altında tam metin görünür */}
             <Typography variant="h4" fontFamily="monospace" fontWeight="bold" letterSpacing={4} color="primary" sx={{mb: 1}}>
                {displayCode}
             </Typography>
             
             {/* Kullanıcı neyi kopyaladığını görsün diye tam metni küçük yazıyoruz */}
             <Box sx={{ backgroundColor: '#f5f5f5', p: 1, borderRadius: '8px', width: '100%' }}>
                <Typography variant="caption" display="block" color="text.secondary" sx={{ wordBreak: 'break-word' }}>
                   Kopyalanacak Metin: <br/>
                   <strong>{fullTextToCopy}</strong>
                </Typography>
             </Box>
          </>
        )}

        {/* Kopyalandı İkonu - Sadece yükleme bittiyse ve hata yoksa göster */}
        {!loading && !error && (
            <Box position="absolute" top={10} right={10}>
            {copied ? (
                <CheckCircleIcon color="success" />
            ) : (
                <ContentCopyIcon color="action" fontSize="small" />
            )}
            </Box>
        )}
        
        {copied && (
          <Tooltip title="Metin Kopyalandı!" open={true} placement="top">
             <Box position="absolute" top={-10} left="50%" />
          </Tooltip>
        )}
      </Box>

      {copied && (
         <Alert severity="success" sx={{ mt: 2, width: '100%', maxWidth: '350px', py: 0 }}>
             Tam açıklama metni panoya kopyalandı!
         </Alert>
      )}
    </Paper>
  );
};

export default PaymentCodeBox;