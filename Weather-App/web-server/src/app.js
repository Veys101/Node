const path = require('path')
const express = require("express")
const hbs = require('hbs')
const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partial')
const url = "http://api.weatherstack.com/current?access_key=acc670a05350333481c211a21cdb16f1&query="

// Setup handlebars engine and views location
app.set('views', viewsPath)
app.set('view engine', 'hbs')

hbs.registerPartials(partialPath)


// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Veys'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help me',
        name: 'Veys',
        helpText: 'This is some helpful text.'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Veys'
    })
})

app.get('/weather', (req, res) => {

    if(!req.query.search) {
        res.send({
            error: 'You must provide a search term'
        })
    } else {
        request({url: url + req.query.search, json: true}, (error, response) => {
            if(response.body.error) {
                return res.send({
                    weather: {
                        latitude: "Nan",
                        longtitude: "Nan",
                        regionName: "Nan",
                        temperature: "Nan",
                        weatherDescription: "Nan",
                        humidity: "Nan",
                        windSpeed: "Nan"
                    }
                })
            }

            res.send( {
                weather: {
                    latitude: response.body.location.lat,
                    longtitude: response.body.location.lon,
                    regionName: response.body.location.region + "/" + response.body.location.country,
                    temperature: response.body.current.temperature,
                    weatherDescription: response.body.current.weather_descriptions,
                    humidity: response.body.current.humidity,
                    windSpeed: response.body.current.wind_speed
                }
            })
        })
    }
    
})

app.get('/weather-location', (req, res) => {

    if(!req.query.search) {
        res.send({
            error: 'You must provide a search term'
        })
    } else {
        geocode(req.query.search, (error, {latitude, longtitude}= {}) => {
            if(error) {
                return res.send({error : error})
            }
            
            forecast(latitude, longtitude, (error, foreCastResponse) => {
                if(error) {
                    return res.send({error : error})
                }
                res.send({
                    address: req.query.search,
                    data: foreCastResponse,
                })
            })
        })
    }
    
})

app.get('*', (req, res) => {
    res.render('404')
})

app.listen(3000, () => {
    console.log("Server is up on port 3000.")
})