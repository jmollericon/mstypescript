"use strict";
// What is an interface
// You can use interfaces to describe an object, naming and parameterizing the object's types, and to compose existing named object types into new ones.
let employee = {
    firstName: "Emil",
    lastName: "Andersson",
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};
// employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'
