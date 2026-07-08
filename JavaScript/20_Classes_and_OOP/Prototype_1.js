//Protoype

/*  A prototype is a shared object that stores methods and properties so that all objects created
 from the same constructor can inherit and reuse them instead of having their own copies

function hello(username){
    this.username = username;

    this.greet = function(){
    console.log(this.username)
    }
   

}

const u1 = new hello("satyam")
const u2 = new hello("Rahul")




like here both objects u1 and u2 have their own copy of hello constructor (which is inefficient), so this issue will be resolved using the prototype

 */

function username(name, age){
  this.name = name;
  this.age = 12;

}

username.prototype.greet = function(){  // here we have introduced a new prototype greet in username which has function() property
                                     // greet is a method that is stopped inside prototype object
    console.log(this.name)  //username.prototype is the prototype object
}
username.prototype.agefuture = function(){
    console.log(`age of ${this.name} after 10 yrs would be ${(this.age)+10}`)
}

/*
We are creating a function inside the prototype of username named
 greet, so whichever object gets new username also gets access to the prototype.
 */




const a1 = new username ("Satyam", 23)
const a2 = new username("Rahul", 35)

a1.agefuture()
a2.agefuture()


//how JS finds greet when we write a1.greet()?
//JS checks whether a1 has greet property? No
// JS looks in u1 prototype and finds username.prototype and executes the function

// now here both the objects a1 and a2 are sharing the same greet method using prototype

/*The prototype is mainly used to store methods so that all objects created from the same constructor
 can share those methods instead of each object having its own copy. */