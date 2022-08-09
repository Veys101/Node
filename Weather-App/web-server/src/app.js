const express = require("express")

const app = express()

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