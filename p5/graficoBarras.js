let edades = [120, 40, 90,330, 0, 20, 50,150, 50,90]
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  
  for (let i =0; i<10; i+=1){
    text (edades[i],25*i,20)
  }
  
}
