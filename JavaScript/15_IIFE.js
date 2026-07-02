// IIFE: Immediately Invoked Function Expressions 
let name = "Satyam";


function greet() {
    console.log(name);
}
name = "Rahul"
greet(); // this is giving the output as Rahul, even though function was made right after name = Satyam, 

/* Now name exists in the global scope. Any other script can accidentally change it,
 name = "Rahul";
  Now greet() prints:
  Rahul
*/

//using an IIFE
(function () {
    let name = "Satyam";     // when using IIFE, its mandatory to use ";" to segregate other functions or IIFE functions
    console.log(name);
})();

// now we cannot use console.log(name) outside the function scope, this is the use of IIFE as it is contained in the function only
// IIFE is used to avoid global scoping pollution

//using IIFE using arrow
((name)=>{
    console.log(name)

}) ("Heera");




(function chai (){  // this is named IIFE
    console.log("CHAI")
}) ();

//  IIFE is used to execute a function immediately and prevent variables inside it from polluting the global scope.

/*
(function() { 
    // Code goes here
})();
 */