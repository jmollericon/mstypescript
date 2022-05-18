"use strict";
/*  Module 7: Working with external libraries
    Lab Start */
exports.__esModule = true;
/*  TODO Add the import statement. */
// import { calculateInterestOnlyLoanPayment, calculateConventionalLoanPayment } from './loan-programs';
var LoanPrograms = require("./loan-programs.js");
/*  TODO Update the function calls. */
var interestOnlyPayment = LoanPrograms.calculateInterestOnlyLoanPayment({ principle: 30000, interestRate: 5 });
var conventionalLoanPayment = LoanPrograms.calculateConventionalLoanPayment({ principle: 30000, interestRate: 5, months: 180 });
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00"
console.log(conventionalLoanPayment); //* Returns "The conventional loan payment is 237.24"