function generateJoke() {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random1')
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      const text =
        this.status === 200
          ? JSON.parse(this.responseText).value
          : 'Something went wrong (Not funny)'
      const jokeEl = document.querySelector('#joke')
      if (jokeEl) {
        jokeEl.textContent = text
      }
    }
  }
  xhr.send()
}

// Add event listeners
document.addEventListener('DOMContentLoaded', generateJoke)
const jokeBtn = document.querySelector('#joke-btn')
if (jokeBtn) {
  jokeBtn.addEventListener('click', generateJoke)
}
