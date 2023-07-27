// Import required packages
const { renderLicenseBadge, renderLicenseLink, renderLicenseSection } = require('./licenses');

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Generate license badge and link
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);

  return `# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}
${licenseLink}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me:
GitHub: [${data.github}](https://github.com/${data.github})
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
