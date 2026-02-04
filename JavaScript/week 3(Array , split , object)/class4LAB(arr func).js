// split function 

let myString = "jatin,kumar";
console.log(myString.split(''))

// har charcaters ko split kar dega given jo bhi hoga means ''(delimeter) yeh dia ek ek charcter ke paas aayega , j par aayega qand split kar dega 'j'

console.log(myString.split("q"))

// q ke basis pe split kr dega , means jatin ek string , and kumar ek string pe 

console.log(myString.split(",-"))

// (-) yeh nahi mila string mai toh puri string as it is aa gayi ek hi string mai 


console.log(myString.split("r"))

// aakhri mai 'r' hai kumar mai , and split ka mtlb ki uske left anfd right dono mai split karega toh r ke right mai kuch nahi hai toh empty string return kar dega 




// basically , jo bhi hum split mai denge us letter ki jagah left and right mai split akr dega and uska string bana dega and ek end mai array bana dega


// string --> when use split() --> returns always array --> type = object 







let myArr = [1, 2,3,4,5];

console.log(myArr.join())
console.log(myArr.join('-'))
console.log()







// trim function 

// agar "  jatin  " aise likha hai , and spaces ko hatana hai , and trim last and staring ki spaces hata deta hai 

let name = "   Jatin ";
console.log(name.trim())
