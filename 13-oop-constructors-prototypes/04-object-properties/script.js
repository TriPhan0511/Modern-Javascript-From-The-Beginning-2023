function Rectangle(name, width, height) {
  this.name = name
  this.width = width
  this.height = height
  this.area = function () {
    return this.width * this.height
  }
}

const rect1 = new Rectangle('Rectangle 1', 20, 20)
const rect2 = new Rectangle('Rectangle 2', 20, 30)

console.log(rect1.name, rect2.width)
console.log(rect2['name'], rect1['height'])

// Add property
rect1.color = 'red'

rect2.perimeter = () => 2 * (rect2.width + rect2.height)

// Delete property
delete rect2.perimeter

// Check for property
console.log(rect2.hasOwnProperty('color')) // false
console.log(rect1.hasOwnProperty('color')) // true

// Get keys (includes both methods and properties)
console.log(Object.keys(rect1))
// -> ['name', 'width', 'height', 'area', 'color']

// Get values
console.log(Object.values(rect2))
// -> ['Rectangle 2', 20, 30, ƒ]

// Get entries
// for (const [key, value] of Object.entries(rect1)) {
//   console.log(`${key} - ${value}`)
// }

// Get only properties (not methods)
for (const [k, v] of Object.entries(rect1)) {
  if (typeof v !== 'function') {
    console.log(`${k} - ${v}`)
  }
}
