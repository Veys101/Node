const getUser = require('./getUser.js')

getUser.calc(1, (user) => {
    console.log(user)
})

getUser.calc(2, (user) => {
    console.log(user)
})

const sum = 1 + 33
console.log(sum)