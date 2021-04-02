//Functions; Scope; Hoisting; Literals

// Literals
//represent values in JS that have been hardcoded

let butlerMascot = 'Bulldog'; //variables can be reassigned, but it's still hardcoded
let myAge = 27;
let arr = []


//Hoisting
//general way of thinking about how code creation and execution works in JS
//JS puts VARIABLE declarations and FUNCTION declarations into memory during compile phase of the code (they get loaded up first)
//let & const do not get hoisted, just functions and var

console.log(name);
var name = "Taylor"; //will log "undefined" bc loads declaration, not value
//declaration = value


sayHello();

function sayHello() {   //function declaration is hoisted
    console.log("This is a function declaration");   //function declaration - hoisted
}

let func = function() {
    console.log("This is a function expression");   //function expression  - NOT hoisted
}

//Scope
//hierarchy of variables in our code - global scope, local scope, parent scope, or child scope

let coffeeOrigin = 'Ethiopia';  //global scope

function exampleFunction() {
    let x = 'local scope - declared inside function'  //local scope
    console.log(x)
    console.log(coffeeOrigin)
}
exampleFunction();
//global scope can be accessed by local function scope
//local scope CANNOT be accessed by global scope
//(can access global scope inside function, but not local scope outside function)


//Functions
//block of code designed to perform a particular task
