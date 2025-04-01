# ejercicio 01
'''
Cree una clase de Python llamada Usuario que use el método init y cree un nombre de usuario y una contraseña.
Crea un objeto usando la clase.
'''

class Usuario:

    def __init__(self, user, password):
        self.user = user
        self.password = password

        print(f'Usuario: {user}\nContraseña: {password}')
    
objeto = Usuario('Roberto', '1234')
print(objeto)