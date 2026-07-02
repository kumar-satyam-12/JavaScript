const mail ="" // empty string with no space is considered false

if(mail){
    console.log("Mail present")
}
else{
    console.log("mail absent")
}

const Mail = []  // empty array is considered true

if(Mail){
    console.log("Mail present")
}
else{
    console.log("Mail Absent")
}


// falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, null, Nan

//truthy values
// "0", 'false' because string has some value inside, " " empty string with space is true, [], {}, function(){}

// to check empty objects
const a = {}

if(Object.keys(a).length==0){
    console.log("Empty object")
}


//ternary operator
//condition ? true: false

let check = 100
check <100 ? console.log("True"):console.log("false")


// Null Coalescing Operator
// The nullish coalescing operator (??) is a logical operator that returns
// its right-hand side operand when its left-hand side operand is null or undefined (independent of false, true, "",[],{})
// and if left side value is not null/undefined it returns left side value

console.log("Hello" ?? "Backup");  // Returns: "Hello"
console.log(42 ?? 100);             // Returns: 42
console.log(true ?? false);         // Returns: true

// Even other falsy values are returned:
console.log(0 ?? 10);              // Returns: 0
console.log("" ?? "Default");       // Returns: "" because ?? check only for null or undefined
console.log(false ?? true);        // Returns false