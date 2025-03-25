# ejercicio 01 - cree un bucle For de Python
print('Ejercicio 1:')
for num in range(1,6):
    print(num)



# ejercicio 02 - cree una función de Python llamada suma que tome 3 argumentos y devuelva la suma de los 3
def suma(num_01, num_02, num_03):
    return num_01 + num_02 + num_03

resultado = suma(10, 20, 15)
print(resultado)



# ejercicio 03 - cree una función lambda con la misma funcionalidad que la función de suma que acaba de crear
suma = lambda num_01, num_02, num_03: num_01 + num_02 + num_03
print(suma(10, 20, 15))



# ejercicio 04
'''
-Utilizando la siguiente lista y variable, determine si el valor de la variable coincide o no con un valor de la lista.
*Sugerencia, si es necesario, utilice un bucle for in y el operador in.

nombre = 'Enrique'
lista_nombre = 'Jessica', 'Paul', 'George', 'Henry', 'Adán'
'''

nombre = 'Enrique'
lista_nombre = 'Jessica', 'Paul', 'George', 'Henry', 'Adán'

consulta = nombre in lista_nombre
print(consulta) # nos devuelve verdadero o falso.