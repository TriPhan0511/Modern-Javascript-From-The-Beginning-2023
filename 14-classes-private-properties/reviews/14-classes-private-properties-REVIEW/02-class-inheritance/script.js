// Shape class: Parent class
class Shape {
  constructor(name) {
    this.name = name
  }
  logName() {
    return `Shape name: ${this.name}`
  }
}

// Rectangle class: Child class
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name)
    this.width = width
    this.height = height
  }
  area() {
    return this.width * this.height
  }
  logArea() {
    return `Rectangle area: ${this.area()}`
  }
}

const rect = new Rectangle('Rect 1', 10, 20)

// console.log(rect.logName()) // Shape name: Rect 1
// console.log(rect.area()) // 200
// console.log(rect.logArea()) // Rectangle area: 200
// -----------------------------------------------------------

// Cirlce class: Child class
class Circle extends Shape {
  constructor(name, radius) {
    super(name)
    this.radius = radius
  }
  // Override the `logName` method
  logName() {
    return `Circle name: ${this.name}`
  }
  area() {
    return Math.PI * Math.pow(this.radius, 2)
  }
}

const circle = new Circle('Circle 1', 10)

// console.log(circle.logName()) // Circle name: Circle 1
// console.log(circle.area()) // 314.1592653589793

console.log(circle instanceof Shape) // true
console.log(circle instanceof Circle) // true
