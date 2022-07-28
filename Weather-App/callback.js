const request = require('request')

setTimeout( () => {
    console.log("Three seconds are up")
}, 3000)

const geocode = (address, callback) => {
    setTimeout( () => {
        const data = {
            latitude: 0,
            longitude: 0
        }

        callback(data)
    }, 2000)
}

geocode('Philadelphia', (data) => {
    console.log(data)
})


let temperature = async function getData(callback) {
    const url = 'http://api.weatherstack.com/current?access_key=acc670a05350333481c211a21cdb16f1&query=New York'
    request({url: url, json: true}, (error, response) => {
        callback(response.body.current.temperature)
    })
}

temperature(data => {
    console.log(data)
})

//console.log(temperature)
