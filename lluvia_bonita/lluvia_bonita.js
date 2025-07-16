let x = 1
function setup() {
  createCanvas(800,800)
  frameRate(60)
  noStroke()
  background(0)
}


function draw() {
  fill(random(200,255),random(200,250),250,130)
  ellipse(random(400),random(800),random(10,20))
  fill(random(100,155),random(100,150),250,130)
  ellipse(random(400,800),random(800),random(10,20))
  
}
