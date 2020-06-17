import { Money, Currency } from "./types";

const symbols: {
  [currency: string]: string[];
} = {
  BRL: ["R$", "BRL"],
  RON: ["lei", "LEI", "Lei", "RON"],
  USD: ["$", "US$", "US dollars", "USD"],
  GBP: ["£", "GBP"],
  EUR: ["€", "Euro", "EUR"],
  RUB: ["руб", "RUB"],
  ILS: ["₪", "ILS"],
};

const parseMoney = (text: string) => {
  let output: Money | null = null;

  //scan for currency
  const currenciesFound: { currency: Currency; index: number }[] = [];
  (Object.keys(symbols) as Currency[]).forEach((currency) => {
    symbols[currency].find((symbol) => {
      const index = text.indexOf(symbol);
      if (index > -1) {
        //found symbol
        currenciesFound.push({ currency, index });
      }
    });
  });

  let index = 0;
  let currency: Currency | null = null;
  if (currenciesFound.length === 0) {
    //no currency found
  } else if (currenciesFound.length >= 1) {
    currency = currenciesFound[0].currency;
    index = currenciesFound[0].index;
  }

  //search numbers near the currency
  const start = Math.max(0, index - 40);
  const end = index + 40;
  let slice = text.substr(start, end);

  //remove text
  slice = slice.replace(/[^\d|^\.|^,]/g, "");
  if (!slice.length) return null;

  let dotCount = slice.split(".").length - 1;
  let commaCount = slice.split(",").length - 1;

  let amount = 0;
  if (dotCount === 0 && commaCount === 0) {
    //integer
  } else if (commaCount > 1 && dotCount <= 1) {
    //comma are delimiters
    //dot is decimal separator
    slice = slice.split(",").join("");
  } else if (dotCount > 1 && commaCount <= 1) {
    //comma are delimiters
    //dot is decimal separator
    slice = slice.split(".").join("");
    slice = slice.split(",").join(".");
  } else if (dotCount > 0 && commaCount > 0) {
    //check position
    if (slice.indexOf(".") > slice.indexOf(",")) {
      //215,254.23
      slice = slice.split(",").join("");
    } else {
      //215.2123,23
      slice = slice.split(".").join("");
      slice = slice.split(",").join(".");
    }
  } else if (dotCount === 1 && commaCount === 0) {
    //check groups
    //215.21 is 215.21
    //215.212 is 215222
    //215.1 is 215.1
    const segments = slice.split(".");
    const first = segments[0];
    const second = segments[1];
    if (second.length === 3) {
      //group separator
      slice = slice.replace(".", "");
    } else {
      //decimal separator
    }
  } else if (commaCount === 1 && dotCount === 0) {
    //check groups
    //215,21 is 215.21
    //215,212 is 215222
    //215,1 is 215.1
    const segments = slice.split(",");
    const first = segments[0];
    const second = segments[1];
    if (second.length === 3) {
      //group separator
      slice = slice.replace(",", "");
    } else {
      //decimal separator
      slice = slice.replace(",", ".");
    }
  }

  amount = parseFloat(slice);

  output = {
    amount,
    currency,
  };

  return output;
};

export default parseMoney;
