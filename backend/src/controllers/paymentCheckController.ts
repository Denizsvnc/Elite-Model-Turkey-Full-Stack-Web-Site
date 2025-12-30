import { Request, Response } from 'express';
// Servisi import et
import { processBankEmailsService } from "../Services/paymentService";

export const checkBankEmails = async (req: Request, res: Response) => {
    try {
        // Sadece servisi çağırıyoruz. Port, IP derdi yok.
        const result = await processBankEmailsService();
        
        return res.status(200).json(result);

    } catch (error) {
        return res.status(500).json({ error: "Mail kontrol işleminde hata oluştu." });
    }
};