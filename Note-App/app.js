const fs = require('fs')
const utils = require('./utils.js')
const validator = require('validator')
const chalk = require('chalk')

// fs.writeFileSync("notes.txt", "This file was created by Node.js")
// fs.appendFileSync("notes.txt", "\nHello World...")

console.log(utils.name)

console.log(utils.add(5, 3))

console.log(validator.isEmail('veys@gmail.com'))

console.log(chalk.blue("Hello World"))