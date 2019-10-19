def mayor(num1,num2):
	
	aux = 0

	if (num1>num2):
		aux = num1
	else:
		aux = num2

	return aux
#fin funcion mayor

#codigo principal
print ("ingrese el numero 1")
num1 = input()
print ("ingrese el numero 2")
num2 = input()

resultado = mayor(num1,num2)
print(resultado)

#fin
