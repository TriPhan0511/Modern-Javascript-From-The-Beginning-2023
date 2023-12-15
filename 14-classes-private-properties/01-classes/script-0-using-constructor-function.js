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

Rectangle.prototype.logArea = function () {
  console.log(`Rectangle Area: ${this.area}`)
}

const square = new Rectangle('Square', 20, 20)
console.log(square)

