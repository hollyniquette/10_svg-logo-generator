const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

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
