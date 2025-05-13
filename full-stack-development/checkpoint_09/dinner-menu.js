/******************************/
/* Aplication coded by Zuluta */
/* 2025                       */
/******************************/



// lista de menus
const menu = {
    desayuno: {
        primero: {
            1: {
                descripcion: '1. Batido con avena, plátano y fresas',
                precio: 4.50
            },
            2: {
                descripcion: '2. Pasta con atún',
                precio: 3.95
            },
            3: {
                descripcion: '3. Crema de verduras',
                precio: 4.95
            }
        },
        segundo: {
            1: {
                descripcion: '1. Pimientos rellenos de bacalao',
                precio: 6.50
            },
            2: {
                descripcion: '2. Pan de centeno con queso de cabra',
                precio: 7.80
            },
            3: {
                descripcion: '3. Tostada con aguacate',
                precio: 5.80
            }
        }
    },
    comida: {
        primero: {
            1: {
                descripcion: '1. Menestra de verduras',
                precio: 5.60
            },
            2: {
                descripcion: '2. Crema de calabaza',
                precio: 4.80
            },
            3: {
                descripcion: '3. Brócoli con ajo',
                precio: 5.20
            }
        },
        segundo: {
            1: {
                descripcion: '1. Merluza en salsa verde',
                precio: 6.20
            },
            2: {
                descripcion: '2. Solomillo de cerdo',
                precio: 8.20
            },
            3: {
                descripcion: '3. Salmón al papillote',
                precio: 10.80
            }
        }
    },
    cena: {
        primero: {
            1: {
                descripcion: '1. Borraja con langostinos',
                precio: 4.50
            },
            2: {
                descripcion: '2. Calabacines rellenos',
                precio: 6.20
            },
            3: {
                descripcion: '3. Espinacas con patata',
                precio: 5.95
            }
        },
        segundo: {
            1: {
                descripcion: '1. Pechuga de pollo con tomate',
                precio: 7.40
            },
            2: {
                descripcion: '2. Merluza en salsa verde',
                precio: 9.95
            },
            3: {
                descripcion: '3. Brocheta de langostinos',
                precio: 10.50
            }
        }
    },
    postre: {
        1: {
            descripcion: '1. Macedonia',
            precio: 2.40
        },
        2: {
            descripcion: '2. Arroz con leche',
            precio: 3.50
        },
        3: {
            descripcion: '3. Natilla',
            precio: 2.80
        },
        4: {
            descripcion: '4. Flan casero',
            precio: 2.50
        },
        5: {
            descripcion: '5. Tarta de queso',
            precio: 4.20
        },
        6: {
            descripcion: '6. Tarta de manzana',
            precio: 4.20
        },
        7: {
            descripcion: '7. Tarta al whisky',
            precio: 2.60
        }
    },
    bebida: {
        1: {
            descripcion: '1. Agua',
            precio: 1.60
        },
        2: {
            descripcion: '2. Sidra',
            precio: 3.95
        },
        3: {
            descripcion: '3. Vino tinto',
            precio: 3.95
        }
    }
};



// mensaje de recepcion
const msgRecepcion = `¡Bienvenido/a! Gracias por elegir DevCamp.
Nuestro horario de atención es de 06:00 a 23:59 horas de lunes a domingo.
Introduzca una hora en formato 00:00 24h para reservar su mesa:`

// mensaje de turno actual
const msgTurnoDesayuno = 'Pide su desayuno...';
const msgTurnoComida = 'Pide su comida...';
const msgTurnoCena = 'Pide su cena...';

// mensaje de menu seleccion
const msgMenuPrimero = 'De primero tenemos lo siguiente:';
const msgMenuSegundo = 'De segundo tenemos lo siguiente:';
const msgMenuPostre = 'De postre tenemos lo siguiente:';
const msgMenuBebida = 'Para beber tenemos lo siguiente:';

// mensaje de seleccione numero
const msgSeleccioneNumero = 'Seleccione un número: ';
const msgNumeroIncorrecto = '¡El número seleccionado no es correcto! vuelva a intentarlo.';

