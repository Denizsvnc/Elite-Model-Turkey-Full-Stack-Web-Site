import crypto from "crypto";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const PAYTR_LINK_CREATE_URL = "https://www.paytr.com/odeme/api/link/create";

export interface PayTRLinkParams { // bu kısım sabit kalıcak deniz oynarsan hata verirebilir
  name: string;        
  price: number;       
  callbackUrl: string;
  callbackId: string; 
  lang?: string;      
  maxInstallment?: number; 
  currency?: string;  
}

class PayTRService {
  private merchantId: string;
  private merchantKey: string;
  private merchantSalt: string;

  constructor() {
    const merchantId = process.env.PAYTR_MERCHANT_ID;
    const merchantKey = process.env.PAYTR_MERCHANT_KEY;
    const merchantSalt = process.env.PAYTR_MERCHANT_SALT;

    if (!merchantId || !merchantKey || !merchantSalt) {
      throw new Error(
        "env verileri eksik "
      );
    }

    this.merchantId = merchantId;
    this.merchantKey = merchantKey;
    this.merchantSalt = merchantSalt;
  }

 
  public async createPaymentLink(params: PayTRLinkParams): Promise<string> {
    const {
      name,
      price,
      callbackUrl,
      callbackId,
      lang = "tr",
      maxInstallment = 12,
      currency = "TL",
    } = params;

    const minCount = "1";
    const linkType = "product";
    const maxInstallmentStr = String(maxInstallment);
    const priceStr = String(price);

    
    const hashStr =
      name +
      priceStr +
      currency +
      maxInstallmentStr +
      linkType +
      lang +
      minCount +
      this.merchantSalt; 

    const paytrToken = crypto
      .createHmac("sha256", this.merchantKey)
      .update(hashStr)
      .digest("base64");

    const postData = new URLSearchParams({
      merchant_id: this.merchantId,
      name,
      price: priceStr,
      currency,
      max_installment: maxInstallmentStr,
      link_type: linkType,
      min_count: minCount,
      lang,
      paytr_token: paytrToken,
      callback_link: callbackUrl,
      callback_id: callbackId,
    });

    console.log("pytr başladı");
    console.log("  isim:", name, "| fiyat:", priceStr);
    console.log("  callback link:", callbackUrl);
    console.log("  callback id:", callbackId);

    const response = await axios.post(
      PAYTR_LINK_CREATE_URL,
      postData.toString(),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    const data = response.data;
    console.log("pytre api yanıtı", JSON.stringify(data));

    if (data.status !== "success" && !data.link) {
      throw new Error(
        ` linkde hata var : ${data.reason || data.err_msg || JSON.stringify(data)}`
      );
    }

    console.log(" link oluşturuldu:", data.link);

     return data.link as string;
  }

 
  public verifyCallbackHash(params: {
    callbackId: string;
    merchantOid: string;
    status: string;
    totalAmount: string;
    hash: string;
  }): boolean {
    const { callbackId, merchantOid, status, totalAmount, hash } = params;

  
    const hashStr =
      callbackId +
      merchantOid +
      this.merchantSalt +
      status +
      totalAmount;

    const expectedHash = crypto
      .createHmac("sha256", this.merchantKey)
      .update(hashStr)
      .digest("base64");

    return expectedHash === hash;
  }
}

export default new PayTRService();
