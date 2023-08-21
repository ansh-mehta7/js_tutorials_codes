 let friends=["mike ","rachel","jessica","louis"]
friends.forEach( function (item){ // this is a callabck function which does not have any name 
console.log(item);
})

// friends.forEach(element => {
//     console.log(element);
// });

function printme(item){
    console.log(item);
}
// friends.forEach(printme) only function calling not executing 

 // [{},{},{}]

 let programming =[ 
    {
    languagename:"javascript",
    extension:"js"
   },
    {
        languagename:"java",
        extension:"java"
   },
    {
        languagename:"python",
        extension:"py"
   }
]
programming.forEach((item)=>{
    console.log(item.extension);
    console.log(item.languagename);
})