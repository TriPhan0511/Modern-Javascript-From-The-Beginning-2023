function Rectangle(name, width, height) {
  this.name = name
  this.width = width
  this.height = height
  this.area = function () {
    return this.width * this.height
  }
}

const rect = new Rectangle('Rectangle 1', 10, 10)
console.log(rect)

console.log(Object.getPrototypeOf(rect))
