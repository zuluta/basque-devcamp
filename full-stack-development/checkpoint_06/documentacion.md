
# <p align="center">Checkpoint 06</p>

## <p>📄 Documentación python 🐍</p>
|Contenido    |
|-----------------|
|**1. Introducción al uso de clases** |
|**2. Introducción a los métodos dunder**  |
|**3. Decoradores** |
|**4. -** |
|**5. -** |
|**6. -** |
<br>
<br>
<hr>

## 1. Introducción al uso de clases
<p>Python es un lenguaje orientado a objetos, no es necesario hacer uso de ellas para poder crear un programa. De hecho, hemos estado trabajando hasta ahora sin hacer mención a ellas ni emplearlas.</p>

<p>Hasta ahora, hemos construido aplicaciones pequeñas de manera secuenciada y desorganizada. Esto no significa que lo hayamos hecho mal, lo que quiero decir es, que cuando empecemos a crear aplicaciones diámicas y sean mas complejas, necesitaremos mejorar la estructura del código, la organización y crear código reutilizable y facilitar su mantenimiento.</p>
<br>

### 1.1. Clase estática:

> [!Caution]
> Hay que evitar el mal uso de las clases, en este ejemplo, vemos que las variables no son reutilizables, tampoco podemos pasarle argumentos.
<br>

