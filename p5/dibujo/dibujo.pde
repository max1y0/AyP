void setup(){
  size(600,400);
}

void draw(){
  noStroke();
  cielo();
  noLoop();
  montania();
  cascada();
  lago();
  luna();
}

void cascada(){
  fill(120,170,250);
  rect(width/2,150,150,height);
  fill(220,220,220);
  ellipse(width/2,height-42,random(40,60),random(40,60));
  ellipse(width/2+25,height-35,random(40,60),random(40,60));
  ellipse(width/2+59,height-40,random(40,60),random(40,60));
  ellipse(width/2+87,height-42,random(40,60),random(40,60));
  ellipse(width/2+110,height-35,random(40,60),random(40,60));
  ellipse(width/2+128,height-40,random(40,60),random(40,60));
  ellipse(width/2+158,height-40,random(40,60),random(40,60));
}

void montania(){
  fill(200,100,100);
  rect(0,150,width,height);
}

void lago(){
  fill(120,170,250);
  ellipse(width/2,height+5,width,50);
}

void cielo(){
  background(5,5,30);
}

void luna (){
  fill(220,220,100);
  ellipse(350,50,70,70);
  fill(200,200,80);
  ellipse(370,60,10,10);
  ellipse(335,56,20,20);
  ellipse(360,44,10,10);
}
