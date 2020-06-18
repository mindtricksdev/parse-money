# parse-money
<img src="https://travis-ci.com/mindtricksdev/parse-money.svg?branch=master" alt="Travis CI"> <a href="https://codecov.io/gh/mindtricksdev/parse-money"><img src="https://codecov.io/gh/mindtricksdev/parse-money/branch/master/graph/badge.svg" /></a> <img src="https://img.badgesize.io/mindtricksdev/parse-money/master/src/index.ts?compression=gzip&label=size" />

Extract money from text (number and currency detection)

<img src="https://raw.githubusercontent.com/mindtricksdev/parse-money/master/logo/banner.svg" width="150px">

Returns the amount as `Number` and the currency as `string` from a text that contains money.


## Installation

```shell
npm install --save parse-money
yarn add parse-money
```

## Usage

Pass a string to extract money from.

```js
import parseMoney from 'parse-money';

parseMoney('€1.234,56') // => { amount: 1234.56, currency: 'EUR' }
parseMoney('US$ 1.234,56') // => { amount: 1234.56, currency: 'USD' }
parseMoney('$1.234,56') // => { amount: 1234.56, currency: 'USD' }
parseMoney('1.234,56 US dollars') // => { amount: 1234.56, currency: 'USD' }
parseMoney('£1,234.56') // => { amount: 1234.56, currency: 'GBP' }
parseMoney('R$1.234,56') // => { amount: 1234.56, currency: 'BRL' }
parseMoney('1 234,56 руб') // => { amount: 1234.56, currency: 'RUB' }
parseMoney('1,234.56 ₪') // => { amount: 1234.56, currency: 'ILS' }
parseMoney('123,456.78 lei') // => { amount: 123456.78, currency: 'RON' }
parseMoney('123,45 lei') // => { amount: 123.45, currency: 'RON' }
parseMoney('some text before 123,45 lei and some text after') // => { amount: 123.45, currency: 'RON' }
```

## Typings

```ts
type Money = {
  currency: Currency;
  amount: number;
}

type Currency = 'USD' | 'GBP' | 'EUR' | 'BRL' | 'RUB' | 'ILS' | 'RON';
```

---

GitHub [@mindtricksdev](https://github.com/mindtricksdev) &nbsp;&middot;&nbsp;
Twitter [@mindtricksdev](https://twitter.com/mindtricksdev)
