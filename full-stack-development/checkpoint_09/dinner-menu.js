/******************************/
/* Aplication coded by Zuluta */
/* 2025                       */
/******************************/



// seccion de menus
const menuDesayuno = {
    'primero': {
        '1': '1. Batido con avena, plátano y fresas ... 4.50€',
        '2': '2. Pasta con atún ... 3.95€',
        '3': '3. Crema de verduras ... 4.95€'
    },
    'segundo': {
        '1': '1. Pimientos rellenos de bacalao ... 6.50€',
        '2': '2. Pan de centeno con queso de cabra ... 7.80€',
        '3': '3. Tostada con aguacate ... 5.80€'
    }
};

const menuComida = {
    'primero': {
        '1': '1. Menestra de verduras ... 5.60€',
        '2': '2. Crema de calabaza ... 4.80€',
        '3': '3. Brócoli con ajo ... 5.20€'
    },
    'segundo': {
        '1': '1. Merluza en salsa verde ... 6.20€',
        '2': '2. Solomillo de cerdo ... 8.20€',
        '3': '3. Salmón al papillote ... 10.80€'
    }
};

const menuCena = {
    'primero': {
        '1': '1. Borraja con langostinos ... 4.50€',
        '2': '2. Calabacines rellenos... 6.20€',
        '3': '3. Espinacas con patata ... 5.95€'
    },
    'segundo': {
        '1': '1. Pechuga de pollo con tomate ... 7.40€',
        '2': '2. Merluza en salsa verde ... 9.95€',
        '3': '2. Brocheta de langostinos ... 10.50€'
    }
};

const menuPostre = {
    '1': '1. Macedonia ... 2.40€',
    '2': '2. Arroz con leche ... 3.50€',
    '3': '3. Natilla ... 2.80€',
    '4': '4. Flan ... 2.50€',
    '5': '5. Tarta de queso ... 4.20€',
    '6': '6. Tarta de manzana ... 4.20€',
    '7': '7. Helado ... 2.60€'
};

const menuBebida = {
    '1': '1. Agua ... 1.40€',
    '2': '2. Sidra ... 2.95',
    '3': '3. Vino tinto ... 3.95€'
};

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

// array de frases
const arrayFrases = [
    '¡Es un plato delicios!',
    '¡Tiene un sabor espectacular!',
    '¡Elegiste un plato muy sabroso!',
    '¡Buena elección!',
    '¡Este plato es un clásico!'
]

// frase aleatoria
const fraseAleatoria_1 = arrayFrases[Math.floor(Math.random() * arrayFrases.length)];
const fraseAleatoria_2 = arrayFrases[Math.floor(Math.random() * arrayFrases.length)];
const fraseAleatoria_3 = arrayFrases[Math.floor(Math.random() * arrayFrases.length)];

// numeros de menu seleccionado
let numeroPrimerPlato = '';
let numeroSegundoPlato = '';
let numeroPostre = '';
let numeroBebida = '';

