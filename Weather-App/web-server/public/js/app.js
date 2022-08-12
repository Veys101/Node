const url = "http://localhost:3000/weather?search=Eskisehir"

console.log("This is client side print")

fetch('http://puzzle.mead.io/puzzle').then((response)=> {
    response.json().then((data) => {
        console.log(data)
    })
})

fetch(url).then((response) => {
    response.json().then((data) => {
        if(data.error) console.log(data.error)
        else console.log(data)
    })
})

