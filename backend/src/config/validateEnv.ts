const requiredEnvVars = [
    'DATABASE_URL',
    'JWT_SECRET',
    'CORS_ORIGIN',
    'PORT'
];

export const validateEnv = () => {
    const missing = requiredEnvVars.filter(varName => !process.env[varName]);
    
    if (missing.length > 0) {
        throw new Error(
            `❌ Eksik ortam değişkenleri: ${missing.join(', ')}\n` +
            '   .env dosyasını kontrol edin.'
        );
    }
    
    if (process.env.JWT_SECRET && process.env.JWT_SECRET.length < 32) {
        throw new Error('JWT_SECRET en az 32 karakter olmalı');
    }
    
    console.log('Ortam değişkenleri doğrulandı');
};

export const getJWTSecret = (): string => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET tanımlı değil');
    }
    return secret;
};
