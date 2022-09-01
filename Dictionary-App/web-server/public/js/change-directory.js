const postUrl = "/updateDataFile"

const changeDirectoryForm = document.querySelector('#changeDirectory')
const directory = document.querySelector('#directory')

changeDirectoryForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = {fileName: directory.value}
    fetch(postUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).catch(err => console.log(err))
    directory.value = ""
});