function displayTodo(todo) {
  const div = document.createElement('div')
  div.textContent = todo.title
  div.className = todo.completed ? 'done' : ''
  const list = document.querySelector('#todo-list')
  if (list) {
    list.appendChild(div)
  }
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
