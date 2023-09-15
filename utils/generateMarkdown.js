// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") return "";

  return `
  ## Badges
  ${license}`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") return "";

  return "- [License](#license)";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") return "";

  return `
  ## License 
  ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution Guidelines](#contribution_guidelines)
  ${renderLicenseLink(data.license)}
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Contribution Guidelines
  
  ${data.contribution}
  
  ${renderLicenseSection(data.license)}
  
  ${renderLicenseBadge(data.license)}  
  
  
  ## Features
    
  
  
  ## Tests
  
  ${data.test}

  ## Questions
  
  ${data.username}
  ${data.email}
  ${data.question}
  
`;
}

module.exports = generateMarkdown;
