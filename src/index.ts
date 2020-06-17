import { Money } from "./types";

function filterNumbers(str: string) {
  return str.replace(/[^\d]/g, "");
}

function filterNumbersDotsAndCommas(str: string) {
  return str.replace(/[^\d.,]/g, "").replace(/[.,]$/, "");
}

function getDecimalSymbol(str: string) {
  var strFiltered = filterNumbersDotsAndCommas(str);
  var endWithZero = strFiltered[strFiltered.length - 1] === "0";

  // For each character starting from the end...
  for (var i = strFiltered.length; i > 0; i--) {
    // If the last character is a "0" and the decimal position > 3, no decimal
    if (strFiltered.length - i + 1 > 3 && endWithZero) {
      return;
    }

    var currentChar = strFiltered[i - 1];

    if ([",", "."].indexOf(currentChar) !== -1) {
      return currentChar;
    }
  }
}

const parseMoney = (text: string) => {
  let output: Money | null = null;

  var decimalPart = "00";
  var integerPart = "";
  var decimalSymbol = getDecimalSymbol(text);

  if (decimalSymbol) {
    decimalPart = text.split(decimalSymbol)[1];
    integerPart = text.split(decimalSymbol)[0];
  } else {
    integerPart = text;
  }

  output = {
    amount: Number(
      filterNumbers(integerPart) + "." + filterNumbers(decimalPart)
    ),
    currency: "USD",
  };

  return output;
};

export default parseMoney;
