const inquirer = require("inquirer");

const generateReadme = require("./src/readme-template.js");

//
const {writeFile} = require("./utils/generate-readme.js");

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title for your readme??",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Enter a title for your readme!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Enter a description for the readme:",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log("Please enter a description");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "Please enter the installation instructions:",
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log("Enter the installation instructions.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usageInfo",
            message: "Please enter the usage information:",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log("Enter the usage information.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "guidelines",
            message: "Please enter the the contribution guidelines:",
            validate: guidelineInput => {
                if (guidelineInput) {
                    return true;
                } else {
                    console.log("Enter the contribution guidelines.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "testInstructions",
            message: "Please enter the test instructions:",
            validate: testInstructionInput => {
                if (testInstructionInput) {
                    return true;
                } else {
                    console.log("Enter the test instructions.");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "license",
            message: "Please choose a license.",
            choices: ["Apache License 2.0", "GNU GPLv3", "ISC", "MIT", ]
        },
        {
            type: "input",
            name: "github",
            message: "Please enter your Github username:",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Enter your Github username.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Enter your email address");
                    return false;
                }
            }
        },
    ]);
};

promptUser()
    .then(promptUserData => {
        return generateReadme(promptUserData);
    })
    .then (pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });