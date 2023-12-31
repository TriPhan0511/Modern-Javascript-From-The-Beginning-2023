// Constructor function
function Person(first, last) {
  this._firstName = first
  this._lastName = last

  Object.defineProperty(this, 'firstName', {
    get: function () {
      return this.capitalizeFirst(this._firstName)
    },
    set: function (value) {
      this._firstName = value
    },
  })

  Object.defineProperty(this, 'lastName', {
    get: function () {
      return this.capitalizeFirst(this._lastName)
    },
    set: function (value) {
      this._lastName = value
    },
  })

  Object.defineProperty(this, 'fullName', {
    get: function () {
      return `${this.firstName} ${this.lastName}`
    },
  })
}

Person.prototype.capitalizeFirst = function (name) {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
}

const p1 = new Person('john', 'doe')

// console.log(p1._firstName) // john
// console.log(p1._lastName) // doe

// console.log(p1.firstName) // John
// console.log(p1.lastName) // Doe
// console.log(p1.fullName) // John Doe

p1.firstName = 'rose'
p1.lastName = 'mary'

// console.log(p1.firstName) // Rose
// console.log(p1.lastName) // Mary
// console.log(p1.fullName) // Rose Mary
// -------------------------------------------------

// Object literal
const PersonObj = {
  _firstName: 'john',
  _lastName: 'doe',

  capitalizeFirst: function (name) {
    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
  },

  get firstName() {
    return this.capitalizeFirst(this._firstName)
  },
  set firstName(value) {
    this._firstName = value
  },
  get lastName() {
    return this.capitalizeFirst(this._lastName)
  },
  set lastName(value) {
    this._lastName = value
  },

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  },
}

const p2 = Object.create(PersonObj)

// console.log(p2._firstName) // john
// console.log(p2._lastName) // doe

// console.log(p2.firstName) // John
// console.log(p2.lastName) // Doe
// console.log(p2.fullName) // John Doe

p2.firstName = 'rose'
p2.lastName = 'mary'

console.log(p2.firstName) // Rose
console.log(p2.lastName) // Mary
console.log(p2.fullName) // Rose Mary
