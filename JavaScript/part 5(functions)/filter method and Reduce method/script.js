// filter method = means ki yeh bhi newArr hi create krta hai ek ek element par hi iterate hota hai , bas difference yeh hai ki yeh condition deta hai gar woh element fulful kr rha hai toh woh un elements ko us new arr mai store krke woh newArr de dega 

// map = means newArr create kr dega jaisi chahte ho purane wali se 

// forEach = ek ek element ko iterate kr dega means for loop ki tarah har index par , but newArr nahi banata 



let numArr = [1,2,3,4,5,6];

let NewArr = numArr.filter((val) => {
    return val % 2 === 0;
});

console.log(NewArr);

// yeh ab ek newArr bana dega and usme 2,4,6 store kr dega cuz maine condition di hai 








//Reduce method = means ki agar list mai kaafi jyada inputs hai and agar humhe ek hi value output ki chaiye means ki un input ka kuch operation perform hone ke baad ek hi value chaiye then we use reduce emthod , ex ki agar list mai 1,2,3,4,5 dia hai and humhe sum chaiye ek hi value aayega so hum reduce use rkenge 


// format = arr.reduce(previous value , current value)


let arr = [1,2,3,4,5,6];
let result = 0 ;

const output = arr.reduce((result , current) => {
    // return result + current ; 
    return (result + current);
})

console.log(Math.floor(output / arr.length));


// easy man :)
// Math.floor = means value ko floor mai dega 
// arr.length = means arr ki total length kitni hai dega 


// lets see agar list dia hai and usme se largest digit nikalana hai how can we find that ? 

let a = [1,2,3,4,5,6];

const maxi = a.reduce((previous , current) => {
    return previous > current ? previous : current ;
})

console.log(maxi)