import prisma from './src/lib/prisma';

async function checkAdmins() {
  try {
    const admins = await prisma.adminUser.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        isActive: true
      }
    });
    
    if (admins.length === 0) {
      console.log('❌ Veritabanında hiç admin kullanıcısı yok!');
    } else {
      console.log(`✅ Toplam ${admins.length} admin kullanıcısı bulundu:\n`);
      admins.forEach((admin, index) => {
        console.log(`${index + 1}. ${admin.email}`);
        console.log(`   İsim: ${admin.name || 'Belirtilmemiş'}`);
        console.log(`   Rol: ${admin.role}`);
        console.log(`   Aktif: ${admin.isActive ? 'Evet' : 'Hayır'}\n`);
      });
    }
    
    await prisma.$disconnect();
  } catch (error: any) {
    console.error('Hata:', error?.message || error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

checkAdmins();
