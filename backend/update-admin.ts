import prisma from './src/lib/prisma';
import bcrypt from 'bcrypt';

async function updateAdmin() {
  try {
    const oldEmail = 'admin';
    const newEmail = 'admin@com';
    const newPassword = '123';
    
    // Şifreyi hashle
    const passwordHash = await bcrypt.hash(newPassword, 10);
    
    // Admin kullanıcısını güncelle
    const admin = await prisma.adminUser.update({
      where: { email: oldEmail },
      data: {
        email: newEmail,
        passwordHash
      }
    });
    
    console.log('✅ Admin kullanıcısı başarıyla güncellendi!');
    console.log('Yeni Email:', admin.email);
    console.log('Yeni Şifre:', newPassword);
    console.log('Rol:', admin.role);
    
    await prisma.$disconnect();
  } catch (error: any) {
    console.error('❌ Hata:', error?.message || error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

updateAdmin();
