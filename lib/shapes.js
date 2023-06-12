class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="50" style="fill:${this.color}"/>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,50 50,150 250,150" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="50" y="40" width="200" height="200" style="fill:${this.color}"/>`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
