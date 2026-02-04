// conditions and Loops

let age = -1;

if (age>=18){
    console.log('Adult')
}else{
    console.log('Child')
}





// if we are having multiple conditions , then how can we use condition

let grade = 95.5;

if (grade>=90 && grade<=100){
    console.log('A+')
}
else if(grade>=80 && grade<90){
    console.log('B+')
}
else if(grade>=70 && grade<80){
    console.log('C+')
}
else if(grade>=0 && grade<70){
    console.log('D+')
}






// Switch case method

// when we know the exact value by the user then we can directly console that , that's why we use this

let day = 5.0;

switch(day){
    case 1:
        console.log("Monday")
        break;
    
    case 2:
        console.log("Tuesday")    
        break;

    case 3:
        console.log("Wednesday")
        break;

    case 4:
        console.log("Thursday")
        break;
    
    case 5:
        console.log("Friday")
        break;
    
    case 6:
        console.log("Saturday")
        break;
    
    case 7:
        console.log("Sunday")
        break;   
    
    default:
        console.log("Invalid")    
}
// default = means agar cases mai available nahi hai toh default wala print ho jaega
// 1 for case 1 , 2 for case 2 and so on.... this is switch case method







// LOOP'S

// 1) For loop

// for(initial condition ; ending step ; condition{i++ or i--}){
//    console.log(i)}

// eg:- for(let i = 1 ; i<=5 ; i++){
// console.log(i)
// }


for (let i = 1 ; i<=10 ; i++){
    if (i%2==0){
        console.log("Welcome to the class")
    }
    else{
        console.log(`${i} = odd`)
    }
}


// 2) While Loop ( jab fix nahi hota , kitne baar loop chalana hai then we use while loop)

let i = 1;
while (i<=5){
    console.log(i);
    i++
};





// switch case method practice 

let anime = 5;
switch(anime){
    case 1:
        console.log("Jujutsu Kaisen")
        break
    case 2:
        console.log("Demon Slayer")
        break
    case 3:
        console.log("Death Note")
        break 
    case 4:
        console.log("Attack on Titan")
        break
    case 5:
        console.log("One Punch Man") 
        break
    case 5:
        console.log("Spy x Family")
        break
    default:
        console.log("Invalid")
        break              
}



// ternary operator practice 

let num = -5;
// let result = (num % 2 === 0) ? "Even" : "Odd";
// console.log(result);


let result = (num > 0) ? "Positive" : (num<0) ? "Negative": "zero";
console.log(result)

