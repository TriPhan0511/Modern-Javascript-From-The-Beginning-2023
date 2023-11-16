const myString = 'developer'
const myNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`
console.log(myNewString) // 'Developer'

// const myString2 = 'hello, i am a developer'
// let myNewString2 = myString2.split(' ')
// myNewString2 = myNewString2.map((item) => `${item[0].toUpperCase()}${item.substring(1)}`)
// myNewString2 = myNewString2.join(' ')
// console.log(myNewString2) // 'Hello, I Am A Developer'

// const myString2 = 'hello, i am a developer'
// let myNewString2 = myString2.split(' ')
// console.log(myNewString2) // 'Hello, I Am A Developer'
// myNewString2 = myNewString2.map((item) => {
//   if (item.includes('hello') || item === 'i') {
//     return (item = `${item[0].toUpperCase()}${item.substring(1)}`)
//   } else {
//     return item
//   }
// })
// myNewString2 = myNewString2.join(' ')
// console.log(myNewString2) // 'Hello, I am a Developer'
