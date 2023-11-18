// Default Params
function registerUser(user = 'Bot') {
  return `${user} is registered`
}

// console.log(registerUser())

// Rest Params
function sum(...numbers) {
  let total = 0
  for (const num of numbers) {
    total += num
  }
  return total
}

// console.log(sum(1, 2, 3)) // 6

// Objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`
}

const user = {
  id: 1,
  name: 'John',
}

// console.log(loginUser(user))
//  -> The user John with the id of 1 is logged in
// console.log(
//   loginUser({
//     id: 2,
//     name: 'Sarah',
//   })
// )
// -> The user Sarah with the id of 2 is logged in

// Arrays as params
function getRandomElement(arr = []) {
  // Generate a random integer is greater or equal to 0 and less than length of the array
  const r = generateRandomNumber(0, arr.length - 1)
  return arr[r]
}

function generateRandomNumber(min, max) {
  // min and max are inclusived
  return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getRandomElement([1, 4, 2, 3, 6, 7, 5, 8, 9]))
