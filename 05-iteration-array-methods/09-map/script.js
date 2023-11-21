const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const doubledNumbers = numbers.map((item) => item * 2)

// Same with forEach
const doubledNumbers = []
numbers.forEach((item) => doubledNumbers.push(item * 2))

// console.log(doubledNumbers)

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
]

// Create an array of company names
const companyNames = companies.map((item) => item.name)
// console.log(companyNames)

// Create an array with just company's name and category
const companyInfo = companies.map((item) => {
  return {
    name: item.name,
    category: item.category,
  }
})

// const companyInfo = companies.map((item) => ({ name: item.name, category: item.category }))

// console.log(companyInfo)

// Create an array of objects with the name and the length of each company in years
const companyYears = companies.map((item) => ({
  name: item.name,
  length: `${item.end - item.start} years`,
}))

// console.log(companyYears)

// Chain map methods
const squareAndDouble = numbers.map((item) => Math.sqrt(item)).map((item) => item * 2)

// console.log(squareAndDouble)

// Chaining different methods
const evenDouble = numbers.filter((item) => item % 2 === 0).map((item) => item * 2)

console.log(evenDouble)
