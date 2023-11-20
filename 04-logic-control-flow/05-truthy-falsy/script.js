// Falsy Values: 6
// false
// 0 or -0 or 0n
// "" or '' (Empty string)
//  null
// undefined
//  NaN

// Truthy Values:
// Every thing else that is not falsy
// true
// '0' (0 in a string)
// ' ' (space in a string)
// 'false' (false in a string)
// [] (empty array)
// {} (empty object)
// function () {} (empty function)

// Examples:
// console.log(Boolean(false)) // false
// console.log(Boolean(0)) // false
// console.log(Boolean(-0)) // false
// console.log(Boolean(0n)) // false
// console.log(Boolean('')) // false
// console.log(Boolean(null)) // false
// console.log(Boolean(undefined)) // false
// console.log(1 / 'one') // NaN // false
// console.log(Boolean(1 / 'one')) // false

// ------------------------------------------------------

const x = function () {}

if (x) {
  console.log('This is truthy')
} else {
  console.log('This is falsy')
}

console.log(Boolean(x))

// ------------------------------------------------------

// Truthy and falsy caveats
// const children = 0
// const children = 2
const children = ''

// if (children !== undefined) {
//   console.log(`You have ${children} children.`)
// } else {
//   console.log('Please enter number of children.')
// }

// if (!isNaN(children)) {
//   console.log(`You have ${children} children.`)
// } else {
//   console.log('Please enter number of children.')
// }

if (children || children === 0) {
  console.log(`You have ${children} children.`)
} else {
  console.log('Please enter number of children.')
}

// Checking for empty array
// const arr = []
// const arr = [1, 2, 3]
// const arr = 1

// if (Array.isArray(arr) && arr.length > 0) {
//   arr.forEach((i) => console.log(i))
// } else {
//   console.log('Nothing to show.')
// }

const posts = ['Post One', 'Post Two']
// const posts = []

if (posts.length > 0) {
  console.log('List Posts')
} else {
  console.log('No Posts To List')
}

// Checking for empty object
// const user = {
//   name: 'Brad',
// }
const user = {}

if (Object.keys(user).length > 0) {
  console.log('List User')
} else {
  console.log('No User')
}

// Loose Equality (==)
// console.log(false == 0) // true
// console.log('' == 0) // true
// console.log(null == undefined) // true

console.log(false === 0) // false
console.log('' === 0) // false
console.log(null === undefined) // false
