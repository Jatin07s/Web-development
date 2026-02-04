function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// I want Higher order function and callback in this previous 4 functions :)

// purpose of using callback -> we want to make our code more reusable and modular


// abstraction -> hiding the implementation details and showing only the functionality to the user real life example -> we use mobile phone , we dont know how it works but we know how to use it , so mobile phone is a abstraction of the complex technology behind it

// using callback randomly 0 and 1 substring I want write , how can I do that ?

function calculate(num1,num2,operation){
  return (operation(num1,num2));
}
let a = calculate(10,5,substract);
console.log(a);







// another example of higher order function and callback

function parent(callback,num){
    return function(){
        return callback(num)
    }
        
}

// is code ka mtlb ->  parent function returns a function that when called, executes the callback with the given number. This is a higher-order function pattern where parent acts as a factory for functions that are pre-configured with a specific number.


