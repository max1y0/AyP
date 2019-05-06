#inicio
edad = None
nivel = None

print ("Ingresa tu edad")
edad = input()

if edad> 6:
    if edad > 12:
        nivel = "Secundaria"
    else:
	nivel = "Primaria"
else:
	nivel = "Jardin"

print ("Su edad es", edad, "y pertenece a", nivel) 
#fin

