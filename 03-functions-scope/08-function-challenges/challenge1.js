// ***** Challenge 1 *****
const getCelsius = (temp) => Math.round(((temp - 32) * 5) / 9)
console.log(`The temperature is ${getCelsius(32)} \xB0C`)

// ***** Challenge 2 *****
// const minMax = (numbers) => {
//   let min = numbers[0]
//   let max = numbers[0]
//   numbers.forEach((num) => {
//     if (num > max) {
//       max = num
//     }
//     if (num < min) {
//       min = num
//     }
//   })
//   return { min, max }
// }

// const minMax = (numbers) => {
//   const max = numbers.reduce((prev, curr) => {
//     if (prev > curr) {
//       return prev
//     }
//     return curr
//   })
//   const min = numbers.reduce((prev, curr) => {
//     if (prev < curr) {
//       return prev
//     }
//     return curr
//   })
//   return { min, max }
// }

const minMax = (numbers) => {
  min = Math.min(...numbers)
  max = Math.max(...numbers)
  return { min, max }
}

console.log(minMax([1, 2, 3, 4, 5]))
// { min: 1, max: 5 }

// console.log(minMax([1, 2, 0, 3, 10, 4, 5]))
// // { min: 0, max: 10 }

// ***** Challenge 3 *****
