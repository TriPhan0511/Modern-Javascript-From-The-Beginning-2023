console.log(10 < 20 && 30 > 15) // true
console.log(10 > 20 || 30 > 15) // true

// && - Will return the first falsy value or the last value
let a

a = 10 && 20 // 20
a = 10 && 20 && 30 // 30
a = 10 && 0 && 30 // 0
a = 10 && '' & 0 && 30 // ''

console.log(a)

// const posts = ['Post One', 'Post Two']
const posts = []
posts.length > 0 && console.log(posts[0])

// || - Will return the first truthy value or the last value
let b

b = 10 || 20 // 10
b = 0 || 20 // 20
b = 0 || null // null
b = 0 || null || '' // ''
b = 0 || null || '' || undefined // undefined

console.log(b)

// Nullish coalescing operator (??)
// Returns its right-hand side operand when its left-hand side
// is null or undefined, and otherwise returns its left-hand side operand.
let c

c = null ?? 'default string' // default string
c = undefined ?? 'default string' // default string
c = 0 ?? 42 // 0
c = '' ?? 42 // ''

console.log(c)
