//variable posicion horizontal
var posH
var velocidad
function setup() {
  createCanvas(400, 400);
  posH = 0
  velocidad = 1;
}

function draw() {
  background(220);
  ellipse(posH,200,50,50)
  posH = posH +velocidad
  
  //si toca el borde derecho
  if (posH > 400){
    //si asigno velocidad a -1, va a generar la animacion de moverse hacia atras (izq)
    velocidad = -1
  }
  //Si toca el borde izquierdo
  if (posH<0){
    velocidad = 1
  }
}
