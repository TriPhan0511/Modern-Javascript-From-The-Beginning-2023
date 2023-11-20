const d = new Date(2022, 2, 10, 19, 0, 0)
const month = d.getMonth()
const hour = d.getHours()

// console.log(d)
// console.log(month)

switch (month) {
  case 0:
    console.log('It is January')
    break
  case 1:
    console.log('It is February')
    break
  case 2:
    console.log('It is March')
    break
  case 3:
    console.log('It is April')
    break
  case 4:
    console.log('It is May')
    break
  case 5:
    console.log('It is June')
    break
  case 6:
    console.log('It is July')
    break
  case 7:
    console.log('It is August')
    break
  case 8:
    console.log('It is September')
    break
  case 9:
    console.log('It is October')
    break
  case 10:
    console.log('It is November')
    break
  default:
    console.log('It is December')
    break
}

switch (true) {
  case hour < 12:
    console.log('Good Morning')
    break
  case hour < 18:
    console.log('Good Afternoon')
    break
  default:
    console.log('Good Night')
}

const gender = ''
switch (gender) {
  case 'female':
    console.log('Hello ladies!')
    break
  case 'male':
    console.log('Hello gentlemen!')
    break
  default:
    console.log('Hello ladies and gentlemen!')
}

// function showMonth(month) {
//   switch (month) {
//     case 0:
//       return 'It is January'
//     case 1:
//       return 'It is February'
//     case 2:
//       return 'It is March'
//     case 3:
//       return 'It is April'
//     case 4:
//       return 'It is May'
//     case 5:
//       return 'It is June'
//     case 6:
//       return 'It is July'
//     case 7:
//       return 'It is August'
//     case 8:
//       return 'It is September'
//     case 9:
//       return 'It is October'
//     case 10:
//       return 'It is November'
//     default:
//       return 'It is December'
//   }
// }

// for (let i = 0; i <= 11; i++) {
//   console.log(showMonth(i))
// }
