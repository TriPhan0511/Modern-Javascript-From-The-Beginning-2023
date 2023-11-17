let x

const arr = [34, 55, 95, 20, 15]

// ***** Append a value on the end of the array *****
// arr.push(100)

// ***** Remove the last element in the array *****
// arr.pop()

// ***** Insert new elements at the start of an array *****
// arr.unshift(99)

// ***** Remove the first element from an array *****
// arr.shift()

// ***** Reverse the elements in an array in place *****
// arr.reverse()
// // console.log(arr) // [15, 20, 95, 55, 34]

// ***** Determines whether an array includes a certain element,
// returning true or false as appropriate. *****
x = arr.includes(20)
// -> true
x = arr.includes(3000)
// -> false

// ***** Returns the index of the first occurrence of a value in an array,
// or -1 if it is not present. *****
x = arr.indexOf(15)
// -> 4
x = arr.indexOf(2000)
// -> -1

// ***** slice method *****
// (The slice method does not change the original array)

// Returns a copy of a section of an array.
// For both start and end, a negative index can be used to
// indicate an offset from the end of the array.
// For example, -2 refers to the second to last element of the array.
x = arr.slice(1)
// console.log(x) // [55, 95, 20, 15]
x = arr.slice(1, 4)
// console.log(x) // [55, 95, 20]
x = arr.slice(1, -1)
// console.log(x) // [55, 95, 20]
// console.log(arr) // [34, 55, 95, 20, 15] (The slice method does not change the original array)

// ***** splice method *****
// (The splice method change the original array)

// Remove a number of elements from an array
// x = arr.splice(1, 4) // Remove 4 elements from the array
// console.log(x) // [55, 95, 20, 15]
// console.log(arr) // [34] (The splice method change the original array)

// Remove a single element from an array
// x = arr.splice(3, 1)
// console.log(x) // [20]
// console.log(arr) // [34, 55, 95, 15]

// Insert an element at a specified index
// arr.splice(1, 0, 5000) // Insert at index 1
// console.log(arr) // [34, 5000, 55, 95, 20, 15]

// Replace one element at a specified index
// arr.splice(3, 1, 300) // Replace the element at index 3 with value of 300
// console.log(arr) // [34, 55, 95, 300, 15]

// const arr = [34, 55, 95, 20, 15]
// ***** Chain methods *****
x = arr.splice(1, 4).reverse().toString().charAt(0)
// -> 1
console.log(x)
