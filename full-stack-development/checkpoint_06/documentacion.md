
# <p align="center">Checkpoint 05</p>

## <p>📄 Documentación python 🐍</p>
|Contenido    |
|-----------------|
|**1. Condicionales** |
|**2. Bucles for, while y para que sirven**  |
|**3. Comprensión de listas** |
|**4. Argumentos** |
|**5. Función Lambda** |
|**6. Paquete pip** |
<br>
<br>

## 1. ¿Qué es un condicional?
<p>Hasta ahora, hemos visto cómo resolver los problemas más sencillos pero no podemos resolver todo utilizando estructuras secuenciales. Cuando tenemos que tomar una decisión aparecen las estructuras condicionales. Por ejemplo, en nuestra vida diaria hay momentos donde tenemos que decidir entre un pantalón u otro, un camino u otro. En estos casos es común resolver un problema combinando estructuras secuenciales y condicionales.</p>
<br>

**1.1. Condicional simple con if:**
<p>Podemos ver un ejemplo de una <strong>estructura condicional simple</strong> con el siguiente esquema.</p>

> [!IMPORTANT]
> **Puedes usar <code>if</code> solo una vez por bloque y no es obligatorio complementarlo con <code>else</code>.**

![GitHub Image](images/estructura_simple.png)

<p>Podemos observar en el esquema que el rombo representa la condición y tenemos dos opciones que podemos tomar. Si la condición devuelve un resultado verdadero, ejecutará las opciones que se encuentren en su interior, si por el contrario es falso no realizará dicha acción.</p>

<p>Vamos a ver el primer ejemplo y el mas simple con el <code>if</code>, le pasamos por variable <code>edad = 20</code>, si tiene 18 o mas años, muestra un mensaje <code>Soy mayor de edad porque tengo 18 o mas años.</code> y si tiene menos de 18 años, no nos muestra ningun mensaje.</p>

```python
edad = 20
if edad >= 18:
    print(f'Soy mayor de edad porque tengo {edad} o mas años.')
```

<p>La palabra clave <code>if</code> implica el inicio de una condición, seguidamente incluimos la condición y finalizamos la línea con el carácter <code>:</code>dos puntos.</p>
<p>Una de las características de python que además ayuda a tener una estructura organizada es la indentación o sangrado de texto con cuatro espacios. Es decir, si queremos incluir una condición, el texto que deba ir en su interior debe ir con cuatro espacios con respecto al inicio de la palabra <code>if</code>.</p>
<br>

**1.2. Condicional alternativa con if else:**
<p>Podemos ver un ejemplo de una <strong>estructura condicional compuesta</strong> con el siguiente esquema.</p>

> [!IMPORTANT]
> **Puedes usar <code>else</code> solo una vez por condición <code>if</code>.**

![GitHub Image](images/estructura_compuesta.png)

<p>Cuando se presenta una elección entre <code>if</code> o <code>else</code>, tenemos la opción de realizar una acción u otra, es decir, tenemos operaciones diferentes a ejecutar si la condición es verdadera o es falsa. Es decir, se tomara una de las 2 elecciones de la bifurcación.</p>

<p>Vamos a volver a realizar el ejercicio anterior pero, con la diferencia, de que si la edad es menor a 18 años, nos muestre un mensaje <code>Soy menor de edad porque tengo menos de 18 años.</code>.</p>

```python
edad = 16
if edad >= 18:
    print(f'Soy mayor de edad porque tengo {edad} años.')
else:
    print(f'Soy menor de edad porque tengo menos de {edad} años.')
```

<p>Como podemos ver, si la condición es falsa, y queremos que realice una operación la forma sería incluyendo la palabra <code>else</code> en una línea nueva seguida del carácter <code>:</code> dos puntos. Después las operaciones necesarias que queramos ejecutar separadas con 4 espacios con respecto a la línea de la palabra <code>else</code>.</p>
<br>

