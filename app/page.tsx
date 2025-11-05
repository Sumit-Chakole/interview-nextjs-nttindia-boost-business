// 'use client';

export default function Home() {
  const pageTitle =
    "Boost your business with all major payment options and much more";
  const imgPath = "/images/";
  const paymentOptions = [
    {
      type: "Debit/Credit Cards",
      description:
        "Accept payments through all major cards, including Visa, MasterCard, American Express, and RuPay.",
      icon: "cards.svg",
    },
    {
      type: "Net Banking",
      description:
        "Enable online transactions through 50+ major banks like SBI, ICICI, HDFC, Axis, Kotak, Yes Bank·",
      icon: "net-banking.svg",
    },
    {
      type: "UPI",
      description:
        "Enjoy seamless payment acceptance with one click over a secured VPA with our UPI platform",
      icon: "upi.svg",
    },
    {
      type: "Challan",
      description:
        "Generate an online challan followed by making an offline payment at any bank branch throughout India.",
      icon: "challan.svg",
    },
    {
      type: "NEFT/RTGS",
      description:
        "Use NEFT payments and pay your beneficiaries as and when you initiate the payments.",
      icon: "neft-rtgs.svg",
    },
    {
      type: "EMI",
      description:
        "With the multi-bank Credit Card EMI option, sell higher-value products and give your customers the ease of purchasing high-ticket items.",
      icon: "emi.svg",
    },
    {
      type: "Bharat QR",
      description:
        "Bust the queue by integrating a simple QR that your customers can scan and send money directly to your account.",
      icon: "bharat-qr.svg",
    },
    {
      type: "Wallet",
      description:
        "Give your customers the freedom to pay with their favorite digital wallet with 10+ options.",
      icon: "wallet.svg",
    },
    {
      type: "Google Pay",
      description:
        "Use Google Pay and allow your customers to send you money without sharing any banking details.",
      icon: "gpay.svg",
    },
    {
      type: "Link-Based",
      description:
        "Send links to your customers through WhatsApp, SMS or over e-mail and request payments through payment links.",
      icon: "linked-based.svg",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Section Wrapper */}
      <section className="m-5">
        {/* Start here */}
        <img src={imgPath + "illustration.svg"} alt="illustration" />
      </section>
    </main>
  );
}
