var cryptoArray = [	{"name":"BITCOIN", "symbol":"btc", "refVal":898, "refDate":"12/2013"},
					{"name":"LITECOIN", "symbol":"ltc", "refVal":23, "refDate":"12/2014"},
					{"name":"DASH", "symbol":"dash", "refVal":15.7, "refDate":"12/2014"},
					{"name":"ETHEREUM", "symbol":"eth", "refVal":41.2, "refDate":"04/2017"},
					{"name":"Ripple", "symbol":"xrp", "refVal":0.032, "refDate":"04/2017"},
					{"name":"DigiByte", "symbol":"dgb", "refVal":0.001134635, "refDate":"04/2017"},
					{"name":"ReddCoin", "symbol":"rdd", "refVal":0.0006, "refDate":"05/2017"},
					{"name":"Zcash", "symbol":"zec", "refVal":227, "refDate":"05/2017"},
					{"name":"SIACOIN", "symbol":"sc", "refVal":0.0000001, "refDate":"07/2017"},
					{"name":"BITCOIN CASH", "symbol":"bch", "refVal":256, "refDate":"08/2017"},
					{"name":"EOS", "symbol":"eos", "refVal":1.3, "refDate":"08/2017"},
					{"name":"IOTA", "symbol":"iot", "refVal":0.74, "refDate":"08/2017"},
					{"name":"NEO", "symbol":"neo", "refVal":31.6, "refDate":"08/2017"},
					{"name":"BITCOIN GOLD", "symbol":"btg", "refVal":0.0001, "refDate":"12/2017"}
					];
					
var currencyCompare = {"name":"&euro;", "symbol":"eur"};
				
var  API_URL = [	{"url":"https://min-api.cryptocompare.com/data/price?fsym=$from&tsyms=$to", "priceJSONPath":"compareCurrencyUpper"},
					{"url":"https://api.cryptonator.com/api/ticker/$from-$to", "priceJSONPath":"ticker.price"},
					{"url":"https://api.coinmarketcap.com/v1/ticker/$nameFrom/?convert=$to", "priceJSONPath":"0.price_$lowerto"}];
