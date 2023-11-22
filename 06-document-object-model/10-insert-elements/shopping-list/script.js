// insertAdjacentElement Example
function insertElement() {
  const filter = document.querySelector('.filter')
  if (filter) {
    const h1 = document.createElement('h1')
    h1.textContent = 'insertAdjacentElement'
    filter.insertAdjacentElement('beforebegin', h1)
  }
}

// insertAdjacentText Example
function insertText() {
  const item = document.querySelector('li:first-child')
  if (item) {
    // item.insertAdjacentText('afterend', 'insertAdjacentText')
    item.insertAdjacentText('afterbegin', 'insertAdjacentText')
  }
}

// insertAdjacentHTML Example
function insertHTML() {
  const clearBtn = document.querySelector('#clear')
  if (clearBtn) {
    clearBtn.insertAdjacentHTML('afterend', `<h2>insertAdjacentHTML</h2>`)
  }
}

// insertBefore Example
function insertBeforeItem() {
  const ul = document.querySelector('#item-list')
  const li = document.createElement('li')
  li.textContent = 'insertBefore'
  const thirdItem = ul.querySelector('li:nth-child(3)')
  if (thirdItem) {
    ul.insertBefore(li, thirdItem)
  }
}

insertElement()
insertText()
insertHTML()
insertBeforeItem()

/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
