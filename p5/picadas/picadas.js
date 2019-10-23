var cantAutos = 8
var velocidades =[]
var posY = 0
function setup() {
  createCanvas(400, 600);
  asignarVelocidades();
}

function draw() {
  background(220);
  lineaPartida();
  largada();
}

function dibujarAuto(posH, posV){
  fill(200,posH,100);
  //chasis
  rect(posH,posV,20,35);
  
  //ruedas
  rect(posH-2,posV,5,10);
  rect(posH-2,posV+25,5,10);
  rect(posH+18,posV,5,10);
  rect(posH+18,posV+25,5,10);
}

function lineaPartida() {
  for (var i= 0; i<cantAutos;i++){
    dibujarAuto(i*50,0);
  }
}

function asignarVelocidades(){
  for (var i= 0; i<cantAutos;i++){
    velocidades[i]=random(0,1.5);
  }
}

function largada(){
  background(220);
  for (var i= 0; i<cantAutos;i++){
    dibujarAuto(i*50,velocidades[i]);
    velocidades[i]=velocidades[i]*1.01;
  }
}
