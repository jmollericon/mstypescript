"use strict";
/*  EXERCISE 1
  TODO: Declare the Loan interface. */
/*  TODO: Update the calculateInterestOnlyLoanPayment function. */
function calculateInterestOnlyLoanPayment(loan) {
    // Calculates the monthly payment of an interest only loan
    let interest = loan.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loan.principle * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
/*  TODO: Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(conventionalLoan) {
    // Calculates the monthly payment of a conventional loan
    let interest = conventionalLoan.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = conventionalLoan.principle * interest / (1 - (Math.pow(1 / (1 + interest), conventionalLoan.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
const loan = {
    principle: 30000,
    interestRate: 5
};
let interestOnlyPayment = calculateInterestOnlyLoanPayment(loan);
const conventionalLoan = {
    principle: 30000,
    interestRate: 5,
    months: 180
};
let conventionalPayment = calculateConventionalLoanPayment(conventionalLoan);
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00"
console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24"
