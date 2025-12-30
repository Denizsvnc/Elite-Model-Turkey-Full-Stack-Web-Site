import prisma from '../lib/prisma'; 


// ayarlarin donecegi tip tanimi
interface EmailSettings {
  [key: string]: string | undefined;
}

export async function getEmailSettings(): Promise<EmailSettings> {
  // 'email' grubundaki ayarları çek
  const settings = await prisma.systemSetting.findMany({
    where: { 
      group: 'email',
    }
  });

  // Gelen veriyi { key: value } sekline cevir
  const config: EmailSettings = settings.reduce((acc, curr) => {
    if (curr.value) {
      acc[curr.key] = curr.value;
    }
    return acc;
  }, {} as EmailSettings);

  return config;
}