var a = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
  normalMaterial
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  //translate(width / 2, height / 2);
  rotateX(a);
  box(200);
  a += 0.01;
}