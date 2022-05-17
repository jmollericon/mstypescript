function addNumbers(x: number, y: number) {
  return x + y;
}
console.log(addNumbers(3, 6));

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
