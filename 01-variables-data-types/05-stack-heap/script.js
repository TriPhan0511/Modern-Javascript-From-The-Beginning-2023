// Values are stored on the stack
const name = 'John'
const age = 30

// Reference values are stored on the heap
const person = {
  name: 'Brad',
  age: 40,
}

let newName = name
newName = 'Johnathan'
console.log(name, newName) // John Johnathan

let newPerson = person
console.log(person, newPerson)
// -> {name: 'Brad', age: 40} {name: 'Brad', age: 40}

newPerson.name = 'Bradley'
console.log(person, newPerson)
// -> {name: 'Bradley', age: 40} {name: 'Bradley', age: 40}
