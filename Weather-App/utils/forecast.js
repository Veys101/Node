const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=acc670a05350333481c211a21cdb16f1&query=" + latitude + "," + longtitude
    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback("Unable to connect to weather service!", undefined)
        } else if (response.body.error) {
            callback("Unable to find location", undefined)
        } else {
            const data = {
                regionName: response.body.location.region + "/" + response.body.location.country,
                temperature: response.body.current.temperature,
                weatherDescription: response.body.current.weather_descriptions,
                humidity: response.body.current.humidity,
                windSpeed: response.body.current.wind_speed
            }
            callback(undefined, data)
        }
        
    })
}

module.exports = forecast