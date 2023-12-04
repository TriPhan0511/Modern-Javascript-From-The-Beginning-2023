// Add event listeners
document.addEventListener('DOMContentLoaded', fetchTodos)

const todoForm = document.querySelector('#todo-form')
if (todoForm) {
  todoForm.addEventListener('submit', createTodo)
}

const todoList = document.querySelector('#todo-list')
if (todoList) {
  todoList.addEventListener('click', updateOrDeleteTodo)
}

// Fetch data
function fetchTodos() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((todos) => todos.slice(0, 10).forEach((todo) => displayTodo(todo)))
}

function createTodo(e) {
  e.preventDefault()
  const titleInput = document.querySelector('#title')
  if (titleInput) {
    const title = titleInput.value.trim()
    if (title === '') {
      alert('Please enter a title')
      return
    }
    postTodo({ title, completed: false })
    titleInput.value = ''
  }
}

// Post a new todo
function postTodo({ title, completed }) {
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

function updateOrDeleteTodo(e) {
  e.target.tagName === 'LI' ? updateTodo(e) : deleteTodo(e)
}

// Update the "completed" property of Todo object
// Solution 1: Use "PUT" request method
// function updateTodo(e) {
//   const li = e.target
//   const todoIdInput = li.querySelector('#todoId')
//   const userIdInput = li.querySelector('#userId')
//   if (todoIdInput && userIdInput) {
//     fetch(`https://jsonplaceholder.typicode.com/todos/${todoIdInput.value}`, {
//       method: 'PUT',
//       body: JSON.stringify({
//         completed: !li.classList.contains('done'),
//         title: li.textContent,
//         userId: userIdInput.value,
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     }).then(() => li.classList.toggle('done'))
//   }
// }

// Update the "completed" property of Todo object
// Solution 2: Use "PATCH" request method
function updateTodo(e) {
  const li = e.target
  const todoIdInput = li.querySelector('#todoId')
  if (todoIdInput) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoIdInput.value}`, {
      method: 'PATCH',
      body: JSON.stringify({
        completed: !li.classList.contains('done'),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(() => li.classList.toggle('done'))
  }
}

// Delete a todo
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

function displayTodo({ title, completed, id, userId }) {
  const li = document.createElement('li')
  li.className = completed ? 'done' : ''
  li.appendChild(document.createTextNode(title))
  li.appendChild(createButton())
  li.appendChild(createHiddenInput('todoId', id))
  li.appendChild(createHiddenInput('userId', userId))
  const list = document.querySelector('#todo-list')
  if (list) {
    list.appendChild(li)
  }
}

function createButton() {
  const icon = document.createElement('i')
  icon.className = 'fa-solid fa-xmark'
  const button = document.createElement('button')
  button.className = 'remove-item btn-link text-red'
  button.appendChild(icon)
  return button
}

function createHiddenInput(id, valueId) {
  const hiddenInput = document.createElement('input')
  hiddenInput.setAttribute('type', 'hidden')
  hiddenInput.setAttribute('id', id)
  hiddenInput.setAttribute('value', valueId)
  return hiddenInput
}
