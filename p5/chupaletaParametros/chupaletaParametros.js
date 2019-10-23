function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(220);
  chupaleta(200,80,40)
  chupaleta(70,46,70)
  chupaleta(300,130,90)
  chupaleta(350,40,50)
  chupaleta(150,200,200)
  chupaleta(18,190,15)
}

function chupaleta(h,v,tam) {
    //Palito
  fill(0,460,155)
  rect(h,v,8,tam)
  //Chupaleta
  fill(280,12,220)
  ellipse(h,v,tam);
}
