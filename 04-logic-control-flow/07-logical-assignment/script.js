// ||= assigns the right side value only if the left is a falsy value.

// let a = false // a is falsy value
let a = null // a is falsy value

// if (!a) {
//   a = 10
// }

// a = a || 10

a ||= 10

console.log(a) // 10

// &&= assigns the right side value only if the left is a truthy value.

let b = 10 // b is truthy value

// if (b) {
//   b = 20
// }

// b = 10 && 20

b &&= 20

console.log(b) // 20

// ??= assigns the right side value only if the left is null or undefined.

// let c = null // c is null or undefined
let c = undefined // c is null or undefined

// if (c === null || c === undefined) {
//   c = 20
// }

// c = c ?? 20

c ??= 20

console.log(c)
