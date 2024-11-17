// lib/shapes.js
// In this file, we define the classes for the different shapes that we want to render.
//Each class has a render method that returns the SVG code for the shape. The render method uses the color property of the class to set the fill color of the shape.
class Shape { 
    constructor() { 
      this.color = ''; 
    }
  
    setColor(color) { 
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`;
    }
  }
  // This code exports the classes so that they can be used in other files.
  module.exports = { Circle, Triangle, Square };