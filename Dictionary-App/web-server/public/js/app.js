const url = "http://192.168.1.26:3001/getWord"


const dictionaryForm = document.querySelector('form')
const directory = document.querySelector('input')

const word = document.querySelector('#word')
const meaning = document.querySelector('#meaning')
const sentence = document.querySelector('#sentence')

dictionaryForm.addEventListener('submit', (e)=> {
    e.preventDefault()
    word.textContent = 'Loading..'
    meaning.textContent = ''
    sentence.textContent = ''
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        if(data.error) {
            word.textContent = ''
            alert(data.error)
        } else {
            console.log(data)
            word.textContent = data.word
            meaning.textContent = data.meaning
            sentence.textContent = data.sentence
        } 
    })
})