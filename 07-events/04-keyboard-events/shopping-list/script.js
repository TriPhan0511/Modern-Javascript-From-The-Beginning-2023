const itemInput = document.querySelector('#item-input')

const onKeyPress = (e) => {
  console.log(e.type)
}
const onKeyUp = (e) => {
  console.log(e.type)
}
const onKeyDown = (e) => {
  // key
  // if (e.key === 'Enter') {
  //   alert('You pressed enter')
  // }

  // keyCode
  // https://www.toptal.com/developers/keycode/table
  // if (e.keyCode === 13) {
  //   alert('You pressed enter.')
  // }

  // code
  if (e.code === 'Digit1') {
    console.log('you pressed 1')
  }
}

// itemInput.addEventListener('keypress', onKeyPress)
// itemInput.addEventListener('keyup', onKeyUp)
itemInput.addEventListener('keydown', onKeyDown)
