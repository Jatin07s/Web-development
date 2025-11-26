alert("Hello world!");
// this alert will show a popup with the message "Hello world!" when the script is run.


console.log("Hello World");
// this will log the message "Hello World" to the browser's console.
// it is like print statement in other programming languages.

var a = prompt("Enter a numebr : ");
// it means ki a user se ek input lega aur usse variable 'a' me store karega.
// console.log(a);
// this will log the value of 'a' to the console, which is the input provided by the user.

console.log("Your number is : " + a);
// this will log the message "Your number is : " followed by the value of 'a' to the console.


// use of node.js - means ki we can on terminal and run javascript code without browser.
// but in Node.js we don't have prompt and alert functions available by default, as they are part of the browser environment.
// so to take input from user in Node.js, we can use the 'readline' module.

// jo jo commands chal skti hai uske liye I will create a new js file to run commands on terminal using node.js