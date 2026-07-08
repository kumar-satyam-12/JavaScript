function call1(username){
    this.username = username
}

//executing a function inside a function
function call2(username, id, gender){
    
    call1(username).call(this, username) // Execute call1, but make its this the same object that call2 is currently building.
    this.id = id;
    this.gender = gender
}

console.log("SKC", 123, "M")