function displayTodos(todos) {
  todos.forEach((todo) => {
    const div = document.createElement('div')
    div.textContent = todo.title
    div.className = todo.completed ? 'done' : ''
    const list = document.querySelector('#todo-list')
    if (list) {
      list.appendChild(div)
    }
  })
}

function fetchTodos() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((todos) => console.log(displayTodos(todos.slice(0, 10))))
}

document.addEventListener('DOMContentLoaded', fetchTodos)
