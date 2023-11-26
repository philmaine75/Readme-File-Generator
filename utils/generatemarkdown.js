
const licenseMap = {
  'Apache License 2.0': 'Apache_2.0',
  'GNU General Public License v3.0': 'GNU_GPL_3.0',
  'MIT License': 'MIT',
  'BSD 2-Clause "Simplified" License': 'BSD_2_clause',
  'BSD 3-Clause "New" or "Revised" License': 'BSD_3_clause',
  'Boost Software License 1.0': 'Boost_1.0',
  'Creative Commons Zero v1.0': 'Creative_Commons_Zero_1.0',
  'Eclipse Public License 2.0': 'Eclipse_2.0',
  'GNU Affero General Public License v3.0': 'GNU+AGPL_3.0',
  'GNU General Public License v2.0': 'GNU+GPL_2.0',
  'GNU Lesser General Public License v2.1': 'GNU_LGPL_2.1',
  'Mozilla Public License 2.0': 'Mozilla_2.0',
  'The Unlicense': 'The_Unlicense',
};

function renderLicenseBadge(license) {
  if(license = "N/A"){
    return '';
  }
  const url = licenseMap[license] || license
  return `![${license}](https://img.shields.io/badge/License-${url}-green)`
}

function renderLicenseLink(license) {
  if(license == "N/A"){
    return '';
  }
  const url = licenseMap[license] || license;
  return `https://choosealicense.com/licenses/${url}/`;
}

function renderLicenseSection(license) {
  if(license == "N/A"){
  return '';
}
const link = renderLicenseLink(license);

return `
        \n## License
        \nThis project is licensed under the ${license} - see ${link} page for more details.`
}
 

function generateMarkdown(data) {
  
  const badge = renderLicenseBadge(data.license)
  const licenseSection = renderLicenseSection(data.license);
  
  return `# ${data.title}
  \n ${badge}
  \n## Description
  \n${data.description}
  \n## Table of Contents
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  \n## Features
  \n${data.features}
  \n## Installation
  \n${data.installation}
  \n## Usage
  \n${data.usage}
  \n## Contributing
  \n${data.contributing}
  \n## Tests
  \n${data.tests}
  \n## Questions
  \nVisit my Github at https://github.com/${data.username}
  \nContact me at ${data.email}
  \n${licenseSection}`
}

module.exports = generateMarkdown;

