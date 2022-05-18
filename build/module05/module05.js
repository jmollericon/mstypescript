"use strict";
// Declare and instantiate classes in TypeScript
// *********************************************
// Introduction to classes in TypeScript
// Exercise- Create a class
// ========================
class CarExample {
}
// Declare the class properties
/**
  // Properties
  _make: string;
  _color: string;
  _doors: number;
 */
// Define the class constructor
/**
  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    this._doors = doors;
  }
 */
// Define the accessors
/**
  // Accessors
  get make() {
    return this._make;
  }

  set make(make) {
    this._make = make;
  }

  get color() {
    return 'The color of the car is ' + this._color;
  }
  set color(color) {
    this._color = color;
  }

  get doors() {
    return this._doors;
  }
  set doors(doors) {
    if ((doors % 2) === 0) {
      this._doors = doors;
    } else {
      throw new Error('Doors must be an even number');
    }
  }
 */
// Define the class methods
/**
  // Methods
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`
  }
  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`
  }
  turn(direction: 'left' | 'right'): string {
    return `${this.worker()} is turning ${direction}`;
  }
  // This function performs work for the other method functions
  worker(): string {
    return this._make;
  }
 */
class Car {
    // Constructor
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
    }
    // Accessors
    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }
    get color() {
        return 'The color of the car is ' + this._color;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number');
        }
    }
    // Methods
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake() {
        return `${this.worker()} is braking with the standard braking system.`;
    }
    turn(direction) {
        return `${this.worker()} is turning ${direction}`;
    }
    // This function performs work for the other method functions
    worker() {
        return this._make;
    }
}
// Exercise - Instantiate a class
// ==============================
// Below the class declaration, declare a variable called myCar1 and assign a new Car object to it, passing in values for the make, color, and doors parameters (make sure that the doors parameter is assigned an even number.)
let myCar1 = new Car('Cool Car Company', 'blue', 2); // Instantiates the Car object with all parameters
// You can now access the properties of the new myCar1 object. Enter myCar1. and you should see a list of the members defined in the class, including color and _color. Select Run to return the value of both properties to the console. What happens? Why?
console.log(myCar1.color);
console.log(myCar1._color);
// The member _color represents the property defined in the class, while color is the parameter that you pass to the constructor. When you refer to _color, you're accessing the raw data for the property, which returns 'blue'. When you refer to color, you're accessing the property through the get or set accessor, which returns 'The color of the car is blue'. It's important to understand the difference between the two because you often do not want to allow direct access to the property without doing some validation or other work on the data before getting or setting it. You'll learn about using access modifiers to control the visibility of class members later in the unit.
// Recall that the set block for the doors parameter tests the value to determine if it is even or odd. Test this by declaring a variable called myCar2 and assigning a new Car object to it, passing in values for the make, color, and doors parameters. This time set the value of the doors parameter to an odd number. Now, select Run. What happens? Why?
let myCar2 = new Car('Galaxy Motors', 'red', 3);
// Although you passed an odd number to doors, it compiles and runs without errors because no data validation occurs in the constructor. Try setting the value of doors to another odd number (for example, myCar2.doors = 5) and test it. This should invoke the set block and throw an error. If you want to perform this validation step when the Car object is initialized, you should add a validation check to the constructor.
class Car2 {
    // Constructor
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        if ((doors % 2) === 0) {
            this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number');
        }
    }
    // Accessors
    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }
    get color() {
        return 'The color of the car is ' + this._color;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number');
        }
    }
    // Methods
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake() {
        return `${this.worker()} is braking with the standard braking system.`;
    }
    turn(direction) {
        return `${this.worker()} is turning ${direction}`;
    }
    // This function performs work for the other method functions
    worker() {
        return this._make;
    }
}
// Test the optional parameter doors by omitting it from the object initialization.
let myCar3 = new Car('Galaxy Motors', 'gray');
console.log(myCar3.doors); // returns 4, the default value
// Test the methods by sending the return values to the console.
console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));
// Access modifiers
// ================
/**
 * In TypeScript, you can control the visibility of class members by adding the public, private, or protected keyword before the member name.
 *
 * Access modifier	  Description
 * ===============    ===========
 * public	            If you don't specify an access modifier, the default is public. You can also explicitly set the member to public by using the public keyword.
 * private	          If you modify the member with the private keyword, it cannot be accessed from outside of its containing class.
 * protected	        The protected modifier acts much like the private modifier with the exception that members declared protected can also be accessed within deriving classes. (You'll learn more about this later in the module.)
 */
