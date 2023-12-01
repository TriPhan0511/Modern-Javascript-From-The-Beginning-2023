const posts = [
  { title: 'Post One', body: 'This is post one.' },
  { title: 'Post Two', body: 'This is post two.' },
]

function getPosts() {
  posts.forEach((post) => {
    const li = document.createElement('li')
    const strongEl = document.createElement('strong')
    strongEl.textContent = post.title
    li.appendChild(strongEl)
    li.appendChild(document.createTextNode(` - ${post.body}`))
    document.querySelector('#results').appendChild(li)
  })
}

function createPost(post, cb) {
  posts.push(post)
  cb()
}

setTimeout(() => {
  createPost({ title: 'Post Three', body: 'This is post three.' }, () => {
    setTimeout(() => {
      getPosts()
    }, 1000)
  })
}, 2000)