**1.3. Condicional encadenada con if elif else:**
<p>Podemos ver un ejemplo de una <strong>estructura condicional encadenada</strong> con el siguiente esquema.</p>

> [!IMPORTANT]
> **El flujo de ejecucción se prioriza siempre de arriba hacia abajo y puedes crear tantas <code>elif</code> que desees.**

![GitHub Image](images/estructura_encadenada.png)

<p>Cuando se presentan mas de dos elecciónes a elegir entre <code>if</code> <code>elif</code> y <code>else</code>, se tomara como válida, solamente una de las 3 elecciones de la bifurcación. El flujo de ejecución se priorizara siempre de arriba hacia abajo.</p>

<p>Vamos a volver a realizar el ejercicio anterior con una condiciónal mas, que sera la condicional <code>elif,</code>pero con la diferencia, de que si la edad es mayor o igual a 67 años, nos muestre un mensaje <code>Tengo 70 años y estoy jubilado.</code>. El resto de las condicionales se mantienen igual.</p>

```python
edad = 70
if edad >= 67:
    print(f'Tengo {edad} años y estoy jubilado.')
elif edad >= 18:
    print(f'Soy mayor de edad porque tengo {edad} años.')
else:
    print(f'Soy menor de edad porque tengo menos de {edad} años.')
```

<p>Como vemos en el ejempo anterior, el uso de la condicional <code>elif</code> nos da la posibilidad de crear muchas condiciones sobre un mismo <coce>if</coce> ya que su uso no esta limitado. Recuerda que cuanto mas corto y menos condicionales tenga el bloque, mas legible sera el código.</p>
<br>

**1.4. Condicionales anidadas:**
<p>Podemos ver un ejemplo de una <strong>estructura condicional anidado</strong> con el siguiente esquema.</p>

> [!IMPORTANT]
> **Podemos tener infinidad de condiciones anidadas pero en la medida de lo posible, procuraremos anidar lo menos posible.**

![GitHub Image](images/estructura_anidado.png)
<br>
<br>


## 2. Tipos de bucle y para que sirven
<p>En Python, los bucles se utilizan para repetir varias veces la ejecución de una parte de un programa.</p>
<p>Hay dos tipos de bucles:</p>

  1. Bucle <code>for</code>:
      - Cuando se sabe de antemano cuántas veces se va a repetir el programa.
  2. Bucle <code>while</code>:
      - Cuando no se conoce de antemano el número de repeticiones del programa.

<p>Para interrumpir un bucle, se utiliza la palabra reservada <code>break</code> y para continuar el bucle en caso de cumplir alguna de las condiciones se utiliza <code>continue</code></p>

**2.1. El bucle for:**
<p>Un bucle <code>for</code> es un bucle que repite el bloque de instrucciones un número prederminado de veces. El bloque de instrucciones que se repite se suele llamar cuerpo del bucle y cada repetición se suele llamar iteración.</p>

<p>Su sintaxis es la siguiente:</p>

```python
productos = ['manzana', 'pera', 'naranja', 'sandia', 'melon'] # esto es una lista
for producto in productos:
    print(producto)

# salida:
    # manzana
    # pera
    # naranja
    # sandia
    # melon
```

**2.2. El bucle while:**
<p>Con el bucle <code>while</code> podemos ejecutar un conjunto de sentencias siempre que una condición sea verdadera.</p>

<p>Su sintaxis es la siguiente:</p>

```python
i = 4
while i < 7:
    print(i)
    i += 1

# salida:
    # 4
    # 5
    # 6
```
<br>


## 3. ¿Qué es comprensión de listas?
<p>La comprensión de listas nos permite crear nuevas listas a partir de otras listas, tuplas y cualquier iterable en una sola línea de código.</p>
<p>En este ejemplo, vamos a utilizar los valores de (lista_1) para multiplicar entre si 1x1, 2x2, 3x3, 4x4 y 5x5 mediante un bucle for y lo vamos a guardar en (lista_2). Para ello utilizaremos el metodo tradicional y el metodo de compresión de listas para ver las diferencias.</p>

