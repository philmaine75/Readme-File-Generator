
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generatemarkdown');

const questions = [
    {
        type: 'input',
        message: "What is the name of your project?",
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description of your poject, including its purpose and how it helps the user',
        name: 'description', 
    },
    {
       type: 'input',
       message: 'What features does your project include?',
       name: 'features',
    },
    {
        type: 'input',
        message: 'Please provide instructions on how to install your project, including any dependencies that need to be installed',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please demonstrate how to use your project',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please explain how others can contribute to your project if possible',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please describe the tests that can be done with the project',
        name: 'tests',
    },
    {
        type: 'input',
        message: "Please enter your GITHUB username",
        name: 'username', 
    },
    {
        type: 'input',
        message: "Please enter your email address",
        name: 'email', 
    },
    {
        type: 'list',
        message: 'Please select one of the following licenses for your project',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1','Mozilla Public License 2.0', 'The Unlicense', 'N/A'],
        name: 'license', 
    },
  
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created your-README.md in base directory (Readme-File-Generator)'));
}


function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const filename =  'your-README.md';
            const readmeContents = generateMarkdown(answers);
            writeToFile(filename, readmeContents);
        });
}


init();
