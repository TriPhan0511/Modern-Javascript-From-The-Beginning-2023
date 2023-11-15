console.log(100)
console.log('Hello world!')
console.log(20.1, 'Hello', true)

const x = 100
console.log(x)

console.error('Alert')

console.table({ name: 'Brad', email: 'brad@gmail.com' })

console.group('simple')
console.log(x)
console.error('Alert')
console.groupEnd()

const styles = 'padding: 10px; background-color: white; color: green'
console.log('%cHello World', styles)
