const Promiseone = new Promise(function(resolve, reject){ //resolve means promise fulfilled and reject means promise rejected
    setTimeout(function(){
        let error = false

        if(!error){
            resolve({username:"Satyam", id: "123"}) // in resolve we are assuming that we got username and id from API call as object
        }

        else{
            reject("Error: Something went wrong") // if reject then we are putting this message to show
        }


    },2000)
})

Promiseone
.then((user)=>{      // in first .then we are called when the promise if fulfilled (resolved), it will carry the value inscribed in resolve
    return user.username     // we can't directly get the value from assigning this return to a variable, so we'll use chaining method of then, one more then  
})
 // here instead of then chaining we could have also directly used console.log(user.username) in the first .then just like in catch and still get the answer, we used this method to understand that we can use .then like chaining too

.then((username)=>{ // this .then will get the return value of first .then--> here we have passed an argument username which has the value of user.username
    console.log(username) // this will print the value
})
.catch((error)=>{  // this will get the value if the promise is rejected
    console.log(error)
})
.finally(()=>{
    console.log("Promise either resolved or rejected") // this will always run irrespective of Promise being resolved or rejected
})





