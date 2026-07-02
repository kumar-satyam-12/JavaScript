//JavaScript arrays are heterogeneous, meaning they can store values of different data types, including objects.

let myarr = [1, "Hero", 5]
console.log(myarr)


//Array Methods
myarr.push(6,7)  // adds element to the array
console.log(myarr)

myarr.pop() // removes last element of the array
console.log(myarr)

myarr.unshift(19) //adds element to start of the array
console.log(myarr)

myarr.shift() //removes element from start
console.log(myarr)

 
console.log(myarr.includes(100)) //checks if exists, return true/false

console.log(myarr.indexOf("Hero")) //returns index of the specified element


const newarr = [1,5,1,88,20]
console.log(newarr.join()) // it converts the array into a single string, and the elemenst are separated by comma
console.log(typeof(newarr.join()))

console.log(newarr.join("-")) // here elements are separated by -
console.log(newarr.join("")) //no space between elements


const arr1 = [56,78,89,12,34,78]
const arr_1 = arr1.slice(1,4) //slice(start, end): creates copy of part of the array and here the end is not included
console.log(arr_1)

const arr2 = [23,34,56,78,89,90,12,23]
const arr_2 = arr2.splice(1,3,100, 200) // splice(start, deletecount, item1, item2,..) here we can add items, delete the elements in array
console.log(arr_2)
console.log(arr2)

// here arr_2 = arr2.splice() means arr2.splice() removes the arrays and returns it to arr_2
// arr2 has been modified i.e. array which has elements removed and new elements added 