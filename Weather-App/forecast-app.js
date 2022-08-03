const forecast = require("./utils/forecast.js")

forecast(39.766193, 30.526714, (error, response) => {
    console.log(error)
    console.log(response)
})