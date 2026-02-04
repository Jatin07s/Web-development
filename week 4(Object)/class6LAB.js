/// ... -> rest/spread operator 


/// ... using with function parameters is called rest operator
function getName(firstname,lastname, ...otherInfo){
    console.log(firstname);
    console.log(lastname);
    console.log(otherInfo);
}
getName('Jatin','Kumar',20,'Sonipat');

// rest operator mtlb => jo bacha hua elements hai unhe ek array mai store kar do
// agar rest ko starting mai parameter ki tarah use kia toh error aayega , cuz woh starting mai hi sab kuch de dega , toh doosre parameter k liye kuch bacha hi nahi rahega
// example -
// function getInfo(...otherInfo,firstname,lastname){ // error
//     console.log(firstname);
//     console.log(lastname);
//     console.log(otherInfo);
// }
// getInfo(20,'Jatin','Kumar');



// Delete keyword 
let obj = {
    name : 'Jatin',
    age : 20,
    address : 'Sonipat'
}

delete obj["name"];
console.log(obj);