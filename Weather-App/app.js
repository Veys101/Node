const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=acc670a05350333481c211a21cdb16f1&query=New York'

request({url: url, json: true}, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degrees out. There is a " + response.body.current.precip + "% chance of rain.")
})

