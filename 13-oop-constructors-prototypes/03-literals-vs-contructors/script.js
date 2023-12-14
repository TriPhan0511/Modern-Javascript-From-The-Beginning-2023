const strLit = 'Hello'
const strObj = new String('Hello')

console.log(strLit, typeof strLit) // Hello string
console.log(strObj, typeof strObj) // {'Hello'} 'object'

// Boxing
// is when Javascript adds the wrapper object onto a literal.
console.log(strLit.toUpperCase())
console.log(strLit[0])

// Unboxing
// is when an object is turned in back into a literal.
console.log(strObj.valueOf(), typeof strObj.valueOf())

console.log(strLit.constructor)
console.log(strObj.constructor)

console.log(strLit instanceof String) // false
console.log(strObj instanceof String) // true

// Other types
const numLit = 20
const numObj = new Number(20)

console.log(numLit, typeof numLit) // 20 'number'
console.log(numObj, typeof numObj) // {20} 'object'

const boolLit = true
const boolObj = new Boolean(true)

console.log(boolLit, typeof boolLit) // true 'boolean'
console.log(boolObj, typeof boolObj) // {true} 'object'

const arrLi = [1, 2, 3, 4, 5]
const arrObj = new Array(1, 2, 3, 4, 5)

console.log(arrLi, typeof arrLi) // [1, 2, 3, 4, 5] 'object'
console.log(arrObj, typeof arrObj) // [1, 2, 3, 4, 5] 'object'

const funcLit = function (x) {
  return x * x
}

console.log(funcLit, typeof funcLit)
console.log(funcLit(5)) // 25

const funcObj = new Function('x', 'return x * x')

console.log(funcObj(5)) // 25

const obj1 = {}

const obj2 = new Object()

console.log(obj1, typeof obj1)
console.log(obj2, typeof obj2)
