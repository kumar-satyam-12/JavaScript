console.log(null==0) //for equality check here null is undefined and undefined is not equal to 0, thus false
console.log(null>0)  // for relational comparisons JS converts null to 0, so 0>0 is false
console.log(null>=0) // for relational comparisons JS converts null to 0, so 0>=0 is true

console.log("3">1) // relati0nal comparision converted 3 to numerical 3 and 3>1 is true

/* we also have ===
it checkd data type and value and both must match to return true */

console.log("2"===1)
console.log(1==1)

/* JS has 8 types of data types: Number, String, Boolean, Undefined, Null, Symbol, BigInt, and Object
The first seven are primitive data typ4es while object is a non primitive/refernce type.
Arrays and functions are special kinds of object
 */