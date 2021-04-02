//Conditional statements - if, if else/else if, switch, ternary

//IF STATEMENTS
//Checks for a boolean value -- truthy or falsy
//truthy: if a condition is (or can be) true
//falsy: if condition is (or can be) false
//Some falsy expressions are: null, undefined, NaN (not a number), 0, an empty string (" ")

//if a condition is true, then JS will execute the code block
//every if checks one singular condition

//declare a variable
let isOpen = false;

//the condition to check is held in ( )
if (isOpen === true){
    //the code we perform if the condition is met is held in { }
    console.log('The door is open.');
}
//same as above, statement checks if the value in () is true
if (isOpen){
    console.log('The door is open.');
}

//Can also test false values
if (isOpen === false){
    console.log('The door is shut.');
}

//IF ELSE
//If else runs a code block for either the met condition or a separate code block if it doesn't meet the condition.

let isOpen = false;
if (isOpen){
    console.log('The door is open.');
} else {
    console.log('The door is closed.');
}

let temp = 70;
if (temp >= 65){
    console.log('Wow, what a nice day!');
} else {
    console.log('I need a sweater.');
}

//ELSE IF
//Else if allows us to check more than 2 conditions
//examples: day 2 challenge, fizzbuzz challenge

let temp = 68;
if (temp >= 80){
    console.log('Too hot!');
} else if (temp >= 65){
    console.log('This is t shirt weather.');
} else if (temp >= 50){
    console.log("You're gonna need a sweater.");
} else {
    console.log("I am not leaving my house.");
}


let username = 'myUsername';
let password = 'myPassword';

if (username === 'myUsername' && password === 'myPassword'){
    console.log(`Welcome back ${username}!`);
} else if (username === 'myUsername'){
    console.log('Your username is correct, but you have the wrong password.');
} else{
    console.log('You are not in our database. Would you like to sign up?');
}

//SWITCH STATEMENTS
//Execute a block of code depending on the "cases"; condition met? check against cases
//use case (condition): - starts code block
//break - to end the code
//Example - fizz buzz
//default - code to be ran if no cases are met; good practice to have

let favColor = 'black';

switch (favColor) {
    case 'blue':
        console.log('blue like the sky');
    break;
    case 'red':
        console.log('red like a rose');
    break;
    default:
        console.log(`${favColor} is beautiful, too.`);
}

let likePizza = 'duh';

switch (likePizza){
    case 'duh':
    case 'yes':
    case "yeah":
        console.log('me too!');
    break;
    case 'no':
    case 'nope':
    case 'nah':
        console.log('more for me');
    break;
    default:
        console.log('is that a yes or no?');
}

//TERNARY
//Concise way to check two (or more) conditions using the syntax of ? and :
//Structure:
//(condition) ? (code to run if true/truthy) : (code to run if false/falsy)

let temp = 70;
//ternary
(temp > 75) ? console.log('Indiana summer temps') : console.log('Indiana spring temps');
//instead of:
if (temp > 75){
    console.log('summer');
} else {
    console.log('spring');
}

let num = 23;
(num > 0) ? console.log('positive number') :
(num < 0) ? console.log('negative number') :
console.log('zero');


//LOOPS
//for loop - a quick way to iterate over something (do it repeatedly)
//infinite loops are possible (best to avoid) - CTRL + C to stop
//loops take in 3 parameters, each separated by a :
// 1) initial expression
// 2) condition
// 3) increment (or decrement) expression
//     1       2     3
for (i = 0; i < 10; i++){
    console.log(i);
}

for (i = 10; i >= 0; i--){
    console.log(i);
}

for (i = 0; i <= 20; i += 2){
    console.log(i);
}

//Printing each letter with a loop:
let word = 'fantastic';

for (let i = 0; i < word.length; i++){
    console.log(word[i]);   //square brackets give us the letter itself (value of index)
}