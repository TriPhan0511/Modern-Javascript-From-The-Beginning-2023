function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return num1 / num2
    default:
      return 'Invalid operator. Please enter one of these operators: +, -, * , /'
  }
}

console.log(calculator(5, 2, '+')) // returns 7
console.log(calculator(5, 2, '-')) // returns 3
console.log(calculator(5, 2, '*')) // returns 10
console.log(calculator(5, 2, '/')) // returns 2.5
console.log(calculator(5, 2, '&')) // returns an error message
