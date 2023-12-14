function Shape(name) {
  this.name = name
}

Shape.prototype.logName = function () {
  console.log(`Shape Name: ${this.name}`)
}

function Rectangle(name, height, width) {
  Shape.call(this, name)
  this.height = height
  this.width = width
}

// Inherits Shape prototypes
Rectangle.prototype = Object.create(Shape.prototype)

// Override the `logName()` method
Rectangle.prototype.logName = function () {
  console.log(`Rectangle Name: ${this.name}`)
}

function Circle(name, radius) {
  Shape.call(this, name)
  this.radius = radius
}

// Inherits Shape prototypes
Circle.prototype = Object.create(Shape.prototype)

// Set prototype constructors
Rectangle.prototype.constructor = Rectangle
Circle.prototype.constructor = Circle

const rect = new Rectangle('Rectangle 1', 20, 20)
const cir = new Circle('Circle 1', 30)

console.log(rect, cir)

rect.logName()
cir.logName()

// console.log(rect.constructor)
// console.log(cir.constructor)
