// let r1 = 2;
// let r2 = 5;
// let r3 = 10
// const pi = 3.14;
// console.log(`${pi * r1 * r1}`);
// console.log(pi * r2 * r2);
// console.log(pi * r3 * r3);

// let areaOfCircle1 = `The area of radius1 = ${pi * r1 * r1}`;
// let areaOfCircle2 = `The area of radius2 = ${pi * r2 * r2}`;
// let areaOfCircle3 = `The area of radius3 = ${pi * r3 * r3}`;

// console.log((areaOfCircle1));
// console.log((areaOfCircle2));
// console.log((areaOfCircle3));





// this is a very long code (boring) :) {lets try to make it with function... !!!}


// function areaOfCircle(radius){
//     let ans = (Math.PI * radius * radius);
//     console.log(ans);
// }

// areaOfCircle(2)
// areaOfCircle(5)
// areaOfCircle(10)





// function serveBeverages(drink,quantity){
//     console.log(`I want -> ${quantity} ${drink}`);
// }
// serveBeverages("mango juice",12)
// serveBeverages("Chai",2000000)
// serveBeverages("Red Bull",-1)





// next 

// function welcomeToTheClass(person){
//     console.log(`welcome to the class - ${person}`)
// }
// welcomeToTheClass()  
// if no argument for the parameter the output will be {undefined} :)







// function welcomeToTheClass(person , onTime){
//     console.log(`welcome to the class - ${person} ${onTime}`)
// }
// welcomeToTheClass('Sukuna',9,10)  
// if we give 3 arduments , and having 2 paramters , so no error (means it will not accept the 3rd argument)




// function welcomeToTheClass(x,y,z){
//     console.log(x + y + z)
// }
// welcomeToTheClass(2,5)
// 2 + 5 + undefined = { NAN - Not a Number}





// function welcomeToTheClass(person = 'Namam'){
//     console.log(`welcome to the class - ${person}`)
// }
// welcomeToTheClass()  

// if no argument is given , to prevent it - take a default value in parameter so , agar hum value nahi denge toh by default value parameter ki value assign






// function welcomeToTheClass(person = 'Namam'){
//     console.log(`welcome to the class - ${person}`)
// }
// welcomeToTheClass("priyank")

// more priority given to the value given in argument i.e = (priyank)






// ARROW FUNCTION 😎💘


// let add = (a,b) => {
//     let ans = a+b;
//     // console.log(ans);
//     return ans;
// }
// let final = add(2,3);
// console.log(final)
// return basically call ko store kar leta hai , pehele usko variable ,mai store karo , then console kardo , otherwise direct console the function name 

// function keyword is not required , here add is the function name







// let add = (a,b) => {
//     return a+b
//}
 // agar ek line ka code hai inside the function , toh advantage of arrow function lets see


 // Implicit return 
let add = (a,b) => a+b;
console.log(add(2,3))


let multiply = x => x*2;
console.log(multiply(5))