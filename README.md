# myAjaxCryptoPrices
[![Build Status][travis-image]][travis-url] [![dependency status][dep-image]][dep-url]

A simple html/js client retrieving Cryptocurrencies price through an API (cryptonator, cryptocompare).

It is using jQuery AJAX requests to get the data from Cryptonator in the following format:

```
{"ticker":{"base":"BCH","target":"EUR","price":"432.04730765","volume":"","change":"-7.77825321"},"timestamp":1504547461,"success":true,"error":""}
```

You can reuse this code if you need a skinny template to start a html/widget project that require asynchronous Cryptocurrencies feeds.

You can also use the raw values in “Values for copy/paste:” to update prices offline in your spreadsheet or your own tailor-made application.


# Configuration
You need to update the value in the cryptoArray table in conf.js with your own values.

Example:

```
var cryptoArray = [	{"name":"EOS", "symbol":"eos", "refVal":0.72, "refDate":"08/2017"},
					{"name":"IOTA", "symbol":"iot", "refVal":0.58, "refDate":"08/2017"}
					];
```
* name = how the Cryptocurrency will be displayed (example:BITCOIN)
* symbol = the symbol used in the AJAX call to the API (example: btc)
* refVal = the reference value at which your first bought the Cryptocurrency
* refDate = the reference date at which your first bought the Cryptocurrency

You can update currencyCompare variable to your favourite fiat currency. Example:

```
var currencyCompare = {"name":"USD", "symbol":"usd"};
```

The price of currencies can be averaged from multiple API feeds. You may change the API_URL variable to something else than cryptonator, but you may need to update the  priceJSONPath attribute or significantly change the code to parse the API result.

```
var  API_URL = [	{"url":"https://min-api.cryptocompare.com/data/price?fsym=$from&tsyms=$to", "priceJSONPath":"compareCurrencyUpper"},
					{"url":"https://api.cryptonator.com/api/ticker/$from-$to", "priceJSONPath":"ticker.price"}];
```									
You can find more information about APIs : Cryptonator at https://www.cryptonator.com/api/ and Cryptocompare at https://www.cryptocompare.com/api

# Live example
http://gilemon.com/vrak/crypto/

[travis-image]: https://travis-ci.org/gilemon/myAjaxCryptoPrices.svg
[travis-url]: https://travis-ci.org/gilemon/myAjaxCryptoPrices
[dep-image]: https://david-dm.org/gilemon/myAjaxCryptoPrices.svg
[dep-url]: https://david-dm.org/gilemon/myAjaxCryptoPrices
