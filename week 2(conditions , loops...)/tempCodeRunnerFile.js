// let num = Number(prompt("Enter a number : "))
// // 1st step = initialization
// let i = 1;
// // 2nd step = condition
// while(i<=10){
//     // 3rd step = logic
//     console.log(`${num} x ${i} = ${num*i}`)

//     // 4th step = inc/dec
//     i++; // or i = i+1
// }



// Leap year


let year = 2020;

if (year%400 === 0 || (year%4===0 && year%100 !== 0)){
    console.log("Leap year")
}
else{
    console.log("Not a leap year")
}




// Swapping in two variables

let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log(b,a)


