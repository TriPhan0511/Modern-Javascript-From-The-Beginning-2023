// Sealing - Prevents properties from being added or removed.
// Can still be changed.

// Freezing - Prevents properties from being added, removed or changed.

// Object.seal() method example
const rectObj = {
  name: 'Rectangle 1',
  width: 10,
  height: 20,
}

let descriptors = Object.getOwnPropertyDescriptors(rectObj)
// console.log(descriptors)

Object.seal(rectObj)

descriptors = Object.getOwnPropertyDescriptors(rectObj)
// console.log(descriptors)

delete rectObj.name
// console.log(rectObj.name) // Rectangle 1

rectObj.name = 'RECTANGLE 123'
// console.log(rectObj.name) // RECTANGLE 123

rectObj.newProp = 'Hello, world!'
// console.log(rectObj.newProp) // undefined
// -----------------------------------------------------------

// Object.freeze() method example
const cirlceObj = {
  name: 'Circle 1',
  radius: 30,
}

// descriptors = Object.getOwnPropertyDescriptors(cirlceObj)
// console.log(descriptors)

Object.freeze(cirlceObj)

// descriptors = Object.getOwnPropertyDescriptors(cirlceObj)
// console.log(descriptors)

delete cirlceObj.name
// console.log(cirlceObj.name) // Circle 1

cirlceObj.name = 'CIRCLE 345'
// console.log(cirlceObj.name) // Circle 1

cirlceObj.newProp = 'NEW PROP'
// console.log(cirlceObj.newProp) // undefined

console.log(`rectObj is sealed? ${Object.isSealed(rectObj)}`) // true
console.log(`rectObj is frozen? ${Object.isFrozen(rectObj)}`) // false

console.log(`cirlceObj is sealed? ${Object.isSealed(cirlceObj)}`) // true
console.log(`cirlceObj is frozen? ${Object.isFrozen(cirlceObj)}`) // true
