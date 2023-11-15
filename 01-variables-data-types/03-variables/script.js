// Ways to declare a variable
// var, let, const

let firstName = 'John'
let lastName = 'Doe'
console.log(firstName, lastName)

var age = 30
console.log(age)

// Naming Coventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// Re-assigning Variables
age = 31
console.log(age)

let score
score = 1
console.log(score)

if (true) {
  //   score = score + 1
  score += 1
}
console.log(score)

const x = 100
// x = 200 // Error

const arr = [1, 2, 3, 4]
// arr = [1, 2, 3, 4, 5] // Error

arr.push(5)
console.log(arr) // [1, 2, 3, 4, 5]

const person = {
  name: 'Brad',
}
console.log(person) // {name: 'Brad'}

person.name = 'John'
console.log(person) // {name: 'John'}

person.email = 'brad@gmail'
console.log(person) // {name: 'John', email: 'brad@gmail'}

// Declare multiple values at once
let a, b, c
const d = 10,
  e = 20,
  f = 30
console.log(d)

console.log(a) // undefined
