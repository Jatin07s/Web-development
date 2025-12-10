/* 
forEach = means jab humhe koi Array(List,) ka ek ek element ko preint krana ho tab hum use krte hai forEach method 

1) way by using function inside forEach method 

*/

let arr = [1,2,3,4,5];

// arr.forEach(function func(val){
//     console.log(val);
// })

// so basically function likh dia and woh automaticaaly run ho jaega call nahi krna padega , and arr ka ek ek element val mai store ho gaya and woh val ek ek element print kr dega 


// 2) way (mostly used and good method and easy bhi ) by arrow function 

arr.forEach((val) => {
    console.log(val);
})




let cities = ["mumbai" , "delhi" , "pune" , "goa"];

cities.forEach((val ,idx , cities) => {
    console.log(val.toUpperCase() , idx , cities) 
})


 // higher order function/method (HOF/HOM) => mtlb ki the on ewhich takes another function as a parameter or return that function is called ... //





 let num = [2,3,4,6,7];

 num.forEach((val) => {
    console.log(val**2);
 })

//  let num1 = Number(prompt("Enter a number , whose sqaure you want : "))

//  console.log(num1**2) 