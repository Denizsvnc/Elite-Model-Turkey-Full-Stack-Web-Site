"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileToBase64 = fileToBase64;
const fs_1 = __importDefault(require("fs"));
/**
 * Bir dosya yolunu base64 string olarak döndürür.
 * @param filePath Dosya yolu (absolute veya relative)
 * @returns base64 string (data url formatında)
 */
function fileToBase64(filePath) {
    var _a;
    try {
        const file = fs_1.default.readFileSync(filePath);
        const ext = ((_a = filePath.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || 'jpg';
        const mime = ext === 'png' ? 'image/png' : ext === 'gif' ? 'image/gif' : 'image/jpeg';
        return `data:${mime};base64,${file.toString('base64')}`;
    }
    catch (e) {
        console.error('fileToBase64 error:', e);
        return null;
    }
}
//# sourceMappingURL=fileToBase64.js.map