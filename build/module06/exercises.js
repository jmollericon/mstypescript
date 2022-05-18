"use strict";
// Lab - Declare a class by using a generic
/*  Module 6: DGenerics in TypeScript
    Lab Start */
/*  DataStore is a utility function that can store up to 10 string values in an array.
    Rewrite the DataStore class so the array can store items of any type.
    TODO: Add and apply a type variable. */
class DataStore {
    constructor() {
        this._data = new Array(10);
    }
    AddOrUpdate(index, item) {
        if (index >= 0 && index < 10) {
            this._data[index] = item;
        }
    }
    GetData(index) {
        if (index >= 0 && index < 10) {
            return this._data[index];
        }
        else {
            return;
        }
    }
}
let cities = new DataStore();
cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(2, "London");
cities.AddOrUpdate(11, "New York");
console.log(cities.GetData(1)); // returns 'Chicago'
console.log(cities.GetData(12)); // returns 'undefined'
// TODO Test items as numbers.
let usersIDs = new DataStore();
usersIDs.AddOrUpdate(0, 4);
usersIDs.AddOrUpdate(1, 8);
usersIDs.AddOrUpdate(2, 22);
usersIDs.AddOrUpdate(4, 58);
console.log(usersIDs.GetData(2)); // returns '22'
console.log(usersIDs.GetData(4)); // returns 'undefined'
// TODO Test items as objects.
let cars = new DataStore();
cars.AddOrUpdate(0, { size: 'small', passengers: 6 });
cars.AddOrUpdate(2, { size: 'medium', passengers: 15 });
cars.AddOrUpdate(4, { size: 'large', passengers: 35 });
console.log(cars.GetData(2)); // returns the object
console.log(cars.GetData(4)); // returns the object
