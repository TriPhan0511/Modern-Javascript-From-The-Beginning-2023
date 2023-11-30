// function toggle(e) {
//   e.target.classList.toggle('danger')
// }

// document.querySelector('button').addEventListener('click', toggle)

const posts = [
  { title: 'Post one', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
]

function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post)
    cb()
  }, 2000)
}

function getPost() {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement('div')
      const h2 = document.createElement('h2')
      h2.textContent = post.title
      div.appendChild(h2)
      const p = document.createElement('p')
      p.textContent = post.body
      div.appendChild(p)
      document.querySelector('#posts').appendChild(div)
    })
  }, 1)
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPost)

xhr