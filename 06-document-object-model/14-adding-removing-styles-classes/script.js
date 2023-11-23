// const button = document.querySelector('button')
// if (button) {
//   button.addEventListener('click', () => {
//     const para = document.querySelector('.card')
//     para.classList.toggle('hidden')
//   })
// }

const text = document.querySelector('p')
const itemList = document.querySelector('.item-list')
const items = itemList.querySelectorAll('li')

function run() {
  // className
  //   console.log(itemList.className)
  //   text.className = `${text.className} dark`

  //   classList
  //   console.log(itemList.classList)

  //   itemList.classList.forEach((item) => {
  //     console.log(item)
  //   })

  //   text.classList.add('dark')
  //   text.classList.remove('card')

  //   text.classList.toggle('hidden')

  // text.classList.replace('card', 'dark')

  // Change style
  // itemList.style.lineHeight = '3'
  items.forEach((item, index) => {
    item.style.color = index === 2 ? 'blue' : 'red'
  })
}

document.querySelector('button').onclick = run
