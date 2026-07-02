const num1 = 232
console.log(num1)  //just a number (primitive data type)

const num2 = new Number(46)
console.log(num2) //number object

console.log(num2.toString().length) // we converted num2 to string that's why we can find its length
console.log(num1.toFixed(2)) //is used to format a number to a fixed number of decimal places

const otherNumber = 123.8976
console.log(otherNumber.toPrecision(4)) //it rounds off the number of digits we want, here it will give give value of 4 digits so 123.9
console.log(otherNumber.toPrecision(3)) // it will round off 3 digits so we get 124

const number = 1000000000
console.log(number.toLocaleString()) //formats the number with commas and type changed to string
const number1 = number.toLocaleString()
console.log(typeof number1) //string

console.log(Math.abs(-4)) // returns absolute value
console.log(Math.round(4.6)) //rounds off to 5
console.log(Math.ceil(4.2)) //ceiling function
console.log(Math.floor(4.9)) //floor function
console.log(Math.min(4, 3, 6, 8)) //returns minimum

console.log(Math.random()) //random value between 0 and 1
console.log(Math.random()*10 + 1) // returns min as 1.____
console.log(Math.floor(Math.random()+10) + 1) //to avoid decimal\

// if we have a custom range of max and min then
const max = 20
const min = 10
console.log(Math.floor(Math.random()*(max-min+1)) + min) //we'll get min value 10 atleast