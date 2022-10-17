"use strict";
exports.__esModule = true;
var inquirer = require('inquirer');
inquirer
    .prompt([
    {
        type: "number",
        name: "first_number",
        message: "Enter the first number:",
        validate: function (u) {
            if (isNaN(u)) {
                return "This is not a number, Please press Ctrl+C and try again!";
            }
            return true;
        }
    },
    {
        type: "number",
        name: "second_number",
        message: "Enter the second number:",
        validate: function (u) {
            if (isNaN(u)) {
                return "This is not a number, Please press Ctrl+C and try again!";
            }
            return true;
        }
    },
    {
        type: "list",
        name: "operation",
        message: "Which operation do you want to perform?",
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
    }
])
    .then(function (answers) {
    var first = answers.first_number;
    var second = answers.second_number;
    var program = answers.operation;
    if (program == 'Addition') {
        console.log("The answer is ".concat(first + second));
    }
    else if (program == 'Subtraction') {
        console.log("The answer is ".concat(first - second));
    }
    else if (program == 'Multiplication') {
        console.log("The answer is  ".concat(first * second));
    }
    else if (program == 'Division') {
        console.log("The answer is ".concat(first / second));
    }
    else {
        console.log("This function is not supported...");
    }
});
