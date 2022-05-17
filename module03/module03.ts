// What is an interface
// You can use interfaces to describe an object, naming and parameterizing the object's types, and to compose existing named object types into new ones.

// This simple interface defines the two properties and a method of an Employee object.

interface EmployeeU3 {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee: EmployeeU3 = {
  firstName : "Emil",
  lastName: "Andersson",
  fullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

// employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'

// Declare and instantiate and interface in TypeScript

//  Property type	  Description	                                                          Example
//  -------------   -----------                                                           -------
//  Required	      All properties are required, unless otherwise specified.	            firstName: string;
//  Optional	      Add a question mark (?) to the end of the property name. Use this
//                  for properties that are not required. This prevents the type system   firstName?: string;
//                  from raising an error if the property is omitted.
//  Read only	      Add the readonly keyword in front of the property name. Use this
//                  for properties that should only be modified when an object is         readonly firstName: string;
//                  first created.

// Declare an interface with members

interface IceCream {
  flavor: string;
  scoops: number;
  instructions?: string;
}

let iceCream: IceCream = {
  flavor: 'vanilla',
  scoops: 2
}

console.log(iceCream.flavor);

function tooManyScoops(dessert: IceCream) {
  if (dessert.scoops >= 4) {
     return dessert.scoops + ' is too many scoops!';
  } else {
     return 'Your order will be ready soon!';
  }
}

console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}));

// Exercise - Extend an interface in TypeScript

interface Sundae extends IceCream {
  sauce: 'chocolate' | 'caramel' | 'strawberry';
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}

let myIceCream: Sundae = {
  flavor: 'vanilla',
  scoops: 2,
  sauce: 'caramel',
  nuts: true
}

function tooManyScoopsSundae(dessert: Sundae) {
  if (dessert.scoops >= 4) {
      return dessert.scoops + ' is too many scoops!';
  } else {
      return 'Your order will be ready soon!';
  }
}
console.log(tooManyScoopsSundae({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));


