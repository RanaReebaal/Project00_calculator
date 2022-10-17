export{}
const inquirer = require('inquirer');
inquirer
  .prompt([
    {
        type:"number",
        name:"first_number",
        message:"Enter the first number:",
        validate:(u)=>{
            if (isNaN(u)){
                return "This is not a number, Please press Ctrl+C and try again!"
            }return true;
        }
    },
    {
        type:"number",
        name:"second_number",
        message:"Enter the second number:",
        validate:(u)=>{
            if (isNaN(u)){
                return "This is not a number, Please press Ctrl+C and try again!"
            }return true;
        }
    },
    {
        type:"list",
        name:"operation",
        message:"Which operation do you want to perform?",
        choices:['Addition', 'Subtraction', 'Multiplication', 'Division']
    }
  ])
  .then((answers) => {
    let first = answers.first_number;
    let second = answers.second_number;
    let program = answers.operation;
    if (program == 'Addition'){
        console.log(`The answer is ${first + second}`)
    }else if (program == 'Subtraction'){
        console.log(`The answer is ${first - second}`)
    }else if (program == 'Multiplication'){
        console.log(`The answer is  ${first * second}`)
    }else if (program == 'Division'){
        console.log(`The answer is ${first / second}`)
    }else{
        console.log("This function is not supported...")
    }
  });
  