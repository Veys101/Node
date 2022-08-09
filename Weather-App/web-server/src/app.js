const path = require('path')
const express = require("express")

const publicDirectoryPath = path.join(__dirname, '../public')

const app = express()

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.send('Hello Express!')
})

app.get('/help', (req, res) => {
    res.send('<h1>Help Page</h1>')
})


app.get('/about', (req, res) => {
    res.send({
        element: "This is an element"
    })
})

app.listen(3000, () => {
    console.log("Server is up on port 3000.")
})