let x

const todo = new Object()

todo.id = 1
todo.name = 'Buy Milk'
todo.completed = false

x = todo

const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
}

x = person.address.coords.lat // 42.9384

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

// Spread Operator
const obj3 = { ...obj1, ...obj2 } // {a: 1, b: 2, c: 3, d: 4}

// assign method
const obj4 = Object.assign({}, obj1, obj2) // {a: 1, b: 2, c: 3, d: 4}

// An array of objects
const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pickup kids from school' },
  { id: 3, name: 'Take out trash' },
]

x = todos[0].name

// Get all of the keys in an object
// and put those into an array
x = Object.keys(todo) // ['id', 'name', 'completed']

// Get all of the values in an object
// and put those into an array
x = Object.values(todo) // [1, 'Buy Milk', false]

// Get all of the entries (key/value pairs) in an object
// and put those into an array
x = Object.entries(todo)
// console.log(x[0]) // ['id', 1]
// console.log(x[1]) // ['name', 'Buy Milk']
// console.log(x[2]) //  ['completed', false]

// Count how many properties in an object
x = Object.keys(todo).length // 3

// Determines whether an object has a property with the specified name.
x = todo.hasOwnProperty('name') // true
x = todo.hasOwnProperty('location') // false

console.log(x)
