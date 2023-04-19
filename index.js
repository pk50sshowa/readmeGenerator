// TODO: Include packages needed for this application
const { create } = require("domain");
const { writeFile } = require("fs");
const { prompt } = require('inquirer');

// TODO: Create an array of questions for user input
prompt([
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
        message: 'Please explain the usage information.',
        name: 'usage',
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
    {
        type: 'input',
        message: 'Please enter your GitHub user ID.',
        name: 'gitUsername'
    },
    {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'email'
    },
    {   
        type: 'list',
        message: 'Please select your license.',
        name: 'license',
        choices: [
            {
                key: '1',
                value: 'Apache 2.0',
            },
            {
                key: '2',
                value: 'MIT',
            },
            {
                key: '3',
                value: 'PERL',
            },
            {
                key: '4',
                value: 'None',
            },
        ]
    }
])
    .then((response) =>
        writeFile(`${response.title}.md`, writeToFile(response), (response), err => {

            if (err) {
                throw err;
            }
            console.log('File successfully created.');
        })
    );

// TODO: Create a function to write README file
function writeToFile(response) {
    return `# ${response.title}

## aa BADGE
${createBadge(response.license)}

## b DESCRIPTION
${response.description}

## c TABLE OF CONTENTS

## [Installation]INSTALLATION
${response.installation}

## e USAGE
${response.usage}

## f LICENSE
${response.license}

## g CONTRIBUTING
${response.contribution}

## h TESTS
${response.instructions}

## i QUESTIONS
https://github.com/${response.gitUsername}

[${response.email}](${response.email})
`
}

function createBadge (license) {
    var badge = ''
        if (license === 'None') {
            return;
        }
        else if (license === 'Apache 2.0') {
            badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
        } else if (license === 'MIT') {
            badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
        } else if (license === 'Perl') {
            badge = `![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)`
        }
        return badge;
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