// descripcion y precio de menu seleccionado
let seleccionadoPrimerPlato = '';
let seleccionadoSegundoPlato = '';
let seleccionadoPostre = '';
let seleccionadoBebida = '';

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

    // reservar hora restaurante
    const insertarHora = prompt('¡Bienvenido/a! Gracias por elegir DevCamp. Nuestro horario de atención es de 06:00 a 23:59 horas de lunes a domingo. Introduzca la hora en formato 00:00 24h para reservar su mesa: ');
    
    const restauranteAbierto = insertarHora.match(regexAbierto);
    const servicioDesayuno = insertarHora.match(regexDesayuno);
    const servicioComida = insertarHora.match(regexComida);
    const servicioCena = insertarHora.match(regexCena);
    
    // condicion de acceso 06:00 a 23:59
    if (restauranteAbierto) {
    
        // condicion horaria 06:00 a 11:59
        if (servicioDesayuno) {
            primerPlato();
            
            function primerPlato() {
        
                // pide el primer plato
                console.log(`
                    ${msgTurnoDesayuno}\n
                    ${msgMenuPrimero}\n
                    ${menuDesayuno.primero['1']}
                    ${menuDesayuno.primero['2']}
                    ${menuDesayuno.primero['3']}
                `);
            
                numeroPrimerPlato = prompt(msgSeleccioneNumero);
                
                if (numeroPrimerPlato >= '1' && numeroPrimerPlato <= '2') {
                    
                    seleccionadoPrimerPlato = menuDesayuno.primero[numeroPrimerPlato];
                    console.log(`Seleccionado: ${seleccionadoPrimerPlato}`);
                    console.log(fraseAleatoria_1);
                    segundoPlato();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    primerPlato();
                }
            }
        
            function segundoPlato() {
                
                // pide el segundo plato
                console.log(`
                    ${msgMenuSegundo}\n
                    ${menuDesayuno.segundo['1']}
                    ${menuDesayuno.segundo['2']}
                    ${menuDesayuno.segundo['3']}
                `);
                
                numeroSegundoPlato = prompt(msgSeleccioneNumero);
                
                if (numeroSegundoPlato >= '1' && numeroSegundoPlato <= '2') {
                    
                    seleccionadoSegundoPlato = menuDesayuno.segundo[numeroSegundoPlato];
                    console.log(`Seleccionado: ${seleccionadoSegundoPlato}`);
                    console.log(fraseAleatoria_2);
                    postre();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    segundoPlato();
                }
            }
        
            function postre() {
    
                // pide el postre
                console.log(`
                    ${msgMenuPostre}\n
                    ${menuPostre['1']}
                    ${menuPostre['2']}
                    ${menuPostre['3']}
                    ${menuPostre['4']}
                    ${menuPostre['5']}
                    ${menuPostre['6']}
                    ${menuPostre['7']}
                `);
            
                numeroPostre = prompt(msgSeleccioneNumero);
                
                if (numeroPostre >= '1' && numeroPostre <= '7') {
                    
                    seleccionadoPostre = menuPostre[numeroPostre];
                    console.log(`Seleccionado: ${seleccionadoPostre}`);
                    console.log(fraseAleatoria_3);
                    bebida();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    postre();
                }
            }
        
            function bebida() {
                
                // Si seleccionaste el postre, pide la bebida
                console.log(`
                    ${msgMenuBebida}\n
                    ${menuBebida['1']}
                    ${menuBebida['2']}
                    ${menuBebida['3']}
                `);
            
                numeroBebida = prompt(msgSeleccioneNumero);
            
                if (numeroBebida >= '1' && numeroBebida <= '3') {
                    
                    seleccionadoBebida = menuBebida[numeroBebida];
                    console.log(`Seleccionado: ${seleccionadoBebida}`);
                    factura();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    bebida();
                }
            }
    
        // condicion horaria 12:00 a 17:59
        } else if (servicioComida) {
            primerPlato();
            
            function primerPlato() {
        
                // pide el primer plato
                console.log(`
                    ${msgTurnoComida}\n
                    ${msgMenuPrimero}\n
                    ${menuComida.primero['1']}
                    ${menuComida.primero['2']}
                    ${menuComida.primero['3']}
                `);
            
                numeroPrimerPlato = prompt(msgSeleccioneNumero);
                
                if (numeroPrimerPlato >= '1' && numeroPrimerPlato <= '2') {
                    
                    seleccionadoPrimerPlato = menuComida.primero[numeroPrimerPlato];
                    console.log(`Seleccionado: ${seleccionadoPrimerPlato}`);
                    console.log(fraseAleatoria_1);
                    segundoPlato();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    primerPlato();
                }
            }
        
            function segundoPlato() {
                
                // pide el segundo plato
                console.log(`
                    ${msgMenuSegundo}\n
                    ${menuComida.segundo['1']}
                    ${menuComida.segundo['2']}
                    ${menuComida.segundo['3']}
                `);
                
                numeroSegundoPlato = prompt(msgSeleccioneNumero);
                
                if (numeroSegundoPlato >= '1' && numeroSegundoPlato <= '2') {
                    
                    seleccionadoSegundoPlato = menuComida.segundo[numeroSegundoPlato];
                    console.log(`Seleccionado: ${seleccionadoSegundoPlato}`);
                    console.log(fraseAleatoria_2);
                    postre();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    segundoPlato();
                }
            }
        
            function postre() {
    
                // pide el postre
                console.log(`
                    ${msgMenuPostre}\n
                    ${menuPostre['1']}
                    ${menuPostre['2']}
                    ${menuPostre['3']}
                    ${menuPostre['4']}
                    ${menuPostre['5']}
                    ${menuPostre['6']}
                    ${menuPostre['7']}
                `);
            
                numeroPostre = prompt(msgSeleccioneNumero);
                
                if (numeroPostre >= '1' && numeroPostre <= '7') {
                    
                    seleccionadoPostre = menuPostre[numeroPostre];
                    console.log(`Seleccionado: ${seleccionadoPostre}`);
                    console.log(fraseAleatoria_3);
                    bebida();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    postre();
                }
            }
        
            function bebida() {
                
                // Si seleccionaste el postre, pide la bebida
                console.log(`
                    ${msgMenuBebida}\n
                    ${menuBebida['1']}
                    ${menuBebida['2']}
                    ${menuBebida['3']}
                `);
            
                numeroBebida = prompt(msgSeleccioneNumero);
            
                if (numeroBebida >= '1' && numeroBebida <= '3') {
                    
                    seleccionadoBebida = menuBebida[numeroBebida];
                    console.log(`Seleccionado: ${seleccionadoBebida}`);
                    factura();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    bebida();
                }
            }
    
        // condicion horaria 18:00 a 23:59
        } else if (servicioCena) {
            primerPlato();
            
            function primerPlato() {
        
                // pide el primer plato
                console.log(`
                    ${msgTurnoCena}\n
                    ${msgMenuPrimero}\n
                    ${menuCena.primero['1']}
                    ${menuCena.primero['2']}
                    ${menuCena.primero['3']}
                `);
            
                numeroPrimerPlato = prompt(msgSeleccioneNumero);
                
                if (numeroPrimerPlato >= '1' && numeroPrimerPlato <= '2') {
                    
                    seleccionadoPrimerPlato = menuCena.primero[numeroPrimerPlato];
                    console.log(`Seleccionado: ${seleccionadoPrimerPlato}`);
                    console.log(fraseAleatoria_1);
                    segundoPlato();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    primerPlato();
                }
            }
        
            function segundoPlato() {
                
                // pide el segundo plato
                console.log(`
                    ${msgMenuSegundo}\n
                    ${menuCena.segundo['1']}
                    ${menuCena.segundo['2']}
                    ${menuCena.segundo['3']}
                `);
                
                numeroSegundoPlato = prompt(msgSeleccioneNumero);
                
                if (numeroSegundoPlato >= '1' && numeroSegundoPlato <= '2') {
                    
                    seleccionadoSegundoPlato = menuCena.segundo[numeroSegundoPlato];
                    console.log(`Seleccionado: ${seleccionadoSegundoPlato}`);
                    console.log(fraseAleatoria_2);
                    postre();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    segundoPlato();
                }
            }
        
            function postre() {
    
                // pide el postre
                console.log(`
                    ${msgMenuPostre}\n
                    ${menuPostre['1']}
                    ${menuPostre['2']}
                    ${menuPostre['3']}
                    ${menuPostre['4']}
                    ${menuPostre['5']}
                    ${menuPostre['6']}
                    ${menuPostre['7']}
                `);
            
                numeroPostre = prompt(msgSeleccioneNumero);
                
                if (numeroPostre >= '1' && numeroPostre <= '7') {
                    
                    seleccionadoPostre = menuPostre[numeroPostre];
                    console.log(`Seleccionado: ${seleccionadoPostre}`);
                    console.log(fraseAleatoria_3);
                    bebida();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    postre();
                }
            }
        
            function bebida() {
                
                // Si seleccionaste el postre, pide la bebida
                console.log(`
                    ${msgMenuBebida}\n
                    ${menuBebida['1']}
                    ${menuBebida['2']}
                    ${menuBebida['3']}
                `);
            
                numeroBebida = prompt(msgSeleccioneNumero);
            
                if (numeroBebida >= '1' && numeroBebida <= '3') {
                    
                    seleccionadoBebida = menuBebida[numeroBebida];
                    console.log(`Seleccionado: ${seleccionadoBebida}`);
                    factura();
                } else {
                    console.log(`${msgNumeroIncorrecto}`);
                    bebida();
                }
            }
    
        } else {
            console.log('¡No hay servicio disponible!');
        }
    } else {
        console.log('¡Cerrado! Horario: 06:00 a 23:59 de lunes a domingo.');
    }
}



