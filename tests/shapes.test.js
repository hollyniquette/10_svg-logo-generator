const { Shape, Circle, Triangle, Square } = require("../lib/shapes");

describe("Shape classes", () => {
  describe("Shape", () => {
    test("should be able to set color", () => {
      const shape = new Shape();
      shape.setColor("red");
      expect(shape.color).toEqual("red");
    });
  });

  describe("Circle", () => {
    test("should render correctly with the given color", () => {
      const circle = new Circle();
      circle.setColor("blue");
      expect(circle.render()).toEqual(
        '<circle cx="150" cy="100" r="50" style="fill:blue"/>'
      );
    });
  });

  describe("Triangle", () => {
    test("should render correctly with the given color", () => {
      const triangle = new Triangle();
      triangle.setColor("green");
      expect(triangle.render()).toEqual(
        '<polygon points="150,50 50,150 250,150" fill="green" />'
      );
    });
  });

  describe("Square", () => {
    test("should render correctly with the given color", () => {
      const square = new Square();
      square.setColor("yellow");
      expect(square.render()).toEqual(
        '<rect x="50" y="40" width="200" height="200" style="fill:yellow"/>'
      );
    });
  });
});
