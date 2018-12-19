var a = 0;
var sponge = [];

function setup() {
  createCanvas(600, 600, WEBGL);
  normalMaterial
  var b = new Box(0, 0, 0, 200);
  sponge.push(b);
}

function draw() {
  background(50);
  stroke(255);
  noFill();
  //translate(width / 2, height / 2);
  rotateX(a);
  for (var i = 0; i < sponge.length; ++i) {
    sponge[i].show();
  }
  a += 0.01;
}

function mousePressed() {
  var next = [];
  for (var i = 0; i < sponge.length; ++i) {
    var b = sponge[i];
    var newBoxes = b.fracGen();
    next = next.concat(newBoxes);
  }
  sponge = next;
}