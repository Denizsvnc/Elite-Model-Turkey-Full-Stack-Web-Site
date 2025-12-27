// Mail ile ilgili tip tanımları

export interface MailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export interface ContactMailData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApplicationMailData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  gender: string;
  heightCm: number;
  selfieUrl?: string;
  profilePhoto?: string;
  fullBodyPhoto?: string;
}
