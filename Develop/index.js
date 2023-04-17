const { writeFile } = require("fs");
const { default: inquirer } = require('inquirer');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    'What is your project title?',
    'Please give a basic description of your project.',
    'Please explain how to install this application.',
    'Please explain application user information.',
    'Please explain contribution guidelines.',
    'Please give test instructions.'
                ];

console.log (questions);

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please give a basic description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please explain how to install this application.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please explain contribution guidelines.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please give test instructions.',
        name: 'instructions',
    },
  ])
  .then((response) =>
    writeFile(`${response.name}.json`, JSON.stringify(response),  err => { 
        if (err) {
            throw err;
        }
        console.log ('File successfully created.');
    } )
  );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
