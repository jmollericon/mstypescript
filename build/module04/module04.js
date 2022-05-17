"use strict";
// Develop typed functions by using TypeScript
// *******************************************
// Create functions in TypeScript
// Named functions
function addNumbers(x, y) {
    return x + y;
}
addNumbers(1, 2);
// Anonymous functions
// ===================
// This example assigns a function expression to the variable addNumbers. Notice that function appears in place of the function name, making the function anonymous. You can now use this variable to call the function.
let addNumbersTwo = function (x, y) {
    return x + y;
};
addNumbersTwo(1, 2);
// This shows what the named function sum looks like when written as an anonymous function. Notice that the name add has been replaced with function and the function has been implemented as an expression in a variable declaration.
let total = function (input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
console.log(total([1, 2, 3]));
// Arrow functions
// ===============
// Anonymous function
let addNumbers1 = function (x, y) {
    return x + y;
};
// Arrow function
let addNumbers2 = (x, y) => x + y;
let total2 = (input) => {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
// Exercise - Create functions
// ===========================
function displayAlert(message) {
    alert("The message is " + message);
}
function sum(input) {
    let total = 0;
    for (let count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
// Fun with parameters
// ===================
// Required parameters
function addNumbersThree(x, y) {
    return x + y;
}
addNumbersThree(1, 2); // Returns 3
addNumbersThree(1); // Returns an error
// Optional parameters
function addNumbersFour(x, y) {
    if (y === undefined) {
        return x;
    }
    else {
        return x + y;
    }
}
addNumbersFour(1, 2); // Returns 3
addNumbersFour(1); // Returns 1
// Default parameters
function addNumbers(x, y = 25) {
    return x + y;
}
addNumbers(1, 2); // Returns 3
addNumbers(1); // Returns 26
// Rest Parameters
let addAllNumbers = (firstNumber, ...restOfNumbers) => {
    let total = firstNumber;
    for (let counter = 0; counter < restOfNumbers.length; counter++) {
        if (isNaN(restOfNumbers[counter])) {
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
};
// The function can now accept one or more values and return the result.
addAllNumbers(1, 2, 3, 4, 5, 6, 7); // returns 28
addAllNumbers(2); // returns 2
addAllNumbers(2, 3, "three"); // flags error due to data type at design time, returns 5
function displayMessage({ text, sender }) {
    console.log(`Message from ${sender}: ${text}`);
}
displayMessage({ sender: 'Christopher', text: 'hello, world' });
