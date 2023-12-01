const xhr = new XMLHttpRequest()

xhr.open('GET', 'https://api.github.com/users/bradtraversy/repos')
// xhr.open('GET', './movies.json')

// readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText)
    data.forEach((repo) => {
      const li = document.createElement('li')
      const strongEl = document.createElement('strong')
      strongEl.textContent = repo.name
      li.appendChild(strongEl)
      li.appendChild(document.createTextNode(` - ${repo.description}`))
      document.querySelector('#results').appendChild(li)
    })
  }
}

// xhr.open('GET', './movies.json')
// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     // console.log(JSON.parse(this.responseText))
//     const data = JSON.parse(this.responseText)
//     data.forEach((movie) => {
//       const li = document.createElement('li')
//       const strongEl = document.createElement('strong')
//       strongEl.textContent = movie.title
//       li.appendChild(strongEl)
//       li.appendChild(document.createTextNode(` - ${movie.year}`))
//       document.querySelector('#results').appendChild(li)
//     })
//   }
// }

xhr.send()
