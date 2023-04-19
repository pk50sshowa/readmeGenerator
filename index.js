// TODO: Include packages needed for this application
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

## BADGE
${createBadge(response.license)}

## TABLE OF CONTENTS

[DESCRIPTION](#description)

[INSTALLATION](#installation)

[USAGE](#usage)

[LICENSE](#license)

[CONTRIBUTING](#contributing)

[TESTS](#tests)

[QUESTIONS](#questions)

## [DESCRIPTION](#description)
${response.description}

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

function createBadge (license) {

    // if (license !== 'None') {
    //     `[](https://imgs.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue.svg)`;
    // }
    
    var badge = ''
        if (license === 'None') {
            return;
        }
        else if (license === 'Apache 2.0') {
            badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
        } else if (license === 'MIT') {
            badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
        } else if (license === 'PERL') {
            badge = `![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)`
        }
        return badge;
}
