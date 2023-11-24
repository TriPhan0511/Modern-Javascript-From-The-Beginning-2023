const list = document.getElementById('item-list')

list.addEventListener('click', (e) => {
  console.log(e.target)
})

// const listItems = document.querySelectorAll('li')

// listItems.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     e.currentTarget.remove()
//   })
// })

// const removeButtons = document.querySelectorAll('.remove-item')

// removeButtons.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     e.currentTarget.parentElement.remove()
//   })
// })
