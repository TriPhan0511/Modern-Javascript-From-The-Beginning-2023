// Shape constructor
function Shape(name) {
  this.name = name
}

// Add a method into Shape prototype
Shape.prototype.logName = function () {
  return `Shape name: ${this.name}`
}

// Rectangle constructor
function Rectangle(name, width, height) {
  Shape.call(this, name)
  this.width = width
  this.height = height
}

// Inherits Shape prototypes
Rectangle.prototype = Object.create(Shape.prototype)

// Set prototype constructor
Rectangle.prototype.constructor = Rectangle

// Add a new method into Rectangle prototype
Rectangle.prototype.area = function () {
  return this.width * this.height
}

const rect = new Rectangle('Rect 1', 10, 20)

// console.log(rect.constructor)
// console.log(rect.logName()) // Shape name: Rect 1
// console.log(rect.area()) // 200
// -----------------------------------------------------

// Circle constructor
function Circle(name, radius) {
  Shape.call(this, name)
  this.radius = radius
}

// Inherits Shape prototypes
Circle.prototype = Object.create(Shape.prototype)

// Override the `logName method
Circle.prototype.logName = function () {
  return `Circle name: ${this.name}`
}

// Add a new method to Circle prototype
Circle.prototype.perimeter = function () {
  return 2 * Math.PI * this.radius
}

const circle = new Circle('Circle 1', 10)

console.log(circle.logName()) // Circle name: Circle 1
console.log(circle.perimeter()) // 62.83185307179586
console.log(circle.area()) // Uncaught TypeError: circle.area is not a function
