import React from 'react';
import { Box, Button } from '@mui/material';
interface CreditSectionProps {
    price: number | null;
    loading: boolean;
    onSubmit: () => void;
}
const CreditSection: React.FC<CreditSectionProps> = ({ price, loading, onSubmit }) => {
        return (
                <Box sx={{marginTop:"20px", fontSize:"18px", fontWeight:"bold"}}>
                        <p>Katılım Ücreti:&nbsp;<span style={{color:"blue" , fontWeight:"larger", fontSize:"1.2rem"}}>{price} TL</span></p>
                        <p>Kredi Kartı İle Ödeme Yapmak İçin Butona Tıklayınız;</p> <br />
                        <Button 
                            variant="contained" 
                            sx={{width:"100%", height:"4rem", fontSize:"1.5rem", fontWeight:"bold"}} 
                            onClick={onSubmit}
                            disabled={loading}
                        >
                            {loading ? 'Gönderiliyor...' : 'Ödeme Yap ve Profesyonel Yolculuğuna Başla!'}
                        </Button>
                </Box>
        );
};
export default CreditSection;

