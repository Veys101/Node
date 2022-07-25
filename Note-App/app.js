const fs = require('fs')
const utils = require('./utils.js')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

// fs.writeFileSync("notes.txt", "This file was created by Node.js")
// fs.appendFileSync("notes.txt", "\nHello World...")

// console.log(utils.name)

// console.log(utils.add(5, 3))

// console.log(validator.isEmail('veys@gmail.com'))

// console.log(chalk.bold.inverse.blue("Hello World"))

// console.log(process.argv)

// console.log(process.argv[2] === "add" ? "Adding note!" : "Not Adding note!")

// console.log(yargs.argv)

/* Customize yargs version */
yargs.version('1.1.1')

/* Create add command */
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!!')
    }

})

/* Create remove command */
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function () {
        console.log('Removing a new note!!')
    }

})


console.log(yargs.argv)
