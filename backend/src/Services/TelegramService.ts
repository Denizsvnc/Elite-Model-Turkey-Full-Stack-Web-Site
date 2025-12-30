// services/TelegramService.ts
import prisma from '../lib/prisma';
import { TelegramConfig, TelegramMessageOptions } from '../types/telegram.types';
import path from 'path';
import { fileToBase64 } from '../utils/fileToBase64';

export class TelegramService {

  // 1. YARDIMCI: Ayarları Çeken ve Kontrol Eden Fonksiyon (Private)
  // Bu sayede her fonksiyon içinde aynı kodları yazmaktan kurtuluyoruz.
  private static async getConfig(): Promise<TelegramConfig | null> {
    try {
      const settings = await prisma.systemSetting.findMany({
        where: { group: 'telegram' }
      });

      const config: TelegramConfig = settings.reduce((acc, curr) => {
        if (curr.value) acc[curr.key] = curr.value;
        return acc;
      }, {} as TelegramConfig);

      // Master Switch ve Eksik Veri Kontrolü
      if (config.telegram_enable !== 'true') {
        console.warn("🛑 Telegram servisi veritabanından kapalı.");
        return null;
      }

      if (!config.telegram_token || !config.telegram_chat_id) {
        console.error("❌ Telegram token veya chat_id eksik.");
        return null;
      }

      return config;
    } catch (error) {
      console.error("❌ Telegram ayarları çekilemedi:", error);
      return null;
    }
  }

  // 2. YARDIMCI: Genel İstek Atma Fonksiyonu (Private)
  private static async sendRequest(endpoint: string, body: any, token: string) {
    try {
      const url = `https://api.telegram.org/bot${token}/${endpoint}`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await response.json();
      if (!data.ok) {
        throw new Error(`Telegram API (${endpoint}) Hatası: ${data.description}`);
      }
      console.log(`✅ Telegram ${endpoint} başarılı.`);
    } catch (error) {
      console.error(`❌ Telegram gönderim hatası:`, error);
    }
  }

  // --- PUBLIC METHODLAR ---

  // A. Sadece Yazı Gönder
  static async sendMessage(message: string): Promise<void> {
    const config = await this.getConfig();
    if (!config) return;

    await this.sendRequest('sendMessage', {
      chat_id: config.telegram_chat_id,
      text: message,
      parse_mode: 'HTML'
    }, config.telegram_token!);
  }

  // B. Fotoğraf Gönder (Resim URL + Açıklama)
  static async sendPhoto(options: TelegramMessageOptions): Promise<void> {
    const config = await this.getConfig();
    if (!config || !options.mediaUrl) return;

    let photoToSend = options.mediaUrl;
    if (options.mediaUrl.startsWith('/uploads')) {
      // Sunucu kökünden dosya yolu oluştur
      const absPath = path.join(process.cwd(), 'src', options.mediaUrl);
      const base64 = fileToBase64(absPath);
      if (base64) photoToSend = base64;
    }

    await this.sendRequest('sendPhoto', {
      chat_id: config.telegram_chat_id,
      photo: photoToSend, // Base64 veya tam link
      caption: options.caption || "",
      parse_mode: 'HTML'
    }, config.telegram_token!);
  }

  // C. Video Gönder
  static async sendVideo(options: TelegramMessageOptions): Promise<void> {
    const config = await this.getConfig();
    if (!config || !options.mediaUrl) return;

    await this.sendRequest('sendVideo', {
      chat_id: config.telegram_chat_id,
      video: options.mediaUrl,
      caption: options.caption || "",
      parse_mode: 'HTML'
    }, config.telegram_token!);
  }
}