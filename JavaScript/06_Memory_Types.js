/* We have two types of memory: Stack (primitive data types) Heap (Non-Primitive Data types)

Stack:

let a = 10;
let b = a;
b = 20;

here final value of a:10 and b:20 because both a and b are independent


Heap:

let user1 = {
  name: "Satyam"
};
let user2 = user1;
user2.name = "Rahul";
console.log(user1.name); // Rahul
console.log(user2.name); // Rahul

but here  both variables(user1 and user2) are initially pointing to the same object (Satyam)
after changing user2.name it will change the object from Satyam to Rahul
so console.log(user1) and console.log(user2) will give o/p as Rahul 



*/