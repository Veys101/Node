const path = require('path')
const express = require("express")
const hbs = require('hbs')
const data = require('../../data-handle')

var wordsList = data.ListWords()

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../public/views')
const partialPath = path.join(__dirname, '../public/partial')

app.set('views', viewsPath)
app.set('view engine', 'hbs')

hbs.registerPartials(partialPath)

app.use(express.static(publicDirectoryPath))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '192.168.1.26');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, OPTIONS');
        res.send();
    });
});

app.get('/', (req, res) => {
    res.render('index', {
        title: "Dictionary App",
        name: "Veys"
    })
})

app.get('/getWord', (req, res) => {
    res.send(getWord())
})

app.get('/change-diretory', (req, res) => {
    res.render('index', {
        title: "Dictionary App",
        name: "Veys"
    })
})


app.listen(3001, () => {
    console.log("Server is up on port 3001.")
})

function getWord() {

    if(wordsList.length == 0) wordsList = data.ListWords()
    var index = Math.floor(Math.random() * wordsList.length)
    const word = wordsList[index]
    wordsList.splice(index, 1)

    return word
}