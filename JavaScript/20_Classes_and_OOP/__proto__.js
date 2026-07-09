const user = {
    name: "SATYAM"
}

const location = {
    country: "India",
    __proto__: user  // we have given location the prototype of user, so it now has inherited the user's name property
}

console.log(location.name)// we get the output of inherited property name

//one more way to do is
const display={
    monitor: "Dell"
}

const input ={
    keyboard: "HP"
}

input.__proto__= display // here input got the prototype or property of display's properties
console.log(input.monitor)


//one more cleaner way to do this

const student ={
    name: "kajal"
}

const teacher ={
   subject: "English"
}

Object.setPrototypeOf(student, teacher) // here student gets the prototype or property of teacher

console.log(student.subject)




// we can add a prototype to an object and then it can be used by the same object type 

String.prototype.truelength = function(){

    console.log(`True length of the string without space is ${this.trim().length}`)  // here this refers to string
}

const test = "   Hello  "
test.truelength()