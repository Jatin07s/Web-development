// Q1 Append a text to given tag 
let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " From you tube classes !";
// concatenate





// Q2 
let divs = document.querySelectorAll(".box");
console.log(divs);

divs[0].innerText = "Unique value 1";
divs[1].innerText = "Unique value 2";
divs[2].innerText = "Unique value 3";

// also with the loop it is possible biro :)

let idx = 1;
for (div of divs) {
    div.innerText = `unique value is ${idx}`;
    idx++;
}

