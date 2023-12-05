function fetchUser() {
  toggleSpinner()
  fetch('https://random-data-api.com/api/v2/users')
    .then((res) => {
      if (!res.ok) {
        throw new Error('Request Failed.')
      }
      return res.json()
    })
    .then((user) => {
      toggleSpinner()
      createElements(user)
    })
    .catch((err) => {
      toggleSpinner()
      const userDiv = document.querySelector('#user')
      if (userDiv) {
        userDiv.innerHTML = `
        <p class="text-xl text-center text-red-500 mb-5">
        ${err}</p>`
      }
    })
}

function toggleSpinner() {
  const spinner = document.querySelector('.spinner')
  if (spinner) {
    spinner.classList.toggle('hidden')
  }
}

function createElements(user) {
  const userDiv = document.querySelector('#user')
  if (userDiv) {
    userDiv.innerHTML = ''
    const outerDiv = document.createElement('div')
    outerDiv.className = 'flex justify-between'
    const innerDiv = document.createElement('div')
    innerDiv.className = 'flex'
    innerDiv.appendChild(createImage(user.avatar))
    innerDiv.appendChild(createInfoDiv(user))
    outerDiv.appendChild(innerDiv)
    userDiv.appendChild(outerDiv)
    document.body.style.backgroundColor =
      user.gender === 'Male' ? 'Orange' : user.gender === 'Female' ? 'Purple' : 'Green'
  }
}

function createInfoDiv(user) {
  const div = document.createElement('div')
  div.className = 'space-y-3'
  div.appendChild(createPara('Name: ', `${user.first_name} ${user.last_name}`))
  div.appendChild(createPara('Email: ', user.email))
  div.appendChild(createPara('Phone: ', user.phone_number))
  div.appendChild(createPara('Location: ', `${user.address.street_address}, ${user.address.state}`))
  div.appendChild(createPara('Age: ', getAge(user.date_of_birth)))
  return div
}

function createPara(spanText, paraText) {
  const p = document.createElement('p')
  p.className = 'text-xl'
  p.appendChild(createSpanEl(spanText))
  p.appendChild(document.createTextNode(paraText))
  return p
}

function createSpanEl(text) {
  const span = document.createElement('span')
  span.className = 'font-bold'
  span.appendChild(document.createTextNode(text))
  return span
}

function createImage(src) {
  const img = document.createElement('img')
  img.className = 'w-48 h-48 rounded-full mr-8'
  img.setAttribute('src', src)
  img.style.borderRadius = '50%'
  img.style.border = '1px solid white'

  return img
}

function getAge(dateString) {
  const today = new Date()
  const birthDate = new Date(dateString)
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}

// Add event listeners
const generateButton = document.querySelector('#generate')
if (generateButton) {
  generateButton.addEventListener('click', fetchUser)
}

document.addEventListener('DOMContentLoaded', () => {
  fetchUser()
})
