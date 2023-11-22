// querySelectorAll()

const listItems = document.querySelectorAll('.item')

console.log(listItems)
console.log(listItems[1].innerText)

// listItems.forEach((item, index) => {
//   item.style.color = 'red'

//   if (index === 1) {
//     item.remove()
//   }

//   if (index === 0) {
//     item.innerHTML = `Oranges
//     <button class="remove-item btn-link text-red">
//       <i class="fa-solid fa-xmark"></i>
//     </button>`
//   }
// })

let listItems2 = document.getElementsByClassName('item')
console.log(listItems2)

listItems2 = Array.from(listItems2)

listItems2.forEach((item) => {
  console.log(item.innerText)
})

const listItems3 = document.getElementsByTagName('li')
console.log(listItems3)
console.log(listItems3[0].innerText)
