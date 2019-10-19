#funcion tipoTriangulo
def tipoTriangulo(l1,l2,l3):
	
	tipo = ''
	
	if (l1 == l2 and l2 == l3):
		tipo = 'equilatero'
	elif (l1 != l2 and l2 != l3):
		tipo = 'escaleno'
	else:
		tipo = 'isosceles'

	return tipo
#fin de funcion tipoTriangulo

#codigo principal
print( tipoTriangulo(1,2,3) )
print( tipoTriangulo(3,3,3) )
print( tipoTriangulo(2,2,3) )