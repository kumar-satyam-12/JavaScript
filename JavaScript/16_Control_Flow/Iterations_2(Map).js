const arr = [1, 34, 56, 78, 123, 876]
for(const i of arr){ // for..of is preferred in array and maps
    console.log(i) // need not to mention index, it automatically prints the value at index i
}

// we also have  for.. in and it is only used for objects
const user = {
    name: "Satyam", // this is the only way we can iterate over objects
    age: 23,
    city: "Darbhanga"
};

for (const key in user) {
    console.log(key, user[key]);
}

//JS also has a concept of Maps, it is like objects

const fun = new Map();
fun.set("name", "Satyam")

console.log(fun.get("name")) // we need to type key in double/single quote

const n = "age"
fun.set(n,23)
console.log(fun.get(n)) // if we want to use variable, declare it first

for(const i of fun ){// we'll get ouput in key-value pair in array form
    console.log(i)
}

for(const [i,j] of fun){  // it is destructuring of array, it will also have answer in key-value pair but without any array, just simple text (not string)
    console.log(i,j)
}

//A Map does not store data in array form. When you iterate over it, it returns each entry in the form of a 2-element array [key, value].

// we iterate objects with for..in which iterates over properties names (keys)
// we iterate Maps and Arrays with for..of which iterates over value produced (values)




//USING FUNCTION IN ARRAY

const coding = ["cpp", "java", "JS", "Python"];

coding.forEach(function greet(sample) {
    console.log(`The language is ${sample}`);
})

coding.forEach((item) => {
    console.log(`the bhasha is ${item}`)
})