notas = []
cantidadNotas = 0
sumaNotas = 0

print ("Cuantas notas va a cargar?")
cantidadNotas = input()

#para windows poner int(cantidadNotas)
for i in range(cantidadNotas):
	print ("ingrese nota")
	notas.append( input() )

for i in range(cantidadNotas):
	sumaNotas = notas[i] + sumaNotas

for i in range(cantidadNotas):
	print ("la nota es", notas[i])

print ("el promedio es", sumaNotas/cantidadNotas)
