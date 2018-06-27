edad = 0
nivel= ""
print("ingrese tu edad")
edad = input()

if edad > 6: 
	if edad >= 12: 
		nivel = "secundaria"
	else:
		nivel = "primaria"
else:
	nivel = "jardin"

print("perteneces a", nivel)
