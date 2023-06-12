const fs = require("fs");
const { Shape, Triangle, Circle, Square } = require("./shapes");

function generateSvg(text, textColor, shape, shapeColor) {
  const shapeObj = new Shape();
  let svgElement = "";

  shapeObj.setColor(shapeColor);

  switch (shape) {
    case "Circle":
      const circle = new Circle();
      circle.setColor(shapeColor);
      svgElement = circle.render();
      break;
    case "Triangle":
      const triangle = new Triangle();
      triangle.setColor(shapeColor);
      svgElement = triangle.render();
      break;
    case "Square":
      const square = new Square();
      square.setColor(shapeColor);
      svgElement = square.render();
      break;
  }

  const svgText = `<text x="120" y="120" font-family="Arial" font-size="40" fill="${textColor}">${text}</text>`;
  const finalSvg = `<svg xmlns="http://www.w3.org/2000/svg" width ="300" height ="200">${svgElement}${svgText}</svg>`;

  fs.writeFile("logo.svg", finalSvg, (error) => {
    if (error) {
      console.error("Error saving logo", error);
    } else {
      console.log("Logo generated successfully.");
    }
  });

  return finalSvg;
}

module.exports = generateSvg;
