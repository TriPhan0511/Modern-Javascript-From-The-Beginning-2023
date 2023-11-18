console.log(addDollarSign(100)) // $100

// Function Declaration
function addDollarSign(value) {
  return `$${value}`
}

// console.log(addPlusSign(200)) // Error
// -> Uncaught ReferenceError: Cannot access 'addPlusSign' before initialization

// Function Expression
const addPlusSign = function (value) {
  return `+${value}`
}

console.log(addPlusSign(200)) // +200
