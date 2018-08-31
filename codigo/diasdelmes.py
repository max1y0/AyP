#!/usr/bin/env python
# encoding: latin1

mes = 0

print ("Ingrese el mes")
mes = input()

if (mes == 1 or mes == 3 or mes == 5 or mes == 7 or mes == 8 or mes == 10 or mes == 12):
	print ("el mes ", mes, "tiene 31 dias")
else:
    if (mes == 2):
		print ("el mes 2 tiene 28 dias, o 29 si biciesto")
	else:
		print ("el mes tiene 30 dias")
