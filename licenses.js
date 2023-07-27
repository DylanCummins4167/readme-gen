// licenses.js

// Function to render the license badge
function renderLicenseBadge(license) {
  if (!license) return '';

  // Replace 'license' with the actual image link for each license type
  const licenseBadges = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    // Add more licenses as needed
  };

  return `![License](${licenseBadges[license]})`;
}

// Function to render the license link
function renderLicenseLink(license) {
  if (!license) return '';

  // Replace 'license' with the actual URL for each license type
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    // Add more licenses as needed
  };

  return `This application is covered under the [${license}](${licenseLinks[license]}) license.`;
}

// Function to render the license section
function renderLicenseSection(license) {
  if (!license) return '';

  return `## License

This project is licensed under the ${license} License.`;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};
