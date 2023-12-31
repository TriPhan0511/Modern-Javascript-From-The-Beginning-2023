class Rectangle {
  constructor(name, width, height) {
    this.name = name
    this.width = width
    this.height = height
  }
  area() {
    return this.width * this.height
  }
  perimeter() {
    return 2 * (this.width + this.height)
  }
  isSquare() {
    return this.width === this.height
  }
  logArea() {
    return `Area: ${this.area()}`
  }
}

const rect1 = new Rectangle('Rect 1', 10, 20)

console.log(rect1.name) // Rect 1
console.log(rect1.area()) // 200
console.log(rect1.perimeter()) // 60
console.log(rect1.isSquare()) // false
console.log(rect1.logArea()) // Area: 200
