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
Prestamos servicio de lunes a domingo con los siguientes horarios:\n
Desayuno: 08:00h. a 11:59h.
Comida: 12:00h. a 17:59h.
Cena: 18:00h. a 22:00h.\n
¡Gracias por elegirnos para tu próxima comida! 🍷\n
Por favor, pulse Aceptar para continuar.`

// mensaje de reservar hora
const msgReservaHora = `Formato de horario en 24 horas.
Ejemplo: 14:45\n\n
¿A que hora quiere reservar su mesa?\n
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

// mensaje de turno desayuno
const msgTurnoDesayuno = `0. Volver atrás\n
El desayuno incluye agua, pan y café.`;

// mensaje de turno comida
const msgTurnoComida = `0. Volver atrás\n
La comida incluye agua, pan y café.`;

// mensaje de turno cena
const msgTurnoCena = `0. Volver atrás\n
La cena incluye agua, pan y café.`;

// mensaje de menu seleccion
const msgMenuPrimero = 'De primero tenemos lo siguiente:';
const msgMenuSegundo = 'De segundo tenemos lo siguiente:';
const msgMenuPostre = 'De postre tenemos lo siguiente:';
const msgMenuBebida = 'Para beber tenemos lo siguiente:';

// mensaje de seleccione numero
const msgSeleccioneNumero = 'Seleccione un número y pulse Aceptar.';
const msgNumeroIncorrecto = '¡El número seleccionado no es correcto! vuelva a intentarlo.';

