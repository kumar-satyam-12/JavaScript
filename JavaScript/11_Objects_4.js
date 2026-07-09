const course = {
    name: "JS",
    Duration: "1hr",
    fees: "Nil"
}

const { name, fees} = course
console.log(name) // means const name = course.name and const fees = course.fees
// we have destructured the objects and created the variables with the same name as object's key, we can even change the variable's name

const {name: n, fees: f} = course
console.log(n)
console.log(f)



/* this is json format:


{
"name": "Satyam",
"class": "12th",
"field": "It"

}

*/