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

tap.same(parseMoney("215,25 lei"), {
  amount: 215.25,
  currency: "RON",
});

tap.same(parseMoney("215,256 lei"), {
  amount: 215256,
  currency: "RON",
});

tap.same(parseMoney("215,2 lei"), {
  amount: 215.2,
  currency: "RON",
});

tap.same(parseMoney("215, lei"), {
  amount: 215,
  currency: "RON",
});

tap.same(parseMoney("109.25 lei"), {
  amount: 109.25,
  currency: "RON",
});
tap.same(parseMoney("109.256 lei"), {
  amount: 109256,
  currency: "RON",
});
tap.same(parseMoney("109.256.256 lei"), {
  amount: 109256256,
  currency: "RON",
});
tap.same(parseMoney("109.256,25 lei"), {
  amount: 109256.25,
  currency: "RON",
});
tap.same(parseMoney("109.2 lei"), {
  amount: 109.2,
  currency: "RON",
});
tap.same(parseMoney("215. lei"), {
  amount: 215,
  currency: "RON",
});
