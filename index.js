// Packages for this application
const inquirer =  require ("inquirer");
const generateHTML = require ("./dist/js/generateHTML");
const fs = require ("fs");
const Employee = require("./lib/employee.js");
const Engineer = require("./lib/engineer.js");
const Manager = require("./lib/manager.js");
const Intern = require("./lib/intern.js");

// Variables declared
let companyStaff = [];
let companyName = " ";

// Initial function asks for company's name
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
    .then(answers => {
        companyName = answers.companyName;
        staffInfo();
    })
}

// Function allows user to add employees to the team from a list of choices.
function staffInfo() {
    inquirer.prompt({
        type:"list",
        message: "What type of employee would you like to add to the team?",
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

            default: buildupHTML();
        }
    })
}

// Functions prompts questions about manager and adds employee to the company staff array.
function addManager() {
    inquirer.prompt([
        {
            type:"input",
            message: "What is the name of the team's manager?",
            name: "managerName",
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
            message: "What is the ID of this employee?",
            name: "managerID",
            validate: employeeIDInput => {
                if (employeeIDInput) {
                    return true
                } else {
                    console.log ("Please enter the ID of this employee.")
                }
            }
        },

        {
            type:"input",
            message: "What is his/her email address?",
            name: "managerEmail",
            validate: employeeEmailInput => {
                if (employeeEmailInput) {
                    return true
                } else {
                    console.log ("Please enter an email address.")
                }
            }
        },

        {
            type:"input",
            message: "What is the office number of this manager?",
            name: "officeManager",
            validate: employeeEmailInput => {
                if (employeeEmailInput) {
                    return true
                } else {
                    console.log ("Please enter the office number of this manager.")
                }
            }
        },
    ])
    .then(data => {
        const manager = new Manager (data.managerName, data.managerID, data.managerEmail, data.officeManager);
        companyStaff.push(manager);
        staffInfo();
    })
}

// Functions prompts questions about engineer and adds employee to the company staff array.
function addEngineer() {
    inquirer.prompt([
        {
            type:"input",
            message: "What is the name of this engineer?",
            name: "engineerName",
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
            message: "What is the ID of this employee?",
            name: "engineerID",
            validate: employeeIDInput => {
                if (employeeIDInput) {
                    return true
                } else {
                    console.log ("Please enter the ID of this employee.")
                }
            }
        },


        {
            type:"input",
            message: "What is his/her email address?",
            name: "engineerEmail",
            validate: employeeEmailInput => {
                if (employeeEmailInput) {
                    return true
                } else {
                    console.log ("Please enter an email address.")
                }
            }
        },

        {
            type:"input",
            message: "What is his/her gitHub account?",
            name: "engineerGitHub",
            validate: employeeGitHubInput => {
                if (employeeGitHubInput) {
                    return true
                } else {
                    console.log ("Please enter the GitHub.")
                }
            }
        },
    ])
    .then(data => {
        const engineer = new Engineer (data.engineerName, data.engineerID, data.engineerEmail, data.engineerGitHub);
        companyStaff.push(engineer);
        staffInfo();
    })
}

// Functions prompts questions about intern and adds employee to the company staff array.
function addIntern() {
    inquirer.prompt([
        {
            type:"input",
            message: "What is the name of this intern?",
            name: "internName",
            validate: employeeNameInput => {
                if (employeeNameInput) {
                    return true
                } else {
                    console.log ("Please enter the name of this intern.")
                }
            }
        },

        {
            type:"input",
            message: "What is the ID of this employee?",
            name: "internID",
            validate: employeeIDInput => {
                if (employeeIDInput) {
                    return true
                } else {
                    console.log ("Please enter the ID of this employee.")
                }
            }
        },

        {
            type:"input",
            message: "What is his/her email address?",
            name: "internEmail",
            validate: employeeEmailInput => {
                if (employeeEmailInput) {
                    return true
                } else {
                    console.log ("Please enter an email address.")
                }
            }
        },

        {
            type:"input",
            message: "What school does this intern attend to?",
            name: "internSchool",
            validate: employeeSchoolInput => {
                if (employeeSchoolInput) {
                    return true
                } else {
                    console.log ("Please enter a school.")
                }
            }
        },
    ])
    .then(data => {
        const intern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool);
        companyStaff.push(intern);
        staffInfo();
    })
}


function buildupHTML () {
    console.log("Hello"); 
    fs.writeFile(`./dist/${companyName}-HTML.html`, generateHTML (companyStaff, companyName), "UTF-8", (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync(`./dist/${companyName}-HTML.html`, "utf8"));
        }
    })
}

// Function call to initialize app.
init ();



