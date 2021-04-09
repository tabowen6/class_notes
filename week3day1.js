//Arrays and Objects
//temporary way to store data

//ARRAY
//high-level list-like object used to be traversed and mutated.
//indexed (numbered); start at 0
//can be accessed by bracket notation [index] or dot notation (method)
//last object at array length - 1

//Create an array
let british = ["Rolls Royce", "Bentley", "Caterham", "Aston Martin"];
console.log(british[0]);    //logs first element: Rolls Royce
console.log(british[british.length -1]);    //get last element when you don't know the length: Aston Martin


//Array Methods
//LENGTH
console.log(british.length);    //returns array length: 4
//PUSH
british.push('MINI');   //push adds item to end of an array
console.log(british);
//SPLICE
british.splice(0, 1, 'Jaguar'); //splice takes index to start, how many to remove, and what to replace it with
console.log(british);
//POP
british.pop();  //pop removes last element of array (empty parenthesis bc doesn't take parameters)
console.log(british);
//UNSHIFT
british.unshift("car", "another car"); //unshift adds elements to start of array
console.log(british);
//SHIFT
british.shift();    //shift removes first element of array
console.log(british);
//INDEX OF
console.log(british.indexOf("Jaguar")); //indexOf returns the index of a value (or -1 if not present)
console.log(british.indexOf("Jaguar", 2)); //can add second param to start looking at position 2 --> not present bc it's at position 1
//INCLUDES
console.log(british.includes("Jaguar"));    //includes determines whether array has specific element (true/false). Can add second param to select start index.


//Advanced array manipulations

let german = ["BMW", "Mercedes", "Audi", "Porsche", "Alpina", "VW"];

//FOR OF
for (cars of german){   //for OF gives you the elements
    console.log(cars);
}

//FOR EACH
//array.forEach() method runs a function for each element in an array
//most powerful array method!!!!

german.forEach(car => console.log(car));    //lists everything in array
//same as   (function(car){  console.log(car)  })   callback function

//MAP
//array.map() --> transforms elements in original array by callback function
//nondestructive, so doesn't modify original array --> creates new one
let germanUpperCase = german.map(car => car.toUpperCase()); //assign new array a variable so we can see it
console.log(germanUpperCase);

//FILTER
//array.filter --> creates a new array with elements that pass the test in a given function
console.log(german.filter(car => car.startsWith("A"))); //creates new array with just ['Audi', 'Alpina']
console.log(german.filter(car => car.startsWith("A") || car.startsWith("B")));  //['BMW', 'Audi', 'Alpina]


//OBJECTS
//Containers for values in a JSON format (JavaScript Object Notation).
//exists as a string
//has properties and methods
//  .property
//  .method()
//associative arrays (each property is associated with a string value)

//define JS object with an object literal

let car = {
    //key : value pair (properties) that are comma separated
    make: "Porsche",
    model: "911",
    country: "Germany",
    driver: "Walter Rohl",
}

//Accessing object values

console.log(car.make);  //access using key
console.log(car["model"]);  //access using object key
let returnKeys = Object.keys(car);  //returns keys in an array (make, model, country, driver)
console.log(returnKeys);
console.table(car); //console logs a table of an object

//Object property reassignment

car.make = "Maserati";
console.log(car.make);
console.table(car); //make is now "Maserati"
car["model"] = "GranTurismo S"; //another way to reassign
console.table(car); //changed model

//Object Constructor
//way to construct an object without having to hard code one in
let client = new Object;    //creates an empty object
console.log(client);

client.firstName = "Taylor";    //add things to object
client.lastName = "Bowen";
client.birthYear = 1993;
console.log(client);

//function inside object fuckery
let manager = {
    firstName: "Brad",
    lastName: "Titus",
    birthYear: 1990,
//     setAge: function(birthYear) {            first way to do it; requires parameter of birthYear from outside
//         return 2021 - birthYear
//     }
    // setAge: function() {
    //     return 2021 - this.birthYear        //second way to do it; takes property from this.birthYear
    // }
    setAge: function() {
        this.age = 2021 - this.birthYear        //third way to do it; creates new age property with value of function calculation once it has been called
    }
}
// console.log(manager.setAge())
manager.setAge()
console.log(manager.age)

//can't use arrow functions inside objects