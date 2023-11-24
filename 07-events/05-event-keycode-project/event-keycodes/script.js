// Method 1
// const showKeyCodes1 = (e) => {
//   const divs = document.querySelectorAll('.key')
//   divs[0].innerHTML = `${e.key}<small>e.key</small>`
//   divs[1].innerHTML = `${e.keyCode}<small>e.keyCode</small>`
//   divs[2].innerHTML = `${e.code}<small>e.code</small>`
// }

// Method 2
// function showKeyCodes2(e) {
//   const insert = document.getElementById('insert')
//   insert.innerHTML = ''

//   const keyCodes = {
//     'e.key': e.key === ' ' ? 'Space' : e.key,
//     'e.keyCode': e.keyCode,
//     'e.code': e.code,
//   }

//   for (let key in keyCodes) {
//     const div = document.createElement('div')
//     div.className = 'key'
//     const small = document.createElement('small')

//     const keyText = document.createTextNode(key)
//     const valueText = document.createTextNode(keyCodes[key])

//     small.appendChild(keyText)
//     div.appendChild(valueText)
//     div.appendChild(small)

//     insert.appendChild(div)
//   }
// }

// Method 3
const showKeyCodes3 = (e) => {
  const divs = document.querySelectorAll('.key')
  const props = ['key', 'keyCode', 'code']
  divs.forEach((item, index) => {
    updateElement(item, `${e[props[index]]}`)
  })
}

const updateElement = (element, text) => {
  const smallElement = element.querySelector('small')
  if (smallElement) {
    text = text === ' ' ? 'Space' : text
    const textNode = document.createTextNode(text)
    element.textContent = ''
    element.appendChild(textNode)
    element.appendChild(smallElement)
  }
}

// window.addEventListener('keydown', showKeyCodes1)
// window.addEventListener('keydown', showKeyCodes2)
window.addEventListener('keydown', showKeyCodes3)
