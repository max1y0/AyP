datos = [20,230,80,120,80,190,300,50]
function setup(){
	createCanvas(400,400)
}
function draw(){
	background(120)
	for (let i = 0; i <8 ; i+=1){
		fill(220,220,220)
		if (i == 6){
			fill(240,30,30)
		}
		rect(i*30,0,30,datos[i])
	}
}