// types/whatsapp.types.ts

// Veritabanı Ayarları (SystemSetting tablosundan gelenler)
export interface WhatsappConfig {
  whatsapp_enable?: string;
  whatsapp_api_url?: string;
  whatsapp_api_key?: string; 
  whatsapp_phone?: string; // Bildirimlerin gideceği varsayılan Admin numarası
  [key: string]: string | undefined;
}

// Mesaj Gönderme Seçenekleri
export interface WhatsappMessageOptions {
  phone?: string;      // Eğer boş bırakılırsa, config'deki admin numarasına gider
  text?: string;       // Mesaj içeriği
  mediaUrl?: string;   // Resim/Video/PDF linki
  caption?: string;    // Medya altı yazısı
}