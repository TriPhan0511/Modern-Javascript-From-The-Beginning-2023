// Using the remove() method
function removeClearButton() {
  const btn = document.querySelector('#clear')
  if (btn) {
    btn.remove()
  }
}

// Using the removeChild() method
function removeFirstItem() {
  const list = document.querySelector('#item-list')
  if (list) {
    const firstItem = list.querySelector('li:first-child')
    if (firstItem) {
      list.removeChild(firstItem)
    }
  }
}

// Remove an item based on it's number
// Using the querySelector() and remove() method
const removeItem = (itemNumber) => {
  const item = document.querySelector(`li:nth-child(${itemNumber})`)
  if (item) {
    item.remove()
  }
}

// function removeItem(itemNumber) {
//   const item = document.querySelector(`li:nth-child(${itemNumber})`)
//   if (item) {
//     item.remove()
//   }
// }

// Remove an item based on it's number
// Using the querySelectorAll() and remove() method
function removeItem2(itemtNumber) {
  const item = document.querySelectorAll('li')[itemtNumber - 1]
  if (item) {
    item.remove()
  }
}

// Remove an item based on it's number
// Using the removeChild() method
function removeItem3(itemNumber) {
  const list = document.querySelector('#item-list')
  if (list) {
    const item = list.querySelector(`li:nth-child(${itemNumber})`)
    if (item) {
      item.remove()
    }
  }
}

// Invoking functions
removeClearButton()
// removeFirstItem()
removeItem(1)
// removeItem2(1)
// removeItem3(1)
