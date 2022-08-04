const forecast = require("./utils/forecast.js")
const geocode = require("./utils/geocode.js")

geocode("Eskisehir", (error, response) => {
    console.log(error)
    console.log(response)
    forecast(response.latitude, response.longtitude, (error, response) => {
        console.log("Error", error)
        console.log("Data", response)
    })
})

forecast(39.766193, 30.526714, (error, response) => {
    console.log(error)
    console.log(response)
})