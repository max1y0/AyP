
opcion1 = ""
opcion2 = ""
opcion3 = ""
salida = False

print("Dos aventureros, un mago y un paladin, se encontraban en una taverna cuando escucharon ruido afuera")
print("Se abrio de golpe la puerta y de ella salio una oveja, con un papel en la boca")
print("los aventureros se acercaron y leen que dice: hechizo para hablar con animales")
print("El mago lo lee en voz alta")
print("Por la puerta aparece un orco y un lobo, el orco dice: denme la oveja")
print("La oveja les dice: no me entreguen! soy un mago poderoso convertido!")
print("dar/no dar")
opcion1 = raw_input()

if (opcion1 == "dar"):
	print("El orco y el lobo agarran la oveja y se van")
	print("Los aventureros siguen a los enemigos")
	print("El orco gira hacia un camino descampado")
	print("Se encuentran con una casa del arbol enorme")
	print("Antes de abrir la puerta el orco mira hacia atras y los ve")
elif(opcion1 == "no dar"):
	print("el orco saca una espada y los amenaza a pelear")

print("El mago saca su baston")
print("El orco ataca al paladin, este se defiende con su escudo y contrataca con su espada")
print("El mago invoca ola de trueno hacia sus contrincantes, provocando una explosion y echandolos hacia atras")
print("El lobo se recupera y corre hacia el mago, el paladin se pone en frente y lo bloquea con su escudo")
print("El paladin invoca su fuerza divina e ilumina su espada")
print("El orco y el lobo se frenan y buscan de retirarse")
print("dejar ir/atacar")

opcion3 = raw_input()
if opcion3 == "dejar ir":
	print("Los atacantas huyen")
else:
	print("Mago y paladin invocan dos hechizos y terminan eliminando a sus atacantes")

print("la oveja se les acerca y les da las gracias")
print("Les indica que necesita volver a su casa para para buscar la varita para destransformarse")
print("...")
print("Los aventureros se dirigen a la casa de la sr oveja")
print("Al llegar a su casa, se ingresa a su habitacion y encuentran la varita de transformacion")
print("El mago agarra la varita y detecta que esta rota. que quiza funcione una sola vez, o no.")
print("Al contarle esto a la oveja, ella indica que hagan segun el mago considere.")
print("usar el hechizo transmutacion/no usar")
opcion4 = raw_input()

if opcion4 ==  "usar el hechizo transmutacion":
	print("Una nube de humo rosa rodea al animal, y en su lugar aparece un mago alto y narigon.")
	print("El mago les agradece y los invita a merendar en su casa")
else:
	if not(opcion4 == "no usar"):
		print("Una nube de humo gris rodea a la oveja... al dispersarse se ve a el sr oveja, sin ningun cambio")
	print("El sr oveja se queda en silencio... ")
	print("Pero decide afrontar su nuevo estilo de vida")