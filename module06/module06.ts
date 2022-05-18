// Define generics in TypeScript
// *****************************

// Introduction
// While generics are supported by many programming languages, including TypeScript, they're not currently available in JavaScript. So, for some JavaScript coders, generics are a mystery. Now that you're well on your way to being a TypeScript coder, let's unlock the mysteries of generics and add these useful tools to your programming toolkit.

// Introduction to generics
// ========================
/**
 * In earlier modules in the Build JavaScript applications by using TypeScript learning path, you learned how to apply type annotations to your interfaces, functions, and classes to create strongly typed components. But what if you want to create a component that can work over a variety of types rather than just one? You could use the any type, but then you lose the power behind the TypeScript type checking system.
 *
 * Generics are code templates that you can define and reuse throughout your codebase. They provide a way to tell functions, classes, or interfaces what type you want to use when you call it. You can think about this in the same way that arguments are passed to a function, except a generic enables you to tell the component what type it should expect at the time it's called.
 * Create generic functions when your code is a function or class that:
 *
 * Works with a variety of data types.
 * Uses that data type in several places.
 * Generics can:

 * Provide more flexibility when working with types.
 * Enable code reuse.
 * Reduce the need to use the any type.
 */

// Why use generics?

/**
 * To understand why you might use generics, it's helpful to see an example.
 * The getArray function generates an array of items of any type.
 */

function getArray(items : any[]) : any[] {
  return new Array().concat(items);
}

/**
 * Then, the numberArray variable is declared by calling the getArray function, passing to it an array of numbers, and the stringArray variable is declared with an array of strings. However, because the any type is used, there's nothing preventing the code from pushing a string to the numberArray or a number to the stringArray.
 */

let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
numberArray.push(25);                       // OK
stringArray.push('Rabbits');                // OK
numberArray.push('This is not a number');   // OK
stringArray.push(30);                       // OK
console.log(numberArray);                   // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray);                   // ["Cats", "Dogs", "Birds", "Rabbits", 30]

/**
 * What if you want to determine the type of the values that the array will contain when you call the function and then have TypeScript do the work of type checking the values that you pass to it to ensure they are of that type? This is where generics come into play.
 * This example rewrites the getArray function using generics. It can now accept any type that you specify when calling the function.
 */

function getArrayGeneric<T>(items : T[]) : T[] {
  return new Array<T>().concat(items);
}

/**
 * Generics define one or more type variables to identify the type or types that you will pass to the component, enclosed in angle brackets (< >). (You'll also see type variables referred to as type parameters or generic parameters.) In the example above, the type variable in the function is called <T>. T is a commonly used name for a generic, but you can name it however you wish.
 * After you specify the type variable, you can use it in place of the type in parameters, the return type, or anywhere else in the function that you would add a type annotation.
 * ...
 * The type variable T can be used wherever the type annotation is needed. In the getArray function, it is used to specify the type for the items parameter, the function return type, and to return a new Array of items.
 * To call the function and pass a type to it, append <type> to the function name. For example, getArray<number> instructs the function to only accept an array of number values and return an array of number values. Because the type has been specified as a number, TypeScript will expect that number values will be passed to the function and will raise an error if it's something else.
 */

// In this example, with the variable declarations for numberArrayGeneric and stringArrayGeneric updated to call the function with the desired type, TypeScript prevents the invalid items from being added to the array.


let numberArrayGeneric = getArrayGeneric<number>([5, 10, 15, 20]);
numberArrayGeneric.push(25);                      // OK
numberArrayGeneric.push('This is not a number');  // Generates a compile time type check error

let stringArrayGeneric = getArrayGeneric<string>(['Cats', 'Dogs', 'Birds']);
stringArrayGeneric.push('Rabbits');               // OK
stringArrayGeneric.push(30);                      // Generates a compile time type check error

// Using multiple type variables

/**
 * You are not limited to using a single type variable in your generic components.
 * For example, the identity function accepts two parameters, value and message, and returns the value parameter. You can use two generics, T and U, to assign different types to each parameter and to the return type. The variable returnNumber is initialized by calling the identity function with <number, string> as the types for the value and message arguments, returnString is initialized by calling it with <string, string>, and returnBoolean is initialized by calling it with <boolean, string>. When using these variables, TypeScript can type check the values and return a compile-time error if there is a conflict.
 */

