const itemInput = document.getElementById('item-input')
const priorityInput = document.getElementById('priority-input')
const checkbox = document.getElementById('checkbox')
const heading = document.querySelector('h1')

function onInput(e) {
  heading.textContent = e.target.value
}

function onChecked(e) {
  heading.textContent = e.target.checked ? 'Checked' : 'Not Checked'
}

function onFocus(e) {
  console.log('Input is focused')
  e.target.style.outline = '1px solid green'
  //   itemInput.style.outline = '1px solid green'
}

function onBlur(e) {
  console.log('Input is not focused')
  e.target.style.outline = 'none'
  // itemInput.style.outline = 'none'
  //   e.target.style.outlineStyle = 'none'
}

itemInput.addEventListener('input', onInput) // Text Input
priorityInput.addEventListener('input', onInput) // Select Input
// priorityInput.addEventListener('change', onInput) // Select Input
checkbox.addEventListener('input', onChecked) // Checkbox Input

itemInput.addEventListener('focus', onFocus)
itemInput.addEventListener('blur', onBlur)
