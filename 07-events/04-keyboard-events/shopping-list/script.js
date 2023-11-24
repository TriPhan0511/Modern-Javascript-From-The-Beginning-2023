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

  // if (e.repeat) {
  //   console.log(`You are holding down ${e.key}`)
  // }

  // Shift, Ctrl, Alt keys
  // console.log(`Shift: ${e.shiftKey}`)
  // console.log(`Control: ${e.ctrlKey}`)
  // console.log(`Alt: ${e.altKey}`)

  if (e.shiftKey && e.key === 'K') {
    console.log('You hit shift + K')
  }
}

// itemInput.addEventListener('keypress', onKeyPress)
// itemInput.addEventListener('keyup', onKeyUp)
itemInput.addEventListener('keydown', onKeyDown)
