let condition1 = false;
let condition2 = true;





// Ternary operator

// let result = condition ? true : false   Single if-else


// result = (condition1 && condition2) ? true: (condition1) ? true : false      

// means agar 1 and 2 true hote hai toh true print , otherwise else if condition 1 check hota , agar else if wala true hoga , agar woh bhi false hua toh else wala part chal jaega that is (false)


let result = (condition1 && condition2) ? "Both conditions are True" : (condition1) ? "only condition 1 is true" : (condition1 || condition2) ? "one of the condition is true" : "if nothing is true , then this will be print"

console.log(result)




// print the number from 1 to 10 
for (let i = 1 ; i<=10 ; i++){
    if (i%3==0){
        continue
    }
    console.log(i)
}

// continue = us value ko skip kar deta ha.i , means divisible by 3 wale ko hata dia baakiyo ko print kar dia


//break  = means uske baad wale ko print hi nahi karega

let find = 7;
for (let i = 1 ; i<=10 ; i++) {
    if (i==find){
        break
    }
    console.log(i)
}

// (condition) ? true : false;
// B
// (condition) : true ? false;
// C
// (true) ? condition : false;
// D
// (condition) ? false : true;







// while loop 

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



let num = Number(prompt("Enter a number:"));

let i = 1;
while (i <= 10) {
  console.log(`${num} x ${i} = ${num * i}`);
  i++;
}


let j = 1;
while (i<10){
    
}