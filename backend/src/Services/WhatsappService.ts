// services/WhatsappService.ts
import prisma from '../lib/prisma';
import { WhatsappConfig, WhatsappMessageOptions } from '../types/whatsapp.types';

export class WhatsappService {

  // 1. Ayarları Çeken Private Yardımcı Metod
  private static async getConfig(): Promise<WhatsappConfig | null> {
    try {
      const settings = await prisma.systemSetting.findMany({
        where: { group: 'whatsapp' }
      });

      const config: WhatsappConfig = settings.reduce((acc, curr) => {
        if (curr.value) acc[curr.key] = curr.value;
        return acc;
      }, {} as WhatsappConfig);

      // Kontroller
      if (config.whatsapp_enable !== 'true') {
        console.warn("🛑 Whatsapp servisi veritabanından kapalı.");
        return null;
      }

      if (!config.whatsapp_api_url || !config.whatsapp_api_key) {
        console.error("❌ Whatsapp API URL veya Key eksik.");
        return null;
      }

      return config;
    } catch (error) {
      console.error("❌ Whatsapp ayarları çekilemedi:", error);
      return null;
    }
  }

  // 2. Genel HTTP İsteği Atan Metod
  private static async sendRequest(endpoint: string, payload: any, config: WhatsappConfig) {
    try {
      // API sağlayıcısına göre URL yapısı değişebilir.
      // Genellikle: https://api.provider.com/instance123/message?token=XYZ
      // Veya Header'da token isterler. Aşağıdaki Header tabanlı bir örnektir:
      
      const response = await fetch(config.whatsapp_api_url!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Bazı API'ler token'ı header'da ister:
          'Authorization': `Bearer ${config.whatsapp_api_key}`, 
          // Bazı API'ler ise body içinde token ister, dokümantasyona bakmalısın.
        },
        body: JSON.stringify({
            ...payload,
            // Eğer API key body içinde gidecekse buraya ekle:
            // token: config.whatsapp_api_key 
        })
      });

      const data = await response.json();
      
      // Hata kontrolü (API'den API'ye değişir)
      if (data.error || (data.status && data.status !== 'success')) {
         console.error("❌ Whatsapp API dönüş hatası:", data);
      } else {
         console.log("✅ Whatsapp mesajı iletildi.");
      }

    } catch (error) {
      console.error("❌ Whatsapp istek hatası:", error);
    }
  }

  // --- PUBLIC METODLAR ---

  // A. Sadece Yazı Gönder
  static async sendMessage(message: string, targetPhone?: string): Promise<void> {
    const config = await this.getConfig();
    if (!config) return;

    // Hedef numara parametre olarak gelmediyse, veritabanındaki admin numarasını al
    const phone = targetPhone || config.whatsapp_phone;
    if (!phone) {
        console.error("❌ Hedef telefon numarası bulunamadı.");
        return;
    }

    // Payload yapısı kullandığın API'ye göre DEĞİŞEBİLİR
    const payload = {
      to: phone,
      type: 'text', // Bazı API'ler tip ister
      body: message // Veya 'text': message
    };

    await this.sendRequest('sendMessage', payload, config);
  }

  // B. Medya (Resim/Dosya) Gönder
  static async sendMedia(options: WhatsappMessageOptions): Promise<void> {
    const config = await this.getConfig();
    if (!config || !options.mediaUrl) return;

    const phone = options.phone || config.whatsapp_phone;
    if (!phone) return;

    // ornek payload yapisi kullanılan api servisine gore degisir
    const payload = {
      to: phone,
      type: 'image', // veya 'video'
      image: options.mediaUrl, // URL
      caption: options.caption || ""
    };

    await this.sendRequest('sendMedia', payload, config);
  }
}