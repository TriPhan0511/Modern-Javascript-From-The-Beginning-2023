let x

const name = 'Brad'
const age = 31

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.'

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old.`

// String Properties and Methods
const s = 'Hello World'

x = s.length

// Access value by key
x = s[0]

x = s.__proto__

// console.log(new String('Hello world'))

x = s.toUpperCase()
x = s.toLowerCase()

x = s.charAt(0)

x = s.indexOf('l')

x = s.substring(1, s.length - 1)

x = `J${s.substring(1)}`

x = s.substring(0, 5) // Hello

x = s.slice(0, 5) // Hello

x = s.slice(-11) // Hello World

x = s.slice(-11, -6) // Hello

// console.log(s.length) // 11

x = '        Hello World'
x = s.trim()

x = s.replace('World', 'John')

x = s.includes('Helli')

x = s.valueOf()

x = s.split('')

console.log(x)
