const abc = Symbol()
let trial = {
name: "Satyam",                 // name is key and Satyam is value
age: 23,
status: "Unemployed",
"Interest area": "Nothing",
[abc]: "Hello" // this is how we assign value to Symbol

}

console.log(trial.age)
//console.log(obj.Interest area) // this won't give the desired output
console.log(trial["Interest area"]) // this way can give output for non string objects too
console.log(trial["name"])
console.log(trial[abc]) // this is how we refer to the symbol


// We can modify the object's value 
trial.age = 30
console.log(trial.age)

trial[abc] = "bye"
console.log(trial[abc])

// To make object immutable
Object.freeze(trial)
trial.age = 45
console.log(trial.age)



console.log(trial) // it shows all the object of "obj" variable


