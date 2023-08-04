
let myDate=new Date()
console.log(myDate); // not readable  

console.log(myDate.toString());// Fri Aug 04 2023 11:29:46 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toISOString());

console.log(myDate.toJSON());

console.log(myDate.toDateString());

console.log(myDate.toLocaleTimeString());

console.log(typeof myDate); // type of date is object 

// declaring a specific date 
let myCreatedate=new Date(2023,0,15)
// month jan starts from 0 in js 
console.log(myCreatedate.toDateString());


let Createdate=new Date(2023,0,15,5,4)
// month jan starts from 0 in js 
console.log(Createdate.toLocaleString()); //1/15/2023, 5:04:00 AM


let myCreatedate2=new Date("01-15-2003")// sprcific syntax of mm dd yyyy  specificily to india
console.log(myCreatedate2.toLocaleString());
console.log(myCreatedate2.getTime());// dates in ms 
 


let myTimeStamp =Date.now()// comparsion of dates we use timestamps
console.log(Math.floor(Date.now()/1000)); // date in second
console.log(myTimeStamp); // date in ms since 1970

let newdate= new Date()
console.log(newdate);
console.log(newdate.getMonth()+1);

newdate.toLocaleString('dafault',{
    weekday:"narrow"
    
})

