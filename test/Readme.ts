import tap from "tap";
import parseMoney from "../src";

tap.notOk(parseMoney(""));
tap.notOk(parseMoney("text only"));
tap.ok(parseMoney("$100"));

tap.same(parseMoney("€1.234,56"), {
  amount: 1234.56,
  currency: "EUR",
});

tap.same(parseMoney("US$ 1.234,56"), {
  amount: 1234.56,
  currency: "USD",
});

tap.same(parseMoney("$1.234,56"), {
  amount: 1234.56,
  currency: "USD",
});

tap.same(parseMoney("1.234,56 US dollars"), {
  amount: 1234.56,
  currency: "USD",
});
tap.same(parseMoney("£1,234.56"), {
  amount: 1234.56,
  currency: "GBP",
});

tap.same(parseMoney("R$1.234,56"), {
  amount: 1234.56,
  currency: "BRL",
});
tap.same(parseMoney("1 234,56 руб"), {
  amount: 1234.56,
  currency: "RUB",
});

tap.same(parseMoney("1,234.56 ₪"), {
  amount: 1234.56,
  currency: "ILS",
});

tap.same(parseMoney("123,456.78 lei"), {
  amount: 123456.78,
  currency: "RON",
});

tap.same(parseMoney("lei123,45"), {
  amount: 123.45,
  currency: "RON",
});

tap.same(parseMoney("some text before 123,45 lei and some text after"), {
  amount: 123.45,
  currency: "RON",
});
