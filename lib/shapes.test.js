// Jest tests for shapes
// In this file, we write tests for the classes defined in shapes.js. 
//We test that the render method of each class returns the correct SVG code for the shape with the correct fill color.

// We import the classes from shapes.js
const { Circle, Triangle, Square } = require('./shapes'); // the ./ is used to specify the current directory, and ./shapes specifies the shapes.js file in the current directory.

test('Circle renders correctly', () => { 
    const shape = new Circle();
    shape.setColor('green');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
});

test(`Triangle renders correctly`, () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Square renders correctly', () => {
    const shape = new Square();
    shape.setColor('red');
    expect(shape.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="red" />');
});