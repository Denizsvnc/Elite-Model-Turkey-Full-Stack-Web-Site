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
exports.iyzicoCallback = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const IyzicoService_1 = __importDefault(require("../Services/IyzicoService"));
const MailService_1 = require("../Services/MailService");
const iyzicoCallback = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.body;
        if (!token) {
            return res
                .status(400)
                .json({ error: "Geçersiz callback isteği. Token bulunamadı." });
        }
        const result = yield IyzicoService_1.default.retrieveCheckoutFormResult({
            conversationId: "elite_model_" + Date.now(),
            token: token,
        });
        if (result.status === "success" && result.paymentStatus === "SUCCESS") {
            const paymentRecord = yield prisma_1.default.payment.findUnique({
                where: { iyzicoToken: token },
                include: { application: true },
            });
            if (!paymentRecord) {
                console.error("Ödeme kaydı bulunamadı. Token:", token);
                return res.redirect(`${process.env.CORS_ORIGIN}/application-result?status=error&message=payment_record_not_found`);
            }
            yield prisma_1.default.$transaction([
                prisma_1.default.payment.update({
                    where: { id: paymentRecord.id },
                    data: {
                        status: "SUCCESS",
                        paymentId: result.paymentId,
                    },
                }),
                prisma_1.default.application.update({
                    where: { id: paymentRecord.applicationId },
                    data: {
                        status: "REVIEW",
                    },
                }),
            ]);
            const app = paymentRecord.application;
            const params = new URLSearchParams();
            params.set("status", "success");
            if (app) {
                if (app.applicationCode)
                    params.set("applicationCode", String(app.applicationCode));
                if (app.fullName)
                    params.set("fullName", app.fullName);
                if (app.email)
                    params.set("email", app.email);
            }
            const origin = (process.env.CORS_ORIGIN || `${req.protocol}://${req.get("host")}`).replace(/\/$/, "");
            const redirectPath = `/application-result?${params.toString()}`;
            const redirectUrl = origin ? `${origin}${redirectPath}` : redirectPath;
            try {
                yield MailService_1.MailService.sendConfirmApplicationEmail((app === null || app === void 0 ? void 0 : app.email) || "", String((app === null || app === void 0 ? void 0 : app.applicationCode) || ""), (app === null || app === void 0 ? void 0 : app.fullName) || "", (app === null || app === void 0 ? void 0 : app.phone) || "");
            }
            catch (mailErr) {
                console.error("Email gönderme hatası:", mailErr);
            }
            return res.redirect(redirectUrl);
        }
        else {
            console.warn("Ödeme başarısız. hata:", result.errorMessage);
            const paymentRecord = yield prisma_1.default.payment.findUnique({
                where: { iyzicoToken: token },
            });
            if (paymentRecord) {
                yield prisma_1.default.payment.update({
                    where: { id: paymentRecord.id },
                    data: { status: "FAILURE" },
                });
            }
            return res.redirect(`${process.env.CORS_ORIGIN}/application-result?status=failure&message=${encodeURIComponent(result.errorMessage || "payment_failed")}`);
        }
    }
    catch (error) {
        console.error("İyzico Callback hatası:", error);
        return res.status(500).json({ error: "Sunucu hatası." });
    }
});
exports.iyzicoCallback = iyzicoCallback;
//# sourceMappingURL=paymentController.js.map