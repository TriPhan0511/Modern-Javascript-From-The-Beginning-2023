let intervalID

document.querySelector('#start').addEventListener('click', () => {
  if (!intervalID) {
    intervalID = setInterval(() => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16)
      document.body.style.backgroundColor = `#${randomColor}`
    }, 1000)
  }
})

document.querySelector('#stop').addEventListener('click', () => {
  clearInterval(intervalID)
})
