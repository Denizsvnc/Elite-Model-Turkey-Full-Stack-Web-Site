// types/telegram.types.ts

// Veritabanı ayar yapısı
export interface TelegramConfig {
  telegram_enable?: string;
  telegram_token?: string;
  telegram_chat_id?: string;
  [key: string]: string | undefined;
}

// Gönderim Seçenekleri
export interface TelegramMessageOptions {
  text?: string;       // Sadece yazı gönderirken
  caption?: string;    // Resim/Video altındaki yazı
  mediaUrl?: string;   // Resim veya Video linki (https://...)
  parse_mode?: 'HTML' | 'Markdown';
}