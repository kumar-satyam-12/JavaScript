const abc = Symbol()
let trial = {
name: "Satyam",
age: 23,
status: "Unemployed",
"Interest area": "Nothing",
[abc]: "Hello" // this is how we assign value to Symbol

}

trial.greeting = function(){
    console.log(`Hello, my name is ${this.name} `)
}
console.log(trial.greeting())
console.log(typeof (trial.greeting()))