// mensaje de factura disponible
const msgFactura = '¡Ya tiene disponible su factura!';

// array de frases
const arrayFrases = [
    '¡Es un plato delicioso!',
    '¡Tiene un sabor espectacular!',
    '¡Elegiste un plato muy sabroso!',
    '¡Buena elección!',
    '¡Este plato es un clásico!'
];

// mensaje de frase aleatoria
const fraseAleatoria_1 = arrayFrases[Math.floor(Math.random() * arrayFrases.length)];
const fraseAleatoria_2 = arrayFrases[Math.floor(Math.random() * arrayFrases.length)];
const fraseAleatoria_3 = arrayFrases[Math.floor(Math.random() * arrayFrases.length)];

// numeros de menu seleccionado
let numeroPrimerPlato = '';
let numeroSegundoPlato = '';
let numeroPostre = '';
let numeroBebida = '';

// descripcion de menu seleccionado
let descripcionPrimerPlato = '';
let descripcionSegundoPlato = '';
let descripcionPostre = '';
let descripcionBebida = '';

// precio de menu seleccionado
let precioPrimerPlato = '';
let precioSegundoPlato = '';
let precioPostre = '';
let precioBebida = '';

// patron regex horario de 00:00 a 23:59
const regexValidarHora = /^([01][0-9]|2[0-3]):[0-5][0-9]/g;

// patron regex restaurante abierto de 06:00 a 23:59
const regexAbierto = /^([0][6-9]|1[0-9]|2[0-3]):[0-5][0-9]/g;

// patron regex turno
const regexDesayuno = /^([0][6-9]|1[0-1]):[0-5][0-9]/g; // 06:00 a 11:59
const regexComida = /^([1][2-7]):[0-5][0-9]/g; // 12:00 a 17:59
const regexCena = /^([1][8-9]|2[0-3]):[0-5][0-9]/g; // 18:00 a 23:59

// patron regex factura
const regexPrecioSeleccion = /([...]{3}\s{1})(.*)[€]/g;



