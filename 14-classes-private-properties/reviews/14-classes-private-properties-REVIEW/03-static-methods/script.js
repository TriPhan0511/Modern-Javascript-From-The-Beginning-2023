class Rectangle {
  constructor(name, width, height) {
    this.name = name
    this.width = width
    this.height = height
  }
  area() {
    return this.width * this.height
  }
  // Static method
  static describe() {
    return `This is Rectangle class.`
  }
}

console.log(Rectangle.describe()) // This is Rectangle class.

const rect1 = new Rectangle('Rect 1', 10, 20)

// console.log(rect1.area()) // 200
// console.log(rect1.describe()) // Uncaught TypeError: rect1.describe is not a function
