const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=acc670a05350333481c211a21cdb16f1&query=New York'

request({url: url, json: true}, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. There is a " + response.body.current.precip + "% chance of rain.")
})

const options = {
    method: 'GET',
    url: 'https://api.binance.com/api/v3/ticker/24hr?symbol=ETHUSDT',
    json: true
  };
  
request(options, function (error, response) {
    if (error) {
        console.log("Unable to connect to service")
    } else if (response.body.lastPrice != null) {
        console.log("Ethereum Price : $" + response.body.lastPrice + "   Time : " + new Date(response.body.closeTime));
    } else {
        console.log("Some parameter would be wrong")
    }
});