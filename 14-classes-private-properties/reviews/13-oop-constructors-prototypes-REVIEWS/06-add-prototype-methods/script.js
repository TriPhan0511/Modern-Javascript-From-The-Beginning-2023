function Rectangle(name, width, height) {
  this.name = name
  this.width = width
  this.height = height
}

Rectangle.prototype.area = function () {
  return this.width * this.height
}

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height)
}

Rectangle.prototype.isSquare = function () {
  return this.width === this.height
}

Rectangle.prototype.changeName = function (newName) {
  this.name = newName
}

const rect1 = new Rectangle('Rect 1', 10, 20)

// console.log(rect1.area())
// console.log(rect1.perimeter())
// console.log(rect1.isSquare())

console.log(rect1.name) // Rect 1
rect1.changeName('Rect 3000')
console.log(rect1.name) // Rect 3000
