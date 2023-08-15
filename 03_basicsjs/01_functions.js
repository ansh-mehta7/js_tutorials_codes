function saymayName(){
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("h");
    
}
// console.log(saymayName());
function AddTwoNumbers(number1 ,number2)
{
// let result=number1+number2;
return number1+number2;
}
 const result =AddTwoNumbers(4,6)
 console.log("result",result);
// AddTwoNumbers(4,"6")

function loginUserMessage(username) // default argument can also be passed username='sam'
{
    if(username===undefined) // !username
    {
console.log(`please enter the username`);
    }
    else{
        return `${username} just logged in `
    }
    
}
/*
console.log(loginUserMessage("ansh mehta"));
console.log(loginUserMessage()); // undefined in case of empty arguments 
*/

function calculateCartPrice(...num1){// rest operator returns the arguments item in an array 
    return num1
     
}
console.log(calculateCartPrice(400,493,282));
const user ={
    username:"ansh",
    price:109
}
// passing object to the function 


function handleObject(AnyObject){ // generic object can be passed
    console.log(`username is ${AnyObject.username} and price is ${AnyObject.price}`);


}
handleObject(user);
handleObject({ // another method of passing 
    username:"divyansh",
    price:292
})


const mynewArray=[100,200,300]
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(mynewArray));