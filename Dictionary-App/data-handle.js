const fs = require('fs')
const chalk = require('chalk')

const jsonPath = __dirname + "/web-server/public/data/dictionary-3.json" 

const listWords = () => {
    const words = loadWords()
    return words
}

const addWord = function (word, meaning, sentence) {
    const words = loadWords()
    const duplicateWords = words.filter(function(item) {
        return item.word === word
    })
    
    if(duplicateWords.length === 0){
        words.push({
            word: word,
            meaning: meaning,
            sentence: sentence
        })
        saveWords(words)
        console.log(chalk.bold.inverse.green("New word added!!"))
    } else {
        console.log(chalk.bold.inverse.red("Word taken!!"))
    }
    
}

const removeWord = function(word) {
    const words = loadWords()
    const wordToKeep = words.filter(function(item) {
        return item.word !== word
    })

    if(words.length > wordToKeep.length) {
        saveWords(wordToKeep)
        console.log(chalk.bold.inverse.green("Word removed!!"))
    }else {
        console.log(chalk.bold.inverse.red("Word not found!!"))

    }
    
}

const saveWords = function (words) {
    const dataJSON = JSON.stringify(words)
    fs.writeFileSync(jsonPath, dataJSON)
}

const loadWords = function() {
    try {
        const dataBuffer = fs.readFileSync(jsonPath)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        console.log(e)
        return []
    }
}

module.exports = {
    addWord: addWord,
    removeWord: removeWord,
    ListWords: listWords
}