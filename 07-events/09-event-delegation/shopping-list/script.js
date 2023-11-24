const list = document.getElementById('item-list')
if (list) {
  list.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI') {
      e.target.style.backgroundColor = 'orange'
    }
  })
}

// ---------------------------------------------
// PROBLEM: Click icon "X" to remove a list item
// Solution 1
// Add the event listener to the parent of the target element
// const list = document.getElementById('item-list')
// if (list) {
//   list.addEventListener('click', (e) => {
//     if (e.target.tagName === 'I') {
//       e.target.parentElement.parentElement.remove()
//     }
//   })
// }

// Solution 2
// Add the event listener to the parent of the target element
// const list = document.getElementById('item-list')
// list.addEventListener('click', (e) => {
//   const listItem = e.target.parentElement.parentElement
//   console.log(listItem)
//   if (e.currentTarget === listItem.parentElement) {
//     listItem.remove()
//   }
// })

// Solution 3 (bad)
// const removeButtons = document.querySelectorAll('.remove-item')
// removeButtons.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     e.currentTarget.parentElement.remove()
//   })
// })