function identity<T, U> (value: T, message: U) : T {
  console.log(message);
  return value
}

let returnNumber = identity<number, string>(100, 'Hello!');
let returnString = identity<string, string>('100', 'Hola!');
let returnBoolean = identity<boolean, string>(true, 'Bonjour!');

returnNumber = returnNumber * 100;   // OK
returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'

// Use the methods and properties of a generic type
// ================================================

/**
 * When using type variables to create generic components, you may only use the properties and methods of objects that are available for every type. This prevents errors from occurring when you try to perform an operation on a parameter value that is incompatible with the type that's being passed to it.
 * If you add the statement let result: T = value + value to the identity function, TypeScript raises the error The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type because it doesn't know what value will be passed to it at runtime. If you were to pass a non-numeric value, the expression would generate an error, so TypeScript makes you aware of the problem at compile time.
 */

function identity2<T, U> (value: T, message: U) : T {
  let result: T = value + value;    // Error
  console.log(message);
  return result
}

// Using generic constraints to limit types

/**
 * The identity function can accept any type that you choose to pass to the type variables. But, in this case, you should constrain the types that the value parameter can accept to a range of types that you can perform an add operation on, rather than accepting any possible type. This is called a generic constraint.
 * There are several ways to do this depending on the type variable. One way is to declare a custom type as a tuple and then extend the type variable with the custom type. The following example declares ValidTypes as a tuple with a string and a number. Then, it extends T with the new type. Now, you can only pass number or string types to the type variable.
 */

type ValidTypes = string | number;

function identity3<T extends ValidTypes, U> (value: T, message: U) : T {
  let result: T = value + value;    // Error
  console.log(message);
  return result
}

let returnNumber3 = identity3<number, string>(100, 'Hello!');      // OK
let returnString3 = identity3<string, string>('100', 'Hola!');     // OK
let returnBoolean3 = identity3<boolean, string>(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.

/**
 * You can also constrain a type to the property of another object. This example uses extends with the keyof operator, which takes an object type and produces a string or numeric literal union of its keys. Here, K extends keyof T, ensuring that the key parameter is of the correct type for type assigned to pet.
 */

function getPets<T, K extends keyof T>(pet: T, key: K) {
  return pet[key];
}

let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish"}

console.log(getPets(pets1, "fish"));  // Returns 6
console.log(getPets(pets2, "3"));     // Error

// You'll learn more about using generic constraints with classes later in this module.

// Using type guards with generics

/**
 * You'll notice that TypeScript still raises an issue with the value + value expression in the identity function. But now you know that only number and string types can be passed to the function.
 * You can use the typeof type guard in an if block to check the type of the value parameter before performing an operation, as shown in the following example. TypeScript can determine from the if statement if the operation will work with the values provided within the block.
 */

type ValidTypes4 = string | number;
function identity4<T extends ValidTypes4, U> (value: T, message: U) {   // Return type is inferred
  let result: ValidTypes4 = '';
  let typeValue: string = typeof value;

  if (typeof value === 'number') {         // Is it a number?
    result = value + value;                // OK
  } else if (typeof value === 'string') {  // Is it a string?
    result = value + value;                // OK
  }

  console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);

  return result
}

let numberValue = identity4<number, string>(100, 'Hello');
let stringValue = identity4<string, string>('100', 'Hello');

console.log(numberValue);       // Returns 200
console.log(stringValue);       // Returns 100100

// Exercise - Implement generics with interfaces and classes
// =========================================================

/**
 * Generics are just a way to pass types to a component, so you can not only apply native types to generic type variables, but also interfaces, functions, and classes. In this unit, you'll see some different ways to use generics with these complex types.
 * Try using generics with interfaces, functions, and classes. All the code samples perform essentially the same tasks using different approaches.
 */

// Declare a generic interface
// ***************************
// Declare a simple interface called Identity that has two properties, value and message, and two generic type variables, T and U, for the property types.
interface Identity<T, U> {
  value: T;
  message: U;
}

