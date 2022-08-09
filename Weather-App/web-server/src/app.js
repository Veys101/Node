const path = require('path')
const express = require("express")

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')

console.log(path.join(__dirname, '../views'))

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')
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
        name: 'Veys'
    })
})


app.get('/about', (req, res) => {
    res.send({
        element: "This is an element"
    })
})

app.listen(3000, () => {
    console.log("Server is up on port 3000.")
})