import tap from "tap";
import parseMoney from "../src";

tap.same(parseMoney("lei100 text and here is another one a bit later $500"), {
  amount: 100,
  currency: "RON",
});

/** Needs to be fixed */
tap.same(parseMoney("lei100 and $500"), {
  amount: 100500,
  currency: "RON",
});
