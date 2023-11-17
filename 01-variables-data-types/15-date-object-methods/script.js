let x
let d = new Date() // Instantiate a today Date object
// console.log(d) // Fri Nov 17 2023 09:15:53 GMT+0700 (Indochina Time)

// ***** Get a string represents a Date object *****
x = d.toString()

// ***** Use getTime and valueOf functions to get timestamp of a Date object in milliseconds *****
x = d.getTime() // 1700186596525
x = d.valueOf() // 1700186596525

// ***** Get specific parts of the Date object *****
x = d.getFullYear() // 2023
x = d.getMonth() // 10 (November)
x = d.getDate() // 17 (day of the month)
x = d.getDay() // 5 (day of the week, Monday is 1)
x = d.getHours() // 9
x = d.getMinutes() // 15
x = d.getSeconds() // 53
x = d.getMilliseconds() // 483

// ***** DateTimeFormat API *****

// Construct a Date object
x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}` // '2023-11-17'

x = Intl.DateTimeFormat('en-US').format(d) // 11/17/2023
x = Intl.DateTimeFormat('en-GB').format(d) // 17/11/2023
x = Intl.DateTimeFormat('vi-VN').format(d) // 17/11/2023
x = Intl.DateTimeFormat('default').format(d) // 11/17/2023

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d) // November

// x = d.toLocaleDateString() // 11/17/2023
x = d.toLocaleString() // 11/17/2023, 9:44:12 AM
x = d.toLocaleString('default', { month: 'short' }) // Nov

x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/New_York',
})
// -> Thursday, November 16, 2023 at 9:57:31 PM

x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'Asia/Ho_Chi_Minh',
})
// -> Friday, November 17, 2023 at 9:57:31 AM

console.log(x)
// console.log(typeof x)