// funcion para comer en restaurante
function restaurante() {

    // reservar mesa restaurante
    const reservaMesa = prompt(`${msgRecepcion}`);

    // horario de servicio
    const restauranteAbierto = reservaMesa.match(regexAbierto);
    const servicioDesayuno = reservaMesa.match(regexDesayuno);
    const servicioComida = reservaMesa.match(regexComida);
    const servicioCena = reservaMesa.match(regexCena);

    // condicion horaria 06:00 a 23:59
    if (restauranteAbierto) {

        // condicion horaria 06:00 a 11:59
        if (servicioDesayuno) {
            primerPlato();

            // funcion para pedir el primer plato
            function primerPlato() {

                numeroPrimerPlato = prompt(`${msgTurnoDesayuno}\n\n${msgMenuPrimero}\n\n${menu.desayuno.primero[1].descripcion} ... ${menu.desayuno.primero[1].precio.toFixed(2)}€\n${menu.desayuno.primero[2].descripcion} ... ${menu.desayuno.primero[2].precio.toFixed(2)}€\n${menu.desayuno.primero[3].descripcion} ... ${menu.desayuno.primero[3].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroPrimerPlato >= '1' && numeroPrimerPlato <= '3') {

                    descripcionPrimerPlato = menu.desayuno.primero[numeroPrimerPlato].descripcion;
                    precioPrimerPlato = menu.desayuno.primero[numeroPrimerPlato].precio.toFixed(2);
                    
                    alert(`Seleccionado: ${descripcionPrimerPlato} ... ${precioPrimerPlato}€\n\n${fraseAleatoria_1}`);
                    segundoPlato();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    primerPlato();
                }
            }

            // funcion para pedir el segundo plato
            function segundoPlato() {

                numeroSegundoPlato = prompt(`${msgTurnoDesayuno}\n\n${msgMenuSegundo}\n\n${menu.desayuno.segundo[1].descripcion} ... ${menu.desayuno.segundo[1].precio.toFixed(2)}€\n${menu.desayuno.segundo[2].descripcion} ... ${menu.desayuno.segundo[2].precio.toFixed(2)}€\n${menu.desayuno.segundo[3].descripcion} ... ${menu.desayuno.segundo[3].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroSegundoPlato >= '1' && numeroSegundoPlato <= '3') {

                    descripcionSegundoPlato = menu.desayuno.segundo[numeroSegundoPlato].descripcion;
                    precioSegundoPlato = menu.desayuno.segundo[numeroSegundoPlato].precio.toFixed(2);

                    alert(`Seleccionado: ${descripcionSegundoPlato} ... ${precioSegundoPlato}€\n\n${fraseAleatoria_2}`);
                    postre();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    segundoPlato();
                }
            }

            // funcion para pedir el postre
            function postre() {

                numeroPostre = prompt(`${msgTurnoDesayuno}\n\n${msgMenuPostre}\n\n${menu.postre[1].descripcion} ... ${menu.postre[1].precio.toFixed(2)}€\n${menu.postre[2].descripcion} ... ${menu.postre[2].precio.toFixed(2)}€\n${menu.postre[3].descripcion} ... ${menu.postre[3].precio.toFixed(2)}€\n${menu.postre[4].descripcion} ... ${menu.postre[4].precio.toFixed(2)}€\n${menu.postre[5].descripcion} ... ${menu.postre[5].precio.toFixed(2)}€\n${menu.postre[6].descripcion} ... ${menu.postre[6].precio.toFixed(2)}€\n${menu.postre[7].descripcion} ... ${menu.postre[7].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroPostre >= '1' && numeroPostre <= '7') {

                    descripcionPostre = menu.postre[numeroPostre].descripcion;
                    precioPostre = menu.postre[numeroPostre].precio.toFixed(2);

                    alert(`Seleccionado: ${descripcionPostre} ... ${precioPostre}€\n\n${fraseAleatoria_3}`);
                    bebida();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    postre();
                }
            }

            // funcion para pedir la bebida
            function bebida() {

                numeroBebida = prompt(`${msgTurnoDesayuno}\n\n${msgMenuBebida}\n\n${menu.bebida[1].descripcion} ... ${menu.bebida[1].precio.toFixed(2)}€\n${menu.bebida[2].descripcion} ... ${menu.bebida[2].precio.toFixed(2)}€\n${menu.bebida[3].descripcion} ... ${menu.bebida[3].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroBebida >= '1' && numeroBebida <= '3') {

                    descripcionBebida = menu.bebida[numeroBebida].descripcion;
                    precioBebida = menu.bebida[numeroBebida].precio.toFixed(2);

                    alert(`Seleccionado: ${descripcionBebida} ... ${precioBebida}€`);
                    factura();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    bebida();
                }
            }

        // condicion horaria 12:00 a 17:59
        } else if (servicioComida) {
            primerPlato();

            // funcion para pedir el primer plato
            function primerPlato() {

                numeroPrimerPlato = prompt(`${msgTurnoComida}\n\n${msgMenuPrimero}\n\n${menu.comida.primero[1].descripcion} ... ${menu.comida.primero[1].precio.toFixed(2)}€\n${menu.comida.primero[2].descripcion} ... ${menu.comida.primero[2].precio.toFixed(2)}€\n${menu.comida.primero[3].descripcion} ... ${menu.comida.primero[3].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroPrimerPlato >= '1' && numeroPrimerPlato <= '3') {

                    descripcionPrimerPlato = menu.comida.primero[numeroPrimerPlato].descripcion;
                    precioPrimerPlato = menu.comida.primero[numeroPrimerPlato].precio.toFixed(2);

                    alert(`Seleccionado: ${descripcionPrimerPlato} ... ${precioPrimerPlato}€\n\n${fraseAleatoria_1}`);
                    segundoPlato();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    primerPlato();
                }
            }

            // funcion para pedir el segundo plato
            function segundoPlato() {

                numeroSegundoPlato = prompt(`${msgTurnoComida}\n\n${msgMenuSegundo}\n\n${menu.comida.segundo[1].descripcion} ... ${menu.comida.segundo[1].precio.toFixed(2)}€\n${menu.comida.segundo[2].descripcion} ... ${menu.comida.segundo[2].precio.toFixed(2)}€\n${menu.comida.segundo[3].descripcion} ... ${menu.comida.segundo[3].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroSegundoPlato >= '1' && numeroSegundoPlato <= '3') {

                    descripcionSegundoPlato = menu.comida.segundo[numeroSegundoPlato].descripcion;
                    precioSegundoPlato = menu.comida.segundo[numeroSegundoPlato].precio.toFixed(2);

                    alert(`Seleccionado: ${descripcionSegundoPlato} ... ${precioSegundoPlato}€\n\n${fraseAleatoria_2}`);
                    postre();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    segundoPlato();
                }
            }

            // funcion para pedir el postre
            function postre() {

                numeroPostre = prompt(`${msgTurnoComida}\n\n${msgMenuPostre}\n\n${menu.postre[1].descripcion} ... ${menu.postre[1].precio.toFixed(2)}€\n${menu.postre[2].descripcion} ... ${menu.postre[2].precio.toFixed(2)}€\n${menu.postre[3].descripcion} ... ${menu.postre[3].precio.toFixed(2)}€\n${menu.postre[4].descripcion} ... ${menu.postre[4].precio.toFixed(2)}€\n${menu.postre[5].descripcion} ... ${menu.postre[5].precio.toFixed(2)}€\n${menu.postre[6].descripcion} ... ${menu.postre[6].precio.toFixed(2)}€\n${menu.postre[7].descripcion} ... ${menu.postre[7].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroPostre >= '1' && numeroPostre <= '7') {

                    descripcionPostre = menu.postre[numeroPostre].descripcion;
                    precioPostre = menu.postre[numeroPostre].precio.toFixed(2);

                    alert(`Seleccionado: ${descripcionPostre} ... ${precioPostre}€\n\n${fraseAleatoria_3}`);
                    bebida();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    postre();
                }
            }

            // funcion para pedir la bebida
            function bebida() {

                numeroBebida = prompt(`${msgTurnoComida}\n\n${msgMenuBebida}\n\n${menu.bebida[1].descripcion} ... ${menu.bebida[1].precio.toFixed(2)}€\n${menu.bebida[2].descripcion} ... ${menu.bebida[2].precio.toFixed(2)}€\n${menu.bebida[3].descripcion} ... ${menu.bebida[3].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroBebida >= '1' && numeroBebida <= '3') {

                    descripcionBebida = menu.bebida[numeroBebida].descripcion;
                    precioBebida = menu.bebida[numeroBebida].precio.toFixed(2);

                    alert(`Seleccionado: ${descripcionBebida} ... ${precioBebida}€`);
                    factura();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    bebida();
                }
            }

        // condicion horaria 18:00 a 23:59
        } else if (servicioCena) {
            primerPlato();

            // funcion para pedir el primer plato
            function primerPlato() {

                numeroPrimerPlato = prompt(`${msgTurnoCena}\n\n${msgMenuPrimero}\n\n${menu.cena.primero[1].descripcion} ... ${menu.cena.primero[1].precio.toFixed(2)}€\n${menu.cena.primero[2].descripcion} ... ${menu.cena.primero[2].precio.toFixed(2)}€\n${menu.cena.primero[3].descripcion} ... ${menu.cena.primero[3].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroPrimerPlato >= '1' && numeroPrimerPlato <= '3') {

                    descripcionPrimerPlato = menu.cena.primero[numeroPrimerPlato].descripcion;
                    precioPrimerPlato = menu.cena.primero[numeroPrimerPlato].precio.toFixed(2);

                    alert(`Seleccionado: ${descripcionPrimerPlato} ... ${precioPrimerPlato}€\n\n${fraseAleatoria_1}`);
                    segundoPlato();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    primerPlato();
                }
            }

            // funcion para pedir el segundo plato
            function segundoPlato() {

                numeroSegundoPlato = prompt(`${msgTurnoCena}\n\n${msgMenuSegundo}\n\n${menu.cena.segundo[1].descripcion} ... ${menu.cena.segundo[1].precio.toFixed(2)}€\n${menu.cena.segundo[2].descripcion} ... ${menu.cena.segundo[2].precio.toFixed(2)}€\n${menu.cena.segundo[3].descripcion} ... ${menu.cena.segundo[3].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroSegundoPlato >= '1' && numeroSegundoPlato <= '3') {

                    descripcionSegundoPlato = menu.cena.segundo[numeroSegundoPlato].descripcion;
                    precioSegundoPlato = menu.cena.segundo[numeroSegundoPlato].precio.toFixed(2);

                    alert(`Seleccionado: ${descripcionSegundoPlato} ... ${precioSegundoPlato}€\n\n${fraseAleatoria_2}`);
                    postre();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    segundoPlato();
                }
            }

            // funcion para pedir el postre
            function postre() {

                numeroPostre = prompt(`${msgTurnoCena}\n\n${msgMenuPostre}\n\n${menu.postre[1].descripcion} ... ${menu.postre[1].precio.toFixed(2)}€\n${menu.postre[2].descripcion} ... ${menu.postre[2].precio.toFixed(2)}€\n${menu.postre[3].descripcion} ... ${menu.postre[3].precio.toFixed(2)}€\n${menu.postre[4].descripcion} ... ${menu.postre[4].precio.toFixed(2)}€\n${menu.postre[5].descripcion} ... ${menu.postre[5].precio.toFixed(2)}€\n${menu.postre[6].descripcion} ... ${menu.postre[6].precio.toFixed(2)}€\n${menu.postre[7].descripcion} ... ${menu.postre[7].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroPostre >= '1' && numeroPostre <= '7') {

                    descripcionPostre = menu.postre[numeroPostre].descripcion;
                    precioPostre = menu.postre[numeroPostre].precio.toFixed(2);

                    alert(`Seleccionado: ${descripcionPostre} ... ${precioPostre}€\n\n${fraseAleatoria_3}`);
                    bebida();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    postre();
                }
            }

            // funcion para pedir la bebida
            function bebida() {

                numeroBebida = prompt(`${msgTurnoCena}\n\n${msgMenuBebida}\n\n${menu.bebida[1].descripcion} ... ${menu.bebida[1].precio.toFixed(2)}€\n${menu.bebida[2].descripcion} ... ${menu.bebida[2].precio.toFixed(2)}€\n${menu.bebida[3].descripcion} ... ${menu.bebida[3].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroBebida >= '1' && numeroBebida <= '3') {

                    descripcionBebida = menu.bebida[numeroBebida].descripcion;
                    precioBebida = menu.bebida[numeroBebida].precio.toFixed(2);

                    alert(`Seleccionado: ${descripcionBebida} ... ${precioBebida}€`);
                    factura();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    bebida();
                }
            }

        } else {
            alert('¡No hay servicio disponible!');
        }
    } else {
        alert('¡Cerrado! Horario: 06:00 a 23:59 de lunes a domingo.');
    }
}



// funcion para generar factura
function factura() {

    // convertir string en numero
    const primero = parseFloat(precioPrimerPlato);
    const segundo = parseFloat(precioSegundoPlato);
    const postre = parseFloat(precioPostre);
    const bebida = parseFloat(precioBebida);

    // calcular precio total
    const pagarTotal = primero + segundo + postre + bebida;

    alert(`${msgFactura}\n\n${descripcionPrimerPlato} ... ${precioPrimerPlato}€\n${descripcionSegundoPlato} ... ${precioSegundoPlato}€\n${descripcionPostre} ... ${precioPostre}€\n${descripcionBebida} ... ${precioBebida}€\n\nTotal a pagar: ${pagarTotal.toFixed(2)}€`);
}



// invoca a la funcion restaurante
restaurante();
