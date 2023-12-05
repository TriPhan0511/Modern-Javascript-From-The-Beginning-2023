// Use try...catch statement
const getUsers = async () => {
  try {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const res = await fetch('https://httpstat.us/500')
    if (!res.ok) {
      throw new Error('Request Failed.')
    }
    const data = await res.text()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

getUsers()

// Use .catch syntax
// const getPosts = async () => {
//   //   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const res = await fetch('https://httpstat.us/500')
//   if (!res.ok) {
//     throw new Error('Request Failed.')
//   }
//   const data = await res.text()
//   console.log(data)
// }

// getPosts().catch((err) => console.log(err))
