"use strict";
/*  Module 8: Organize code using Typescript namespaces */
//  Interfaces moved to loans.ts
//  Functions moved to loan-programs.ts
/*  TODO Add reference paths. */
/// <reference path="loans.ts" />
/// <reference path="loan-programs.ts" />
/*  TODO Update the function calls. */
let interestOnlyPaymentLab = LoanProgramsLab8.calculateInterestOnlyLoanPayment({ principle: 30000, interestRate: 5 });
let conventionalLoanPaymentLab = LoanProgramsLab8.calculateConventionalLoanPayment({ principle: 30000, interestRate: 5, months: 180 });
console.log(interestOnlyPaymentLab); //* Returns "The interest only loan payment is 125.00"
console.log(conventionalLoanPaymentLab); //* Returns "The conventional loan payment is 237.24"
