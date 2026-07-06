class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

const user1 = new User("Satyam", 23);
user1.greet();

/*
Constructor automatically assigns the value Satyam and 23 for name and age
this.name and this.age means when initialising user 1, so there it means:
user1.name = Satyam and user1.age = 23

Here, User is class
everything inside {} is object which has key and values
greet() is a method i.e function inside class




*/