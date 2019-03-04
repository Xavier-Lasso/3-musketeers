# cash

The cash library is an easy interactive tool converter for currencies.

## Installation

In the cash folder, execute the command line:
```sh
npm install
```

## Usage

In order to execute the application, execute the command line:
```sh
node bin/index.js
```

By default, the application will display the conversion of 1 USD to 3 currencies : EUR, GBP and JPY.
The 4 default currencies (USD, EUR, GBP and JPY) are written in the constants.js file.

You can precise the amount that you want to convert, the currency to convert and the final currencies:

```sh
node bin/index.js [amount] [currencyFrom] [currenciesTo...]
```

For example:

```sh
node bin/index.js 10 cad eur usd
```

This command gives you the conversion of 10 CAD to EUR and USD.

If you don't precise the final currencies, it would use by default the default currencies, for example:

```sh
node bin/index.js 5 krw
```
This command gives you the conversion of 5 KRW to USD, EUR, GBP and JPY.

Similary, if you don't precise the currency to convert, it would use by default the USD, for example:

```sh
node bin/index.js 5
```

This command gives you the conversion of 5 USD to EUR, GBP and JPY.