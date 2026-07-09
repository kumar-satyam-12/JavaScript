class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){ // this is the value object gets from email property
        return this._email.toUpperCase()
    }
    set email(value){ // the actual value assigned to email is different
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value 
        /* when returning we don't refer to this.password but to this._password
        because if it was this.password = value,  then JS would think that this.password
        is being updated so it would again call set and there also same thing would happen recursively
        so there would be stack overflow */

        /*
        so there would be a race between set and constructor what who assigns the value to the same "password"
        so in order to remove such confusion the setter stores the value in a different property (_password) to avoid calling itself again.
        */

    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);