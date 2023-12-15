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
  static getClass() {
    return 'Rectangle'
  }
}

const rect = new Rectangle('rect 1', 20, 30)
console.log(rect.area())
console.log(Rectangle.getClass())
