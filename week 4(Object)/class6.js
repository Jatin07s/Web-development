let student = {
    name : 'Vansh',
    age : 19,
    address : 'Sonipat'
};
console.log(student.length)
// => undefined
// if I want to find the length of an object

// Object.keys() = method to find the keys of an object and return an array of keys
let keys = Object.keys(student);
console.log(keys); // [ 'name', 'age', 'address' ]
console.log(keys.length); // 3

// Object.values() = method to find the values of an object and return an array of values
let values = Object.values(student);
console.log(values); // [ 'Vansh', 19, 'Sonipat' ]
console.log(values.length); // 3





let obj = {
    a: 1,
    b: 2,
    c: 3
};

let a = Object.keys(obj);
// a = ['a', 'b', 'c']
console.log(a);
let b = Object.values(obj);
// b = [1, 2, 3]
console.log(b);

// to find length of object
console.log(a.length); // 3
console.log(b.length); // 3


// another way to find the length of an object by using for in loop
let count = 0;
for(let key in obj){
    count++;
}
console.log(count); // 3



// If I want to make an array like this = [['a', 1], ['b', 2], ['c', 3]]
// Object.entries() = method to return key-value pair array
let keyValuePairs = Object.entries(obj);
console.log(keyValuePairs); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// now iterate over keyValuePairs array
for(let pair of keyValuePairs){
    console.log(`key is ${pair[0]} and value is ${pair[1]}`);
}
// array mai 2 value hai , for of mai 2 variables lene padenge 
// or using destructuring
for(let [key, value] of keyValuePairs){
    console.log(`key is ${key} and value is ${value}`);
}

for(let pair of keyValuePairs){
    console.log(`key is ${pair[0]} and value is ${pair[1]}`);
}    




// Destructuring Object 
let arr = {
    student1 : 'Vansh',
    student2 : 'Jatin',
    student3 : 'Vaibhav'
}

let {student1,student2} = arr;
console.log(student1);

// iska use kya hoga = agar humare object mai bahut saare keys hai
// or hume sirf kuch keys ki value chahiye
// to hum destructuring ka use kar sakte hai

// let {student1 : s1 , student2 : s2} = arr;
// console.log(s1);
// console.log(s2); 
// means student1 ki value ko s1 mai store kar di and student2 ki value ko s2 mai store kar di



// Array ko destructure karna
let array = [[1,2,3],2,3,4,5];
let [a1,a2,a3,a4,a5] = array;
console.log(a1[2]);


// Array ki copy ya 2 array ko merge karna hai (copy,merge)
let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = {
    name : 'jatin',
    age : 20,
    address : 'sonipat'
}

// copy (spread operator)
let copy = {...array3,
    marks : 90
};
console.log(copy);
console.log(array3);

// merge
let mergeArr = [...array1,...array2];
console.log(mergeArr);

// [...] Rest operator = to take rest of the elements
let [first,second,...hello] = mergeArr;
console.log(first);
console.log(second);
console.log(hello);






let user = {
    id : 1,
    name : 'Vansh',
    age : 19,
    password : 'abcd1234'
}

const { password,age,name,id, ...rest} = user;
console.log(password); // abcd1234
console.log(rest); // { id: 1, name: 'Vansh', age: 19 }


// differnce btw rest and spread operator
// rest = used in destructuring to take rest of the elements
// spread = used to copy or merge arrays/objects




let user1 = {
    id : 1,
    name : 'Vansh',
    password : 'abcd1234'
}
let {name1, ...rest1} = user;
console.log(name1,rest1);






function calculate(sign, ...numbers){
    let sum = 0;
    for(let num of numbers){
        sum = sum + num;
    }
    if (sign === 'add'){
        return sum;
    }
}
calculate('add',1,2,3,4,5); // 15
// rest operator = to take rest of the elements
// spread operator = to copy or merge arrays/objects