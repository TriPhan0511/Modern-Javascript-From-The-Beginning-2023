// NOTE:
// Use Object.create() as an alternate way of creating multiple objects.

const rectanglePrototypes = {
  area: function () {
    return this.width * this.height
  },
  perimeter: function () {
    return 2 * (this.width + this.height)
  },
  isSquare: function () {
    return this.width === this.height
  },
}

function createRectangle(width, height) {
  return Object.create(rectanglePrototypes, {
    width: {
      value: width,
    },
    height: {
      value: height,
    },
  })
}

const rect1 = createRectangle(10, 20)

console.log(rect1.area())
console.log(rect1.perimeter())
console.log(rect1.isSquare())
