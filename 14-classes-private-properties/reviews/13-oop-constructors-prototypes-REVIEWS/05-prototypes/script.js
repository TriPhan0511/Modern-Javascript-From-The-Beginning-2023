function Rectangle(name, width, height) {
  this.name = name
  this.width = width
  this.height = height
}

const rect1 = new Rectangle('rect 1', 10, 20)
console.log(rect1)
console.log(Object.getPrototypeOf(rect1))
