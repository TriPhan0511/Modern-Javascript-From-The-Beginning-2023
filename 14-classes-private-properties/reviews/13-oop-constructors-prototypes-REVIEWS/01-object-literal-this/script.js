const rectangle1 = {
  name: 'Rectangle 1',
  width: 10,
  height: 20,
  area: function () {
    return this.width * this.height
  },
}

const rectangle2 = {
  name: 'Rectangle 1',
  width: 30,
  height: 40,
  area: function () {
    return this.width * this.height
  },
}

console.log(rectangle1.area())
console.log(rectangle2.area())
