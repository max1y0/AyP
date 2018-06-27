from time import*
from turtle import*

nombre = raw_input('Como te llamas?')
nacimiento = raw_input('En que anio naciste?')

ahora = int(strftime('%Y',gmtime()))
edad = int(ahora) - int(nacimiento)
cadena = 'Hola mundo! mi nombre es ' + str(nombre) + ' y este anio cumplo ' + str(edad) + 'anios'
 
print cadena

