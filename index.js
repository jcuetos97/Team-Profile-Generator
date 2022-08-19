// Packages for this application
const inquirer =  require ("inquirer");
const generateHTML = require ("./dist/js/generateHTML.js");
const fs = require ("fs");
const Employee = require("./lib/employee.js");


let companyStaff = [];

function init () {
    inquirer.prompt({
        type: "input",
        message: "What is the name of your company?",
        name: "companyName",
        validate: companyNameInput => {
            if (companyNameInput) {
                return true
            } else {
                console.log ("Please enter your company's name.")
            }
        }
    })
    .then(answer => staffInfo(answer.companyName))
}


function staffInfo(companyName) {
  inquirer.prompt({
        type:"list",
        message: `What type of employee would you like to add to ${companyName}'s team?`,
        choices: ["Manager", "Engineer", "Intern", "No more employees to add."],
        name: "employeeRole",
    })
    .then(answers => {
        switch (answers.employeeRole) {
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;

            default: HTMLbuiltup();
        }
    })
}


function addManager() {
    inquirer.prompt([
        {
            type:"input",
            message: "What is the name of your manager?",
            name: "employeeName",
            validate: employeeNameInput => {
                if (employeeNameInput) {
                    return true
                } else {
                    console.log ("Please enter the name of this employee.")
                }
            }   
        },

        {
            type:"input",
            message: `What is his email address?`,
            name: "employeeEmail",
            validate: employeeEmailInput => {
                if (employeeEmailInput) {
                    return true
                } else {
                    console.log (`Please enter your manager's email address.`)
                }
            }   
        },
    ])
    .then push(employeeEmailInput) 

}     
       

function addEngineer() {

}

function addIntern() {

}

function HTMLbuiltup () {

}
 
init ()





