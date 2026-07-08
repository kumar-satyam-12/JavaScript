// some of the object's properties are writable and some are not, we can set whether to change or not

const chai ={
    name: "Ginger Chai",
    price: 10,
    availability: true

}

console.log(Object.getOwnPropertyDescriptor(chai, "name"))  // it says that it is modifiable
// at once we can only access one property of an object

// we can change the property too
chai.price = 12
console.log(chai.price)

Object.defineProperty(chai, "price",{

    writable: false, // writable means change the value
    enumerable: false, // means whether the property is visible during the iteration i.e skip a property from iteration
    configurable: false // configurable means whether you can change the property's definition or delete it

}
)

chai.price = 13
console.log(chai.price); // still the price remains 12
