function addtwonum(num1, num2){
    console.log(num1+num2)
}

addtwonum(0.3,0.4) // to call the function we always have to include the paranthesis


function twonum(num1, num2){
    
    return num1+num2
}

let result = twonum(5,6)
console.log(`the result is ${result}`)


// if we gave one parameter in function and pass multiple arguments we can do this by using ... operator and it gives the output in array format

function oneParaMultiArgu(...num){
    return num
}
console.log(oneParaMultiArgu(1,2,3,4,5,6))

let check = oneParaMultiArgu(1,2,3,4)
console.log(typeof check)

function anothercheck(var1, var2, ...num){
    return num
}
console.log(anothercheck(1,34,67,899,90)) // it will return 67, 899 and 90 because first two elements are referenced to var1 and var2


//function for objects

let curtains = {
    color: "Brown",
    length: 23
}

function features(artifact){
    console.log(`The artifact is curtain with color ${artifact.color} and length is ${artifact.length}`);
}
features(curtains)


//function for arrays

const arr = [1,2,34,56,12,98]

function arraa(array)
{ console.log(array[2])
}

arraa(arr)
