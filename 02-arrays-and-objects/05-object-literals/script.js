let x

const person = {
  name: 'John Doe',
  age: 30,
  isAdmin: true,
  address: {
    street: '123 Main st',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sport'],
}

// Access properties
x = person.name // John Doe
x = person['age'] // 30
x = person.address.state // MA
x = person.hobbies[0] // music

// Update properties
person.name = 'Jane Doe'
person['isAdmin'] = false

// Remove properties
delete person.age

// Add property
person.hasChildren = true

// Add a function to as a property
person.greet = function () {
  console.log(`Hello, my name's ${this.name}`)
}

person.greet() // Hello, my name's Jane Doe

const person2 = {
  'first name': 'Brad',
  'last name': 'Traversy',
}

x = person2['first name'] // Brad

console.log(x)
