// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
inquirer
    .prompt ([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'password',
            message: 'What is your password',
            name: 'password',
        },
        {
            type: 'password',
            message: 'Re-enter password to confirm',
            confirm: 'confirm'
        },
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log(`README file has been generated: ${fileName}`);
    });
}


// TODO: Create a function to initialize app
import inquirer from 'inquirer';
import questions from './path-to-questions-file';
import generateMarkdown from './path-to-generateMarkdown-file';
import writeToFile from './path-to-writeToFile-file';

function init() {
    // Prompt the user with questions
    inquirer.prompt(questions)
        .then(answers => {
            // Generate Markdown from the answers
            const markdown = generateMarkdown(answers);
            // Write the Markdown to a README file
            writeToFile('README.md', markdown);
        })
        .catch(error => {
            console.error('Error initializing the application:', error);
        });
}

export default init;

// Function call to initialize app
init();

