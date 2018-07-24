temperatura = 0

print("cual es la temperatura actual?")
temperatura = input()

if (temperatura < 0):
	print("Esta mas frio que el corazon de eia")
if (temperatura > 0 and temperatura <15):
	print ("Esta para netflix")
if (temperatura > 15 and temperatura < 25):
	print ("Esta para jugar futbol")
if (temperatura > 25 and temperatura <40):
	print ("esta para tirarse a la pileta")
if (temperatura > 40):
	print ("Hace un calor de la p")

