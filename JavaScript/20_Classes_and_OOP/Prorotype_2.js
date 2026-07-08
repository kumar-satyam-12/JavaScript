// to verify that function, array and strings are having a prototype of object means they have inherited the property and methods from Object.prototype

const arr = [1,2,3,4,5]
const str = "Satyam"
const hello = function(){
    console.log("Hello")
}

Object.prototype.addition = function()
{
    console.log("all things have object prototype")
}

arr.addition() // it works and print the o/p of object prototype because array arr has inherited the new peoperty of Object i.e addition
str.addition()
hello.addition()


//its converse is not true i.e if we add a new property to array it won't propagate to object prototype