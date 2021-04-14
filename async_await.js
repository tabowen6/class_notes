// Asynchronous JS Functions
/*      -returns a Promise
        -await makes function wait for a Promise
*/

function standardFunction() {       //function declaration (expression uses variable)
    return "This is a standard function."
}
standardFunction();

async function asyncFunction() {
    return "This returns a promise."
}
asyncFunction()
// async function asyncFunction() {
//     return Promise.resolve("This is resolved")      //can also do .reject
// }

async function asyncAction() {
    setTimeout(() => {
        console.log("Async finally hit yo!")
    }, 3000);
}

asyncAction()


// Promise
/*
Commit to something
    -completed --> resolved
    -rejected
*/

let p = new Promise((resolve, reject) => {
    //Promise object with one function with resolve & reject parameters
    let a = 1 + 1
    if (a === 2) {
        resolve("Promise sucessful and Resolved")
    } else {
        reject("Promise rejected")
    }
})

p.then((message) => {
    //anything inside .then is a resolve
    console.log(`This is the .then(). ${message}`)
}).catch((message) => {
    //anything inside .catch is a reject state
    console.log(`This is the .catch(). ${message}`)
})


//Try, Catch, Throw, and Finally

try {
    //tests a block of code
    console.log("Start of the try")
} catch(err) {
    //handles the error
    console.log("Error has occured " + err)
} finally {
    //executes the code after try/catch, regardless of the result
    console.log("Finally ALWAYS runs")
}


//Custom Errors

let json = '{"age": 30}'

try {
    let user = JSON.parse(json)
    if (!user.name) {   //if user.name not true,
        throw new SyntaxError("Incomplete data: no name")
    }
} catch(e) {        // e is error
    console.log(`JSON Error: ${e}`)
}

function upperCase(name) {
    if (typeof name !== "string") {
        throw new TypeError("Name must be a string")
    }
    return name.toUpperCase();
}

console.log(upperCase("Paul"))  //PAUL