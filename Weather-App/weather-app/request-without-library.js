const http = require("http")
const latitude = 30
const longtitude = 30
const url = "http://api.weatherstack.com/current?access_key=acc670a05350333481c211a21cdb16f1&query=" + latitude + "," + longtitude

const request = http.request(url, (response) => {
    
    let data = ""

    response.on("data", (chunk) => {
        data = data + chunk.toString()
        const info = JSON.parse(data)
        console.log(info.current.temperature + ", " + info.current.weather_descriptions)
    })

    response.on("end", () => {
        const info = JSON.parse(data)
        console.log(info.location.name + "/" + info.location.country)
    })
})

request.on("error", (error) => {
    console.log("An error", error)
})

request.end()