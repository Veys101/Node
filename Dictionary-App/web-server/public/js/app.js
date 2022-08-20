const url = "http://192.168.1.26:3001/getWord"


const dictionaryForm = document.querySelector('#randomForm')
const showForm = document.querySelector('#showForm')
const directory = document.querySelector('input')

const word = document.querySelector('#word')
const meaning = document.querySelector('#meaning')
const sentence = document.querySelector('#sentence')

dictionaryForm.addEventListener('submit', (e)=> {
    e.preventDefault()
    word.textContent = 'Loading..'
    meaning.textContent = ''
    sentence.textContent = ''
    meaning.style.display = "none"
    sentence.style.display = "none"
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        if(data.error) {
            word.textContent = ''
            alert(data.error)
        } else {
            console.log(data)
            word.value = data.word
            meaning.value = data.meaning
            sentence.value = data.sentence
        } 
    })
});

showForm.addEventListener('submit', (e)=> {
    e.preventDefault()
    meaning.style.display = "block"
    sentence.style.display = "block"
})