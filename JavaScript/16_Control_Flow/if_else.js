if("2"==2){
    console.log("done")  
}

const balance = 1000
if(balance>500) console.log("Enough balance"); // one line , here scope is implicit i.e. within this single line

if(balance >2000){
    console.log("more than 2000");
}
else if(balance > 1500){
    console.log("more than 1500");
}
else if(balance > 1200){
    console.log("more than 1200");
}
else{
    console.log("=1000");
}

const abc = true
const xyz = true
const pqr = false
if (abc && xyz ){
    console.log("Everything satisfied")
}

if (abc || pqr){
    console.log("One of the condition satisfied")
}