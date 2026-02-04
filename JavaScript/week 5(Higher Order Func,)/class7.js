// New Topic 

// Snippet 1
const names = ['Jatin','Kumar','Sonipat'];
// for (const name of names){
//     console.log(`Welcome, ${name}!`);
// }


// Snippet 2
const numbers = [1, 2, 3, 4, 5];
// for (const number of numbers) {
//     console.log(number * 2);
// }   
 


// redudnant code hai ,
// har array ke liye hum for... of loop use kr rhe hai 
// we have to find a such a way ki kitne bhi array mile , (ek function bana do jo har array ke liye kaam kr jaye)



// Solution = Higher Order Function
function processData(arr,callback){
    for (let value of arr){
       callback(value);
    }
}

processData(names , welcomeNames); // callaback func = welcomeNames
processData(numbers,doubleNumbers); // callaback func = doubleNumbers



function welcomeNames(name){
    console.log(`Welcome, ${name}!`);
}
// snippet 1 function 

function doubleNumbers(num){
    console.log(num * 2);
}
// snippet 2 function





// Overall summary --> 

/*
so basically humne kya kia hai ki , starting mai hum har ek array ke liye loop chala rhe the , but baad mai humne ek generic function bana liya jisme hum kisi bhi array ko pass kar sakte hai , or uske sath ek logic function bhi pass kar sakte hai , jo ki har element pe apply hoga .

means ek processData() func banaya and usme humne do parameters liye hai , ek arr (jo ki array hoga) or doosra logicFn (jo ki function hoga) .
phir humne for...of loop chalaya arr ke upar , or har element pe logicFn ko call kia .

is tarah se humne apna code zyada reusable or modular bana liya hai .


and neeeche 2 functions banaye hai , welcomeNames() or doubleNumbers() , jo ki alag alag logic ko implement karte hai .


*/


// This is called Higher Order Function
// A function which takes another function as an argument or returns a function as a value is called Higher Order Function


// Callaback function = processData(names , wlecomeNames);  --> welcomeNames is a callback function , cuz yeh processData function ke andar call ho rha hai

// higher order function = processData  --> cuz yeh ek function ko argument ke roop mai le rha hai , agar argument mai function ho toh woh higher order function hota hai



// so basically --> processData() is Higher Order Function and function call ke time argument mai jo function pass ho raha hai woh Callaback Function hota hai
// Note = har baar hum alag alag logic ke liye alag alag function bana sakte hai , or unhe processData() ke andar pass kar sakte hai






function calculate(){
    return function(){
        console.log("Welcome to the classs");
    }
}
let returnValue = calculate();
returnValue();

// console.log(returnValue()) --> undefined , cuz calculate() function return kar rha hai ek function ko , or woh function kuch return nahi kar rha hai , bas console.log kar rha hai , isliye undefined aayega