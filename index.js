const inquirer = require("inquirer");
const generateSvg = require("./lib/generateSvg");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to 3 characters for the logo text",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter a text color",
  },
  {
    type: "list",
    name: "shape",
    message: "Select a shape",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter a shape color",
  },
];

inquirer.prompt(questions).then((answers) => {
  const { text, textColor, shape, shapeColor } = answers;

  generateSvg(text, textColor, shape, shapeColor);

  console.log("Generated logo.svg");
});
