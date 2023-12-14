function Rectangle(name, width, height) {
  this.name = name
  this.width = width
  this.height = height
  this.area = function () {
    return this.width * this.height
  }
}

const rect1 = new Rectangle('Rectangle 1', 10, 10)
console.log(rect1.name)
console.log(rect1.area())

const rect2 = new Rectangle('Rectangle 2', 20, 10)
const rect3 = new Rectangle('Rectangle 3', 30, 30)
console.log(rect2.name, rect3.name)
console.log(rect2.area(), rect3.area())

// *** When we use the `new` keyword, there are actually 4 things that happen:
// 1. A new empty object is created.
// 2. The constructor function is called with the arguments that we passed in.
// 3. The `this` keyword is set to the new empty object.
// 4. The new object is returned from the constructor function.

// Get the contructor of an instance of an object
console.log(rect1.constructor)

// instanceof operator
// We can use the `instanceof` operator to check if
// an object is an instance of a constructor function.
console.log(rect2 instanceof Rectangle) // true
