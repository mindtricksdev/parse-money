import tap from "tap";
import parseMoney from "../src";

tap.ok(parseMoney("100 lei"));

tap.same(parseMoney("lei100"), {
  amount: 100,
  currency: "RON",
});

tap.same(parseMoney("RON100"), {
  amount: 100,
  currency: "RON",
});

tap.same(parseMoney("1004 lei noi"), {
  amount: 1004,
  currency: "RON",
});

tap.same(parseMoney("lei 1,004"), {
  amount: 1004,
  currency: "RON",
});
tap.same(parseMoney("1.004RON"), {
  amount: 1004,
  currency: "RON",
});

tap.same(parseMoney("1,004.25 RON"), {
  amount: 1004.25,
  currency: "RON",
});
tap.same(parseMoney("lei 1.004,25"), {
  amount: 1004.25,
  currency: "RON",
});

tap.same(parseMoney("1.009.004,25 lei"), {
  amount: 1009004.25,
  currency: "RON",
});

tap.same(parseMoney("1,009,004.25 lei"), {
  amount: 1009004.25,
  currency: "RON",
});

tap.same(parseMoney("109.25 lei"), {
  amount: 109.25,
  currency: "RON",
});

tap.same(parseMoney("215,25 lei"), {
  amount: 215.25,
  currency: "RON",
});
