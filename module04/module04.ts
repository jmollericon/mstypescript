// Develop typed functions by using TypeScript
// *******************************************

// Create functions in TypeScript

// Named functions
function addNumbers(x: number, y: number): number {
  return x + y;
}
addNumbers(1, 2);

// Anonymous functions
// ===================

// This example assigns a function expression to the variable addNumbers. Notice that function appears in place of the function name, making the function anonymous. You can now use this variable to call the function.
let addNumbersTwo = function (x: number, y: number): number {
  return x + y;
};
addNumbersTwo(1, 2);

// This shows what the named function sum looks like when written as an anonymous function. Notice that the name add has been replaced with function and the function has been implemented as an expression in a variable declaration.
let total = function (input: number[]): number {
  let total: number = 0;
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
let addNumbers1 = function (x: number, y: number): number {
  return x + y;
};

// Arrow function
let addNumbers2 = (x: number, y: number): number => x + y;

let total2 = (input: number[]): number => {
  let total: number = 0;
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

function displayAlert(message: string | number) {
  alert("The message is " + message);
}

function sum(input: Array<number>) {
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

function addNumbersThree(x: number, y: number): number {
  return x + y;
}

addNumbersThree(1, 2); // Returns 3
addNumbersThree(1); // Returns an error

// Optional parameters
function addNumbersFour(x: number, y?: number): number {
  if (y === undefined) {
    return x;
  } else {
    return x + y;
  }
}

addNumbersFour(1, 2); // Returns 3
addNumbersFour(1); // Returns 1

// Default parameters
function addNumbers(x: number, y = 25): number {
  return x + y;
}

addNumbers(1, 2); // Returns 3
addNumbers(1); // Returns 26

// Rest Parameters
let addAllNumbers = (
  firstNumber: number,
  ...restOfNumbers: number[]
): number => {
  let total: number = firstNumber;
  for (let counter = 0; counter < restOfNumbers.length; counter++) {
    if (isNaN(restOfNumbers[counter])) {
      continue;
    }
    total += Number(restOfNumbers[counter]);
  }
  return total;
};
// The function can now accept one or more values and return the result.
addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
addAllNumbers(2);                    // returns 2
addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5


// Deconstructed object parameters

interface Message {
  text: string;
  sender: string;
}

function displayMessage({text, sender}: Message) {
  console.log(`Message from ${sender}: ${text}`);
}

displayMessage({sender: 'Christopher', text: 'hello, world'});

// Exercise - Fun with parameters
// ==============================

// Required parameters
let addThreeNumbers = (x: number, y: number, z: number): number => x + y + z;

addThreeNumbers(10, 20);          // TypeScript raises the error Expected 3 arguments but got 2. An argument for 'z' was not provided
addThreeNumbers(10, 20, 30, 40);  // TypeScript raises the error Expected 3 arguments but got 4.

// Optional parameters
let addThreeNumbersTwo = (x: number, y: number, z?: number): number => {
  if((z === undefined)) {
      return x + y;
  } else {
      return x + y + z;
  }
};
addThreeNumbersTwo(10, 20)
addThreeNumbersTwo(10, 20, 30)


// Default parameters
// Enter the following arrow function, which accepts three required parameters.
let subtractThreeNumbers = (x: number, y: number, z: number): number => x - y - z;
// Assign a default value of 100 to the z parameter by replacing z: number with z = 100.
let subtractThreeNumbersTwo = (x: number, y: number, z = 100): number => x - y - z;
// Try calling the function with two and three arguments to test the result.
subtractThreeNumbersTwo(10, 20);       // returns -110 because 'z' has been assigned the value 100
subtractThreeNumbersTwo(10, 20, 15);   // returns -25


// Exercise - Define function types
// ================================

type calculator = (x: number, y: number) => number;

let addNumbersFive: calculator = (x: number, y: number): number => x + y;
let subtractNumbers: calculator = (x: number, y: number): number => x - y;

console.log(addNumbersFive(1, 2));
console.log(subtractNumbers(1, 2));

let doCalculation = (operation: 'add' | 'subtract'): calculator => {
  if (operation === 'add') {
    return addNumbersFive;
  } else {
    return subtractNumbers;
  }
}

console.log(doCalculation('add')(1, 2))

interface Calculator {
  (x: number, y: number): number;
}

let addNumbersFiveI: Calculator = (x: number, y: number): number => x + y;
let subtractNumbersI: Calculator = (x: number, y: number): number => x - y;

console.log(addNumbersFiveI(1, 2));
console.log(subtractNumbersI(1, 2));

let doCalculationI = (operation: 'add' | 'subtract'): Calculator => {
  if (operation === 'add') {
    return addNumbersFiveI;
  } else {
    return subtractNumbersI;
  }
}

console.log(doCalculationI('add')(1, 2))

// Function type inference
// When defining a function, the names of the function parameters do not need to match those in the function type. While you are required to name the parameters in the type signature in both places, the names are ignored when checking if two function types are compatible.
// You can also leave off the parameter types and return type because TypeScript will infer these from the function type.
// As far as TypeScript is concerned, these three statements are identical.
let addNumbersSix: Calculator = (x: number, y: number): number => x + y;
let addNumbersSeven: Calculator = (number1: number, number2: number): number => number1 + number2;
let addNumbersEight: Calculator = (num1, num2) => num1 + num2;
