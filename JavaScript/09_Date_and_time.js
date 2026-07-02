let mydate = new Date()
console.log(typeof mydate) //it is an object
console.log(mydate) // it returns date but not understandable, so we convert it to string
console.log(mydate.toDateString()) //returns date as string value
console.log(mydate.toLocaleString())

let date = new Date(2026, 0, 15) // format: yyymmdd, month start from 0
console.log(date.toDateString())

let date1 = new Date("2026-01-26") // here month start from 01, format : yyyymmdd
console.log(date1.toDateString())

let date2 = new Date("01-11-2027") //format:ddmmyyyy
console.log(date2.toDateString())

let mydates = Date.now() //Returns the number of milliseconds elapsed since midnight, January 1, 1970
console.log(mydates)