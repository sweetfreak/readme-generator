const generateLicense = licenseChoice => {

    switch (licenseChoice) {
        case "Apache License 2.0":
            return `
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
            `;
            

        case "GNU GPLv3":
            return `
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
            `;
            
        case "ISC":
            return `
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
            `;
            
        case "MIT":
            return `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
            `;
                  
    }

}


module.exports = templateData => {
    //destructure projects and about data from templateData based on their property key names
    //destructure page data by section
    //the ... in this situation is a rest/spread operator... not sure which one.
    const { title, description, installation, usageInfo, guidelines, testInstructions, license, email, github } = templateData;

    return `

# ${title}

## Table of Contents
* [Overview](#Overview)
* [Installation](#Installation)
* [Usage](#Usage)
* [Guidelines](#Guidelines)
* [Test Instructions](#TestInstructions)
* [License](#License) 
* [Questions](#Questions)

## Overview
${description}

## Installation
${installation}

## Usage
${usageInfo}

## Guidelines
${guidelines}

## Test Instructions
${testInstructions}

## License
${generateLicense(license)}

## Questions
For additional questions, please contact [${github}](https://github.com/${github}) at ${email}

    `
};
