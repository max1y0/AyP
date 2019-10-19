var ancho = 0;
var anchoMax = 200;
var velCrecimiento = 1;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  noStroke();
  fill(100,100,250);
  
  ellipse(width/2, height/2, ancho, ancho);
  if (ancho>anchoMax || ancho < 0) {
    velCrecimiento *=-1;
  }
  ancho+=velCrecimiento;
}
