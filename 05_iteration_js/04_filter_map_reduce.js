const myNums=[1,2,3,4,5,6,7,8,9,10]
//  let newNums=myNums.map((num)=>{
//  return num+10
// })
let newNums=myNums
           .map((num)=> num*10) // result of this in second chain in num 
           .map((num)=>num+1)
           .filter((num)=> num>=50)
console.log(newNums);
// chaining 

const myNums=[1,2,3]
//  let sumTotal=myNums.reduce( function(acc,currval){
//   console.log(`acc:${acc} and curr val: ${currval}`);  
// return acc+currval
//  }, 0)

// reduce in js 

let sumTotal=myNums.reduce( (acc,currval)=>{
    return acc+currval
} ,0)
 console.log(sumTotal);

 const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
let amountToPay=shoppingCart.reduce(( sumTotalPrice,item )=>{
return item.price+sumTotalPrice
},0)

console.log(amountToPay);