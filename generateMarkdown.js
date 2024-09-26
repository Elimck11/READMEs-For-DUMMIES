// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  const licenseBadges = {
    'Google':'(https://img.shields.io/badge/Google-4285F4?logo=google&logoColor=white)',
    'JavaScript':'(https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)',
    'JSON':'(https://img.shields.io/badge/JSON-000?logo=json&logoColor=fff)',
    'Visual Studio Code':'(https://custom-icon-badges.demolab.com/badge/Visual%20Studio%20Code-0078d7.svg?logo=vsc&logoColor=white)',
    'NodeJS':'(https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)',
};

return licenseBadges[license] || '';
}

console.log(renderLicenseBadge('Google')); 
console.log(renderLicenseBadge('JavaScript'));
console.log(renderLicenseBadge('JSON'));
console.log(renderLicenseBadge('Visual Studio Code'));
console.log(renderLicenseBadge('NodeJS'));
console.log(renderLicenseBadge('')); 



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license ? renderLicenseBadge(data.license) + '\n' + renderLicenseLink(data.license) : 'No license provided'}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please contact me at [${data.email}](mailto:${data.email}).
GitHub: [${data.github}](https://github.com/${data.github})`;
};

return licenseLinks[license] || '';

export default generateMarkdown;

