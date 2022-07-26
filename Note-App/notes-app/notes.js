const fs = require('fs')
const chalk = require('chalk')

const listNotes = () => {
    const notes = loadNotes()

    notes.forEach(note => {
        console.log(note.title)
    });
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    debugger
    
    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bold.inverse.green("New note added!!"))
    } else {
        console.log(chalk.bold.inverse.red("Note title taken!!"))
    }
    
}

const removeNote = function(title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note) {
        return note.title !== title
    })

    if(notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        console.log(chalk.bold.inverse.green("Note removed!!"))
    }else {
        console.log(chalk.bold.inverse.red("Note not found!!"))

    }
    
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}