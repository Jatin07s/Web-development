console.log("Hello World");

var a  = 5;
var b = 10;
var c = "hello";
console.log("The sum is : ", a+b);
console.log(typeof a , typeof b , typeof c);
// so basicaly , typeof is used to know the datatype of a variable as (a) is number (b) is number (c) is string




// so now lets talk abour block variable and global variable 


// let is a block variable means ki block ke andar hi access ho skta hai , lets have example of let
let a1 = 10;
{
    let a1 = 20;
    console.log(a1);
    // yeh andar wala a1 print karega jiska value 20 hai
}
console.log(a1);
// ab yeh a1 wali value print karega bcz block wala a1 jo hai woh sirf block ke andar hi access ho skta hai , toh yeh jo a1 print karega woh bahar wala a1 hoga jiska value 10 hai




// var variable global variable hota hai means ki agar humne bahar ex a2 variable hai var uski value 20 likhi hai toh woh hum block ke andar bhi access kar skte hai , lets have example of var

var a2 = 20;
{
    console.log(a2);
    // yeh andar wala a2 print karega jiska value 20 hai , kyuki var global variable hota hai toh hum block ke andar bhi access kar skte hai
}
console.log(a2);
// ab yeh a2 wali value print karega jiska value 20 hai , kyuki var global variable hota hai toh hum block ke andar bhi access kar skte hai



// but we mostly prefer to use let variable instead of var variable to avoid confusion and errors in code


const d = 10;
// d = 20;
console.log(d);
// yeh error dega kyuki const variable ki value change nahi ki ja skti hai , const ka full form hota hai constant , toh constant ki value change nahi ki ja skti hai

// and let and var ki value change ki ja skti hai 


// overall summary of let , var , const 
// let - block variable , value can be changed
// var - global variable , value can be changed
// const - block variable , value cannot be changed
// we most prefer to use let and const instead of var to avoid confusion and errors in code