[![Git Hub Image](images/01.class_descripcion.png)](#)
<br>

<p><strong>Código Python 👇</strong></p>

```python
class Cliente:

    dni = '88521596P'
    nombre = 'Luis'
    apellido = 'Mendoza'

    def __init__(self):
        print(f'DNI: {self.dni}\nNombre: {self.nombre}\nApellido: {self.apellido}')


Cliente()

# salida:
    # DNI: 88521596P
    # Nombre: Luis
    # Apellido: Mendoza
```

- ❌ Estructurado.
- ❌ Organizado.
- ❌ Escalable.
- ❌ Reutilizable.
<br>

### 1.2. Clase dinámica:

<p>La manera recomendada de contruir aplicaciónes con <strong>código reutilizable</strong> y <strong>organizada</strong>, es con el uso de las <strong>clases</strong>. Al principio, es normal que te sientas perdido con todo esto de las clases, pero no te preocupes, todos hemos pasado por esta etapa.</p>

<p>Para crear una clase, vamos a emplear la palabra reservada <code>class</code> seguido de un nombre escrito en PascalCase, primera letra de cada palabra se escribe en mayúscula, y sin guiones bajos. Sabemos que las <strong>clases</strong> pueden contener <strong>funciones</strong>, a las que llamamos <strong>métodos</strong>. Una <strong>clase</strong> también puede contener <strong>variables</strong>, a las que se conoce con el nombre de <strong>atributos</strong>. Para crear <strong>atributos</strong>, primero definimos un <strong>método especial</strong> llamado <code>__init__()</code>, que es invocado por Python automáticamente siempre que se crea una instancia de la clase (conocido también como <strong>constructor</strong> o <strong>inicializador</strong>).</p>

<p>Los <strong>clientes</strong> que vayamos a crear, no tendrán el mismo <code>dni</code>, <code>nombre</code> ni <code>apellido</code>. Por ello sería conveniente permitir que, al definir una instancia, se pase como <strong>argumento</strong> el <strong>dni del cliente</strong> y éste se almacene en el <strong>atributo</strong> <code>self.dni</code>, <strong>nombre del cliente</strong> en el <strong>atributo</strong> <code>self.nombre</code> y <strong>apellido del cliente</strong> en el <strong>atributo</strong> <code>self.apellido</code>.</p>
<br>

> [!IMPORTANT]
> Dentro de la clase, las variables pasan a llamarse <strong>atributos</strong>, el <strong>primer atributo obligatorio</strong> siempre sera <code>self</code>, las funciones pasan a llamarse <strong>métodos</strong>, nos permite pasarle <strong>argumentos</strong> y eso hace que el código sea <strong>reutilizable</strong>. Estas son las razones por el cual se crearon las clases en programación.
<br>

[![Git Hub Image](images/02.class_descripcion.png)](#)
<br>

<p><strong>Código Python 👇</strong></p>

```python
class Cliente:
    def __init__(self, dni, nombre, apellido):
        self.dni = dni
        self.nombre = nombre
        self.apellido = apellido
        
        print(f'DNI: {self.dni}\nNombre: {self.nombre}\nApellido: {self.apellido}')

Cliente('88521596P', 'Luis', 'Mendoza')
Cliente('96452178K', 'Maribel', '')

# salida:
    # DNI: 88521596P
    # Nombre: Luis
    # Apellido: Mendoza
    # DNI: 96452178K
    # Nombre: Maribel
    # Apellido:
```
<br>

### 1.3. Crear objetos con clase:
>[!TIP]
>Antes del auge de la POO, la programación estaba dominada por el paradigma procedimental. Este enfoque estructuraba los programas como una serie de instrucciones secuenciales y dependía en gran medida de funciones y datos globales. Si bien este modelo era efectivo para problemas simples, se volvió difícil de manejar a medida que los sistemas se hicieron más complejos debido a la falta de separación clara entre los datos y las operaciones.
<br>

**Python es un lenguaje multiparadigma:**
  - Soporta la programación imperativa y funcional.
  - Soporta la programación orientada a objetos (POO).
<br>

<p>En este ejemplo, vamos a crear <strong>2 objetos</strong> que se van a llamar <code>cli_1</code> y <code>cli_2</code>. <code>cli_1</code> va tener DNI, Nombre, Apellido y el <code>cli_2</code> va tener solamente DNI, Nombre. La ventaja de poder crear estos objetos de una forma tan simplificada, es impresionante.</p>
<br>

<p><strong>Código Python 👇</strong></p>

```python
class Cliente:

    def __init__(self, dni, nombre, apellido):
        self.dni = dni
        self.nombre = nombre
        self.apellido = apellido

cli_1 = Cliente('88521596P', 'Luis', 'Mendoza')
cli_2 = Cliente('96452178K', 'Maribel', '')

print(f'DNI: {cli_1.dni}\nNombre: {cli_1.nombre}\nApelllido: {cli_1.apellido}')
print(f'DNI: {cli_2.dni}\nNombre: {cli_2.nombre}')

# salida:
    # DNI: 88521596P
    # Nombre: Luis
    # Apellido: Mendoza
    # DNI: 96452178K
    # Nombre: Maribel
    # Apellido:
```
<br>

### 1.4. Métodos dentro de una clase:
<p>En este ejemplo, vamos a crear un <strong>método normal</strong> llamado <code>cuenta</code>, el <strong>primer atributo</strong> obligatorio se llama <code>self</code>, seguido pondremos nuestros <strong>atributos</strong> opcionales separadas por una <code>,</code>coma y cerramos la linea con <code>:</code> dos puntos.</p>

<p>Dentro del método, <strong>indentamos</strong> con 4 espacios para empezar a escribir nuestro <strong>código de ejecución</strong>. En este caso, vamos a emplear <code>return</code> para retornar un mensaje que ponga <strong>Cuenta: El cliente ????????? tiene cuenta</strong>. Con esto, ya tendriamos nuestra clase completado.</p>

<p>Utilizaremos los mismos <strong>objetos</strong> <code>cli_1</code> y <code>cli_2</code> creados en el ejercicio anterior. La forma de acceder a ello es, llamamos primero al objeto <code>cli_1</code> y ponemos un <code>.</code> punto y llamamos al metodo <code>cuenta</code>. Al tratarse de un método, como toda función, devemos cerrarla con <code>()</code>parentesis. El código quedaria de la siguiente manera <code>cli_1.cuenta()</code></p>

<p>Finalizamos el ejemplo con la función <code>print()</code> para <strong>imprimir en pantalla</strong> lo que hemos programado en esta <strong>clase</strong>, <code>print(cli_1.cuenta())</code> y <code>print(cli_2.cuenta())</code></p>
<br>

<p><strong>Código Python 👇</strong></p>

```python
class Cliente:

    def __init__(self, dni, nombre, apellido):
        self.dni = dni
        self.nombre = nombre
        self.apellido = apellido

    def cuenta(self):
        return f'Cuenta: El cliente {self.dni} tiene cuenta'

cli_1 = Cliente('88521596P', 'Luis', 'Mendoza')
cli_2 = Cliente('96452178K', 'Maribel', '')

print(cli_1.cuenta())
print(cli_2.cuenta())

# salida:
    # Cuenta: El cliente 88521596P tiene cuenta
    # Cuenta: El cliente 96452178K tiene cuenta
```
<br>

### 1.5. Estructura básica de una clase:

<p>Llegados aqui, aprenderemos los conceptos básicos que construyen una clase. Trata de leer el código y entender lo que sucede en cada paso.</p>

[![Git Hub Image](images/03.class_descripcion.png)](#)

> [!NOTE]
> **Descripción de conceptos:**
>
> 1. `class` Declara una <strong>clase</strong>.
> 2. `Cliente` Asigna un <strong>nombre</strong> a la clase, siempre en PascalCase y sin guiones bajos.
> 3. `password = '1234'` Declara una <strong>variable de clase</strong>.
> 4. `def` Declara un <strong>método</strong>.
> 5. `__init__` Lleva dos guiones al principio y al final del nombre, se le conoce como <strong>método dunder, especial o mágico</strong>.
> 6. `self` Es el <strong>primer atributo obligatorio</strong> siempre.
> 7. `dni`,<code>nombre</code>, <code>apellido</code> Se llaman <strong>atributos</strong> del método y van separados por una <code>,</code> coma.
> 8. `self.dni` Declara una <strong>variable de instancia</strong>.
> 9. `dni` Guarda el <strong>valor</strong> de la variable de instancia.
> 10. `cuenta` Asigna un <strong>nombre</strong> al método.
> 11. `self.password` <strong>Hace referencia</strong> a la variable de instancia para retornar su valor.
> 12. `cli_1` Crea un <strong>objeto</strong>.
> 13. `Cliente` <strong>Invoca</strong> a la clase desde cualquier parte de la aplicación.
> 14. `'88521596P'`, <code>'Luis'</code>, <code>'Mendoza'</code> Se llaman <strong>argumentos</strong>.
> 15. `Print` Es una función para <strong>imprimir</strong> en pantalla.
> 16. `cli_1.cuenta` hace referencia al <strong>objeto</strong> <code>cli_1</code> para acceder a la clase y ejecutar el <strong>método</strong> <code>cuenta</code>.
> 17. Visualizamos los datos en la pantalla.
<br>

<p><strong>Código Python 👇</strong></p>

```python
class Cliente:
    password = '1234'

    def __init__(self, dni, nombre, apellido):
        self.dni = dni
        self.nombre = nombre
        self.apellido = apellido

    def cuenta(self):
        return f'{self.nombre} {self.apellido}:\nUsuario: {self.dni}\nContraseña: {self.password}'

cli_1 = Cliente('88521596P', 'Luis', 'Mendoza')
cli_2 = Cliente('96452178K', 'Maribel', 'Garcia')

print(cli_1.cuenta())
print(cli_2.cuenta())

# salida:
    # Luis Mendoza:
    # Usuario: 88521596P
    # Contraseña: 1234
    # Maribel Garcia:
    # Usuario: 96452178K
    # Contraseña: 1234
```
- ✅ Facil de estructurar.
- ✅ Facil de organizar.
- ✅ Facil de leer.
- ✅ Facil de escalar.
- ✅ Código reutilizable.

> [!IMPORTANT]
> Las variables de clase son útiles cuando queremos utilizar un mismo valor en cualquiera de los metodos. Son accesibles desde cualquier método. Dentro de las clases, no se recomienda el uso de las condicionales. Su uso está enfocado en gestionar datos y métodos.

💬 Es fundamental entender bien la estructura y la lógica de las clases para poder seguir avanzando y evitar estancamientos en el futuro.
<br>
<br>
<br>
<hr>

## 2. Introducción a los métodos dunder:

<p>En programación orientada a objetos, los métodos dunder o métodos mágicos son funciones especiales que permiten definir comportamientos específicos para las clases. Estos métodos se llaman “mágicos” porque su nombre comienza y termina con dos guiones bajos (__).</p>

> [!TIP]
> Los métodos mágicos son una herramienta poderosa que permite definir comportamientos específicos para las clases en Python. Utilizarlos de forma adecuada puede hacer que nuestro código sea más fácil de entender y mantener.
<br>

### 📚 **Tipos de métodos dunder:**

- `__init__` Se utiliza para inicializar objetos y es invocado automáticamente cuando se crea una instancia de la clase.
- `__str__` Se utiliza para representar el objeto en forma de cadena de texto.
- `__len__` Permite determinar la longitud de un objeto.

<p>Existen muchos otros métodos mágicos que pueden ser útiles, como <code>__add__</code> (para sumar objetos), <code>__eq__</code> (para comparar igualdad), <code>__lt__</code> (para comparar menor que), entre otros. Sin embargo, es importante tener en cuenta que no siempre es necesario utilizar estos métodos y que su uso variará dependiendo de cada caso específico.</p>
<br>

- **Ejemplo `__init__` 👇**
```python
class Persona:
    def __init__(self, nombre):
        self.nombre = nombre

p = Persona('Juan')
print(p.nombre)
```

- **Ejemplo `__init__` con `__str_` 👇**
```python
class Persona:
    def __init__(self, nombre):
        self.nombre = nombre

    def __str__(self):
        return f'Mi nombre es {self.nombre}'

p = Persona('Juan')
print(p)
```

- **Ejemplo `__init__` con `__len__` 👇**
```python
class Lista:
    def __init__(self, elementos):
        self.elementos = elementos

    def __len__(self):
        return len(self.elementos)

l = Lista([1,2,3,4,5])
print(len(l)) # Imprime 5
```

> [!NOTE]
> El primer ejemplo y el segundo ejemplo tienen el mismo resultado, lo que hace el método dunder `__str__` es convertir el objeto en una cadena de texto.
<br>
<hr>

## 3. Decoradores:
