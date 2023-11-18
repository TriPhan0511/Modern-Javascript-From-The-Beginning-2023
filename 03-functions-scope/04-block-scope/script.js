const x = 100
const foo = 1
var bar = 2

if (true) {
  const y = 200
  console.log(x + y)
}

// console.log(x + y) // Uncaught ReferenceError: y is not defined

for (let i = 0; i <= 10; i++) {
  console.log(i)
}

// console.log(i) // Uncaught ReferenceError: i is not defined

if (true) {
  const a = 500
  let b = 600
  var c = 700
}

// console.log(a)// Uncaught ReferenceError: a is not defined
// console.log(b) // Uncaught ReferenceError: b is not defined
console.log(c) // 700

function run() {
  var d = 100
  console.log(d)
}

run()

// console.log(d) // Uncaught ReferenceError: d is not defined
