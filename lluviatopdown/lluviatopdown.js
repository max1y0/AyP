var posX,posY;
function setup() {
  createCanvas(400, 400);
  frameRate(30);
  background(220);
}

function draw() {
  posX = random(0,width);
  posY = random(0,height);
  
  fill(10,100,200,100);
  noStroke()
  ellipse(posX,posY,10,10)
}