// Exercise - Apply access modifiers to a class
// ============================================
class Car3 {
    // Constructor
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        if ((doors % 2) === 0) {
            this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number');
        }
    }
    worker() {
        return this._make;
    }
}
const myCar3a = new Car3('Bus', 'red');
// myCar3a
// Define static properties
// ========================
// The properties and methods of the classes defined so far are instance properties, meaning that they are instantiated and called on each instance of the class object. There is another type of property called a static property. Static properties and methods are shared by all instances of a class.
// To make a property static, use the static keyword before a property or method name.
// For example, you can add a new static property to the Car class called numberOfCars that stores the number of times that the Car class is instantiated and set its initial value to 0. Then, in the constructor, increment the count by one.
class Car4 {
    // Constructor
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car4.numberOfCars++; // Increments the value of the static property
    }
    // ...
    static getNumberOfCars() {
        return Car4.numberOfCars;
    }
}
// Properties
Car4.numberOfCars = 0; // New static property
// Instantiate the Car object with all parameters
let myCar41 = new Car4('Cool Car Company', 'blue', 2);
// Instantiates the Car object with all parameters
let myCar42 = new Car4('Galaxy Motors', 'blue', 2);
// Returns 2
console.log(Car4.getNumberOfCars());
// Extend a class using inheritance
// ================================
/**
 * Inheritance enables you to establish relationships and build hierarchies of classes in object composition.
 * For example, you can extend the Car class to create a new class called ElectricCar. The ElectricCar class will inherit properties and methods of the Car class but can also have its own unique attributes and behaviors, like range and charge. So, by extending the Car class, you can create new classes that reuse the code in the Car class and then build on it.
 */
// Exercise - Extend a class
// =========================
// In this exercise, you'll extend the Car class to create a new class called ElectricCar and override a method.
class ElectricCar extends Car {
    // Constructor
    constructor(make, color, range, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }
    // Accessors
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }
    // Methods
    charge() {
        console.log(this.worker() + " is charging.");
    }
    // Overrides the brake method of the Car class
    brake() {
        return `${this.worker()}  is braking with the regenerative braking system.`;
    }
}
let spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors); // returns the default, 2
spark.charge(); // returns "Spark Motors is charging"
console.log(spark.brake()); // returns "Spark Motors is braking with the regenerative braking system"
// Notice that the interface includes the parameters of the constructor, not the properties. Try including one of the private properties (for example, _make: string). TypeScript will raise an error, because the interface can only describe the public-facing side of the class and may not include private members. This prohibits you from using them to check that a class also has the correct types for the private side of the class instance.
// You can now implement the Vehicle interface in the Car class. As you build out the details for the class, TypeScript will ensure that the class adheres to the code contract described in the interface.
class CarFive {
}
// This interface could be used in a shared module for both your client and server code, ensuring the data structure is the same on both sides. On the client, you might have code to retrieve the dog from the server API you define, which looks like the following:
async;
loadDog(id, number);
Dog;
{
    return await(await fetch('demoUrl')).json();
}
// By using the interface, loadDog will let TypeScript know the structure of the object. You don't need to create a class to ensure this works.
// When to use classes
// The key difference between interfaces and classes in any programming language is that classes allow you to define implementation details. Interfaces solely define how data is structured. Classes allow you to define methods, fields, and properties. Classes also provide a way to template objects, defining default values.
// Returning to the example above, on the server you may want to add code to load or save a dog to the database. A common technique for managing data in a database is to use what's known as the "active record pattern", meaning the object itself has save, load and similar methods. We can use the Dog interface defined above to ensure we have the same properties and structure, while adding the necessary code to perform the operations.
class DogRecord {
    constructor({ name, age, description, id = 0 }) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }
    static load(id) {
        // code to load dog from database
        return dog;
    }
    save() {
        // code to save dog to database
    }
}
/** Summary
  * As you continue to use TypeScript you will find many new instances where interfaces, in particular, will make your life as a developer easier. One key feature of TypeScript to remember about interfaces is they do not require a class. This allows you to use them whenever you need the ability to define a data structure without having to create a full class implementation.
 */
