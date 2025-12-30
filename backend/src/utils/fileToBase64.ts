import fs from 'fs';

/**
 * Bir dosya yolunu base64 string olarak döndürür.
 * @param filePath Dosya yolu (absolute veya relative)
 * @returns base64 string (data url formatında)
 */
export function fileToBase64(filePath: string): string | null {
  try {
    const file = fs.readFileSync(filePath);
    const ext = filePath.split('.').pop()?.toLowerCase() || 'jpg';
    const mime = ext === 'png' ? 'image/png' : ext === 'gif' ? 'image/gif' : 'image/jpeg';
    return `data:${mime};base64,${file.toString('base64')}`;
  } catch (e) {
    console.error('fileToBase64 error:', e);
    return null;
  }
}
