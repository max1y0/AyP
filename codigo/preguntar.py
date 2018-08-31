rta = 'no'
cansancio = 0

while (rta == 'no' ):
	#codigo que queremos que se repita
	
	print ("que tan cansado estas?")
	cansancio = input()
		
	if (cansancio <= 5):
		print("podes seguir chango")
	else:
		print("siesta chango")
	
	print("quiere salir?")
	rta = raw_input()

