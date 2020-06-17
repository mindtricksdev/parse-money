export type Money = {
  amount: number;
  currency: Currency;
};

export type Currency = "USD" | "GBP" | "EUR" | "BRL" | "RUB" | "ILS" | "RON";
