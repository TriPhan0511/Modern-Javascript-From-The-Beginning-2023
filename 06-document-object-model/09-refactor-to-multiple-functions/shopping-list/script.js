function createIcon(className) {
  const icon = document.createElement('i')
  icon.className = className
  return icon
}

function createButton(className) {
  const button = document.createElement('button')
  button.className = className
  return button
}

function createListItem(itemText, buttonClassName = '', iconClassName = '') {
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(itemText))
  const icon = createIcon(iconClassName)
  const button = createButton(buttonClassName)
  button.appendChild(icon)
  li.appendChild(button)
  return li
}

function createNewItem(item, buttonClassName, iconClassName) {
  const li = createListItem(item, buttonClassName, iconClassName)
  const list = document.querySelector('.items')
  if (list) {
    list.appendChild(li)
  }
}

createNewItem('Eggs', 'remove-item btn-link text-red', 'fa-solid fa-xmark')
createNewItem('Cheese', 'remove-item btn-link text-red', 'fa-solid fa-xmark')
