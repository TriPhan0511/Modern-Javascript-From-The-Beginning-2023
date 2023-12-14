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

const rect = new Rectangle('Rect', 10, 10)
const rect2 = new Rectangle('Rect 2', 30, 40)

console.log(rect)
console.log(rect.area())
console.log(rect.perimeter())
console.log(rect.isSquare())
rect.changeName('NEW RECTANGLE')
console.log(rect.name)

console.log(rect2)
console.log(rect2.area())
