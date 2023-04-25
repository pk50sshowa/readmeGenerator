// TODO: Include packages needed for this application
const { writeFile } = require("fs");
const { prompt } = require('inquirer');
const createBadge = require('./createbadge.js');

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
        message: 'Please give instructions on how to test this application.',
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
        writeFile(`README.md`, writeToFile(response), (response), err => {

            if (err) {
                throw err;
            }
            console.log('File successfully created.');
        })
    );

// TODO: Create a function to write README file
function writeToFile(response) {
    return `# ${response.title}

## BADGE
${createBadge(response.license)}

## [DESCRIPTION](#description)
${response.description}

## TABLE OF CONTENTS

* [INSTALLATION](#installation)

* [USAGE](#usage)

* [LICENSE](#license)

* [CONTRIBUTING](#contributing)

* [TESTS](#tests)

* [QUESTIONS](#questions)

## [INSTALLATION](#installation)
${response.installation}

## [USAGE](#usage)
${response.usage}

## [LICENSE](#license)
${response.license}

## [CONTRIBUTING](#contributing)
${response.contribution}

## [TESTS](#tests)
${response.instructions}

## [QUESTIONS](#questions)
If you have any questions, please feel free to reach out to the author of this application at the following GitHub page and email address.

https://github.com/${response.gitUsername}

[${response.email}](${response.email})
`
}