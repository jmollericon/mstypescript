/// <reference path="loans.ts" />
var LoanProgramsLab8;
(function (LoanProgramsLab8) {
    // Calculates the monthly payment of an interest only loan
    function calculateInterestOnlyLoanPayment(loanTerms) {
        var payment;
        payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
        return 'The interest only loan payment is ' + payment.toFixed(2);
    }
    LoanProgramsLab8.calculateInterestOnlyLoanPayment = calculateInterestOnlyLoanPayment;
    // Calculates the monthly payment of a conventional loan
    function calculateConventionalLoanPayment(loanTerms) {
        var interest = calculateInterestRate(loanTerms.interestRate);
        var payment;
        payment = loanTerms.principle * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
        return 'The conventional loan payment is ' + payment.toFixed(2);
    }
    LoanProgramsLab8.calculateConventionalLoanPayment = calculateConventionalLoanPayment;
    function calculateInterestRate(interestRate) {
        var interest = interestRate / 1200;
        return interest;
    }
})(LoanProgramsLab8 || (LoanProgramsLab8 = {}));
/*  Module 8: Organize code using Typescript namespaces */
//  Interfaces moved to loans.ts
//  Functions moved to loan-programs.ts
/*  TODO Add reference paths. */
/// <reference path="loans.ts" />
/// <reference path="loan-programs.ts" />
/*  TODO Update the function calls. */
var interestOnlyPaymentLab = LoanProgramsLab8.calculateInterestOnlyLoanPayment({ principle: 30000, interestRate: 5 });
var conventionalLoanPaymentLab = LoanProgramsLab8.calculateConventionalLoanPayment({ principle: 30000, interestRate: 5, months: 180 });
console.log(interestOnlyPaymentLab); //* Returns "The interest only loan payment is 125.00"
console.log(conventionalLoanPaymentLab); //* Returns "The conventional loan payment is 237.24"
