const strLit = 'Hello'
const strObj = new String('Hello')

// console.log(typeof strLit) // string
// console.log(typeof strObj) // object

// console.log(strLit instanceof String) // false
// console.log(strObj instanceof String) // true

// Boxing
// is when Javascript adds the wrapper object onto a literal.
// console.log(strLit.toUpperCase()) // HELLO
// console.log(strLit[0]) // H

// Unboxing
// is when an object is turned in back into a literal.
// console.log(strObj.valueOf()) // Hello
// console.log(typeof strObj.valueOf()) // string

