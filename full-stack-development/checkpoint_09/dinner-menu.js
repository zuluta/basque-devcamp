/******************************/
/* Dinner Menu DevCamp v1.0.0 */
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
Prestamos servicio de lunes a domingo en horario:\n
Desayuno: 08:00 a 11:59
Comida: 12:00 a 17:59
Cena: 18:00 a 22:00\n
¡Gracias por elegirnos para tu próxima comida! 🍷\n
Por favor, pulse Aceptar para continuar.`;

// mensaje de reservar hora
const msgReservaHora = `Introduzca una hora y pulse Aceptar.\n
Formato de horario en 24 horas.
Ejemplo: 14:45\n\n
¿A que hora quiere reservar su mesa?`;

// mensaje de horario incorrecto
const msgHorarioIncorrecto = '¡El horario introducido no es correcto! Vuelva a intentarlo.';

// mensaje de restaurante cerrado
const msgRestauranteCerrado = `Lo sentimos,
A esta hora, el restaurante se encuentra cerrado.\n
Nuestro horario es de 08:00h a 22:00h, de lunes a domingo.\n
Disculpe las molestias.
¡Gracias!`;

// mensaje de no hay servicio
const msgNoHayServicio = '¡No hay servicio disponible!';

// mensaje de volver atras
const msgVolverAtras = `0. Volver atrás`;

// mensaje de menu incluye
const msgMenuIncluye = `incluye agua, pan y café.`;

// mensaje de turno seleccionar menu
const msgTurnoPrimerPlato = 'De primero tenemos:';
const msgTurnoSegundoPlato = 'De segundo tenemos:';
const msgTurnoPostre = 'De postre tenemos:';
const msgTurnoBebida = 'Para beber tenemos:';

// mensaje de seleccione numero
const msgSeleccioneNumero = 'Seleccione un número y pulse Aceptar.';
const msgNumeroIncorrecto = '¡El número seleccionado no es correcto! vuelva a intentarlo.';

// mensaje de finalizar pedido
const msgFinalizarPedido = `¡Enhorabuena!
Estas a un paso de completar el pedido.`;

// mensaje de resumen pedido
const msgResumenPedido = `Resumen del pedido:`;

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



// hora reserva
let horaReserva = '';

// accede a la clave desayuno, comida y cena del objeto menu
const arrayTurno = Object.keys(menu);
let turno = '';

// almacena menu de turno en un array
let menuPrimerPlato = [];
let menuSegundoPlato = [];
let menuPostre = [];
let menuBebida = [];

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
const regexValidarFormatoHorario = /^([01][0-9]|2[0-3]):[0-5][0-9]/g;

// patron regex restaurante abierto de 08:00 a 22:00
const regexAbierto = /^([0][8-9]|1[0-9]|2[0-1]):[0-5][0-9]|22:00/g;

// patron regex turno
const regexDesayuno = /^([0][8-9]|1[0-1]):[0-5][0-9]/g; // 08:00 a 11:59
const regexComida = /^([1][2-7]):[0-5][0-9]/g; // 12:00 a 17:59
const regexCena = /^([1][8-9]|2[0-3]):[0-5][0-9]|22:00/g; // 18:00 a 22:00



// funcion para detectar el turno
function detectarTurno() {
    // horario de servicio
    const horarioDesayuno = horaReserva.match(regexDesayuno);
    const horarioComida = horaReserva.match(regexComida);
    const horarioCena = horaReserva.match(regexCena);
    
    if (horarioDesayuno) {
        turno = arrayTurno[0];
    } else if (horarioComida) {
        turno = arrayTurno[1];
    } else if (horarioCena) {
        turno = arrayTurno[2];
    } else {
        alert(msgNoHayServicio);
    }
}

//funcion para seleccionar el primer plato
function seleccionarPrimerPlato() {
    detectarTurno();

    const listaPrimerPlato = Object.keys(menu[turno].primero);

    for (let i = 1; i <= listaPrimerPlato.length; i++) {
        let primerPlato = [menu[turno].primero[i].descripcion, menu[turno].primero[i].precio.toFixed(2)].join(' ... ');
        menuPrimerPlato.push(primerPlato);
    }

    // muestra el menu primer plato
    const msgMenuPrimerPlato = `${menuPrimerPlato[0]}€\n${menuPrimerPlato[1]}€\n${menuPrimerPlato[2]}€`;
    const numeroSeleccionado = prompt(`${msgVolverAtras}\n${msgSeleccioneNumero}\n\nMenú ${turno} ${msgMenuIncluye}\n\n${msgMenuPrimerPlato}`);

    if (numeroSeleccionado !== null) {
        numeroPrimerPlato = parseInt(numeroSeleccionado);

        if (numeroPrimerPlato >= 1 && numeroPrimerPlato <= 3) {
            descripcionPrimerPlato = menu[turno].primero[numeroPrimerPlato].descripcion;
            precioPrimerPlato = menu[turno].primero[numeroPrimerPlato].precio.toFixed(2);
            alert(`Ha seleccionado:\n${descripcionPrimerPlato} ... ${precioPrimerPlato}€\n\n${msgFraseAleatoria_1}`);
            seleccionarSegundoPlato();
        } else if (numeroPrimerPlato === 0) {
            restauranteDevcamp();
        } else {
            alert(msgNumeroIncorrecto);
            seleccionarPrimerPlato();
        }
    } else {
        alert(msgPedidoCancelado);
    }
}

//funcion para seleccionar el segundo plato
function seleccionarSegundoPlato() {
    detectarTurno();

    const listaSegundoPlato = Object.keys(menu[turno].segundo);

    for (let i = 1; i <= listaSegundoPlato.length; i++) {
        let segundoPlato = [menu[turno].segundo[i].descripcion, menu[turno].segundo[i].precio.toFixed(2)].join(' ... ');
        menuSegundoPlato.push(segundoPlato);
    }

    // muestra el menu segundo plato
    const msgMenuSegundoPlato = `${menuSegundoPlato[0]}€\n${menuSegundoPlato[1]}€\n${menuSegundoPlato[2]}€`;
    const numeroSeleccionado = prompt(`${msgVolverAtras}\n${msgSeleccioneNumero}\n\nMenú ${turno} ${msgMenuIncluye}\n\n${msgMenuSegundoPlato}`);

    if (numeroSeleccionado !== null) {
        numeroSegundoPlato = parseInt(numeroSeleccionado);

        if (numeroSegundoPlato >= 1 && numeroSegundoPlato <= 3) {
            descripcionSegundoPlato = menu[turno].segundo[numeroSegundoPlato].descripcion;
            precioSegundoPlato = menu[turno].segundo[numeroSegundoPlato].precio.toFixed(2);
            alert(`Ha seleccionado:\n${descripcionSegundoPlato} ... ${precioSegundoPlato}€\n\n${msgFraseAleatoria_2}`);
            seleccionarPostre();
        } else if (numeroSegundoPlato === 0) {
            seleccionarPrimerPlato();
        } else {
            alert(msgNumeroIncorrecto);
            seleccionarSegundoPlato();
        }
    } else {
        alert(msgPedidoCancelado);
    }
}

//funcion para seleccionar el postre
function seleccionarPostre() {
    detectarTurno();

    const listaPostre = Object.keys(menu.postre);

    for (let i = 1; i <= listaPostre.length; i++) {
        let postre = [menu.postre[i].descripcion, menu.postre[i].precio.toFixed(2)].join(' ... ');
        menuPostre.push(postre);
    }

    // muestra el menu postre
    const msgMenuPostre = `${menuPostre[0]}€\n${menuPostre[1]}€\n${menuPostre[2]}€\n${menuPostre[3]}€\n${menuPostre[4]}€\n${menuPostre[5]}€\n${menuPostre[6]}€`;
    const numeroSeleccionado = prompt(`${msgVolverAtras}\n${msgSeleccioneNumero}\n\nMenú ${turno} ${msgMenuIncluye}\n\n${msgMenuPostre}`);

    if (numeroSeleccionado !== null) {
        numeroPostre = parseInt(numeroSeleccionado);

        if (numeroPostre >= 1 && numeroPostre <= 7) {
            descripcionPostre = menu.postre[numeroPostre].descripcion;
            precioPostre = menu.postre[numeroPostre].precio.toFixed(2);
            alert(`Ha seleccionado:\n${descripcionPostre} ... ${precioPostre}€\n\n${msgFraseAleatoria_3}`);
            seleccionarBebida();
        } else if (numeroPostre === 0) {
            seleccionarSegundoPlato();
        } else {
            alert(msgNumeroIncorrecto);
            seleccionarPostre();
        }
    } else {
        alert(msgPedidoCancelado);
    }
}

//funcion para seleccionar la bebida
function seleccionarBebida() {
    detectarTurno();

    const listaBebida = Object.keys(menu.bebida);

    for (let i = 1; i <= listaBebida.length; i++) {
        let bebida = [menu.bebida[i].descripcion, menu.bebida[i].precio.toFixed(2)].join(' ... ');
        menuBebida.push(bebida);
    }

    // muestra el menu bebida
    const msgMenuBebida = `${menuBebida[0]}€\n${menuBebida[1]}€\n${menuBebida[2]}€`;
    const numeroSeleccionado = prompt(`${msgVolverAtras}\n${msgSeleccioneNumero}\n\nMenú ${turno} ${msgMenuIncluye}\n\n${msgMenuBebida}`);

    if (numeroSeleccionado !== null) {
        numeroBebida = parseInt(numeroSeleccionado);

        if (numeroBebida >= 1 && numeroBebida <= 3) {
            descripcionBebida = menu.bebida[numeroBebida].descripcion;
            precioBebida = menu.bebida[numeroBebida].precio.toFixed(2);
            alert(`Ha seleccionado:\n${descripcionBebida} ... ${precioBebida}€`);
            factura();
        } else if (numeroBebida === 0) {
            seleccionarPostre();
        } else {
            alert(msgNumeroIncorrecto);
            seleccionarBebida();
        }
    } else {
        alert(msgPedidoCancelado);
    }
}

// funcion para desayuno factura
function factura() {
    // muestra el resumen de pedido
    const menuHoraReserva = `Hora de reserva: ${horaReserva}`;
    const menuReservado = `${descripcionPrimerPlato} ... ${precioPrimerPlato}€\n${descripcionSegundoPlato} ... ${precioSegundoPlato}€\n${descripcionPostre} ... ${precioPostre}€\n${descripcionBebida} ... ${precioBebida}€`;

    // convertir string en numero
    const miPrimero = parseFloat(precioPrimerPlato);
    const miSegundo = parseFloat(precioSegundoPlato);
    const miPostre = parseFloat(precioPostre);
    const miBebida = parseFloat(precioBebida);

    // calcular precio total
    const pagarTotal = miPrimero + miSegundo + miPostre + miBebida;

    const numeroSeleccionado = prompt(`${msgFinalizarPedido}\n\n${menuHoraReserva}\n\n${msgResumenPedido}\n\nMenú ${turno} ${msgMenuIncluye}\n\n${menuReservado}\n\nTotal a pagar: ${pagarTotal.toFixed(2)}€\n\n${msgSeleccioneNumero}\n\n0. Volver atras\n1. Confirmar pedido`);

    if (numeroSeleccionado !== null) {
        numeroFactura = parseInt(numeroSeleccionado);

        if (numeroFactura === 1) {
            alert(`${msgPedidoRegistrado}\n\nNos vemos a las ${horaReserva} horas.\n\n${msgCancelarReserva}`);
        } else if (numeroFactura === 0) {
            seleccionarBebida();
        } else {
            alert(msgNumeroIncorrecto);
            factura();
        }
    } else {
        alert(msgPedidoCancelado);
    }
}



// funcion para restaurante devcamp
function restauranteDevcamp() {
    // recepcion y hora de reserva
    alert(msgRecepcion);
    const horaSeleccionada = prompt(msgReservaHora);

    if (horaSeleccionada !== null) {
        // validar formato de horario
        const formatoHorarioCorrecto = horaSeleccionada.match(regexValidarFormatoHorario);
        const strHoraSeleccionada = horaSeleccionada.toString();
      
        if (formatoHorarioCorrecto && strHoraSeleccionada.length === 5) {
            // formato de horario validado
            horaReserva = horaSeleccionada;
            // horario de restaurante
            const restauranteAbierto = horaReserva.match(regexAbierto);

            // condicion horaria 08:00 a 22:00
            if (restauranteAbierto) {
                seleccionarPrimerPlato();
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
