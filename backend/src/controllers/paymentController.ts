import { Request, Response } from "express";
import prisma from "../lib/prisma";
import IyzicoService from "../Services/IyzicoService";
import { MailService } from "../Services/MailService";

export const iyzicoCallback = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res
        .status(400)
        .json({ error: "Geçersiz callback isteği. Token bulunamadı." });
    }

    const result = await IyzicoService.retrieveCheckoutFormResult({
      conversationId: "elite_model_" + Date.now(),
      token: token,
    });

    if (result.status === "success" && result.paymentStatus === "SUCCESS") {
      const paymentRecord = await prisma.payment.findUnique({
        where: { iyzicoToken: token },
        include: { application: true },
      });

      if (!paymentRecord) {
        console.error("Ödeme kaydı bulunamadı. Token:", token);
        return res.redirect(
          `${process.env.CORS_ORIGIN}/application-result?status=error&message=payment_record_not_found`,
        );
      }

      await prisma.$transaction([
        prisma.payment.update({
          where: { id: paymentRecord.id },
          data: {
            status: "SUCCESS",
            paymentId: result.paymentId,
          },
        }),
        prisma.application.update({
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
        if (app.fullName) params.set("fullName", app.fullName);
        if (app.email) params.set("email", app.email);
      }

      const origin = (
        process.env.CORS_ORIGIN || `${req.protocol}://${req.get("host")}`
      ).replace(/\/$/, "");
      const redirectPath = `/application-result?${params.toString()}`;
      const redirectUrl = origin ? `${origin}${redirectPath}` : redirectPath;

      try {
        await MailService.sendConfirmApplicationEmail(
          app?.email || "",
          String(app?.applicationCode || ""),
          app?.fullName || "",
          app?.phone || "",
        );
      } catch (mailErr) {
        console.error("Email gönderme hatası:", mailErr);
      }

      return res.redirect(redirectUrl);
    } else {
      console.warn("Ödeme başarısız. hata:", result.errorMessage);

      const paymentRecord = await prisma.payment.findUnique({
        where: { iyzicoToken: token },
      });

      if (paymentRecord) {
        await prisma.payment.update({
          where: { id: paymentRecord.id },
          data: { status: "FAILURE" },
        });
      }

      return res.redirect(
        `${process.env.CORS_ORIGIN}/application-result?status=failure&message=${encodeURIComponent(result.errorMessage || "payment_failed")}`,
      );
    }
  } catch (error) {
    console.error("İyzico Callback hatası:", error);
    return res.status(500).json({ error: "Sunucu hatası." });
  }
};
