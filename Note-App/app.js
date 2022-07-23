const fs = require('fs')
const utils = require('./utils.js')

// fs.writeFileSync("notes.txt", "This file was created by Node.js")
fs.appendFileSync("notes.txt", "\nHello World...")

console.log(utils.name)