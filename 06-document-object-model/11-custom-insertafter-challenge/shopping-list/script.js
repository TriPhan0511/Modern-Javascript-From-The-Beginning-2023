function insertAfter(newEl, existingEl) {
  const parent = existingEl.parentElement
  if (parent) {
    parent.insertBefore(newEl, existingEl.nextElementSibling)
  }
}

// New element to insert
const li = document.createElement('li')
li.textContent = 'Insert Me After!'

// Existing element to insert after
const firstItem = document.querySelector('li:first-child')
if (firstItem) {
  // Our custom function
  insertAfter(li, firstItem)
}
