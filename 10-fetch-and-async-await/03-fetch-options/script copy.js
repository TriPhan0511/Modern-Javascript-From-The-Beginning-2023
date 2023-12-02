// function createPost(post, endpoint) {
//   fetch(endpoint, {
//     method: 'POST',
//     body: JSON.stringify(post),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       alert('A post submitted!')
//       console.log(data)
//     })
// }

// function onSubmit(e, endpoint) {
//   e.preventDefault()
//   const title = document.querySelector('#postTitle').value
//   const body = document.querySelector('#postBody').value
//   const userId = 100
//   createPost({ title, body, userId }, endpoint)
// }

// const myForm = document.querySelector('#myForm')
// if (myForm) {
//   myForm.addEventListener('submit', (e) => {
//     onSubmit(e, 'https://jsonplaceholder.typicode.com/posts')
//   })
// }
