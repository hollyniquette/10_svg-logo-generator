const fs = require("fs");
const generateSvg = require("../lib/generateSvg");
const { Circle } = require("../lib/shapes");

jest.mock("fs");

describe("generateSvg", () => {
  test("generates an SVG with the given parameters", () => {
    const svg = generateSvg("ABC", "red", "Circle", "blue");
    expect(svg).toContain(
      '<text x="120" y="120" font-family="Arial" font-size="40" fill="red">ABC</text>'
    );
  });

  test("uses the appropriate shape class", () => {
    jest.spyOn(Circle.prototype, "render");
    generateSvg("ABC", "red", "Circle", "blue");
    expect(Circle.prototype.render).toHaveBeenCalled();
  });

  test("writes the SVG to a file", () => {
    generateSvg("ABC", "red", "Circle", "blue");
    expect(fs.writeFile).toHaveBeenCalled();
  });

  test("handles file writing errors", () => {
    fs.writeFile.mockImplementation((path, data, callback) =>
      callback("error")
    );
    console.error = jest.fn();

    generateSvg("ABC", "red", "Circle", "blue");

    expect(console.error).toHaveBeenCalledWith("Error saving logo", "error");
  });
});
