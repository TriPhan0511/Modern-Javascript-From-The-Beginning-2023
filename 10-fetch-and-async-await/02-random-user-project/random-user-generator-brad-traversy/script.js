function fetchUser() {
  showSpinner()
  fetch('https://random-data-api.com/api/v2/users')
    .then((res) => res.json())
    .then((user) => {
      hideSpinner()
      displayUser(user)
    })
}

function displayUser(user) {
  const userDisplay = document.querySelector('#user')
  const gender = user.gender.toLowerCase()
  document.body.style.backgroundColor =
    gender === 'male' ? 'steelblue' : gender === 'female' ? 'rebeccapurple' : 'orange'
  userDisplay.innerHTML = `
    <div class="flex justify-between">
    <div class="flex">
      <img
        class="w-48 h-48 rounded-full mr-8"
        src="${user.avatar}"
      />
      <div class="space-y-3">
        <p class="text-xl"><span class="font-bold">Name: </span>${user.first_name} ${
    user.last_name
  }</p>
        <p class="text-xl"><span class="font-bold">Email: </span> ${user.email}</p>
        <p class="text-xl"><span class="font-bold">Phone: </span> ${user.phone_number}</p>
        <p class="text-xl"><span class="font-bold">Location: </span> ${
          user.address.street_address
        }, ${user.address.state}</p>
        <p class="text-xl"><span class="font-bold">Age: </span> ${getAge(user.date_of_birth)}</p>
      </div>
    </div>
  </div>
    `
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

function showSpinner() {
  const spinner = document.querySelector('.spinner')
  if (spinner) {
    spinner.style.display = 'block'
  }
}

function hideSpinner() {
  const spinner = document.querySelector('.spinner')
  if (spinner) {
    spinner.style.display = 'none'
  }
}

// function showSpinner(user) {
//   const spinner = document.querySelector('.spinner.hidden')
//   if (!spinner) {
//     displayUser(user)
//   } else {
//     spinner.classList.remove('hidden')
//     setTimeout(() => {
//       spinner.classList.add('hidden')
//       displayUser(user)
//     }, 1000)
//   }
// }

const generateButton = document.querySelector('#generate')
if (generateButton) {
  generateButton.addEventListener('click', fetchUser)
}

fetchUser()
