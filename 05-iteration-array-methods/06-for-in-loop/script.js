const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'orange',
  color4: 'green',
}

for (const key in colorObj) {
  console.log(key, colorObj[key])
}

// for (const [key, value] of Object.entries(colorObj)) {
//   console.log(key, value)
// }

const colorArr = ['red', 'green', 'blue', 'yellow']

for (const key in colorArr) {
  console.log(colorArr[key])
}