// Declare two variables, using the Identity interface as an object type.
let returnNumberE: Identity<number, string> = {
  value: 25,
  message: 'Hello!'
}
let returnStringE: Identity<string, number> = {
  value: 'Hello!',
  message: 25
}

// Declare a generic interface as a function type
// **********************************************

// Declare a generic interface called ProcessIdentity that includes the generic signature of a method, (value: T, message: U): T. Notice that the method doesn't have a name. By doing this, you can apply it to any function with a matching type signature.
interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}

// Declare a function called processIdentity that has the same type signature as the ProcessIdentity interface.
function processIdentity<T, U> (value: T, message: U) : T {
  console.log(message);
  return value
}

// Declare a function type variable called processor with the ProcessIdentity interface as the variable type, passing in number for the T type and string for the U type. Then, assign the processIdentity function to it. You can now use this variable as a function in your code and TypeScript will verify the types.
let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, 'Hello!');   // OK
let returnString1 = processor('Hello!', 100);   // Type check error

// Declare a generic interface as a class type
// *******************************************

// Declare an interface called ProcessIdentity that has two properties, value and message, and two generic type variables, T and U, for the property types. Then, add a generic signature of a method called process that returns a value of type T.
interface ProcessIdentity<T, U> {
  value: T;
  message: U;
  process(): T;
}

// Define a generic class called processIdentity that implements the ProcessIdentity interface. In this case, name the variable types in the processIdentity class X and Y. You can use different variable names in the interface and the class because the type value propagates up the chain and the variable name doesn't matter.
class processIdentity<X, Y> implements ProcessIdentity<X, Y> {
  value: X;
  message: Y;
  constructor(val: X, msg: Y) {
      this.value = val;
      this.message = msg;
  }
  process() : X {
      console.log(this.message);
      return this.value
  }
}

// Declare a new variable and assign a new processIdentity object to it, passing in number and string for the X and Y variable types, and a number and string as the argument values.
let processor2 = new processIdentity<number, string>(100, 'Hello');
processor2.process();           // Displays 'Hello'
processor2.value = '100';       // Type check error

// Define a generic class
// **********************

// You can also declare a generic class without an interface. This example declares processIdentity as a generic class without implementing the ProcessIdentity interface.

class processIdentity2<T, U> {
  private _value: T;
  private _message: U;
  constructor(value: T, message: U) {
      this._value = value;
      this._message = message;
  }
  getIdentity() : T {
      console.log(this._message);
      return this._value
  }
}
let processor3 = new processIdentity2<number, string>(100, 'Hello');
processor3.getIdentity();      // Displays 'Hello'

// Implement generics with custom types and classes
// ================================================

/**
 * Using generics with primitive types, like number, string, or boolean, illustrate the concepts of generics well, but the most powerful uses come from using them with custom types and classes.
 * This example has a base class called Car and two subclasses, ElectricCar and Truck. The accelerate function accepts a generic instance of Car and then returns it. By telling the accelerate function that T must extend Car, TypeScript knows which functions and properties you can call within the function. The generic also returns the specific type of car (ElectricCar or Truck) passed into the function, rather than a non-specific Car object.
 */

class CarGC {
  make: string = 'Generic CarGC';
  doors: number = 4;
}
class ElectricCarGC extends CarGC {
  make = 'Electric CarGC';
  doors = 4
}
class Truck extends CarGC {
  make = 'Truck';
  doors = 2
}
function accelerate<T extends CarGC> (car: T): T {
  console.log(`All ${car.doors} doors are closed.`);
  console.log(`The ${car.make} is now accelerating!`)
  return car
}

let myElectricCar = new ElectricCarGC;
accelerate<ElectricCarGC>(myElectricCar);
let myTruck = new Truck;
accelerate<Truck>(myTruck);

// The output to the console is:

/**
 * "All 4 doors are closed."
 * "The Electric Car is now accelerating!"
 * "All 2 doors are closed."
 * "The Truck is now accelerating!"
 */

// Using generic constraints with custom types and classes
// *******************************************************

/**
 * Earlier in the module, you learned how to use generic constraints to limit types. Generic constraints can not only be applied to native types, but also to classes.
 * You can do this by defining an interface and then using the extend keyword with the type variable to extend it. The previous example constrained the T type by attaching a restriction to it – T must extend Car.
 */
