//Object Literal and Constructor Function

const user = {
    name: "satyam",
    gender: "M",
    location: "India",

    greet: function(){               // we cannot use arrow function here in the object 
        console.log(this.location)
         console.log(this)  // this has the current context i.e user's all properties (name, gender and location)
    }
}

console.log(user.name)  

user.greet()

console.log(this) // now here in node environment in our pc this is for global context and we don't have any such global context thing so it will return empty
//  if we ran this in browser it will print window{} because it has global context and there we have many other things in it too 

//here user is an object

function hello(username, sex, state){  // hello is a constructor function
    this.username = username
    this.sex = sex
    this.state = state

}

const one = new hello("maytas", 'M', "MP" )
const two = new hello("rumak", "M", "GJ")
console.log(one)

// new is a JavaScript operator that is used to call a constructor function or a class constructor to create a new object.
//new creates a new object whose properties are initialized by the constructor function
// that means one is an object with properties username, sex and state
/*We use the constructor function hello to initialize the properties of a newly created object.
 The new operator creates the object and then calls hello to initialize it. */