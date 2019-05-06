partidosGanados = 0
partidosPerdidos = 0
partidosEmpatados = 0
puntos = 0
rta = "si"

print ("bienvenido al calculador de puntajes")
while (rta == "si"):

	print("ingrese la cantidad de partidos ganados")
	partidosGanados = input()

	print("ingrese la cantidad de partidos perdidos")
	partidosPerdidos = input()

	print("ingrese la cantidad de partidos empatados")
	partidosEmpatados = input() 

	puntos = partidosGanados*3 + partidosEmpatados

	print("su equipo tiene,",puntos)

	print("quiere seguir?")
	rta = raw_input()
