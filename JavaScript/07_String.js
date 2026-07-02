const name ="Satyam"
const age = 23
/* we can concatenate in two ways */
console.log(name + age) // it will treat both as string because first we wrote string
console.log(`My name is ${name} and my age is ${age}`);
console.log(name[2]);
console.log(name.charAt(3));
console.log(name.indexOf('t'));
const subname = name.substring(3,6); //here first index is the starting and then end index which is not included
console.log(subname)

const sl = name.slice(-5,3); // it also gives string, but it accepts negative indices and here start>end is supported,  if we give negative to substring it treats it as 0
console.log(sl);

const y = "   Satyam  "
console.log(y)
console.log(y.trim()) // it removes the starting and ending space


const url ="https://satyam.kumar.org.indo"
console.log(url.replace('indo','in')) //replaces indo with in

console.log(url.includes('saty')) // it checks whether "saty" exists in the string, and returns true/false


const xyz = "satyam-kumar-chaudhary"
console.log(xyz.split('-')) //it will separate on basis of "-" and return an array
console.log(xyz.split('-',2)) //here we mentioned limit that how many elements we want in array

const another_Way = new String('Hello') // this also creats string but it is not primitive string, it creates a string object,  we can run all methods on string object too like we do for regular string
console.log(another_Way)
console.log(typeof another_Way)

