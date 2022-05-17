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
