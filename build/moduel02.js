"use strict";
// Boolean type
let flag;
let yes = true;
let no = false;
// Number and BigInteger types
let x;
let y = 0;
let z = 123.456;
// let big: bigint = 100n;
//String type
let s;
let empty = "";
let abc = 'abc';
let firstName = "Mateo";
let sentence = `My name is ${firstName}.
  I am new to TypeScript.`;
console.log(sentence);
// The enum type
// Creating an enum
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);
// Any type
let randomValue = 10;
randomValue = 'Mateo'; // OK
randomValue = true; // OK
console.log(randomValue.name); // Logs "undefined" to the console
randomValue(); // Returns "randomValue is not a function" error
randomValue.toUpperCase(); // Returns "randomValue is not a function" error
// Unknown type
let randomValue2 = 10;
randomValue2 = true;
randomValue2 = 'Mateo';
console.log(randomValue2.name); // Error: Object is of type unknown
randomValue2(); // Error: Object is of type unknown
randomValue2.toUpperCase(); // Error: Object is of type unknown
// Type assertion
let randomValue3 = 10;
randomValue3 = true;
randomValue3 = 'Mateo';
if (typeof randomValue3 === "string") {
    console.log(randomValue3.toUpperCase()); //* Returns MATEO to the console.
}
else {
    console.log("Error - A string was expected here."); //* Returns an error message.
}
// Type guards
/*
  string	    typeof s === "string"
  number	    typeof n === "number"
  boolean	    typeof b === "boolean"
  undefined	  typeof undefined === "undefined"
  function	  typeof f === "function"
  array	      Array.isArray(a)
*/
// Union and intersection types in TypeScript
// ==========================================
// Union types
let multiType;
multiType = 20; //* Valid
multiType = true; //* Valid
multiType = "twenty"; //* Invalid
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two')); //* Returns "onetwo"
console.log(add(1, 2)); //* Returns 3
console.log(add('one', 2)); //* Returns error
let newManager = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};
let myResult;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
myResult = "failure"; //* Invalid
let diceRoll;
diceRoll = 1; //* Valid
diceRoll = 2; //* Valid
diceRoll = 7; //* Invalid
// Collection types in TypeScript
// ==============================
// Arrays
// TypeScript, like JavaScript, allows you to work with arrays. Arrays can be written in one of two ways. In the first, you use the type of the elements followed by square brackets ([ ]) to denote an array of that element type:
let list = [1, 2, 3];
// The second way uses a generic Array type, using the syntax Array<type>
let list2 = [1, 2, 3];
// Tuples
let person1 = ['Marcia', 35];
// Try to add another item to the array. For example:
let person2 = ['Marcia', 35, true];
// Try switching the order of the items in the array. For example:
let person3 = [35, 'Marcia'];
// 
