// function createListItem(name) {
//   const item = document.createElement('li')
//   const text = document.createTextNode(name)
//   item.appendChild(text)
//   const button = document.createElement('button')
//   button.className = 'remove-item btn-link text-red'
//   button.innerHTML = `<i class="fa-solid fa-xmark"></i>`
//   item.appendChild(button)
//   return item
// }

function createListItem(name) {
  const item = document.createElement('li')
  const text = document.createTextNode(name)
  item.appendChild(text)
  const button = document.createElement('button')
  button.className = 'remove-item btn-link text-red'
  const i = document.createElement('i')
  i.className = 'fa-solid fa-xmark'
  button.appendChild(i)
  item.appendChild(button)
  return item
}

const list = document.querySelector('#item-list')
if (list) {
  list.appendChild(createListItem('Eggs'))
  list.appendChild(createListItem('Cheese'))
}
