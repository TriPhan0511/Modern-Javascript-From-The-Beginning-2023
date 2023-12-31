function Rectangle(name, width, height) {
  this.name = name
  this.width = width
  this.height = height
  //   this.area = function () {
  //     return this.width * this.height
  //   }
  this.area = () => this.width * this.height
}

const rect1 = new Rectangle('Rect 1', 10, 20)

// console.log(rect1.area())

// console.log(rect1.name) // Rect 1
// console.log(rect1['name']) // Rect 1

// Add property
rect1.color = 'red'
// rect1.perimeter = () => 2 * (rect1.width + rect1.height)
rect1.perimeter = function () {
  return 2 * (this.width + this.height)
}

// console.log(rect1.color) // Red
// console.log(rect1.perimeter()) // 60

// Delete property
delete rect1.perimeter

// console.log(rect1.perimeter()) // Uncaught TypeError: rect1.perimeter is not a function

// Check for property
// console.log(rect1.hasOwnProperty('color')) // true
// console.log(rect1.hasOwnProperty('perimeter')) // false

// Get keys
// console.log(Object.keys(rect1)) // ['name', 'width', 'height', 'area', 'color']
// Object.keys(rect1).forEach((k) => {
//   console.log(`Key: ${k} - Value: ${rect1[k]}`)
// })

// Get values
// console.log(Object.values(rect1)) // ['Rect 1', 10, 20, ƒ, 'red']

// Get entries
// console.log(Object.entries(rect1))
// Object.entries(rect1).forEach(([k, v]) => {
//   console.log(`Key: ${k} - Value: ${rect1[k]}`)
// })

// Get only properties, not method
Object.entries(rect1).forEach(([k, v]) => {
  if (typeof v !== 'function') {
    console.log(`Key: ${k} - Value: ${rect1[k]}`)
  }
})
