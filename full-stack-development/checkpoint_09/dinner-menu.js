/******************************/
/* Aplication coded by Zuluta */
/* 2025                       */
/******************************/



// menu restaurante
const menuDesayuno = {
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
};

const menuComida = {
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
};

const menuCena = {
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
};

const menuPostre = {
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
};

const menuBebida = {
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
};

// mensaje de recepcion
const msgRecepcion = `¡Bienvenido/a! Gracias por elegir DevCamp.
Nuestro horario de atención es de 06:00 a 23:59 horas de lunes a domingo.
Introduzca una hora en formato 00:00 24h para reservar su mesa:`

// mensaje de turno actual
const msgTurnoDesayuno = '¡Estas en horario de desayuno!';
const msgTurnoComida = '¡Estas en horario de comida!';
const msgTurnoCena = '¡Estas en horario de cena!';

// mensaje de menu seleccion
const msgMenuPrimero = 'De primero tenemos lo siguiente:';
const msgMenuSegundo = 'De segundo tenemos lo siguiente:';
const msgMenuPostre = 'De postre tenemos lo siguiente:';
const msgMenuBebida = 'Para beber tenemos lo siguiente:';

// mensaje de seleccione numero
const msgSeleccioneNumero = 'Seleccione un número: ';
const msgNumeroIncorrecto = '¡El número seleccionado no es correcto! vuelva a intentarlo.';

// mensaje de factura disponible
const msgFactura = '¡Ya tienes disponible tu factura!';

// array de frases
const arrayFrases = [
    '¡Es un plato delicioso!',
    '¡Tiene un sabor espectacular!',
    '¡Elegiste un plato muy sabroso!',
    '¡Buena elección!',
    '¡Este plato es un clásico!'
];

