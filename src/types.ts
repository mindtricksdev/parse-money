export type Money = {
  amount: number;
  currency: Currency | null;
};

export type Currency = "USD" | "GBP" | "EUR" | "BRL" | "RUB" | "ILS" | "RON";
