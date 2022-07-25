const fs = require('fs')
const utils = require('./utils.js')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

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
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
       notes.addNote(argv.title, argv.body)
    }

})

/* Create remove command */
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
       notes.removeNote(argv.title)
    }

})


// console.log(yargs.argv)

yargs.parse()
