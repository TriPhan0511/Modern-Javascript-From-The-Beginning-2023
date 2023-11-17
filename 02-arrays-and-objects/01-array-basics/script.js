let x

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102]
const mixed = [12, 'Hello', true, null]

// Array Constructoe
const fruits = new Array('apple', 'grape', 'orange')

x = numbers[0] // 12
x = numbers[0] + numbers[3] // 41
x = `My favorite fruit is ${fruits[2]}` // My favorite fruit is orange

x = numbers.length

fruits[2] = 'pear'
x = fruits //  ['apple', 'grape', 'pear']

// fruits.length = 2
// console.log(fruits) // ['apple', 'grape']

fruits[3] = 'strawberry'
// console.log(fruits) // ['apple', 'grape', 'pear', 'strawberry']

fruits[fruits.length] = 'blueberry'
// console.log(fruits) // ['apple', 'grape', 'pear', 'strawberry', 'blueberry']

console.log(x)
