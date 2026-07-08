class user {
    constructor(username, id, password){
        this.username = username;
        this.id = id
        this.password = password
    }


   encryptPassword(){
    return `Encrypted password is ${this.password}345`
   } 


}

const test = new user("Satyam", 123, "xyz@123")
console.log(test.encryptPassword())