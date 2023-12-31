function Rectangle(name, width, height) {
  this.name = name
  this.width = width
  this.height = height
  this.area = function () {
    return this.width * this.height
  }
}

const rect1 = new Rectangle('Rect 1', 10, 20)
// console.log(rect1.name)
// console.log(rect1.area())
// console.log(rect1)
// console.log(Object.getPrototypeOf(rect1))
// console.log(rect1 instanceof Rectangle) // true
console.log(rect1.constructor)

// const rect2 = new Rectangle('Rect 2', 30, 40)
// console.log(rect2.area())
