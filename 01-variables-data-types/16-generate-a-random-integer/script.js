// Generate a random integer between min and max (min and max are included)
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(generateRandomNumber(5, 100))
