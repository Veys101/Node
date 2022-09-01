const fs = require('fs')
const chalk = require('chalk')

let jsonPath = "" 

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
        const fileName = fs.readFileSync(__dirname + "/data/dataIndex.txt", 'utf-8')
        jsonPath = __dirname + "/data/" + fileName + ".json"
        console.log(jsonPath)
        const dataBuffer = fs.readFileSync(jsonPath)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        console.log(e)
        return []
    }
}

const saveDataFile = function(fileName) {
    fs.writeFileSync(__dirname + "/data/dataIndex.txt", fileName)
} 

module.exports = {
    addWord: addWord,
    removeWord: removeWord,
    ListWords: listWords,
    saveDataFile: saveDataFile
}