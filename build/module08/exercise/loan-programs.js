"use strict";
/// <reference path="loans.ts" />
var LoanProgramsLab8;
(function (LoanProgramsLab8) {
    // Calculates the monthly payment of an interest only loan
    function calculateInterestOnlyLoanPayment(loanTerms) {
        let payment;
        payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
        return 'The interest only loan payment is ' + payment.toFixed(2);
    }
    LoanProgramsLab8.calculateInterestOnlyLoanPayment = calculateInterestOnlyLoanPayment;
    // Calculates the monthly payment of a conventional loan
    function calculateConventionalLoanPayment(loanTerms) {
        let interest = calculateInterestRate(loanTerms.interestRate);
        let payment;
        payment = loanTerms.principle * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
        return 'The conventional loan payment is ' + payment.toFixed(2);
    }
    LoanProgramsLab8.calculateConventionalLoanPayment = calculateConventionalLoanPayment;
    function calculateInterestRate(interestRate) {
        let interest = interestRate / 1200;
        return interest;
    }
})(LoanProgramsLab8 || (LoanProgramsLab8 = {}));
