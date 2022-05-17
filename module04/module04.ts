// Develop typed functions by using TypeScript
// *******************************************

// Create functions in TypeScript

// Named functions
function addNumbers(x: number, y: number): number {
  return x + y;
}
addNumbers(1, 2);

// Anonymous functions

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
