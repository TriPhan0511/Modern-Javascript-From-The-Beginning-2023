// try {
//   console.log(x)
// } catch (err) {
//   console.log(`Error: ${err}`)
// }

function double(number) {
  if (isNaN(number)) {
    throw new Error(`${number} is not a number.`)
  }
  return number * 2
}

try {
  console.log(double('five'))
} catch (error) {
  console.log(error)
}
