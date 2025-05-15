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
                descripcion: '1. Lasaña de verduras',
                precio: 6.00
            },
            2: {
                descripcion: '2. Arroz negro con chipirones',
                precio: 6.80
            },
            3: {
                descripcion: '3. Berenjena rellena de carne gratinada',
                precio: 7.20
            }
        },
        segundo: {
            1: {
                descripcion: '1. Solomillo con salsa roquefort',
                precio: 9.30
            },
            2: {
                descripcion: '2. Ternera guisada',
                precio: 8.20
            },
            3: {
                descripcion: '3. Redondo de pavo al horno con baicon',
                precio: 10.80
            }
        }
    },
    cena: {
        primero: {
            1: {
                descripcion: '1. Sopa de pescado',
                precio: 7.50
            },
            2: {
                descripcion: '2. Ensalada templada de gulas',
                precio: 7.90
            },
            3: {
                descripcion: '3. Alcachofa salteada con jamón',
                precio: 6.95
            }
        },
        segundo: {
            1: {
                descripcion: '1. Filete con patatas y pimientos del piquillo',
                precio: 7.20
            },
            2: {
                descripcion: '2. Merluza rebozada',
                precio: 7.65
            },
            3: {
                descripcion: '3. Trucha al horno rellena de jamón',
                precio: 10.50
            }
        }
    },
    postre: {
        1: {
            descripcion: '1. Fruta de temporada',
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
            descripcion: '1. Refresco',
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
const msgRecepcion = `¡Hola! 👋 Bienvenido a DevCamp.\n
Nuestro horario es de 08:00h a 22:00h, de lunes a domingo.\n
¡Gracias por elegirnos para tu próxima comida! 🍷\n
Nuestro agente virtual te guiara en todo el proceso de pedido.\n
Por favor, pulse Aceptar para continuar.`

const msgReservaHora = `¡Hola! Soy Carlos de DevCamp.
¿A que hora quiere reservar su mesa?\n
El formato debe ser en 24 horas -> 00:00.\n
Introduzca una hora y pulse Aceptar.`

// mensaje de horario incorrecto
const msgHorarioIncorrecto = '¡El horario introducido no es correcto! Vuelva a intentarlo.';

// mensaje de restaurante cerrado
const msgRestauranteCerrado = `Estimado cliente,
En estos momentos el restaurante se encuentra cerrado.\n
Nuestro horario es de 08:00h a 22:00h, de lunes a domingo.\n
Disculpe las molestias.
¡Gracias!`;

// mensaje de no hay servicio
const msgNoHayServicio = '¡No hay servicio disponible!'

// mensaje de turno
const msgTurnoDesayuno = 'El desayuno incluye agua, pan y café.';
const msgTurnoComida = 'La comida incluye agua, pan y café.';
const msgTurnoCena = 'La cena incluye agua, pan y café.';

// mensaje de menu seleccion
const msgMenuPrimero = 'De primero tenemos lo siguiente:';
const msgMenuSegundo = 'De segundo tenemos lo siguiente:';
const msgMenuPostre = 'De postre tenemos lo siguiente:';
const msgMenuBebida = 'Para beber tenemos lo siguiente:';

// mensaje de seleccione numero
const msgSeleccioneNumero = 'Seleccione un número y pulse Aceptar.';
const msgNumeroIncorrecto = '¡El número seleccionado no es correcto! vuelva a intentarlo.';

// mensaje de factura disponible
const msgFactura = `¡Ya tiene disponible su factura!\n
El menú incluye agua, pan y café.`;

// mensaje de pedido registrado en sistema
const msgPedidoRegistrado = `Su pedido ha sido registrado en nuestro sistema.
¡Gracias por reservar con DevCamp!`;

// mensaje de pedido cancelado
const msgPedidoCancelado = `Su pedido ha sido cancelado de nuestro sistema.\n
¡Gracias por su visita!`;

// mensaje de cancelar reserva
const msgCancelarReserva = 'Si no puede asistir, cancele su reserva llamando al 666-666-666.';

// array de frases
const arrayFrases = [
    '¡Es un plato delicioso!',
    '¡Tiene un sabor espectacular!',
    '¡Elegiste un plato muy sabroso!',
    '¡Buena elección!',
    '¡Este plato es un clásico!'
];

// mensaje de frase aleatoria
const msgFraseAleatoria_1 = arrayFrases[Math.floor(Math.random() * arrayFrases.length)];
const msgFraseAleatoria_2 = arrayFrases[Math.floor(Math.random() * arrayFrases.length)];
const msgFraseAleatoria_3 = arrayFrases[Math.floor(Math.random() * arrayFrases.length)];



// horario de servicio
let horarioDesayuno = '';
let horarioComida = '';
let horarioCena = '';

// hora reservada
let horaReservada = '';

// numero de menu seleccionado
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



// muestra el menu desayuno primer plato
const menuDesayunoPrimerPlato = `${msgMenuPrimero}\n
${menu.desayuno.primero[1].descripcion} ... ${menu.desayuno.primero[1].precio.toFixed(2)}€
${menu.desayuno.primero[2].descripcion} ... ${menu.desayuno.primero[2].precio.toFixed(2)}€
${menu.desayuno.primero[3].descripcion} ... ${menu.desayuno.primero[3].precio.toFixed(2)}€\n
${msgSeleccioneNumero}`;

// muestra el menu desayuno segundo plato
const menuDesayunoSegundoPlato = `${msgMenuSegundo}\n
${menu.desayuno.segundo[1].descripcion} ... ${menu.desayuno.segundo[1].precio.toFixed(2)}€
${menu.desayuno.segundo[2].descripcion} ... ${menu.desayuno.segundo[2].precio.toFixed(2)}€
${menu.desayuno.segundo[3].descripcion} ... ${menu.desayuno.segundo[3].precio.toFixed(2)}€\n
${msgSeleccioneNumero}`;

// muestra el menu de comida primer plato
const menuComidaPrimerPlato = `${msgMenuPrimero}\n
${menu.comida.primero[1].descripcion} ... ${menu.comida.primero[1].precio.toFixed(2)}€
${menu.comida.primero[2].descripcion} ... ${menu.comida.primero[2].precio.toFixed(2)}€
${menu.comida.primero[3].descripcion} ... ${menu.comida.primero[3].precio.toFixed(2)}€\n
${msgSeleccioneNumero}`;

// muestra el menu de comida segundo plato
const menuComidaSegundoPlato = `${msgMenuSegundo}\n
${menu.comida.segundo[1].descripcion} ... ${menu.comida.segundo[1].precio.toFixed(2)}€
${menu.comida.segundo[2].descripcion} ... ${menu.comida.segundo[2].precio.toFixed(2)}€
${menu.comida.segundo[3].descripcion} ... ${menu.comida.segundo[3].precio.toFixed(2)}€\n
${msgSeleccioneNumero}`;

// muestra el menu de cena primer plato
const menuCenaPrimerPlato = `${msgMenuPrimero}\n
${menu.cena.primero[1].descripcion} ... ${menu.cena.primero[1].precio.toFixed(2)}€
${menu.cena.primero[2].descripcion} ... ${menu.cena.primero[2].precio.toFixed(2)}€
${menu.cena.primero[3].descripcion} ... ${menu.cena.primero[3].precio.toFixed(2)}€\n
${msgSeleccioneNumero}`;

// muestra el menu de cena segundo plato
const menuCenaSegundoPlato = `${msgMenuSegundo}\n
${menu.cena.segundo[1].descripcion} ... ${menu.cena.segundo[1].precio.toFixed(2)}€
${menu.cena.segundo[2].descripcion} ... ${menu.cena.segundo[2].precio.toFixed(2)}€
${menu.cena.segundo[3].descripcion} ... ${menu.cena.segundo[3].precio.toFixed(2)}€\n
${msgSeleccioneNumero}`;

// muestra el menu postre
const menuPostre = `${msgMenuPostre}\n
${menu.postre[1].descripcion} ... ${menu.postre[1].precio.toFixed(2)}€
${menu.postre[2].descripcion} ... ${menu.postre[2].precio.toFixed(2)}€
${menu.postre[3].descripcion} ... ${menu.postre[3].precio.toFixed(2)}€
${menu.postre[4].descripcion} ... ${menu.postre[4].precio.toFixed(2)}€
${menu.postre[5].descripcion} ... ${menu.postre[5].precio.toFixed(2)}€
${menu.postre[6].descripcion} ... ${menu.postre[6].precio.toFixed(2)}€
${menu.postre[7].descripcion} ... ${menu.postre[7].precio.toFixed(2)}€\n
${msgSeleccioneNumero}`;

// muestra el menu bebida
const menuBebida = `${msgMenuBebida}\n
${menu.bebida[1].descripcion} ... ${menu.bebida[1].precio.toFixed(2)}€
${menu.bebida[2].descripcion} ... ${menu.bebida[2].precio.toFixed(2)}€
${menu.bebida[3].descripcion} ... ${menu.bebida[3].precio.toFixed(2)}€\n
${msgSeleccioneNumero}`;



// patron regex horario de 00:00 a 23:59
const regexValidarFormatoHorario = /^([01][0-9]|2[0-3]):[0-5][0-9]/g;

// patron regex restaurante abierto de 08:00 a 22:00
const regexAbierto = /^([0][8-9]|1[0-9]|2[0-1]):[0-5][0-9]|22:00/g;

// patron regex turno
const regexDesayuno = /^([0][8-9]|1[0-1]):[0-5][0-9]/g; // 08:00 a 11:59
const regexComida = /^([1][2-7]):[0-5][0-9]/g; // 12:00 a 17:59
const regexCena = /^([1][8-9]|2[0-3]):[0-5][0-9]|22:00/g; // 18:00 a 22:00



// funcion para preparar el desayuno
function prepararDesayuno() {

    primerPlato();

    // funcion para pedir el primer plato
    function primerPlato() {
        numeroPrimerPlato = prompt(`${msgTurnoDesayuno}\n\n${menuDesayunoPrimerPlato}`);

        if (numeroPrimerPlato !== null) {
            if (numeroPrimerPlato >= 1 && numeroPrimerPlato <= 3) {
                descripcionPrimerPlato = menu.desayuno.primero[numeroPrimerPlato].descripcion;
                precioPrimerPlato = menu.desayuno.primero[numeroPrimerPlato].precio.toFixed(2);
                alert(`Ha seleccionado:\n${descripcionPrimerPlato} ... ${precioPrimerPlato}€\n\n${msgFraseAleatoria_1}`);
                segundoPlato();
            } else {
                alert(msgNumeroIncorrecto);
                primerPlato();
            }
        } else {
            alert(msgPedidoCancelado);
        }
    }

    // funcion para pedir el segundo plato
    function segundoPlato() {
        numeroSegundoPlato = prompt(`${msgTurnoDesayuno}\n\n${menuDesayunoSegundoPlato}`);

        if (numeroSegundoPlato !== null) {
            if (numeroSegundoPlato >= 1 && numeroSegundoPlato <= 3) {
                descripcionSegundoPlato = menu.desayuno.segundo[numeroSegundoPlato].descripcion;
                precioSegundoPlato = menu.desayuno.segundo[numeroSegundoPlato].precio.toFixed(2);
                alert(`Ha seleccionado:\n${descripcionSegundoPlato} ... ${precioSegundoPlato}€\n\n${msgFraseAleatoria_2}`);
                postre();
            } else {
                alert(msgNumeroIncorrecto);
                segundoPlato();
            }
        } else {
            alert(msgPedidoCancelado);
        }
    }

    // funcion para pedir el postre
    function postre() {
        numeroPostre = prompt(`${msgTurnoDesayuno}\n\n${menuPostre}`);

        if (numeroPostre !== null) {
            if (numeroPostre >= 1 && numeroPostre <= 7) {
                descripcionPostre = menu.postre[numeroPostre].descripcion;
                precioPostre = menu.postre[numeroPostre].precio.toFixed(2);
                alert(`Ha seleccionado:\n${descripcionPostre} ... ${precioPostre}€\n\n${msgFraseAleatoria_3}`);
                bebida();
            } else {
                alert(msgNumeroIncorrecto);
                postre();
            }
        } else {
            alert(msgPedidoCancelado);
        }
    }

    // funcion para pedir la bebida
    function bebida() {
        numeroBebida = prompt(`${msgTurnoDesayuno}\n\n${menuBebida}`);

        if (numeroBebida !== null) {
            if (numeroBebida >= 1 && numeroBebida <= 3) {
                descripcionBebida = menu.bebida[numeroBebida].descripcion;
                precioBebida = menu.bebida[numeroBebida].precio.toFixed(2);
                alert(`Ha seleccionado:\n${descripcionBebida} ... ${precioBebida}€`);
                factura();
            } else {
                alert(msgNumeroIncorrecto);
                bebida();
            }
        } else {
            alert(msgPedidoCancelado);
        }
    }
}



// funcion para preparar la comida
function prepararComida() {

    primerPlato();

    // funcion para pedir el primer plato
    function primerPlato() {
        numeroPrimerPlato = prompt(`${msgTurnoComida}\n\n${menuComidaPrimerPlato}`);

        if (numeroPrimerPlato !== null) {
            if (numeroPrimerPlato >= 1 && numeroPrimerPlato <= 3) {
                descripcionPrimerPlato = menu.comida.primero[numeroPrimerPlato].descripcion;
                precioPrimerPlato = menu.comida.primero[numeroPrimerPlato].precio.toFixed(2);
                alert(`Ha seleccionado:\n${descripcionPrimerPlato} ... ${precioPrimerPlato}€\n\n${msgFraseAleatoria_1}`);
                segundoPlato();
            } else {
                alert(msgNumeroIncorrecto);
                primerPlato();
            }
        } else {
            alert(msgPedidoCancelado);
        }
    }

    // funcion para pedir el segundo plato
    function segundoPlato() {
        numeroSegundoPlato = prompt(`${msgTurnoComida}\n\n${menuComidaSegundoPlato}`);

        if (numeroSegundoPlato !== null) {
            if (numeroSegundoPlato >= 1 && numeroSegundoPlato <= 3) {
                descripcionSegundoPlato = menu.comida.segundo[numeroSegundoPlato].descripcion;
                precioSegundoPlato = menu.comida.segundo[numeroSegundoPlato].precio.toFixed(2);
                alert(`Ha seleccionado:\n${descripcionSegundoPlato} ... ${precioSegundoPlato}€\n\n${msgFraseAleatoria_2}`);
                postre();
            } else {
                alert(msgNumeroIncorrecto);
                segundoPlato();
            }
        } else {
            alert(msgPedidoCancelado);
        }
    }

    // funcion para pedir el postre
    function postre() {
        numeroPostre = prompt(`${msgTurnoComida}\n\n${menuPostre}`);

        if (numeroPostre !== null) {
            if (numeroPostre >= 1 && numeroPostre <= 7) {
                descripcionPostre = menu.postre[numeroPostre].descripcion;
                precioPostre = menu.postre[numeroPostre].precio.toFixed(2);
                alert(`Ha seleccionado:\n${descripcionPostre} ... ${precioPostre}€\n\n${msgFraseAleatoria_3}`);
                bebida();
            } else {
                alert(msgNumeroIncorrecto);
                postre();
            }
        } else {
            alert(msgPedidoCancelado);
        }
    }

    // funcion para pedir la bebida
    function bebida() {
        numeroBebida = prompt(`${msgTurnoComida}\n\n${menuBebida}`);

        if (numeroBebida !== null) {
            if (numeroBebida >= 1 && numeroBebida <= 3) {
                descripcionBebida = menu.bebida[numeroBebida].descripcion;
                precioBebida = menu.bebida[numeroBebida].precio.toFixed(2);
                alert(`Ha seleccionado:\n${descripcionBebida} ... ${precioBebida}€`);
                factura();
            } else {
                alert(msgNumeroIncorrecto);
                bebida();
            }
        } else {
            alert(msgPedidoCancelado);
        }
    }
}



// funcion para preparar la cena
function prepararCena() {

    primerPlato();

    // funcion para pedir el primer plato
    function primerPlato() {
        numeroPrimerPlato = prompt(`${msgTurnoCena}\n\n${menuCenaPrimerPlato}`);

        if (numeroPrimerPlato !== null) {
            if (numeroPrimerPlato >= 1 && numeroPrimerPlato <= 3) {
                descripcionPrimerPlato = menu.cena.primero[numeroPrimerPlato].descripcion;
                precioPrimerPlato = menu.cena.primero[numeroPrimerPlato].precio.toFixed(2);
                alert(`Ha seleccionado:\n${descripcionPrimerPlato} ... ${precioPrimerPlato}€\n\n${msgFraseAleatoria_1}`);
                segundoPlato();
            } else {
                alert(msgNumeroIncorrecto);
                primerPlato();
            }
        } else {
            alert(msgPedidoCancelado);
        }
    }

    // funcion para pedir el segundo plato
    function segundoPlato() {
        numeroSegundoPlato = prompt(`${msgTurnoCena}\n\n${menuCenaPrimerPlato}`);

        if (numeroSegundoPlato !== null) {
            if (numeroSegundoPlato >= 1 && numeroSegundoPlato <= 3) {
                descripcionSegundoPlato = menu.cena.segundo[numeroSegundoPlato].descripcion;
                precioSegundoPlato = menu.cena.segundo[numeroSegundoPlato].precio.toFixed(2);
                alert(`Ha seleccionado:\n${descripcionSegundoPlato} ... ${precioSegundoPlato}€\n\n${msgFraseAleatoria_2}`);
                postre();
            } else {
                alert(msgNumeroIncorrecto);
                segundoPlato();
            }
        } else {
            alert(msgPedidoCancelado);
        }
    }

    // funcion para pedir el postre
    function postre() {
        numeroPostre = prompt(`${msgTurnoCena}\n\n${menuPostre}`);

        if (numeroPostre !== null) {
            if (numeroPostre >= 1 && numeroPostre <= 7) {
                descripcionPostre = menu.postre[numeroPostre].descripcion;
                precioPostre = menu.postre[numeroPostre].precio.toFixed(2);
                alert(`Ha seleccionado:\n${descripcionPostre} ... ${precioPostre}€\n\n${msgFraseAleatoria_3}`);
                bebida();
            } else {
                alert(msgNumeroIncorrecto);
                postre();
            }
        } else {
            alert(msgPedidoCancelado);
        }
    }

    // funcion para pedir la bebida
    function bebida() {
        numeroBebida = prompt(`${msgTurnoCena}\n\n${menuBebida}`);

        if (numeroBebida !== null) {
            if (numeroBebida >= 1 && numeroBebida <= 3) {
                descripcionBebida = menu.bebida[numeroBebida].descripcion;
                precioBebida = menu.bebida[numeroBebida].precio.toFixed(2);
                alert(`Ha seleccionado:\n${descripcionBebida} ... ${precioBebida}€`);
                factura();
            } else {
                alert(msgNumeroIncorrecto);
                bebida();
            }
        } else {
            alert(msgPedidoCancelado);
        }
    }
}



// funcion para generar factura
function factura() {

// Muestra el resumen de factura
const resumenFactura = `${msgFactura}\n
${descripcionPrimerPlato} ... ${precioPrimerPlato}€
${descripcionSegundoPlato} ... ${precioSegundoPlato}€
${descripcionPostre} ... ${precioPostre}€
${descripcionBebida} ... ${precioBebida}€`;

    // convertir string en numero
    const primero = parseFloat(precioPrimerPlato);
    const segundo = parseFloat(precioSegundoPlato);
    const postre = parseFloat(precioPostre);
    const bebida = parseFloat(precioBebida);

    // calcular precio total
    const pagarTotal = primero + segundo + postre + bebida;

    alert(`${resumenFactura}\n\nTotal a pagar: ${pagarTotal.toFixed(2)}€`);
    alert(`${msgPedidoRegistrado}\n\nNos vemos a las ${horaReservada} horas.\n\n${msgCancelarReserva}`);
}



// funcion para restaurante devcamp
function restauranteDevcamp() {

    // recepcion y hora de reserva
    alert(msgRecepcion);
    horaReservada = prompt(msgReservaHora);

    if (horaReservada !== null) {
        // validar formato horario
        const formatoHorarioCorrecto = horaReservada.match(regexValidarFormatoHorario);

        if (formatoHorarioCorrecto) {
            // horario de restaurante
            const restauranteAbierto = horaReservada.match(regexAbierto);

            // horario de servicio
            horarioDesayuno = horaReservada.match(regexDesayuno);
            horarioComida = horaReservada.match(regexComida);
            horarioCena = horaReservada.match(regexCena);

            // condicion horaria 06:00 a 23:59
            if (restauranteAbierto) {
                // condicion horaria 06:00 a 11:59
                if (horarioDesayuno) {
                    prepararDesayuno();

                // condicion horaria 12:00 a 17:59
                } else if (horarioComida) {
                    prepararComida();

                // condicion horaria 18:00 a 23:59
                } else if (horarioCena) {
                    prepararCena();

                } else {
                    alert(msgNoHayServicio);
                }
            } else {
                alert(msgRestauranteCerrado);
            }
        } else {
            alert(msgHorarioIncorrecto);
            restauranteDevcamp();
        }
    } else {
        alert('¡Gracias por su visita!');
    }
}



// invoca a la funcion restauranteDevcamp
restauranteDevcamp();
