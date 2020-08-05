function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(20);
  
  for (let x = 0 ; x < 600 ; x+=50){
    ellipse(x,200,25,25)
  }
}
