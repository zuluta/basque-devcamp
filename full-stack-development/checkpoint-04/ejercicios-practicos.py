from decimal import Decimal
import math

# ejercicio 01 - crear una lista, una tupla, un número de punto flotante, un entero, un decimal y un diccionario
# esto va crear una lista
lista = ['manzana', 'platano', 'pera']

# esto va crear una tupla
tupla = ('manzana', 'platano', 'pera')

# esto va crear un flotante
flotante = 1.256

# esto va crear un entero
entero = 18

# esto va crear un decimal
decimal = Decimal(1.254845)

# esto va crear un diccionario
diccionario = {
    'producto_01': '12.34€',
    'producto_02': '5.70€',
    'producto_03': '23.50€'
}

#print(type(lista)) # 'list'
#print(type(tupla)) # class 'tuple'
#print(type(flotante)) # class 'float'
#print(type(entero)) # class 'int'
#print(type(decimal)) # class 'decimal'
#print(type(diccionario)) # class 'dict'



# ejercicio 02 - redondea tu flotante hacia arriba
# esto va redondear hacia arriba
saldo = math.ceil(flotante)
#print(saldo)



# ejercicio 03 - obtén la raíz cuadrada de tu flotante
# esto obtiene la raiz cuadrada
raiz_cuadrada = math.sqrt(flotante)
#print(raiz_cuadrada)



# ejercicio 04 - selecciona el primer elemento de tu diccionario
primer_elemento = diccionario.get('producto_01', 'producto no encontrado')
#print(primer_elemento)



# ejercicio 05 - selecciona el segundo elemento de tu tupla
segundo_elemento = tupla[1]
#print(segundo_elemento)



# ejercicio 06 - agrega un elemento al final de tu lista.
lista.append('Mandarina')
#print(lista)



# ejercicio 07 - reemplaza el primer elemento de tu lista
lista[0] = 'aguacate'
#print(lista)



# ejercicio 08 - ordena tu lista alfabéticamente
lista.sort(key=str.lower)
#print(lista)



# ejercicio 09 - usa la reasignación para añadir un elemento a tu tupla
tupla += ('melocoton',)
#print(tupla)