// mensaje de confirmar pedido
const msgConfirmarPedido = `¡Enorabuena!
Estas a un paso de completar el pedido.\n
Resumen del pedido:\n
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



// funcion para desayuno primer plato
function desayunoPrimerPlato() {
    numeroPrimerPlato = prompt(`${msgTurnoDesayuno}\n\n${menuDesayunoPrimerPlato}`);
    numeroSeleccionado = parseInt(numeroPrimerPlato);

    if (numeroPrimerPlato !== null) {
        if (numeroSeleccionado >= 1 && numeroSeleccionado <= 3) {
            descripcionPrimerPlato = menu.desayuno.primero[numeroPrimerPlato].descripcion;
            precioPrimerPlato = menu.desayuno.primero[numeroPrimerPlato].precio.toFixed(2);
            alert(`Ha seleccionado:\n${descripcionPrimerPlato} ... ${precioPrimerPlato}€\n\n${msgFraseAleatoria_1}`);
            desayunoSegundoPlato();
        } else if (numeroSeleccionado === 0) {
            restauranteDevcamp();
        } else {
            alert(msgNumeroIncorrecto);
            desayunoPrimerPlato();
        }
    } else {
        alert(msgPedidoCancelado);
    }
}

// funcion para desayuno segundo plato
function desayunoSegundoPlato() {
    numeroSegundoPlato = prompt(`${msgTurnoDesayuno}\n\n${menuDesayunoSegundoPlato}`);
    numeroSeleccionado = parseInt(numeroSegundoPlato);

    if (numeroSegundoPlato !== null) {
        if (numeroSeleccionado >= 1 && numeroSeleccionado <= 3) {
            descripcionSegundoPlato = menu.desayuno.segundo[numeroSegundoPlato].descripcion;
            precioSegundoPlato = menu.desayuno.segundo[numeroSegundoPlato].precio.toFixed(2);
            alert(`Ha seleccionado:\n${descripcionSegundoPlato} ... ${precioSegundoPlato}€\n\n${msgFraseAleatoria_2}`);
            desayunoPostre();
        } else if (numeroSeleccionado === 0) {
            desayunoPrimerPlato();
        } else {
            alert(msgNumeroIncorrecto);
            desayunoSegundoPlato();
        }
    } else {
        alert(msgPedidoCancelado);
    }
}

// funcion para desayuno postre
function desayunoPostre() {
    numeroPostre = prompt(`${msgTurnoDesayuno}\n\n${menuPostre}`);
    numeroSeleccionado = parseInt(numeroPostre);

    if (numeroPostre !== null) {
        if (numeroSeleccionado >= 1 && numeroSeleccionado <= 7) {
            descripcionPostre = menu.postre[numeroPostre].descripcion;
            precioPostre = menu.postre[numeroPostre].precio.toFixed(2);
            alert(`Ha seleccionado:\n${descripcionPostre} ... ${precioPostre}€\n\n${msgFraseAleatoria_3}`);
            desayunoBebida();
        } else if (numeroSeleccionado === 0) {
            desayunoSegundoPlato();
        } else {
            alert(msgNumeroIncorrecto);
            desayunoPostre();
        }
    } else {
        alert(msgPedidoCancelado);
    }
}

// funcion para desayuno bebida
function desayunoBebida() {
    numeroBebida = prompt(`${msgTurnoDesayuno}\n\n${menuBebida}`);
    numeroSeleccionado = parseInt(numeroBebida);

    if (numeroBebida !== null) {
        if (numeroSeleccionado >= 1 && numeroSeleccionado <= 3) {
            descripcionBebida = menu.bebida[numeroBebida].descripcion;
            precioBebida = menu.bebida[numeroBebida].precio.toFixed(2);
            alert(`Ha seleccionado:\n${descripcionBebida} ... ${precioBebida}€`);
            desayunoFactura();
        } else if (numeroSeleccionado === 0) {
            desayunoPostre();
        } else {
            alert(msgNumeroIncorrecto);
            desayunoBebida();
        }
    } else {
        alert(msgPedidoCancelado);
    }
}

// funcion para desayuno factura
function desayunoFactura() {
    // muestra el resumen de pedido
    const resumenPedido = `${msgConfirmarPedido}\n\n${descripcionPrimerPlato} ... ${precioPrimerPlato}€\n${descripcionSegundoPlato} ... ${precioSegundoPlato}€\n${descripcionPostre} ... ${precioPostre}€\n${descripcionBebida} ... ${precioBebida}€`;

    // convertir string en numero
    const miPrimero = parseFloat(precioPrimerPlato);
    const miSegundo = parseFloat(precioSegundoPlato);
    const miPostre = parseFloat(precioPostre);
    const miBebida = parseFloat(precioBebida);

    // calcular precio total
    const pagarTotal = miPrimero + miSegundo + miPostre + miBebida;

    numeroFactura = prompt(`${resumenPedido}\n\nTotal a pagar: ${pagarTotal.toFixed(2)}€\n\n0. Volver atras\n1. Confirmar pedido\n\n${msgSeleccioneNumero}`);
    numeroSeleccionado = parseInt(numeroFactura);

    if (numeroFactura !== null) {
        if (numeroSeleccionado === 1) {
            alert(`${msgPedidoRegistrado}\n\nNos vemos a las ${horaReservada} horas.\n\n${msgCancelarReserva}`);
        } else if (numeroSeleccionado === 0) {
            desayunoBebida();
        } else {
            alert(msgNumeroIncorrecto);
            desayunoFactura();
        }
    } else {
        alert(msgPedidoCancelado);
    }
}

// funcion para comida primer plato
function comidaPrimerPlato() {
    numeroPrimerPlato = prompt(`${msgTurnoComida}\n\n${menuComidaPrimerPlato}`);
    numeroSeleccionado = parseInt(numeroPrimerPlato);

    if (numeroPrimerPlato !== null) {
        if (numeroSeleccionado >= 1 && numeroSeleccionado <= 3) {
            descripcionPrimerPlato = menu.comida.primero[numeroPrimerPlato].descripcion;
            precioPrimerPlato = menu.comida.primero[numeroPrimerPlato].precio.toFixed(2);
            alert(`Ha seleccionado:\n${descripcionPrimerPlato} ... ${precioPrimerPlato}€\n\n${msgFraseAleatoria_1}`);
            comidaSegundoPlato();
        } else if (numeroSeleccionado === 0) {
            restauranteDevcamp();
        } else {
            alert(msgNumeroIncorrecto);
            comidaPrimerPlato();
        }
    } else {
        alert(msgPedidoCancelado);
    }
}

// funcion para comida segundo plato
function comidaSegundoPlato() {
    numeroSegundoPlato = prompt(`${msgTurnoComida}\n\n${menuComidaSegundoPlato}`);
    numeroSeleccionado = parseInt(numeroSegundoPlato);

    if (numeroSegundoPlato !== null) {
        if (numeroSeleccionado >= 1 && numeroSeleccionado <= 3) {
            descripcionSegundoPlato = menu.comida.segundo[numeroSegundoPlato].descripcion;
            precioSegundoPlato = menu.comida.segundo[numeroSegundoPlato].precio.toFixed(2);
            alert(`Ha seleccionado:\n${descripcionSegundoPlato} ... ${precioSegundoPlato}€\n\n${msgFraseAleatoria_2}`);
            comidaPostre();
        } else if (numeroSeleccionado === 0) {
            comidaPrimerPlato();
        } else {
            alert(msgNumeroIncorrecto);
            comidaSegundoPlato();
        }
    } else {
        alert(msgPedidoCancelado);
    }
}

// funcion para comida postre
function comidaPostre() {
    numeroPostre = prompt(`${msgTurnoComida}\n\n${menuPostre}`);
    numeroSeleccionado = parseInt(numeroPostre);

    if (numeroPostre !== null) {
        if (numeroSeleccionado >= 1 && numeroSeleccionado <= 7) {
            descripcionPostre = menu.postre[numeroPostre].descripcion;
            precioPostre = menu.postre[numeroPostre].precio.toFixed(2);
            alert(`Ha seleccionado:\n${descripcionPostre} ... ${precioPostre}€\n\n${msgFraseAleatoria_3}`);
            comidaBebida();
        } else if (numeroSeleccionado === 0) {
            comidaSegundoPlato();
        } else {
            alert(msgNumeroIncorrecto);
            comidaPostre();
        }
    } else {
        alert(msgPedidoCancelado);
    }
}

// funcion para comida bebida
function comidaBebida() {
    numeroBebida = prompt(`${msgTurnoComida}\n\n${menuBebida}`);
    numeroSeleccionado = parseInt(numeroBebida);

    if (numeroBebida !== null) {
        if (numeroSeleccionado >= 1 && numeroSeleccionado <= 3) {
            descripcionBebida = menu.bebida[numeroBebida].descripcion;
            precioBebida = menu.bebida[numeroBebida].precio.toFixed(2);
            alert(`Ha seleccionado:\n${descripcionBebida} ... ${precioBebida}€`);
            comidaFactura();
        } else if (numeroSeleccionado === 0) {
            comidaPostre();
        } else {
            alert(msgNumeroIncorrecto);
            comidaBebida();
        }
    } else {
        alert(msgPedidoCancelado);
    }
}

// funcion para comida factura
function comidaFactura() {
    // muestra el resumen de pedido
    const resumenPedido = `${msgConfirmarPedido}\n\n${descripcionPrimerPlato} ... ${precioPrimerPlato}€\n${descripcionSegundoPlato} ... ${precioSegundoPlato}€\n${descripcionPostre} ... ${precioPostre}€\n${descripcionBebida} ... ${precioBebida}€`;

    // convertir string en numero
    const miPrimero = parseFloat(precioPrimerPlato);
    const miSegundo = parseFloat(precioSegundoPlato);
    const miPostre = parseFloat(precioPostre);
    const miBebida = parseFloat(precioBebida);

    // calcular precio total
    const pagarTotal = miPrimero + miSegundo + miPostre + miBebida;

    numeroFactura = prompt(`${resumenPedido}\n\nTotal a pagar: ${pagarTotal.toFixed(2)}€\n\n0. Volver atras\n1. Confirmar pedido\n\n${msgSeleccioneNumero}`);
    numeroSeleccionado = parseInt(numeroFactura);

    if (numeroFactura !== null) {
        if (numeroSeleccionado === 1) {
            alert(`${msgPedidoRegistrado}\n\nNos vemos a las ${horaReservada} horas.\n\n${msgCancelarReserva}`);
        } else if (numeroSeleccionado === 0) {
            comidaBebida();
        } else {
            alert(msgNumeroIncorrecto);
            comidaFactura();
        }
    } else {
        alert(msgPedidoCancelado);
    }
}

// funcion para cena primer plato
function cenaPrimerPlato() {
    numeroPrimerPlato = prompt(`${msgTurnoCena}\n\n${menuCenaPrimerPlato}`);
    numeroSeleccionado = parseInt(numeroPrimerPlato);

    if (numeroPrimerPlato !== null) {
        if (numeroSeleccionado >= 1 && numeroSeleccionado <= 3) {
            descripcionPrimerPlato = menu.cena.primero[numeroPrimerPlato].descripcion;
            precioPrimerPlato = menu.cena.primero[numeroPrimerPlato].precio.toFixed(2);
            alert(`Ha seleccionado:\n${descripcionPrimerPlato} ... ${precioPrimerPlato}€\n\n${msgFraseAleatoria_1}`);
            cenaSegundoPlato();
        } else if (numeroSeleccionado === 0) {
            restauranteDevcamp();
        } else {
            alert(msgNumeroIncorrecto);
            cenaPrimerPlato();
        }
    } else {
        alert(msgPedidoCancelado);
    }
}

// funcion para cena segundo plato
function cenaSegundoPlato() {
    numeroSegundoPlato = prompt(`${msgTurnoCena}\n\n${menuCenaSegundoPlato}`);
    numeroSeleccionado = parseInt(numeroSegundoPlato);

    if (numeroSegundoPlato !== null) {
        if (numeroSeleccionado >= 1 && numeroSeleccionado <= 3) {
            descripcionSegundoPlato = menu.cena.segundo[numeroSegundoPlato].descripcion;
            precioSegundoPlato = menu.cena.segundo[numeroSegundoPlato].precio.toFixed(2);
            alert(`Ha seleccionado:\n${descripcionSegundoPlato} ... ${precioSegundoPlato}€\n\n${msgFraseAleatoria_2}`);
            cenaPostre();
        } else if (numeroSeleccionado === 0) {
            cenaPrimerPlato();
        } else {
            alert(msgNumeroIncorrecto);
            cenaSegundoPlato();
        }
    } else {
        alert(msgPedidoCancelado);
    }
}

// funcion para cena postre
function cenaPostre() {
    numeroPostre = prompt(`${msgTurnoCena}\n\n${menuPostre}`);
    numeroSeleccionado = parseInt(numeroPostre);

    if (numeroPostre !== null) {
        if (numeroSeleccionado >= 1 && numeroSeleccionado <= 7) {
            descripcionPostre = menu.postre[numeroPostre].descripcion;
            precioPostre = menu.postre[numeroPostre].precio.toFixed(2);
            alert(`Ha seleccionado:\n${descripcionPostre} ... ${precioPostre}€\n\n${msgFraseAleatoria_3}`);
            cenaBebida();
        } else if (numeroSeleccionado === 0) {
            cenaSegundoPlato();
        } else {
            alert(msgNumeroIncorrecto);
            cenaPostre();
        }
    } else {
        alert(msgPedidoCancelado);
    }
}

// funcion para cena bebida
function cenaBebida() {
    numeroBebida = prompt(`${msgTurnoCena}\n\n${menuBebida}`);
    numeroSeleccionado = parseInt(numeroBebida);

    if (numeroBebida !== null) {
        if (numeroSeleccionado >= 1 && numeroSeleccionado <= 3) {
            descripcionBebida = menu.bebida[numeroBebida].descripcion;
            precioBebida = menu.bebida[numeroBebida].precio.toFixed(2);
            alert(`Ha seleccionado:\n${descripcionBebida} ... ${precioBebida}€`);
            cenaFactura();
        } else if (numeroSeleccionado === 0) {
            cenaPostre();
        } else {
            alert(msgNumeroIncorrecto);
            cenaBebida();
        }
    } else {
        alert(msgPedidoCancelado);
    }
}

// funcion para cena factura
function cenaFactura() {
    // muestra el resumen de pedido
    const resumenPedido = `${msgConfirmarPedido}\n\n${descripcionPrimerPlato} ... ${precioPrimerPlato}€\n${descripcionSegundoPlato} ... ${precioSegundoPlato}€\n${descripcionPostre} ... ${precioPostre}€\n${descripcionBebida} ... ${precioBebida}€`;

    // convertir string en numero
    const miPrimero = parseFloat(precioPrimerPlato);
    const miSegundo = parseFloat(precioSegundoPlato);
    const miPostre = parseFloat(precioPostre);
    const miBebida = parseFloat(precioBebida);

    // calcular precio total
    const pagarTotal = miPrimero + miSegundo + miPostre + miBebida;

    numeroFactura = prompt(`${resumenPedido}\n\nTotal a pagar: ${pagarTotal.toFixed(2)}€\n\n0. Volver atras\n1. Confirmar pedido\n\n${msgSeleccioneNumero}`);
    numeroSeleccionado = parseInt(numeroFactura);

    if (numeroFactura !== null) {
        if (numeroSeleccionado === 1) {
            alert(`${msgPedidoRegistrado}\n\nNos vemos a las ${horaReservada} horas.\n\n${msgCancelarReserva}`);
        } else if (numeroSeleccionado === 0) {
            cenaBebida();
        } else {
            alert(msgNumeroIncorrecto);
            cenaFactura();
        }
    } else {
        alert(msgPedidoCancelado);
    }
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
                    desayunoPrimerPlato();

                // condicion horaria 12:00 a 17:59
                } else if (horarioComida) {
                    comidaPrimerPlato();

                // condicion horaria 18:00 a 23:59
                } else if (horarioCena) {
                    cenaPrimerPlato();

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
