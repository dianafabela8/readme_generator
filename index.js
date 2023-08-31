// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your Title?",
    name: "title",
  },
  {
    type: "input",
    message: "What is your Description?",
    name: "description",
  },
  {
    type: "input",
    message: "What is your Installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is your Usage information?",
    name: "usage",
  },
  {
    type: "list",
    message: "What is your License?",
    name: "license",
    choices: ["MIT License", 'Apache License 2.0', 'Boost Software License 1.0', 'None']
  },
  {
    type: "input",
    message: "What is your Usage?",
    name: "usage",
  },
  {
    type: "input",
    message: "What is your Contribution guidelines?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What is your test instructions?",
    name: "test",
  },
  {
    type: "input",
    message: "What are your questions?",
    name: "question",
  },
  {
    type: "input",
    message: "What are your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What are your email?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error, data) =>
    error ? console.error(error) : console.log(data)
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile("testreadme.md", markdown);
  });
}

// Function call to initialize app
init();
