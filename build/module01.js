"use strict";
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(3, 6));
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
//randomValue();                  // Returns "randomValue is not a function" error
//randomValue.toUpperCase();      // Returns "randomValue is not a function" error
// Unknown type
let randomValue2 = 10;
randomValue2 = true;
randomValue2 = 'Mateo';
// console.log(randomValue2.name);  // Error: Object is of type unknown
// randomValue2();                  // Error: Object is of type unknown
// randomValue2.toUpperCase();      // Error: Object is of type unknown
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
