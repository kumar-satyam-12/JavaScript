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

/* A class is a blueprint (template) used to create multiple objects with the same structure and behavior.

Instead of creating many similar objects manually, you define a class once and create as many objects as you need
 */