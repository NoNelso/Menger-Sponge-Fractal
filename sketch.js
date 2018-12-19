function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(0);
  stroke(255);
  translate(width / 2, height / 2);
  box(200);
}