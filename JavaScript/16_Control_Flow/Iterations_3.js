const arr = [1,2,3,4,5,6,7,8,9,10]

// if we want to return some numbers from this array which satisfies any condition

const arr1=arr.filter((num)=>num>5) // without having to run any for loop we are getting the desired output
console.log(arr1)

//if in arrow operator we open the curly braces then we have to write "return"

const arr2=arr.filter((num)=>{
    return num>2
})
console.log(arr2)

// it happens because when we introduce curly braces, JavaScript assumes we are writing function body so it expects a return

arr.forEach((num)=>{
    if(num>3)
        console.log(num)
    

})

const books = [
    
    
  {
    title: 'Book One',
    genre: 'Fiction',
    publish: 1981,
    edition: 2004
  },
  {
    title: 'Book Two',
    genre: 'Non-Fiction',
    publish: 1992,
    edition: 2008
  },
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Four',
    genre: 'Non-Fiction',
    publish: 1989,
    edition: 2010
  },
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Six',
    genre: 'Fiction',
    publish: 1987,
    edition: 2010
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }

    
]



const kitaab = books.filter((funnel)=> (funnel.genre==='Non-Fiction'))  // it will return the objects whose key's value matches filter condition
console.log(kitaab)


// Now we are looking ar "map" it is different from "Map" we saw
// map is an array method and Map is a data structure used to store key and value pair just like objects


const nums = [1,2,3,4,5,6,7,8,9,10]
const newnums = nums.map((num)=>num*10)  //.map also iterates like .foreach
console.log(newnums)


// we can also apply filter on top of maps

const nums1 = nums
               .map((num)=>num*10)
               .map((num)=>num+1)
               .filter((num)=>num>30)
 // here the flow is like
 // first comes 1 to the map and it becomes 10
 // then that 10 comes to second map and becomes 11
 // then 11 comes to filter and we see 11>30 is not true so its not returned to nums1
 // and in this way all elements of arrays are iterated

console.log(nums1)      






