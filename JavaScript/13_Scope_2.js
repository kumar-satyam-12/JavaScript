one(5) // We can access it before function declaration because one is just a function
function one(num123){
    return num123+1

}



two(1) // we cannot access it because we have declared function and store it in variable and the variable must be defined first then only we can access
const two = function(num12){
    return num12+2
}