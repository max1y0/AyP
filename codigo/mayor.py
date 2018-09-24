def mayor (num1,num2):

	resultado = 0

	if (num1 > num2):
		resultado = num1
	else:
		# num2 > num1
		resultado = num2

	return resultado
#fin funcion mayor

#codigo principal

print("ingrese el numero 1 a comparar")
numero1 = input()
#numero1 = int(input())
print("ingrese el segundo numero para comparar")
numero2 = input()

print( "el numero mas grande es",mayor( numero1 , numero2 ) )

print(mayor(-3,-4))



#fin