// frase aleatoria
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

                numeroPrimerPlato = prompt(`${msgTurnoDesayuno}\n\n${msgMenuPrimero}\n\n${menuDesayuno.primero[1].descripcion} ... ${menuDesayuno.primero[1].precio.toFixed(2)}€\n${menuDesayuno.primero[2].descripcion} ... ${menuDesayuno.primero[2].precio.toFixed(2)}€\n${menuDesayuno.primero[3].descripcion} ... ${menuDesayuno.primero[3].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroPrimerPlato >= '1' && numeroPrimerPlato <= '3') {

                    descripcionPrimerPlato = menuDesayuno.primero[numeroPrimerPlato].descripcion;
                    precioPrimerPlato = menuDesayuno.primero[numeroPrimerPlato].precio.toFixed(2);
                    
                    alert(`Seleccionado: ${descripcionPrimerPlato} ... ${precioPrimerPlato}€\n\n${fraseAleatoria_1}`);
                    segundoPlato();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    primerPlato();
                }
            }

            // funcion para pedir el segundo plato
            function segundoPlato() {

                numeroSegundoPlato = prompt(`${msgTurnoDesayuno}\n\n${msgMenuSegundo}\n\n${menuDesayuno.segundo[1].descripcion} ... ${menuDesayuno.segundo[1].precio.toFixed(2)}€\n${menuDesayuno.segundo[2].descripcion} ... ${menuDesayuno.segundo[2].precio.toFixed(2)}€\n${menuDesayuno.segundo[3].descripcion} ... ${menuDesayuno.segundo[3].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroSegundoPlato >= '1' && numeroSegundoPlato <= '3') {

                    descripcionSegundoPlato = menuDesayuno.segundo[numeroSegundoPlato].descripcion;
                    precioSegundoPlato = menuDesayuno.segundo[numeroSegundoPlato].precio.toFixed(2);

                    alert(`Seleccionado: ${descripcionSegundoPlato} ... ${precioSegundoPlato}€\n\n${fraseAleatoria_2}`);
                    postre();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    segundoPlato();
                }
            }

            // funcion para pedir el postre
            function postre() {

                numeroPostre = prompt(`${msgTurnoDesayuno}\n\n${msgMenuPostre}\n\n${menuPostre[1].descripcion} ... ${menuPostre[1].precio.toFixed(2)}€\n${menuPostre[2].descripcion} ... ${menuPostre[2].precio.toFixed(2)}€\n${menuPostre[3].descripcion} ... ${menuPostre[3].precio.toFixed(2)}€\n${menuPostre[4].descripcion} ... ${menuPostre[4].precio.toFixed(2)}€\n${menuPostre[5].descripcion} ... ${menuPostre[5].precio.toFixed(2)}€\n${menuPostre[6].descripcion} ... ${menuPostre[6].precio.toFixed(2)}€\n${menuPostre[7].descripcion} ... ${menuPostre[7].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroPostre >= '1' && numeroPostre <= '7') {

                    descripcionPostre = menuPostre[numeroPostre].descripcion;
                    precioPostre = menuPostre[numeroPostre].precio.toFixed(2);

                    alert(`Seleccionado: ${descripcionPostre} ... ${precioPostre}€\n\n${fraseAleatoria_3}`);
                    bebida();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    postre();
                }
            }

            // funcion para pedir la bebida
            function bebida() {

                numeroBebida = prompt(`${msgTurnoDesayuno}\n\n${msgMenuBebida}\n\n${menuBebida[1].descripcion} ... ${menuBebida[1].precio.toFixed(2)}€\n${menuBebida[2].descripcion} ... ${menuBebida[2].precio.toFixed(2)}€\n${menuBebida[3].descripcion} ... ${menuBebida[3].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroBebida >= '1' && numeroBebida <= '3') {

                    descripcionBebida = menuBebida[numeroBebida].descripcion;
                    precioBebida = menuBebida[numeroBebida].precio.toFixed(2);

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

                numeroPrimerPlato = prompt(`${msgTurnoComida}\n\n${msgMenuPrimero}\n\n${menuComida.primero[1].descripcion} ... ${menuComida.primero[1].precio.toFixed(2)}€\n${menuComida.primero[2].descripcion} ... ${menuComida.primero[2].precio.toFixed(2)}€\n${menuComida.primero[3].descripcion} ... ${menuComida.primero[3].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroPrimerPlato >= '1' && numeroPrimerPlato <= '3') {

                    descripcionPrimerPlato = menuComida.primero[numeroPrimerPlato].descripcion;
                    precioPrimerPlato = menuComida.primero[numeroPrimerPlato].precio.toFixed(2);

                    alert(`Seleccionado: ${descripcionPrimerPlato} ... ${precioPimerPlato}€\n\n${fraseAleatoria_1}`);
                    segundoPlato();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    primerPlato();
                }
            }

            // funcion para pedir el segundo plato
            function segundoPlato() {

                numeroSegundoPlato = prompt(`${msgTurnoComida}\n\n${msgMenuSegundo}\n\n${menuComida.segundo[1].descripcion} ... ${menuComida.segundo[1].precio.toFixed(2)}€\n${menuComida.segundo[2].descripcion} ... ${menuComida.segundo[2].precio.toFixed(2)}€\n${menuComida.segundo[3].descripcion} ... ${menuComida.segundo[3].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroSegundoPlato >= '1' && numeroSegundoPlato <= '3') {

                    descripcionSegundoPlato = menuComida.segundo[numeroSegundoPlato].descripcion;
                    precioSegundoPlato = menuComida.segundo[numeroSegundoPlato].precio.toFixed(2);

                    alert(`Seleccionado: ${descripcionSegundoPlato} ... ${precioSegundoPlato}€\n\n${fraseAleatoria_2}`);
                    postre();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    segundoPlato();
                }
            }

            // funcion para pedir el postre
            function postre() {

                numeroPostre = prompt(`${msgTurnoComida}\n\n${msgMenuPostre}\n\n${menuPostre[1].descripcion} ... ${menuPostre[1].precio.toFixed(2)}€\n${menuPostre[2].descripcion} ... ${menuPostre[2].precio.toFixed(2)}€\n${menuPostre[3].descripcion} ... ${menuPostre[3].precio.toFixed(2)}€\n${menuPostre[4].descripcion} ... ${menuPostre[4].precio.toFixed(2)}€\n${menuPostre[5].descripcion} ... ${menuPostre[5].precio.toFixed(2)}€\n${menuPostre[6].descripcion} ... ${menuPostre[6].precio.toFixed(2)}€\n${menuPostre[7].descripcion} ... ${menuPostre[7].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroPostre >= '1' && numeroPostre <= '7') {

                    descripcionPostre = menuPostre[numeroPostre].descripcion;
                    precioPostre = menuPostre[numeroPostre].precio.toFixed(2);

                    alert(`Seleccionado: ${descripcionPostre} ... ${precioPostre}€\n\n${fraseAleatoria_3}`);
                    bebida();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    postre();
                }
            }

            // funcion para pedir la bebida
            function bebida() {

                numeroBebida = prompt(`${msgTurnoComida}\n\n${msgMenuBebida}\n\n${menuBebida[1].descripcion} ... ${menuBebida[1].precio.toFixed(2)}€\n${menuBebida[2].descripcion} ... ${menuBebida[2].precio.toFixed(2)}€\n${menuBebida[3].descripcion} ... ${menuBebida[3].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroBebida >= '1' && numeroBebida <= '3') {

                    descripcionBebida = menuBebida[numeroBebida].descripcion;
                    precioBebida = menuBebida[numeroBebida].precio.toFixed(2);

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

                numeroPrimerPlato = prompt(`${msgTurnoCena}\n\n${msgMenuPrimero}\n\n${menuCena.primero[1].descripcion} ... ${menuCena.primero[1].precio.toFixed(2)}€\n${menuCena.primero[2].descripcion} ... ${menuCena.primero[2].precio.toFixed(2)}€\n${menuCena.primero[3].descripcion} ... ${menuCena.primero[3].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroPrimerPlato >= '1' && numeroPrimerPlato <= '3') {

                    descripcionPrimerPlato = menuCena.primero[numeroPrimerPlato].descripcion;
                    precioPrimerPlato = menuCena.primero[numeroPrimerPlato].precio.toFixed(2);

                    alert(`Seleccionado: ${descripcionPrimerPlato} ... ${precioPrimerPlato}€\n\n${fraseAleatoria_1}`);
                    segundoPlato();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    primerPlato();
                }
            }

            // funcion para pedir el segundo plato
            function segundoPlato() {

                numeroSegundoPlato = prompt(`${msgTurnoCena}\n\n${msgMenuSegundo}\n\n${menuCena.segundo[1].descripcion} ... ${menuCena.segundo[1].precio.toFixed(2)}€\n${menuCena.segundo[2].descripcion} ... ${menuCena.segundo[2].precio.toFixed(2)}€\n${menuCena.segundo[3].descripcion} ... ${menuCena.segundo[3].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroSegundoPlato >= '1' && numeroSegundoPlato <= '3') {

                    descripcionSegundoPlato = menuCena.segundo[numeroSegundoPlato].descripcion;
                    precioSegundoPlato = menuCena.segundo[numeroSegundoPlato].precio.toFixed(2);

                    alert(`Seleccionado: ${descripcionSegundoPlato} ... ${precioSegundoPlato}€\n\n${fraseAleatoria_2}`);
                    postre();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    segundoPlato();
                }
            }

            // funcion para pedir el postre
            function postre() {

                numeroPostre = prompt(`${msgTurnoCena}\n\n${msgMenuPostre}\n\n${menuPostre[1].descripcion} ... ${menuPostre[1].precio.toFixed(2)}€\n${menuPostre[2].descripcion} ... ${menuPostre[2].precio.toFixed(2)}€\n${menuPostre[3].descripcion} ... ${menuPostre[3].precio.toFixed(2)}€\n${menuPostre[4].descripcion} ... ${menuPostre[4].precio.toFixed(2)}€\n${menuPostre[5].descripcion} ... ${menuPostre[5].precio.toFixed(2)}€\n${menuPostre[6].descripcion} ... ${menuPostre[6].precio.toFixed(2)}€\n${menuPostre[7].descripcion} ... ${menuPostre[7].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroPostre >= '1' && numeroPostre <= '7') {

                    descripcionPostre = menuPostre[numeroPostre].descripcion;
                    precioPostre = menuPostre[numeroPostre].precio.toFixed(2);

                    alert(`Seleccionado: ${descripcionPostre} ... ${precioPostre}€\n\n${fraseAleatoria_3}`);
                    bebida();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    postre();
                }
            }

            // funcion para pedir la bebida
            function bebida() {

                numeroBebida = prompt(`${msgTurnoCena}\n\n${msgMenuBebida}\n\n${menuBebida[1].descripcion} ... ${menuBebida[1].precio.toFixed(2)}€\n${menuBebida[2].descripcion} ... ${menuBebida[2].precio.toFixed(2)}€\n${menuBebida[3].descripcion} ... ${menuBebida[3].precio.toFixed(2)}€\n\n${msgSeleccioneNumero}`);

                if (numeroBebida >= '1' && numeroBebida <= '3') {

                    descripcionBebida = menuBebida[numeroBebida].descripcion;
                    precioBebida = menuBebida[numeroBebida].precio.toFixed(2);

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

    // precio menu a pagar
    const pagarTotal = primero + segundo + postre + bebida;

    alert(`${msgFactura}\n\n${descripcionPrimerPlato} ... ${precioPrimerPlato}€\n${descripcionSegundoPlato} ... ${precioSegundoPlato}€\n${descripcionPostre} ... ${precioPostre}€\n${descripcionBebida} ... ${precioBebida}€\n\nTotal a pagar: ${pagarTotal.toFixed(2)}€`);
}



// invoca a la funcion restaurante
restaurante();
