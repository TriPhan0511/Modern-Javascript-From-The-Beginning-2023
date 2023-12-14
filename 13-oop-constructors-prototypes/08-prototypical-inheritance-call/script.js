// NOTE:
// Use Object.cerate() as an alternate way of creating multiple objects.

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

function createRectangle(height, width) {
  return Object.create(rectanglePrototypes, {
    height: {
      value: height,
    },
    width: {
      value: width,
    },
  })
}

const rect = createRectangle(10, 20)
console.log(rect)
console.log(rect.area())
console.log(rect.perimeter())
console.log(rect.isSquare())

const rect2 = createRectangle(5, 15)
console.log(rect2.area())
