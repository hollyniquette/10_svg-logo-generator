class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,40 180,160 120,160" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="75" style="fill:${this.color}"/>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="50" y="50" width="200" height="200" style="fill:${this.color}"/>`;
  }
}

module.exports = {
  Shape,
  Triangle,
  Circle,
  Square,
};
