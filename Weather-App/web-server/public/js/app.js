const url = "http://localhost:3000/weather?search="

console.log("This is client side print")

fetch('http://puzzle.mead.io/puzzle').then((response)=> {
    response.json().then((data) => {
        console.log(data)
    })
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const humidity = document.querySelector('#humidity')
const latitude = document.querySelector('#latitude')
const longtitude = document.querySelector('#longtitude')
const regionName = document.querySelector('#regionName')
const temperature = document.querySelector('#temperature')
const weatherDescription = document.querySelector('#weatherDescription')
const windSpeed = document.querySelector('#windSpeed')

weatherForm.addEventListener('submit', (e)=> {
    e.preventDefault()
    const location = search.value

    humidity.textContent = 'Loading..'
    latitude.textContent = ''
    longtitude.textContent = ''
    regionName.textContent = ''
    temperature.textContent = ''
    weatherDescription.textContent = ''
    windSpeed.textContent = ''

    fetch(url + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                humidity.textContent = ''
                alert(data.error)
            } else {
                console.log(data)
                humidity.textContent = "Humidty     : " + data.weather.humidity
                latitude.textContent = "Latitude    : " + data.weather.latitude
                longtitude.textContent = "Longtitude  : " + data.weather.longtitude
                regionName.textContent = "RegionName  : " + data.weather.regionName
                temperature.textContent = "Temperature : " + data.weather.temperature
                weatherDescription.textContent = "Description : " + data.weather.weatherDescription
                windSpeed.textContent = "WindSpeed   : " + data.weather.windSpeed
            } 
        })
    })
})