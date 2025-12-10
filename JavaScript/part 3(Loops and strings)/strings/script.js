// returns the length o a string
let str = "Jatin Kumar Singh";
console.log(str.length);


//for position 
let name = "delhi public school";
console.log(name[4]); 
// indexing starts from 0,1,2,3,4,.... 


//Template Literals
let sentence = `This is a special string`;
console.log(typeof(sentence));

// means = koi object hai and usko acceess krne ke liye helpful hai 
//exmplle

let obj = {
    name : "jatin",
    rank : "upper",
    age : 20
};

let output = ` the name is ${obj.name} and his rank is ${obj.rank} and his age is ${obj.age}`;
console.log(output)





// escape characters

console.log("Jatin\nKumar".length)
// \n = means next line mai kr dega(print nahi hoga and length mai 1 value add hoga means my name occupies 10 space and 1 space for \n)








//String Methds

// 1) str.toUpperCase()
let a = "hello bro"
console.log(a.toUpperCase())
// 2) str.toLowerCase()
let b = "HELOO BRO";
console.log(b.toLowerCase())
// 3) str.trim() = means only starting and ending whitespaces will remove , no middle space will be removed :)
let c = "   heloo       bhai      kya chal rha hai :)";
console.log(c.trim())


// 4) slice(starting ,ending) method ( means string ak part provide)
let d = "abcdefghijklmnopqrstuvwxyz";
console.log(d.slice(1,4));
// starts fron 0,1,2,3,... and 4 will not included 

//5) str1 + str 2 (conacatenate)

let e  = "jatin";
let f = "Kumar";
let result = e.concat(f);
// this is also corect let result = e + f
console.log(result)




// 6) replace method ek value ko doosre se badalna hai 
let g = "hello";

console.log(g.replace("l" , "z"));
// if to replace all charaters 
console.log(g.replaceAll("l" , "z"));


// 7) character at particular index
let h = "ILoveJS";
console.log(h.charAt(3));
