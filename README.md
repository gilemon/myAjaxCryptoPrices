# myAjaxCryptoPrices
A simple html/js client retrieving Cryptocurrencies price through an API (cryptonator).

It is using jQuery AJAX requests to get the data from Cryptonator in the following format:

```
{"ticker":{"base":"BCH","target":"EUR","price":"432.04730765","volume":"","change":"-7.77825321"},"timestamp":1504547461,"success":true,"error":""}
```

You can reuse this code if you need a skinny template to start a html/widget project that require asynchronous Cryptocurrencies feeds.

You can also use the raw values in “Values for copy/paste:” to update your spreadsheet or your won tailor-made offline application.


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

You can find more information about Cryptonator API at https://www.cryptonator.com/api/

You may change the API_URL variable to something else than cryptonator, but you may need to significantly change the code to parse the API result.

# Live example
http://gilemon.com/vrak/crypto/
