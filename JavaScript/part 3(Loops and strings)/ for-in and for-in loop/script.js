// for-of loop (for strings/arrays only )

let str = "JavaScript";
let size = 0;
for (let i of str) {
    console.log("i =" , i);
    size++

}
console.log("size of string =" , size);



// for-in loop (for object data type only )

// (key-value pair mai se only keys return krta hai )
let obj = {
    name : "Jatin",
    age : 20 ,
    class : "12th" , 
    isPass : true 

};

for (let j in obj) {
    console.log("key =" , j , "value =" , obj[j])
};