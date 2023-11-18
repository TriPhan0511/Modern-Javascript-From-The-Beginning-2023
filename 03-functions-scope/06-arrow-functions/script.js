// function add(a, b) {
//   return a + b
// }

// Arrow function syntax
const add = (a, b) => {
  return a + b
}

// Implicit return
const subtract = (a, b) => a - b

// Can leave off () with a single param
const double = (a) => a * 2

// Returning an object
const createObject = () => ({
  name: 'Brad',
})

const numbers = [1, 2, 3, 4, 5]

// numbers.forEach(function (item) {
//   console.log(item)
// })

// Arrow function in a callback
numbers.forEach((item) => console.log(item))

console.log(add(1, 2))
console.log(subtract(1, 2))
console.log(double(10))
console.log(createObject())
