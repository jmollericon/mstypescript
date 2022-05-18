/*  Module 7: Working with external libraries
    Lab Start */

/*  TODO Add the import statement. */
// import { calculateInterestOnlyLoanPayment, calculateConventionalLoanPayment } from './loan-programs';
import * as LoanPrograms from './loan-programs.js';

/*  TODO Update the function calls. */
let interestOnlyPayment = LoanPrograms.calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5});
let conventionalLoanPayment = LoanPrograms.calculateConventionalLoanPayment({principle: 30000, interestRate: 5, months: 180});
console.log(interestOnlyPayment);         //* Returns "The interest only loan payment is 125.00"
console.log(conventionalLoanPayment);     //* Returns "The conventional loan payment is 237.24"
