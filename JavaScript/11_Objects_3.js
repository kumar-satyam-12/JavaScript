const check = new Object() // this is called singleton object
check.Name = "Satyam"
console.log(check.Name)

const check1 = {} // Non singleton object

const depth = {
    user: {
            username: {
                name: {
                    firstname: "Hero",
                    lastname: "Heeralal"
                }
            }
    }
}

console.log(depth.user.username.name.firstname) // this is how we access when we have object under object

const a ={1: "x", 2: "y"}
const b = {3: "p", 4: "q"}
const c ={a, b} // it will have two variables a and b along with their respective objects, we cannot simply merge the objects
console.log(c)
 

//For merging objects we have Object.assign(target, source1, source2)
const d = Object.assign({},a,b) // it will create a copy of an object which only has the objects of both a and b
console.log(d)

// we can also copy an object as Object.assign(target, source1)
const e = Object.assign({},b)
console.log(e)

const f = {...a,...b} // we can use this ...(spread operator) to concatenate arrays and objects too
console.log(f)


// we have multiple objects in array

const mul = [
    {
    id: "sk@123.com",
    pass: "pass-first"
    },

     {
    id: "ks@123.com",
    pass: "pass-second"               // here objects are in form of array
    },

     {
    id: "skc@123.com",
    pass: "pass12-third"
    }
]


console.log(mul[1].pass)  // to acces objects which is in second element of array, we use this


// to get keys or the values of an object

let trial = {
name: "Satyam",                 // name is key and Satyam is value
age: 23,
status: "Unemployed",
"Interest area": "Nothing"

}
console.log(Object.keys(trial)) // it returns string array
console.log(Object.values(trial)) //it returns array containing values
console.log(Object.entries(trial)) // this gives entries under the variable i.e all key: value pair

console.log(trial.hasOwnProperty('status')) // checks whether the mentioned key is present