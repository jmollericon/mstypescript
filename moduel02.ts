// Boolean type
let flag: boolean;
let yes = true;
let no = false;

// Number and BigInteger types
let x: number;
let y = 0;
let z: number = 123.456;
// let big: bigint = 100n;

//String type
let s: string;
let empty = "";
let abc = 'abc';

let firstName: string = "Mateo";
let sentence: string = `My name is ${firstName}.
  I am new to TypeScript.`;
console.log(sentence);

// The enum type

// Creating an enum
enum ContractStatus {
  Permanent = 1,
  Temp,
  Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);

// Any type
let randomValue: any = 10;
randomValue = 'Mateo';   // OK
randomValue = true;      // OK

console.log(randomValue.name);  // Logs "undefined" to the console
//randomValue();                  // Returns "randomValue is not a function" error
//randomValue.toUpperCase();      // Returns "randomValue is not a function" error

// Unknown type
let randomValue2: unknown = 10;
randomValue2 = true;
randomValue2 = 'Mateo';

// console.log(randomValue2.name);  // Error: Object is of type unknown
// randomValue2();                  // Error: Object is of type unknown
// randomValue2.toUpperCase();      // Error: Object is of type unknown

// Type assertion
let randomValue3: unknown = 10;

randomValue3 = true;
randomValue3 = 'Mateo';

if (typeof randomValue3 === "string") {
    console.log((randomValue3 as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
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
