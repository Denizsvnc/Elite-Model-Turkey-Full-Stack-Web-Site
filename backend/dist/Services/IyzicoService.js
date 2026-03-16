"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const iyzipay_1 = __importDefault(require("iyzipay"));
dotenv_1.default.config();
class IyzicoService {
    constructor() {
        const apiKey = process.env.IYZICO_API_KEY;
        const secretKey = process.env.IYZICO_SECRET_KEY;
        let uri = process.env.IYZICO_URI;
        if (!uri && process.env.NODE_ENV !== "production") {
            uri = "https://sandbox-api.iyzipay.com";
        }
        if (!apiKey || !secretKey || !uri) {
            throw new Error("Iyzico configuration missing. Ensure IYZICO_API_KEY, IYZICO_SECRET_KEY and IYZICO_URI are set in your environment.");
        }
        this.iyzipay = new iyzipay_1.default({
            apiKey,
            secretKey,
            uri,
        });
    }
    initializeCheckoutForm(data) {
        return new Promise((resolve, reject) => {
            this.iyzipay.checkoutFormInitialize.create(data, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }
    retrieveCheckoutFormResult(data) {
        return new Promise((resolve, reject) => {
            this.iyzipay.checkoutForm.retrieve(data, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }
}
exports.default = new IyzicoService();
//# sourceMappingURL=IyzicoService.js.map