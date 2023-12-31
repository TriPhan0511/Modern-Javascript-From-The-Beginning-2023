class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName
    this._lastName = lastName
  }

  get firstName() {
    return this.capitalizeFirst(this._firstName)
  }
  set firstName(firstName) {
    this._firstName = firstName
  }
  get lastName() {
    return this.capitalizeFirst(this._lastName)
  }
  set lastName(lastName) {
    this._lastName = lastName
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  capitalizeFirst(name) {
    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
  }
}

const p1 = new Person('john', 'doe')

// console.log(p1._firstName) // john
// console.log(p1._lastName) // doe

// console.log(p1.firstName) // John
// console.log(p1.lastName) // Doe
// console.log(p1.fullName) // John Doe

p1.firstName = 'rose'
p1.lastName = 'mary'

console.log(p1.firstName) // Rose
console.log(p1.lastName) // Mary
console.log(p1.fullName) // Rose Mary
