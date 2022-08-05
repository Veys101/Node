const request = require('request')

const coin = (coinType, callback) => {
    const url = "https://api.binance.com/api/v3/ticker/24hr?symbol=" + coinType
    request({method: 'GET', url: url, json: true}, (error, response) => {
        if(error) {
            callback("Unable to connect to coin service!", undefined)
        } else if (response.body.lastPrice == null) {
            callback("Unable to find coin. Try another coin.", undefined)
        } else{
            callback(undefined, {symbol: response.body.symbol, lastPrice: response.body.lastPrice, priceChangePercent: response.body.priceChangePercent})
        }
    })
}

coin("ETHUSDT", (error, data) => {
    console.log(error)
    console.log(data)
})