/*
Cree una función JS:
    - Que acepte 4 argumentos.
    - Suma los dos primeros argumentos, luego los dos segundos y multiplícalos.
    - Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!".
    - Si es más pequeño, la consola registra "¡El número es menor que 50!"
*/

// funcion para calcular
function calcular(a, b, c, d) {
    const operacion = (a + b) * (c + d);

    // operador ternario
    const resultado = operacion >= 50 ? '¡El número es mayor que 50!' : '¡El número es menor que 50!';
    console.log(resultado);
}

// invoca a la funcion + argumentos
calcular(2, 5, 4, 6); // Salida: ¡El número es mayor que 50!
