import tap from "tap";
import parseMoney from "../src";

tap.same(
  parseMoney("valoare de 495,61 Lei. Pentru mai multe informaţii vă rugă"),
  {
    amount: 495.61,
    currency: "RON",
  }
);

tap.same(
  parseMoney("valoare de 495,61 Lei. Ok, pentru mai multe informaţii..."),
  {
    amount: 495.61,
    currency: "RON",
  }
);
