const prompt = require('prompt-sync')();
const yargs = require("yargs");
const dataHandler = require('./data-handle.js')
const chalk = require('chalk')
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

yargs.command({
    command: 'add',
    describe: 'Add a new word',
    handler: function () {
        rl.question("Word: ", function(word) {
            rl.question("Meaning: ", function(meaning) {
                rl.question("Sentence: ", function(sentence) {
                    dataHandler.addWord(word, meaning, sentence)
                    rl.close();
                });
            });
        });
    }

})

yargs.command({
    command: 'list',
    describe: 'List words randomly',
    handler: async function () {
        var data = dataHandler.ListWords()
        let loopNumber = prompt('> ');
       
        var correctAnswer = 0

        for (let i = 0; i<loopNumber; i++) {
            const index = getRandomInt(data.length)
            console.log(chalk.bgBlue.bold.white(data[index].word))
            let answer = await new Promise(resolve => {
                rl.question('Answer: ', resolve)
              })
            const meaningList = data[index].meaning.split(",").map(element => element.trim());
			console.log("\n")
            if(meaningList.includes(answer)){
                console.log(chalk.bold.inverse.green("Correct"));
                correctAnswer++;
            } 
            else console.log(chalk.bold.inverse.red("Wrong"));
            console.log("Meaning:", meaningList);
            console.log("Sentence:", data[index].sentence);
            console.log("============================================================\n")
            data.splice(index, 1)
        }  
        console.log(chalk.bold.green("Success Rate: %" + (correctAnswer / loopNumber)*100))
        rl.close()
       
    }
})

yargs.parse()





