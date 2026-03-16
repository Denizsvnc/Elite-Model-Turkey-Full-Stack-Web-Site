import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { useLanguage } from "../contexts/LanguageContext";
import { setItemWithExpiry, getItemWithExpiry } from "../storage";

const ApplicationResult: React.FC = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");
  const message = searchParams.get("message");
  const applicationCode = searchParams.get("applicationCode");
  const fullName = searchParams.get("fullName");
  const email = searchParams.get("email");
  const { dict } = useLanguage();
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async (text?: string) => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Kopyalama hatası:", e);
    }
  };

  const isSuccess = status === "success";

  if (isSuccess && applicationCode) {
    setItemWithExpiry("ApplicationCode", applicationCode, 259200000);
  } else if (!isSuccess) {
    return null;
  }

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center border border-slate-100">
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
              isSuccess
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            <span className="material-symbols-outlined text-5xl">
              {isSuccess ? "check_circle" : "error"}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-4 font-serif">
            {isSuccess
              ? dict?.ApplicationPage?.SuccessTitle || "Başvuru Tamamlandı"
              : dict?.ApplicationPage?.ErrorTitle || "Ödeme Hatası"}
          </h1>

          <p className="text-slate-600 mb-8 leading-relaxed">
            {isSuccess
              ? dict?.ApplicationPage?.SuccessMessage ||
                "Başvurunuz ve ödemeniz başarıyla alındı. Ekibimiz en kısa sürede incelemelere başlayacaktır."
              : message === "payment_failed"
                ? "Ödeme işlemi gerçekleştirilemedi. Lütfen kart bilgilerinizi kontrol edip tekrar deneyin."
                : message ||
                  "Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz."}
          </p>

          {isSuccess && (
            <div className="text-left bg-slate-50 border border-slate-100 rounded-xl p-4 mb-6">
              <h2 className="font-semibold text-slate-800 mb-2">
                Başvuru Bilgileri
              </h2>
              <ul className="text-sm text-slate-700 space-y-1">
                {applicationCode && (
                  <li className="flex items-center ">
                    <div>
                      <strong>Kod:</strong>{" "}
                      <span className="ml-2 font-mono">{applicationCode}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(applicationCode)}
                      title={copied ? "Kopyalandı" : "Kopyala"}
                      className="ml-4 inline-flex items-center gap-2 px-2 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-sm"
                    >
                      <span className="material-symbols-outlined text-base">
                        {copied ? "check" : "content_copy"}
                      </span>
                    </button>
                  </li>
                )}
                {fullName && (
                  <li>
                    <strong>İsim:</strong>{" "}
                    <span className="ml-2">{fullName}</span>
                  </li>
                )}
                {email && (
                  <li>
                    <strong>Email:</strong>{" "}
                    <span className="ml-2">{email}</span>
                  </li>
                )}
              </ul>
            </div>
          )}

          <div className="space-y-4">
            {isSuccess ? (
              <Link
                to="/"
                className="block w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-slate-200"
              >
                Ana Sayfaya Dön
              </Link>
            ) : (
              <>
                <Link
                  to="/basvuru"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-200"
                >
                  Tekrar Dene
                </Link>
                <Link
                  to="/"
                  className="block w-full text-slate-500 hover:text-slate-700 font-semibold py-2"
                >
                  Vazgeç
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ApplicationResult;
