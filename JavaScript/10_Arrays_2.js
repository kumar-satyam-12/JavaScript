const green = ["tree", "leaves", "grass"]
const blue = ["sky", "eye"]

green.push(blue) /* it modifies the array and it adds the new array but as a new array element so now green has 4 elements
three it had already and one array blue, so to resolve this we use concat */
console.log(green)

const black = ["hair", "void", "space"]
const brown = ["wood", "choco"]

const result = black.concat(brown) // it creates a copy of the concatenated array, so it must be assigned to a new variable
console.log(result )

const all = [...black, ...brown] // this concatenates too
console.log(all)


const single = [1, 2, [3, 4], [5, 6]];
console.log(single.flat()); // here we have array inside array, we say this depth so flat removes the depth and makes it flat i.e simple array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) //it forms the array 