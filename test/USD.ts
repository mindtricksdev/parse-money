import tap from "tap";
import parseMoney from "../src";

tap.notOk(parseMoney(""));
tap.notOk(parseMoney("text only"));
tap.ok(parseMoney("$100"));

tap.same(parseMoney("100"), {
  amount: 100,
  currency: null,
});

tap.same(parseMoney("$100"), {
  amount: 100,
  currency: "USD",
});

tap.same(parseMoney("1004$"), {
  amount: 1004,
  currency: "USD",
});

tap.same(parseMoney("$1,004"), {
  amount: 1004,
  currency: "USD",
});
tap.same(parseMoney("$1.004"), {
  amount: 1004,
  currency: "USD",
});

tap.same(parseMoney("$1,004.25"), {
  amount: 1004.25,
  currency: "USD",
});
tap.same(parseMoney("$1.004,25"), {
  amount: 1004.25,
  currency: "USD",
});

tap.same(parseMoney("$1.009.004,25"), {
  amount: 1009004.25,
  currency: "USD",
});

tap.same(parseMoney("$1,009,004.25"), {
  amount: 1009004.25,
  currency: "USD",
});

tap.same(parseMoney("$109.25"), {
  amount: 109.25,
  currency: "USD",
});

tap.same(parseMoney("$215,25"), {
  amount: 215.25,
  currency: "USD",
});
