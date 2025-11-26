// two data types in javascript :
// primitive data type 
// object data type

// primitive data type in javascript :
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol (ES6 se aaya hai) ES6 means ECMAScript 2015 means jo version 2015 mai aaya tha javascript ka



let a3 = "jatin bhaii";
let b3 = 25;
let c3 = 2.55;
let d3 = true;
// javascript mai true ko small mai likhte hai , false bhi small mai likhte hai , python mai True and False capital T and F se likhte hai
let e3 = null;
let f3; // undefined variable

console.log(a3,b3,c3,d3,e3,f3);
console.log(typeof a3,typeof b3,typeof c3,typeof d3,typeof e3,typeof f3);


// why typeof null gives object in javascript?
// its kind a bug in javascript , it is already there from the beginning of javascript, means pehele se hi set kr dia tha null ka type object and usko change nahi kia kyuki agar change karte hai toh bahut sare purane code mai problem aayegi , toh isliye abhi bhi typeof null gives object in javascript








// object data type in javascript :

// object is key value pair in js 
// means ki ek key hoti hai jiska ek value hota hai , aur hum usko access kr skte hai us key ke through , lets have example of object data type in javascript

let o = {
    name : "Jatin",
    age : 25,
    isStudent : true,
};

// isme semicolon nahi lagate hai object ke end mai , kyuki yeh ek data type hai , aur data type ke end mai semi colon nahi lagate hai , semi colon lagate hai statements ke end mai , jaise ki variable declaration ke end mai lagate hai

console.log(o);

// if i want to add a element in this object , how can i do that?

o.sallary = "100Crores";

console.log(o);

o.sallary = '200Crores';

console.log(o);
console.log(typeof o);

