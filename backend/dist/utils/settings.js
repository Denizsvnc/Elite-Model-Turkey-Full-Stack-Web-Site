"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmailSettings = getEmailSettings;
const prisma_1 = __importDefault(require("../lib/prisma"));
function getEmailSettings() {
    return __awaiter(this, void 0, void 0, function* () {
        // 'email' grubundaki ayarları çek
        const settings = yield prisma_1.default.systemSetting.findMany({
            where: {
                group: 'email',
            }
        });
        // Gelen veriyi { key: value } sekline cevir
        const config = settings.reduce((acc, curr) => {
            if (curr.value) {
                acc[curr.key] = curr.value;
            }
            return acc;
        }, {});
        return config;
    });
}
//# sourceMappingURL=settings.js.map