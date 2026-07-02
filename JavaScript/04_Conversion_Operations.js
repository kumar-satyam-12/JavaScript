let score = "123"
console.log(typeof score) //it will be string

let value = Number(score) //converted to number
console.log(typeof value) //it will be number this time
console.log(value)

/* if the variable has "123abc" and then we convert to number in type of it will say number
but if we print the converted number, we get "Nan" means Not a Number
*/

let score1 = "123abc"
let value1 = Number(score1)
console.log(value1)

/* null is an object */

let score2 = null
console.log(typeof score2)

/* if we print typeof or value of null we get null, but if we
convert it into number and then print, we get the value as 0 */

let value2 = Number(score2)
console.log(value2)


/*
this is how conversion looks like
"33" --> 33
"33abc" --> NaN
true-->1 false-->0
 */

/*
we can even convert anything to boolean
*/
let sample1 = 12
let convert1 = Boolean(sample1)
console.log(convert1)

/*
boolean conversion rule
1--> true 0--> false
""--> false
"abc"--> true
*/


/*Similarly we can convert anythig to string too */
let num1 = 33
let string1 = String(num1)
console.log(typeof string1)
console.log(string1)

/* to negate the value*/
let p = 15
let neg_p = -p
console.log(neg_p)

/* to concatenate two strings, add them  */
let string_a= "Hello"
let string_b = " Everyone"
console.log(string_a + string_b)

console.log(1+"2") // first is constant to we get constant 12
console.log("2"+1) // first is string so we get a string 21
console.log("1"+2+2) // first is string so we get string 122
console.log(1+2+"2") // first is constant so we get constant 32

