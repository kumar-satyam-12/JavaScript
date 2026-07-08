//ES6

class student {
    constructor(username){
        this.username = username
    }

    logme(){
        return `username is ${this.username}`
    }
}

class admin extends student{  // extends inherits properties from other class
    constructor(username, id, password){
        super(username)  // super refers to the class we have written after extends
        this.id = id;
        this.password = password
    }
}

const test = new admin("Satyam", "skc@xyx", "zxcv")

console.log(test.logme()); // we brought the logme property from student to admin class

