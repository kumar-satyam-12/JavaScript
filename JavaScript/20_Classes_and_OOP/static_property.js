class user {
    constructor(username, password){
        this.username = username;
        this.password = password
    }

    greet(){
        console.log(`Welcome ${this.username}`);
    }

    static login(){
        console.log(`logged in successfully`);
        
    }


}

// static methods can only be accesses through the same class itself

const check = new user("Satyam", "123")
console.log(check.greet())
console.log(check.login()); // we won't get o/p for this because of static, it won't even be allowed to accecss login function using extends


// we can only use the function in the class itself
user.login()
