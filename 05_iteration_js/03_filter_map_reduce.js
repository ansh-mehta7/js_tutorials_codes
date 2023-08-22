let friends=["mike ","rachel","jessica","louis"]

 const values =friends.forEach((item)=>{
console.log(item);
return item
})
console.log(values); // return is  undefined means foreach doesnt return any value
// what if we want to check any particular each value operation or check it conditionally 

const myNums=[1,2,3,4,5,6]

 let newNums= myNums.filter((num)=> {
   return num>=3 // explicit return of te function 
 } )
 console.log(newNums);
 // filter takes a callback  function and after this we have to give the condition and it returns the value
  // using foreach if not filter
const newNums=[]
myNums.forEach((num)=>{
if (num>=3) {
    newNums.push(num)
}
})
console.log(newNums);

// exercise calling database
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks=books.filter((bk)=>{
   return (bk.genre==="History" && bk.publish>=1989)
  })
  console.log(userBooks);