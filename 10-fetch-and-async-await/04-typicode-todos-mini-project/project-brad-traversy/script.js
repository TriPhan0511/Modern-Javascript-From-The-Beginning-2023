const apiUrl = 'https://jsonplaceholder.typicode.com/todos'

const getTodos = () => {
  fetch(`${apiUrl}?_limit=10`)
    .then((res) => res.json())
    .then((data) => data.forEach((todo) => addTodoToDOM(todo)))
}

const addTodoToDOM = (todo) => {
  const div = document.createElement('div')
  div.classList.add('todo')
  div.setAttribute('data-id', todo.id)
  todo.completed && div.classList.add('done')
  div.appendChild(document.createTextNode(todo.title))
  document.getElementById('todo-list').appendChild(div)
}

const createTodo = (e) => {
  e.preventDefault()
  const input = e.target.firstElementChild
  if (input) {
    const title = input.value.trim()
    // Validate
    if (title === '') {
      alert("Please add a todo's title.")
      input.value = ''
      input.focus()
      return
    }
    // Post a new todo
    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify({
        title,
        completed: false,
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => addTodoToDOM(data))
    // Reset
    input.value = ''
  }
}

const toggleCompleted = (e) => {
  if (e.target.classList.contains('todo')) {
    e.target.classList.toggle('done')
    updateTodo(e.target.dataset.id, e.target.classList.contains('done'))
    // updateTodo(e.target.getAttribute('data-id'), e.target.classList.contains('done'))
  }
}

const updateTodo = (id, completed) => {
  fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ completed }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  })
}

const deleteTodo = (e) => {
  if (e.target.classList.contains('todo')) {
    if (confirm('Are you sure to delete this todo?')) {
      // e.target.remove()
      fetch(`${apiUrl}/${e.target.dataset.id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then(() => e.target.remove())
    }
  }
}

const init = () => {
  document.addEventListener('DOMContentLoaded', getTodos)
  const todoForm = document.querySelector('#todo-form')
  if (todoForm) {
    todoForm.addEventListener('submit', createTodo)
  }
  const todoList = document.querySelector('#todo-list')
  if (todoList) {
    todoList.addEventListener('click', toggleCompleted)
    todoList.addEventListener('dblclick', deleteTodo)
  }
}

init()
