// [[Configurable]] - if `true`, the property can be deleted
// and these attributes can be modified, otherwise not.

// [[Enumerable]] - if `true`, the property will be returned in a
// `for...in` loop, otherwise not.

// [[Writable]] - if `true`, the value of the property can be changed,
// otherwise not.

// [[Value]] - the value of the property

Math.PI = 100
// console.log(Math.PI)

// Get descriptor of a property of an object
let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor)

const rectObj = {
  name: 'Rectangle 1',
  width: 10,
  height: 20,
}

// descriptor = Object.getOwnPropertyDescriptor(rectObj, 'name')
// console.log(descriptor)

// Change the permissions of a property of an object
Object.defineProperty(rectObj, 'name', {
  writable: false,
  configurable: false,
  enumerable: false,
})

descriptor = Object.getOwnPropertyDescriptor(rectObj, 'name')
console.log(descriptor)

// console.log(rectObj.name) // Rectangle 1

rectObj.name = 'NEW NAME'
delete rectObj.name

// console.log(rectObj.name) // Rectangle 1

Object.entries(rectObj).forEach(([key, value]) => {
  console.log(`${key}: ${value}`)
})
// ->
// width: 10
// height: 20

// Get the descriptors of all properties
console.log(Object.getOwnPropertyDescriptors(rectObj))
