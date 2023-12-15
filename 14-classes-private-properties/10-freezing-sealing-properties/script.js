// Sealing - Prevents properties from being added or removed. Can
// still be changed.

// Freezing - Prevents properties from being added, removed or changed.

// Object.seal() method example
const rectObj = {
  name: 'Rectangle 1',
  width: 10,
  height: 20,
}

Object.seal(rectObj)

let descriptors = Object.getOwnPropertyDescriptors(rectObj)
// console.log(descriptors)

rectObj.color = 'red'
delete rectObj.name
rectObj.name = 'NEW NAME'

// console.log(rectObj)

// ----------------------------------------

// Object.freeze() method example
const circleObj = {
  name: 'Circle 1',
  radius: 30,
}

Object.freeze(circleObj)

descriptors = Object.getOwnPropertyDescriptors(circleObj)
console.log(descriptors)

circleObj.color = 'red'
delete circleObj.name
circleObj.name = 'NEW NAME'

// console.log(circleObj)
// ----------------------------------------

// Object.freeze() method example

console.log(`rectObj is sealed? ${Object.isSealed(rectObj)}`) // true
console.log(`rectObj is frozen? ${Object.isFrozen(rectObj)}`) // false

console.log(`circleObj is sealed? ${Object.isSealed(circleObj)}`) // true
console.log(`circleObj is frozen? ${Object.isFrozen(circleObj)}`) // true