// funcion para genera factura
function factura() {

    // primer filtrado con array para obtener el precio
    const precioPrimerPlato = seleccionadoPrimerPlato.match(regexPrecioSeleccion);
    const precioSegundoPlato = seleccionadoSegundoPlato.match(regexPrecioSeleccion);
    const precioPostre = seleccionadoPostre.match(regexPrecioSeleccion);
    const precioBebida = seleccionadoBebida.match(regexPrecioSeleccion);
    
    // convertir array en string
    const strPrimero = precioPrimerPlato.toString();
    const strSegundo = precioSegundoPlato.toString();
    const strPostre = precioPostre.toString();
    const strBebida = precioBebida.toString();
    
    // filtrado final para obtener el precio
    const filtradoPrimero = strPrimero.slice(4, -1);
    const filtradoSegundo = strSegundo.slice(4, -1);
    const filtradoPostre = strPostre.slice(4, -1);
    const filtradoBebida = strBebida.slice(4, -1);
    
    // convertir string en numero
    const primero = parseFloat(filtradoPrimero);
    const segundo = parseFloat(filtradoSegundo);
    const postre = parseFloat(filtradoPostre);
    const bebida = parseFloat(filtradoBebida);

    const pagarTotal = primero + segundo + postre + bebida;

    console.log('¡Ya tienes disponible tu factura!')
    console.log(`
        ${seleccionadoPrimerPlato}
        ${seleccionadoSegundoPlato}
        ${seleccionadoPostre}
        ${seleccionadoBebida}\n
        Total a pagar: ${pagarTotal}€
        `);
}



// invoca a la funcion restaurante
restaurante();
