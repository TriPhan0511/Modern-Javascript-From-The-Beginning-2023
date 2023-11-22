// const listItem = document.createElement('li')
// const button = document.createElement('button')
// button.className = 'remove-item btn-link text-red'
// // const i = document.createElement('i')
// // i.classList.add('fa-solid', 'fa-xmark')
// // button.append(i)
// button.innerHTML = `<i class='fa-solid fa-xmark'></i>`
// listItem.innerText = 'An Item'
// listItem.append(button)
// document.querySelector('#item-list').append(listItem)

const div = document.createElement('div')

div.className = 'my-element'
div.id = 'my-element'
div.setAttribute('title', 'My Element')

// div.innerText = 'Hello World'

const text = document.createTextNode('Hello World')
div.appendChild(text)

// document.body.appendChild(div)

document.querySelector('ul').appendChild(div)
