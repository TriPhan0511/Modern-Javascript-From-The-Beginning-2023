/*
***** Challenge 1 *****

Instructions:

Take the people array and create an array called youngPeople that 
stores objects with ONLY name and email properties of all the people 
that are 25 and under. 
The name property should have their first and last name.

Expected Result:

console.log(youngPeople);
[
  {name: 'Jane Poe', email:'jane@gmail.com'},
  {name: 'Sara Soe', email:'sara@gmail.com'},
  {name: 'Jose Koe', email:'jose@gmail.com'}
]
*/

const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
]

const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((person) => ({
    name: `${person.firstName} ${person.lastName}`,
    email: person.email,
  }))

// console.log(youngPeople)

// ---------------------------------------------------------

/*
***** Challenge 2 *****

Instructions:

Add all of the positive numbers in the array.

Expected Result:


const numbers = [2, -30, 50, 20, -12, -9, 7];

console.log(positiveSum); // 79
*/

const numbers = [2, -30, 50, 20, -12, -9, 7]

const positiveSum = numbers.filter((num) => num > 0).reduce((acc, cur) => acc + cur, 0)

// console.log(positiveSum) // 79

/*
***** Challenge 3 *****

Instructions:

Create a new array called capitalizedWords with the words 
from the words array with the first letter of each word capitalized.

Expected Result:

const words = ['coder', 'programmer', 'developer'];

console.log(capitalizedWords); // ['Coder', 'Programmer', 'Developer']
*/

const words = ['coder', 'programmer', 'developer']

const capitalizedWords = words.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)

console.log(capitalizedWords) // ['Coder', 'Programmer', 'Developer']
