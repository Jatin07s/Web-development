
// IF WE WANT TO SELECT A TAG BY ITS NAME/ID/CLASS THEN WE CAN USE THE FOLLWING METHODS :-


// Selecting with ID
//document.getElementById("myID");
let heading = document.getElementById("heading");
console.dir(headingold);
console.log(headingold);
// if the ID is not exist then it will return "null" in case of ID



//Selecting with Class
// document.getElementsByClassName("myClass");
let headings = document.getElementsByClassName("heading1");
console.dir(headings);
console.log(headings);
// if class is not exist in html code then it will return a empty list means 0 elements found like this 



//Selecting with TagName
let parah = document.getElementsByTagName("p");
console.dir(parah);
console.log(parah);


//ANOTHER METHOD TO SELECT :- querySelector
//document.querySelcetor("myID/myClass/tag");
//returns the first element

let elements = document.querySelector("p"); //1st element return
console.dir(elements)

let ele = document.querySelector(".myClass") // by class (return the first element)
console.dir(ele);

let damn = document.querySelector("#btn");
console.dir(damn);



// document.querySelectorAll(......);
// returns a NodeList :)

let AllEl = document.querySelectorAll("p");
console.dir(AllEl); // retuns all the "p" tags with NodeList(2)









// PROPERTIES (Very Important!!)

// 1) tagName = returns the tags for element nodes
console.log(damn.tagName); // or directly can do in console mode

// 2) innerText = returns the text content of the element and all its children

let div = document.querySelector("div");
console.dir(div);
console.log(div.innerText);
// inenrText mai content print hota hai 



// 3) innerHTML
console.log(div.innerHTML)
// innerHTML mai content toh aayega hi saath mai tags bhi aayenge means in which tag the content is store


// 4) textContent  = returns the content means hideen content bhi show kr dega
let hidden = document.querySelector("h2");
console.log(hidden.textContent);