**3.1. Ejemplo tradicional:**

```python
lista_1 = [1, 2, 3, 4, 5]
lista_2 = []
for num in lista_1:
    lista_2.append(num*num)
print(lista_2)
```

**3.2. Ejemplo comprensión de listas:**

```python
lista_1 = [1, 2, 3, 4, 5]
lista_2 = [num*num for num in lista_1]
print(lista_2)
```
<br>


## 4. ¿Qué es un argumento?
<p>Lo primero que debemos tener claro es saber la diferencias entre argumentos y parámetros. Recordando que un argumento no será más que el valor que vamos a ingresar al momento de llamar a una función, y los parámetros serán variables definidas en la función misma que podrán almacenar los argumentos ingresados.</p>

**4.1. Argumento en una llamada a la función:**

![GitHub Image](images/param_arg.png)

En el ejemplo siguiente, <code>24</code>, <code>Junio</code> y <code>1985</code> son los argumentos que se le estan pasando en la llamada a la función.

```python
def fecha_nacimiento(dia, mes, anio):
    return f'Mi fecha de nacimiento es el {dia} de {mes} de {anio}'

resultado = fecha_nacimiento(24, 'Junio', 1985)
print(resultado)

# salida: Mi fecha de nacimiento es el 24 de Junio de 1985
```
<br>


## 5. ¿Qué es una función Lambda?
<p>Una función Lambda lo que hace es crear pequeñas funciones anónimas sobre la marcha. Son perfectas para simplificar tareas a corto plazo y son más concisos y se definen en una sola línea sin necesidad de una declaración return.</p>
<p>Esto las hace ideales para operaciones sencillas de una sola vez.</p>

**5.1. Función estandar:**

```python
def sumar(a, b):
    return a + b

resultado = sumar(6, 4)
print(resultado) # resultado: 10
```

**5.2. Función Lambda:**

```python
suma = lambda a, b: a + b
print(suma(6, 4)) # resultado: 10
```
<br>


## 6. ¿Qué es un paquete pip?
<p>pip es un sistema de gestión de paquetes para Python. Su nombre proviene de “Pip Installs Packages”.</p>
<p>Los comandos mas utilizados son de instalar, actualizar, eliminar y comprobar la versión desde la terminal.</p>

Comandos desde windows:

```
pip install nombre_libreria -------------> Para instalar libreria.
pip install Nombre_libreria==2.1.1 ------> Para instalar una version especifica.
pip install nombre_libreria --upgrade ---> Para actualizar libreria.
pip install --upgrade pip ---------------> Para actualizar todos los paquetes instalados a su ultima versión.
pip unistall nombre_libreria ------------> Para desistalar libreria.
py --version ----------------------------> Para comprobar la version de python instalada.
pip freeze ------------------------------> Para mostrar una lista de las librerias instaladas.
```

<p>Una librería responde al conjunto de funcionalidades que permiten al usuario  llevar a cabo nuevas tareas que antes no se podían realizar o requerian muchisimas lineas de código.</p>

**6.1. Librería básica de Python:**
<p>Las librerías de Python básicas o bibliotecas estándar de Python son aquellas que vienen ya junto a Python. A continuación mencionare algunas.</p>

  - math
  - re

**6.2. Librerías de terceros:**
<p>A través de Pip es posible instalar paquetes y librerías de terceros de manera sencilla y eficiente. A continuación mencionare algunas.</p>

  - beautifulsoup
  - request
  - pandas
  - numpy

**6.3. Instalación de librerias en entornos virtuales:**
<p>Una de las principales ventajas de trabajar con ambientes virtuales es que nos permite crear entornos de desarrollo independientes para cada proyecto. De esta manera, no habrá conflictos entre las versiones de las distintas librerías que usemos en diferentes proyectos. A continuación mencionare una.</p>

  - virtualenv
