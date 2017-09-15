var cryptoArray = [	{"name":"BITCOIN", "symbol":"btc", "refVal":898, "refDate":"12/2013"},
					{"name":"LITECOIN", "symbol":"ltc", "refVal":23, "refDate":"12/2014"},
					{"name":"DASH", "symbol":"dash", "refVal":15.7, "refDate":"12/2014"},
					{"name":"ETHEREUM", "symbol":"eth", "refVal":41.2, "refDate":"04/2017"},
					{"name":"Ripple", "symbol":"xrp", "refVal":0.032, "refDate":"04/2017"},
					{"name":"DigiByte", "symbol":"dgb", "refVal":0.001134635, "refDate":"04/2017"},
					{"name":"ReddCoin", "symbol":"rdd", "refVal":0.0006, "refDate":"05/2017"}
					];

var currencyCompare = {"name":"&euro;", "symbol":"eur"};
				
var  API_URL = [	{"url":"https://min-api.cryptocompare.com/data/price?fsym=$from&tsyms=$to", "priceJSONPath":"compareCurrencyUpper"},
					{"url":"https://api.cryptonator.com/api/ticker/$from-$to", "priceJSONPath":"ticker.price"}];
