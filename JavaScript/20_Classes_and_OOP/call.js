
// before classes this is how we used to initialise the object's properties using function

function call1(username){
    this.username = username
}

//executing a function inside a function
function call2(username, id, gender){
    
    call1.call(this, username) // Execute call1, but make its this the same object that call2 is currently building.
    this.id = id;
    this.gender = gender
}

const check = new call2("satyaam", 123, "m")
console.log(check)

// here we are calling the object's property from one constructor function to other this is why we are using .call method
// if we have a function2 inside function1, then function2 can access the variable of function 1 but function1 can't access the variable of function2

function func1() {

    let x = 10;

    function func2() {
        console.log(x);
    }

    func2(); // can't access inner function from outer function
}

func1(); // here func1 calls func2 and func2 can access func1 variable x, so we got the o/p as 10