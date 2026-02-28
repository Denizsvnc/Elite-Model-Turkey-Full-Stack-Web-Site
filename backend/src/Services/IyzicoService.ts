import dotenv from "dotenv";
import Iyzipay from "iyzipay";

dotenv.config();

class IyzicoService {
  private iyzipay: any;

  constructor() {
    const apiKey = process.env.IYZICO_API_KEY;
    const secretKey = process.env.IYZICO_SECRET_KEY;
    let uri = process.env.IYZICO_URI;

    if (!uri && process.env.NODE_ENV !== "production") {
      uri = "https://sandbox-api.iyzipay.com";
    }

    if (!apiKey || !secretKey || !uri) {
      throw new Error(
        "Iyzico configuration missing. Ensure IYZICO_API_KEY, IYZICO_SECRET_KEY and IYZICO_URI are set in your environment.",
      );
    }

    this.iyzipay = new Iyzipay({
      apiKey,
      secretKey,
      uri,
    });
  }

  public initializeCheckoutForm(data: {
    conversationId: string;
    price: string;
    paidPrice: string;
    basketId: string;
    paymentGroup?: string;
    callbackUrl: string;
    buyer: {
      id: string;
      name: string;
      surname: string;
      gsmNumber: string;
      email: string;
      identityNumber: string;
      registrationAddress: string;
      ip: string;
      city: string;
      country: string;
    };
    shippingAddress: {
      contactName: string;
      city: string;
      country: string;
      address: string;
    };
    billingAddress: {
      contactName: string;
      city: string;
      country: string;
      address: string;
    };
    basketItems: Array<{
      id: string;
      name: string;
      category1: string;
      itemType: string;
      price: string;
    }>;
  }): Promise<any> {
    return new Promise((resolve, reject) => {
      this.iyzipay.checkoutFormInitialize.create(
        data,
        (err: any, result: any) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        },
      );
    });
  }

  public retrieveCheckoutFormResult(data: {
    conversationId: string;
    token: string;
  }): Promise<any> {
    return new Promise((resolve, reject) => {
      this.iyzipay.checkoutForm.retrieve(data, (err: any, result: any) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }
}

export default new IyzicoService();
