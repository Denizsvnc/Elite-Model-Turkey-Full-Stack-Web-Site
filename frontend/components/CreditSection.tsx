import React from 'react';
import { Box, Button } from '@mui/material';
import { useLanguage } from '@/src/contexts/LanguageContext';
interface CreditSectionProps {
    price: number | null;
    loading: boolean;
    onSubmit: () => void;
}
const CreditSection: React.FC<CreditSectionProps> = ({ price, loading, onSubmit }) => {
    const { dict, t, language } = useLanguage();
        return (
                <Box sx={{marginTop:"20px", fontSize:"18px", fontWeight:"bold"}}>
                        <p>{dict?.ApplicationPage?.eft ||"Katılım Ücreti:"}&nbsp;<span style={{color:"blue" , fontWeight:"larger", fontSize:"1.2rem"}}>{price} TL</span></p>
                        <p>{dict?.ApplicationPage?.creditCard2 || "Kredi Kartı İle Ödeme Yapmak İçin Butona Tıklayınız;"}</p> <br />
                        <Button 
                            variant="contained" 
                            sx={{width:"100%", height:"4rem", fontSize:"1.5rem", fontWeight:"bold"}} 
                            onClick={onSubmit}
                            disabled={loading}
                        >
                            {loading ? 'Gönderiliyor...' : dict?.ApplicationPage?.ButtonCreditText || "Kredi Kartı ile Öde"}
                        </Button>
                </Box>
        );
};
export default CreditSection;

