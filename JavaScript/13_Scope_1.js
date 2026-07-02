if (true){
   const a =10
   let b =20
    var c =30
}
//console.log(a) // we'll not get output because using a out of its scope
//console.log(b) // will not get output because using b out of scope
console.log(c) // will get output because var works on global scope, this is why we prefer let over var

function first (){
   const firstname="satyam"
   const gender="male"
    console.log(firstname)
    second()
    
    function second (){
       const lastname="Kumar"
       const skin="dusky"
        console.log(gender)  //child function can access the variable of parent function
    }

    console.log(skin) // this won't get printed because we are in parent function and thus cannot access child function variable

    
}

first()



