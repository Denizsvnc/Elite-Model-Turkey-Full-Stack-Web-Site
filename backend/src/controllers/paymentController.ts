import { Request, Response } from "express";
import prisma from "../lib/prisma";
import PayTRService from "../Services/PayTRService";
import { MailService } from "../Services/MailService";

export const paytrCallback = async (req: Request, res: Response) => {
  try {
    const { // sabit veriler
      merchant_oid,  
      status,        
      total_amount,
      hash,
      callback_id,   
    } = req.body;

     if (!status || !hash) {
      console.error("PayTR Callback: Eksik parametreler", req.body);
      return res.send("OK");
    }

     const isValid = PayTRService.verifyCallbackHash({
      callbackId: callback_id || "",
      merchantOid: merchant_oid || "",
      status,
      totalAmount: total_amount || "",
      hash,
    });

    if (!isValid) {
      console.error("PayTR Callback: Geçersiz hash. Olası sahte istek!", {
        merchant_oid,
        callback_id,
        status,
      });
      return res.send("OK");
    }
 
    let paymentRecord = null;

    if (callback_id) {
      paymentRecord = await prisma.payment.findUnique({
        where: { id: callback_id },
        include: { application: true },
      });
    }

    if (!paymentRecord && merchant_oid) {
      paymentRecord = await prisma.payment.findUnique({
        where: { paytrMerchantOid: merchant_oid },
        include: { application: true },
      });
    }

    if (!paymentRecord) {
      console.error("ödeme bulunamadı :", {
        callback_id,
        merchant_oid,
      });
      return res.send("OK");
    }

    if (paymentRecord.status !== "PENDING") {
      console.warn("Zaten işlenmiş bildirim:", callback_id || merchant_oid);
      return res.send("OK");
    }

     if (status === "success") {
      await prisma.$transaction([
        prisma.payment.update({
          where: { id: paymentRecord.id },
          data: {
            status: "SUCCESS",
            paymentId: merchant_oid || callback_id,
          },
        }),
        prisma.application.update({
          where: { id: paymentRecord.applicationId },
          data: { status: "REVIEW" },
        }),
      ]);

      const app = paymentRecord.application;

       try {
        await MailService.sendConfirmApplicationEmail(
          app?.email || "",
          String(app?.applicationCode || ""),
          app?.fullName || "",
          app?.phone || ""
        );
      } catch (mailErr) {
        console.error("Email gönderme hatası:", mailErr);
      }

      console.log("✅ PayTR Ödeme başarılı:", callback_id || merchant_oid);
    } else {
       await prisma.payment.update({
        where: { id: paymentRecord.id },
        data: { status: "FAILURE" },
      });

      console.warn(" ödeme başarısız:", callback_id || merchant_oid, "Durum:", status);
    }

    return res.send("OK");
  } catch (error) {
    console.error("PayTR Callback hatası:", error);
    return res.send("OK");
  }
};
