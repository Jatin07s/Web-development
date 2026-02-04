// ARRAY 

// let num = 5;

// to store 10 also in the same variable (num)
// we can't store , cuz its primitive data type (number)


// TO STORE/ADD VALUES IN A GIVEN VARIABLE !!!!





// ARRAY 😎 (in the form of list single variable mai store) - store any kind of data

let arr = [5,10,'Jatin',true,null,undefined,[1,2,3]]
console.log(typeof(arr[5]))    // typeof , particular element in that array
console.log(arr.length)        // length find = 7         







for (let i = 0 ; i<arr.length ; i++){
    console.log(arr[i])             // iterating one by one element through array
}                                      // starting and ending point hum decide kar sakte hai







// agar value chaiye , index se lena dena na ho tab
// for of loop lagaenge

for (let x of arr ){
    console.log(x)              // let x(value) of array
}                               // isme starting and ending set nahi kar sakte , means sab ke sab elements ko print kar dega 


let str = ("jatin")
for(let value of str){
    console.log(value)
}




// removing elements from an array methods 
// push , pop , shift , unshift

let numm = [1,2,3,4,5]
console.log(numm)

// PUSH  add 6 (end mai)
numm.push(6)
console.log(numm)           // PUSH = at the end of the array mai element add ho jata hai 



// POP remove last element from arr
numm.pop()
console.log(numm)            // by default last value ko remove kar dega , no to put the value in pop


// UNSHIFT agar 0 index par add karta hai (starting mai)
numm.unshift(0)
console.log(numm)               // means add kar dega 0th index pe , and aage badha dega array ko


// SHIFT remove element at 0th index
numm.shift()
console.log(numm)





// agar randomly kisi index mai remove/add karna hai then how we can do 
// method = slice (particualar part we will get from an array) (not modify the origianal array)

// num.slice(starting index  , ending index)
numm.slice()
// console.log(numm)           // original array ko slice ya change nahi karega , ek variabel mai us slice ko store karna hoga

let numSlice = numm.slice(2,4)          // ending index exclusive hota hai ( means usse ek pehele element tak de dega)
console.log(numSlice)



// splice = original array mai hi change ho jaye (orignal arry ko hi modufy kar dega)
numm.splice(2,4)
console.log(numm)





// random check (whether this element is this present in the array or not)
// includes method = pata chal jaega ki yeh elemenet hamare array mai hai ya nahi 
let grp = [1,2,3,4,5]
console.log(grp.includes(5))            // true ya false deta hai means ya toh element hai ya nahi 





// SORTING = ascending/descending 

let name = ['namam' , 'kunal' , 'ritam']

// expected result = 'kunal' > 'naman' > 'ritam'
name.sort()
console.log(name)





let numbers = [2,-1,1,0,5,4]
//numbers.sort()          // WORK nahi karega (numbers ke saath , string ke saath kr dega)

// ascending order chaiye = (a,b) => a-b
// descending order chaiye = (a,b) => b-a

let asc = numbers.sort((a,b) => a-b)          // ascending order mai chalega
console.log(asc)

let dec = numbers.sort((a,b) => b-a)
console.log(dec)                           // descending order mai chalega



// string mai direct sort() se ascending value mai print ho jaega
// numbers mai asc(a-b) or dec(b-a) karna hoga then print





// IMPORTANT EXAMPLE 🔥
let ran = [1,2,3,4]
let rans = ran.push(6)
console.log(rans)               // isme yeh PUSH method original array mai change karta hai agar variable mai sotre krke aise kia toh length of the array return kar deta hai ( na ki array dega)





// METHOD
// join() method
let b = ['jatin' , 'aman']
let c = b.join('-')
console.log(c)              // variable mai store kar denge , and string of array ko ek string bananke jo join mai likha hai uske saath add kar dega