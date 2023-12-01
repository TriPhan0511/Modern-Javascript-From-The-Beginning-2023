const posts = [
  { title: 'Post One', body: 'This is post one.' },
  { title: 'Post Two', body: 'This is post two.' },
]

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true
      if (!error) {
        posts.push(post)
        resolve()
      } else {
        reject('Error: Something went wrong!')
      }
    }, 2000)
  })
}

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement('div')
      const strongEl = document.createElement('strong')
      strongEl.textContent = post.title
      div.appendChild(strongEl)
      div.appendChild(document.createTextNode(` - ${post.body}`))
      document.querySelector('#posts').appendChild(div)
    })
  }, 1000)
}

function showError(err) {
  const h3 = document.createElement('h3')
  h3.textContent = err
  document.querySelector('#posts').appendChild(h3)
}

createPost({ title: 'Post Three', body: 'This is post three.' }).then(getPosts).catch(showError)
