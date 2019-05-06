nota = 0
rta = "si"

while (rta== "si"):
	print("ingrese la nota")
	nota = input()

	if (nota < 7):
		print("aprendizajes pendientes")
	elif (nota >= 7 and nota < 10):
		print ("aprendizajes logrados")
	elif (nota == 10):
		print ("aprendizajes ampliamente logrados")

	print("quiere probar otra nota?")
	rta = raw_input()

