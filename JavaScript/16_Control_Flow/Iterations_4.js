//reduce method

const nums = [1,2,3,4,5,6,7,8]
const learn = nums.reduce(function(accumulator, currentvalue){
    console.log(`accumular value is ${accumulator} and current value is ${currentvalue}`)
    return accumulator+currentvalue
},4)

console.log(learn)


// here accumulator first stores the initial value which we assign here we are giving 4, and then it stores as accumulator=accumulator+currentvalue
// currentvalue is the current element of array
// here it is simply adding the accumulator and currentvalue and value of accumulator updates by sum in each iteration and
// currenvalue gets the next array element in each iteration
// run the command to understand the value 
// the initial value 4 is written after curly braces

// we can write the same code in less wordings as:

const learn1 = nums.reduce((acc,curr)=> acc+curr,8)
console.log(learn1)

// reduce can also be used in array of objects

const books = [
    
    
  {
    title: 'Book One',
    genre: 'Fiction',
    sold: 200
  },
  {
    title: 'Book Two',
    genre: 'Non-Fiction',
    sold: 300
  },
  {
    title: 'Book Three',
    genre: 'History',
    sold: 400
  },
  {
    title: 'Book Four',
    genre: 'Non-Fiction',
    sold: 500
  },
  {
    title: 'Book Five',
    genre: 'Science',
    sold: 600
  },
  {
    title: 'Book Six',
    genre: 'Fiction',
    sold: 700
  },
  {
    title: 'Book Seven',
    genre: 'History',
    sold: 800
  }

    
]

const total_sold = books.reduce((acc,item)=>acc+item.sold,0)
console.log(total_sold)