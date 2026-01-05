// services/TelegramService.ts
import prisma from '../lib/prisma';
import { TelegramConfig, TelegramMessageOptions } from '../types/telegram.types';
import path from 'path';
import fs from 'fs';
import FormData from 'form-data';

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
  private static async sendRequest(endpoint: string, body: any, token: string, isFormData = false) {
    try {
      const url = `https://api.telegram.org/bot${token}/${endpoint}`;
      let response, data, responseText;
      if (isFormData) {
        response = await fetch(url, {
          method: 'POST',
          headers: body.getHeaders(),
          body,
        });
        responseText = await response.text();
        try {
          data = JSON.parse(responseText);
        } catch {
          data = {};
        }
      } else {
        response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
        responseText = await response.text();
        try {
          data = JSON.parse(responseText);
        } catch {
          data = {};
        }
      }
      if (!data || !data.ok) {
        console.error(`❌ Telegram API response text:`, responseText);
        throw new Error(`Telegram API (${endpoint}) Hatası: ${(data && data.description) || 'Bilinmeyen hata'} | Raw response: ${responseText}`);
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

    // Eğer local path ise dosyayı doğrudan gönder
    if (options.mediaUrl.startsWith('/uploads')) {
      const absPath = path.join(process.cwd(), 'src', options.mediaUrl);
      if (fs.existsSync(absPath)) {
        const form = new FormData();
        form.append('chat_id', config.telegram_chat_id);
        form.append('photo', fs.createReadStream(absPath));
        if (options.caption) form.append('caption', options.caption);
        form.append('parse_mode', 'HTML');
        await this.sendRequest('sendPhoto', form, config.telegram_token!, true);
        return;
      }
    }
    // Aksi halde (tam url ise) eski yöntemle gönder
    await this.sendRequest('sendPhoto', {
      chat_id: config.telegram_chat_id,
      photo: options.mediaUrl,
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