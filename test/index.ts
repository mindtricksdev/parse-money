import tap from "tap";
import parseMoney from "../src";

tap.ok(parseMoney("$100"));
tap.same(parseMoney("$100"), {
  amount: 100,
  currency: "USD",
});
