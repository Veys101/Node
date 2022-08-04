// Object Property Shorthand
const country = "USA"
const city = "Seattle"
const zipcode = "11"

const state = {
    country,
    city,
    zipcode
}

console.log(state)

const user = {
    name : "John",
    age: 21,
    profession: "Architect",
    hometown: undefined
}

// Object Destructing
const {name, age, profession} = user

console.log(name)
console.log(age)
console.log(profession)

const transaction = (type, {name, age}) =>{
    console.log(type, name, age)
}


transaction("User", user)