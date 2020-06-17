import parseMoney from ".";

const money = parseMoney(
  "Test. Altceva, in valoare de 495,61 Lei. Ok, pentru mai multe informaţii..."
);
console.dir(money);
