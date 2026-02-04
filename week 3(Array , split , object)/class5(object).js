// students ka list array store karna hai name , age , marks nd all.... 
let students = ['Amit' , 19 , 90]
// this is not the right way to store 


// alag alag variables mai stroe can be
let studentsName = 'Amit';
let studetnAge = 19;
let studentMarks = 90;

// isme kaafi variables bann jaenge , and also store more space 

// so best way to store like these data in "Object"




// OBJECT = key : value form mai store hoga ( key mai - [name] , value mai - ['Amit'])

// let name = {name : "Amit"
//              age : 19
//             marks: 90 }

// key is - string but in object mai 'name' aise nahi likhna hota , normally name likh skate hai key always is in string either number or marks 

let studentData = { 
    name : 'Amit',
    age : 19 ,
    marks : 90,
    isPass : true,
    "pass or fail" : false
}
console.log(studentData)

// dot notation - individual data chaiye one by one so ( dot notation ) -> (objectName.key())
console.log(studentData.name)


// bracket notation - ke thorugh bhi fetch - array ko jaise fetch krte the isme [] lagake string mai key ko likhna hoga (and sabhi keys string mai hi aayengi)
console.log(studentData['age'])


// object mai key hai = 'pass or fail' isko dot notation se nahi kar paenge , agar string mai likhi hai proper toh bracket notation se hi access karna hoga
console.log(studentData["pass or fail"])



// more features of object

let captainAmerica = {
    name : 'Steve Rogers',
    age : 130 ,
    allies : ['Tony' , 'bucky' , 'Natasha'],
    
    // address store krne ke liye object banana padega ab key:value mai stroe karna hoga
    // nested object create
    address : {
        country : "USA",
        city : {
            cityName : 'Brooklyn',
            pin : 12345
        }

    },
    // we can create a function too inside an array
    // ${this.name} = yeh normal function mai kaam karta hai , means object ke andar access karne liye 'this' ka use krna hota hai (arrow function ko object mai bana hi nahi sakte never and never and usme this ka use kaise bhi nahi kar sakte)
    captainSayHi : function(){
        console.log(`${this.name} say Hello India`)
    },

    isAvengers : true
}

// object mai har data type ko store kar sakte hai (key:value) form mai 

console.log(captainAmerica);

// name fetch karna hai agar toh 
console.log(captainAmerica.name)

// city name kya hai ftech karna hai 
// by dot notation
console.log(captainAmerica.address.city.cityName)
// by bracket notation
console.log(captainAmerica['address']['city']['cityName'])

// function call inside the object key ko func name consider kr lega and call karna hoga
captainAmerica.captainSayHi()



// CRUD = Create(new data create) Read(object mai read) Update(purane data ko update kar pa rhe hai kya) Delete(Kya delete kar pa rhe hai kya)

// yeh CRUD factors sab hona chaiye project mai - best approach 


// now if we want to create so 
// movies list karni hai captain america wali object mai (but manual mai nahi , create karna hai)

// CREATE a new key:value

captainAmerica.movie = ['Civil war' , 'Endgame' , 'Infinity war'];
console.log(captainAmerica)



// UPDATE 
// key ko update karna hai , age ko 135 se 140 karna hai 
captainAmerica.age = 140;
console.log(captainAmerica)

// DELETE
// key ko delete karna hai isAvenger: true ko delete karna hai 
delete captainAmerica['isAvengers']
// delete captainAmerica.isAvengers
console.log(captainAmerica)