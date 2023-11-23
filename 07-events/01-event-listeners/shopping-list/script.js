const clearBtn = document.querySelector('#clear')

function onClear() {
  alert('Clear Items')
}

// Javascript Event Listener
// clearBtn.onclick = function () {
//   alert('Clear Items')
// }

// addEventListener()
// clearBtn.addEventListener('click', onClear)

// setTimeout(() => {
//   clearBtn.removeEventListener('click', onClear)
// }, 5000)

// Trigger an event programmatically
// setTimeout(() => {
//   clearBtn.click()
// }, 5000)

// ------------------------------------------------------

// Clear all list items
function clearItems() {
  const list = document.querySelector('#item-list')
  if (list) {
    while (list.firstChild) {
      list.removeChild(list.firstChild)
    }
  }
}

// function clearItems() {
//   const items = document.querySelectorAll('#item-list li')
//   items.forEach((item) => {
//     item.remove()
//   })
// }

// function clearItems() {
//   const list = document.querySelector('#item-list')
//   if (list) {
//     list.innerHTML = ''
//   }
// }

clearBtn.addEventListener('click', clearItems)
