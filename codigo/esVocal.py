arregloLetras = ['a','b','e','c','e','d','a','r','i','o',]

def esVocal(letra):
	if (letra == 'a' or letra == 'e' or letra == 'i' or letra == 'o' or letra == 'u'):
		return True
	else:
		return False

#fin funcion es vocal

#principal
for i in range( len(arregloLetras) ):
	if ( esVocal(arregloLetras[i]) == True ):
		print(arregloLetras[i])
