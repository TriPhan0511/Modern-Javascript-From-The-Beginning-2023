const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'John', age: 20 })
  }, 1000)
})

// promise.then((data) => console.log(data))

// async function getPromise() {
//   const res = await promise
//   console.log(res)
// }
const getPromise = async () => {
  const res = await promise
  console.log(res)
}

// getPromise()

const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
  console.log(users)
}

const getUsers2 = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => console.log(users))
}
