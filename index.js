// Runs the application using imports from lib/ 

// index.js
// In this file, we use the inquirer package to prompt the user for input to generate an SVG logo.
const inquirer = require('inquirer'); 
const fs = require('fs'); // fs is a built-in Node.js module for file system operations.
const path = require('path'); 
const { Circle, Triangle, Square } = require('./lib/shapes'); 

const questions = [ 
{
    type: 'input', 
    name: 'text',
    message: 'Enter up to three characters to render for the logo text:',
    validate: input => input.length <= 3 || 'Text must be up to three characters.' 
},
{
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hexadecimal):'
},
{
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['Circle', 'Triangle', 'Square']
},
{
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hexadecimal):'
}
];

inquirer.prompt(questions).then(answers => {  
    let shape; 
    switch (answers.shape) { 
        case 'Circle':
            shape = new Circle();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Square':
            shape = new Square();
            break;
    }
    shape.setColor(answers.shapeColor);

    const svgContent = ` 
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
    ${shape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text> 
</svg>`;

const filePath = path.join(__dirname, 'examples', 'logo.svg');
fs.writeFileSync(filePath, svgContent.trim());
console.log('Generated logo.svg in examples directory');
});