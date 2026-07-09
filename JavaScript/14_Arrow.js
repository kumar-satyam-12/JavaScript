const obj = {
    name: "satyam",
    gender: "Male",

   greet: function(){
    console.log(this.name)
   }

   }
obj.greet()
obj.name="Sam" //we can even change the context
obj.greet()

function hello(){  
    let  hi = "Hello"                //rule of thumb: in function always use let or const. Because we only want local scope in functions
    console.log(hi)
    console.log(this.hi)
}
hello()  // this.hi won't work for functions


const handshake = function (num1,num2){
    return num1+num2

}

console.log(handshake(1,2))


const hs = (num1, num2)=>{  // this is how we removed "function" and introduced arrow 
return num1+num2
}

const hand = (num3, num4) => (num3+num4) // we need not to write return if using simple bracket

// this arrow function is also useful for returning objects

const leg = (x, y) => ({username: "Satyam"}) // this way we are returning an object but object must be defined under curly braces and then paranthesis
console.log(leg(3,4))