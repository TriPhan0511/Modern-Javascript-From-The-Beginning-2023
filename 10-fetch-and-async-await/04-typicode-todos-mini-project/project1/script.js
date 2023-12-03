// Update the "completed" property of Todo object
function updateTodo(e) {
  const todoIdInput = e.target.querySelector('#todoId')
  if (todoIdInput) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoIdInput.value}`, {
      method: 'PATCH',
      body: JSON.stringify({
        completed: !e.target.classList.contains('done'),
        // title: 'NEW TITLE',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const li = todoIdInput.parentElement
        li.classList.toggle('done')
        // li.textContent = data.title
      })
  }
}

function deleteTodo(e) {
  const button = e.target.parentElement
  if (button && button.classList.contains('remove-item')) {
    const li = button.parentElement
    if (confirm('Are you sure?')) {
      const idInput = li.querySelector('#todoId')
      if (idInput) {
        fetch(`https://jsonplaceholder.typicode.com/todos/${idInput.value}`, {
          method: 'DELETE',
        }).then((res) => res.ok && alert(`A todo with id: ${idInput.value} was deleted!`))
      }
      li.remove()
    }
  }
}

function onClick(e) {
  e.target.tagName === 'LI' ? updateTodo(e) : deleteTodo(e)
}

function createButton() {
  const icon = document.createElement('i')
  icon.className = 'fa-solid fa-xmark'
  const button = document.createElement('button')
  button.className = 'remove-item btn-link text-red'
  button.appendChild(icon)
  return button
}

function displayTodo({ title, completed, id }) {
  const li = document.createElement('li')
  li.className = completed ? 'done' : ''
  li.appendChild(document.createTextNode(title))
  li.appendChild(createButton())
  li.appendChild(createHiddenInput(id))
  const list = document.querySelector('#todo-list')
  if (list) {
    list.appendChild(li)
  }
}

function createHiddenInput(id) {
  const hiddenInput = document.createElement('input')
  hiddenInput.setAttribute('type', 'hidden')
  hiddenInput.setAttribute('id', 'todoId')
  hiddenInput.setAttribute('value', id)
  return hiddenInput
}

function fetchTodos() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((todos) => todos.slice(0, 10).forEach((todo) => displayTodo(todo)))
}

function createTodo({ title, completed }) {
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({ title, completed }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((todo) => displayTodo(todo))
}

function onSubmit(e) {
  e.preventDefault()
  const titleInput = document.querySelector('#title')
  if (titleInput) {
    const title = titleInput.value.trim()
    if (title === '') {
      alert('Please enter a title')
      return
    }
    createTodo({ title, completed: false })
    titleInput.value = ''
  }
}

// Add event listeners
document.addEventListener('DOMContentLoaded', fetchTodos)
const todoForm = document.querySelector('#todo-form')
if (todoForm) {
  todoForm.addEventListener('submit', onSubmit)
}
const todoList = document.querySelector('#todo-list')
if (todoList) {
  todoList.addEventListener('click', onClick)
}
