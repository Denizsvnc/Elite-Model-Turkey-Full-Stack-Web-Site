import { Request, Response } from 'express';
import prisma from '../lib/prisma';
import { ApplicationPageService } from '../Services/applicationPage.service';

const service = new ApplicationPageService();

export class ApplicationPageController {
    async getStatus(req: Request, res: Response) {
        try {
            const status = await service.getStatus();
            return res.status(200).json({
                success: true,
                data : status
            });

        } catch (err) {
            console.error("Başvuru sayfası durum getirme hatası:", err);
            return res.status(500).json({
                success: false,
                error: "Sunucu hatası, durum getirilemedi."
            });
        }
    }

async updateStatus(req: Request, res: Response) {
    try {
      const { isActive } = req.body;
      
      if (typeof isActive !== 'boolean') {
        return res.status(400).json({ 
          success: false, 
          message: 'Geçersiz veri tipi. isActive bir boolean olmalıdır.' 
        });
      }

      const updatedStatus = await service.updateStatus(isActive);
      
      return res.status(200).json({ 
        success: true, 
        message: 'Durum başarıyla güncellendi.',
        data: updatedStatus 
      });
    } catch (error) {
      console.error("Status güncelleme hatası:", error);
      return res.status(500).json({ 
        success: false, 
        message: 'Sunucu hatası oluştu.' 
      });
    }
  }
}
