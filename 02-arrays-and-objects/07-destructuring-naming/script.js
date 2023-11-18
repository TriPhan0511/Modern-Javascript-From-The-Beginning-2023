// ***** Naming *****
const firstName = 'John'
const lastName = 'Doe'
const age = 30

const person = {
  firstName,
  lastName,
  age,
}

// console.log(person.age)

// ***** Destructure Object *****
const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
}

// const {
//   id,
//   title,
//   user: { name },
// } = todo

// console.log(id, title, name) // 1 'Take out trash' 'John'

const {
  id: todoID, // rename
  title,
  user: { name },
} = todo

// console.log(todoID, title, name) // 1 'Take out trash' 'John'

// ***** Destructure Array *****
const numbers = [23, 67, 33, 49]

const [first, second, ...rest] = numbers
console.log(first) // 23
console.log(second) // 67
console.log(rest) // [33, 49]
