// Central studio configuration: contact details, payment methods,
// hosting promo and footer-credit discount. Edit values here once and
// they apply across the whole site.

export const STUDIO = {
  name: "8BiT Softworks",
  shortName: "8BiT",
  email: "8bit.softworks@gmail.com",
  location: "Dhaka, Bangladesh — remote-first",
};

// Payment methods accepted at checkout. Each entry defines the account the
// customer pays to, plus the two confirmation fields they must provide.
export const PAYMENTS = {
  redotpay: {
    id: "redotpay",
    name: "RedotPay",
    account: "1899721816",
    accountLabel: "RedotPay UID",
    instructions:
      "Send the total to the RedotPay UID below, then enter your Sender UID and the Transaction ID from the app.",
    fields: [
      { key: "senderId", label: "Sender UID", placeholder: "Your RedotPay UID", required: true },
      { key: "transactionId", label: "Transaction ID", placeholder: "Transaction ID shown in RedotPay", required: true },
    ],
  },
  bkash: {
    id: "bkash",
    name: "bKash",
    account: "01325575123",
    accountLabel: "bKash (Personal)",
    instructions:
      "Send the total via bKash Send Money to the number below, then enter the number you sent from and the Transaction ID.",
    fields: [
      { key: "phone", label: "Phone number", placeholder: "bKash number you sent from", required: true },
      { key: "transactionId", label: "Transaction ID", placeholder: "e.g. 9HG7K2L5X1", required: true },
    ],
  },
  nagad: {
    id: "nagad",
    name: "Nagad",
    account: "01325575123",
    accountLabel: "Nagad (Personal)",
    instructions:
      "Send the total via Nagad to the number below, then enter the number you sent from and the Transaction ID.",
    fields: [
      { key: "phone", label: "Phone number", placeholder: "Nagad number you sent from", required: true },
      { key: "transactionId", label: "Transaction ID", placeholder: "e.g. 3M8T7R2K9Q", required: true },
    ],
  },
};

export const PAYMENT_ORDER = ["redotpay", "bkash", "nagad"];

// 3-months-free hosting promo, offered in collaboration with the studio.
export const HOSTING = {
  freeMonths: 3,
  title: "3 Months Free Hosting",
  note:
    "Every purchase includes 3 months of free hosting — arranged and set up for you in collaboration with 8BiT Softworks. After that, hosting continues at our partner's standard rate, or we help you move anywhere you like.",
};

// Optional footer-credit discount shown in the checkout.
export const AD_CREDIT = {
  percent: 2,
  label: "Add a small “Designed by 8BiT Softworks” credit in my footer",
  note:
    "We place a small text credit and link in your site footer. In return you get 2% off your order total. It can be removed later at any time.",
};

export function discountFor(total, enabled) {
  if (!enabled) return 0;
  return Math.round(total * (AD_CREDIT.percent / 100));
}
