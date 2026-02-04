// for of loop (runs on iterable ie. strings , array)


let arr = [1,2,3,4,5,'jatin'];
for(let element of arr){
    console.log(element)
}


// we can't use for of loop on object (dictionary)
// ex 
const profile = {name:'Jatin'};
// for (let i of profile){
//     console.log(i)
// }

// => this will not run 

// to run on objects use for in loop

for (let i in profile){
    console.log(profile[`${i}`])
    // console.log(trypeof(profile[i]))
}


const object = {
    firstName : 'vaibhav'
}

// object.firstname , object["firstName"]



// iterating on object through for of loop 🔥
const name = {
    name:'Jatin',
    age : 10
}
let keys = Object.keys
let values = Object.values

console.log(keys,values)



// JSON = format to store the data , that is similar to the JS objects and arrays

const final = {
    age: 20,
    firsName : "jatin"
}

console.log(final,typeof(final))

const validJSONformat = JSON.stringify(final)
console.log(validJSONformat, typeof(validJSONformat))

// stringify = onject -> string mai convert
// output = { age: 20, firsName: 'jatin' } object
// {"age":20,"firsName":"jatin"} string

// wapas se string se main object mai jana hai toh 

const validJSON = JSON.parse(validJSONformat);
console.log(validJSON , typeof(validJSON));

// parse = convert a validJSON -> into 
// output = { age: 20, firsName: 'jatin' } object



// if we don't provide a valid JSON format to the then it will give error 
// let's see .... 

const one = JSON.stringify('jatin');
console.log(one)
// it will be valid means ab one = ab valid JSON bann gaya hai

console.log(JSON.parse(one));
// it will work (convert form string to object)



let prices = [
    {
        first:'j',
        last:'k'
    },
    {
        middle:'s'
    }
]

// array of object hai yeh 

// 1) way with for of

// for(let i of prices){
//     console.log(prices[])
// }
