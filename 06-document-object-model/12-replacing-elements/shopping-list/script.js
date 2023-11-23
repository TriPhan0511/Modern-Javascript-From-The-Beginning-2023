// Using replaceWith method
function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child')
  if (firstItem) {
    const li = createListItem('Replaced First')
    firstItem.replaceWith(li)
  }
}

// Using outerHTML
function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)')
  if (secondItem) {
    secondItem.outerHTML = `<li>Replaced Second
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button></li>`
  }
}

// Replace all list items (Solution 1)
// Using replaceWith method
function replaceAllItems() {
  const list = document.querySelector('#item-list')
  if (list) {
    const items = list.querySelectorAll('li')
    items.forEach((item, index) => {
      const li = index === 1 ? createListItem('Second Item') : createListItem('Replaced All')
      item.replaceWith(li)
    })
  }
}

// Replace all list items (Solution 2)
// Using innerHTML
function replaceAllItems2() {
  const list = document.querySelector('#item-list')
  if (list) {
    const items = list.querySelectorAll('li')
    items.forEach((item, index) => {
      item.innerHTML =
        index === 1
          ? `Second Item
      <button class="remove-item btn-link text-red">
        <i class="fa-solid fa-xmark"></i>
      </button>`
          : `Replaced All
      <button class="remove-item btn-link text-red">
        <i class="fa-solid fa-xmark"></i>
      </button>`
    })
  }
}

// Using replaceChild method
function replaceChildHeading() {
  const header = document.querySelector('header')
  const h1 = document.querySelector('header h1')
  if (header && h1) {
    const h2 = document.createElement('h2')
    h2.id = 'app-title'
    h2.textContent = 'Shopping List'
    header.replaceChild(h2, h1)
  }
}

// Create a list item
function createListItem(itemText) {
  const listItem = document.createElement('li')
  listItem.appendChild(document.createTextNode(itemText))
  const button = createButton('remove-item btn-link text-red')
  listItem.appendChild(button)
  return listItem
}

// Create a button
function createButton(clasess) {
  const button = document.createElement('button')
  button.className = clasess
  icon = createIcon('fa-solid fa-xmark')
  button.appendChild(icon)
  return button
}

// Create an icon
function createIcon(clasess) {
  const icon = document.createElement('i')
  icon.className = clasess
  return icon
}

// Invoking methods
replaceFirstItem()
replaceSecondItem()
replaceAllItems()
replaceChildHeading()
