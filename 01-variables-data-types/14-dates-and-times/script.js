let d

d = new Date()

d = d.toString()

// d = new Date(1984, 10, 5, 12, 30, 0)
// -> Mon Nov 05 1984 12:30:00 GMT+0700 (Indochina Time)

d = new Date('2021-07-10')
// -> Sat Jul 10 2021 07:00:00 GMT+0700 (Indochina Time)

d = new Date('2021-07-10T12:30:00')
// -> Sat Jul 10 2021 12:30:00 GMT+0700 (Indochina Time)

d = new Date('07/10/2021')
// -> Sat Jul 10 2021 00:00:00 GMT+0700 (Indochina Time)

d = new Date('07/10/2021 12:30:00')
// -> Sat Jul 10 2021 12:30:00 GMT+0700 (Indochina Time)

d = new Date('07-10-2022')
// -> Sun Jul 10 2022 00:00:00 GMT+0700 (Indochina Time)

// Timestamp (timestamp is expressed in milliseconds)
d = Date.now()
// -> 1700184391898 (a number of milliseconds elapsed from Jan 1st, 1970)

// Get a timestamp of a specific date: use functions: getTime, valueOf
d = new Date('07-10-2022')
d = d.getTime()
// -> 1657386000000

d = new Date('07-10-2022 12:30:00')
// d = d.getTime()
// -> 1657431000000
d = d.valueOf()
// -> 1657431000000

d = new Date()
// d = d.getTime()
d = d.valueOf()

// Create a Date object from a timestamp
d = new Date(1700185088747)
// -> Fri Nov 17 2023 08:38:08 GMT+0700 (Indochina Time)

// Convert a timestampe to seconds
d = Math.floor(Date.now() / 1000)
// -> 1700185485

console.log(d)
