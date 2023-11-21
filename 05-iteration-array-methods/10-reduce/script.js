// const cart = [
//   {
//     name: 'Product One',
//     price: 1,
//   },
//   {
//     name: 'Product Two',
//     price: 2,
//   },
//   {
//     name: 'Product Three',
//     price: 3,
//   },
//   {
//     name: 'Product Four',
//     price: 4,
//   },
//   {
//     name: 'Product Five',
//     price: 5,
//   },
// ]

// const total = cart.reduce((accumulator, currentObj) => accumulator + currentObj.price, 0)
// console.log(total)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

// console.log(sum)

const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 175 },
]

const total = cart.reduce((accumulator, product) => accumulator + product.price, 0)

console.log(total)
