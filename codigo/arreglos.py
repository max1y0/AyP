notas = []
cantidad = 0

print "Cuantas notas quiere cargar?"
cantidad = input()

for i in range(cantidad):
	print "ingrese la nota nro", i+1
	notas.append(input())

for i in range(cantidad):
	print "La nota es ",notas[i] 
