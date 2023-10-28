    // DOM SCRIPTING

// querySelector

const textoHeading = document.querySelector('.header__texto h2') // 1 or 2 elements
heading.textContent = 'Nuevo Heading';
heading.classList.add('nueva-clase');
console.log(textoHeading);

// querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].classList.add = ('nueva-clase');
enlaces[0].classList.remove('navegacion__enlace');

// getElementById //ya no se está usando

const heading2 = document.getElementById('heading')

// Generar nuevo enlace
const nuevoEnlace = document.createElement('A');

// Agregar href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar texto
nuevoEnlace.textContent = 'Nuevo Enlace';

// Agregar clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregar al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);


// Eventos

// console.log(1);

// window.addEventListener('load', function () { //load espera los archivos JS y HTML
//     console.log(2);
// });

// window.onload = function () {
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function () { //solo espera descarga del HTML y se usa más
//     console.log(4);
// });

// console.log(5);

// window.onscroll = function (evento) {
//     console.log(evento);
// }

// Seleccionar y asociar evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function (evento) { //img, txt..
//     console.log(evento);
//     evento.preventDefault();

// // Validar un formulario

//     console.log('enviando formulario');
// });


// Eventos input y textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

const formulario = document.querySelector('.formulario')

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// Evento Submit
formulario.addEventListener('submit', function(evento) { 
    evento.preventDefault();

    //Validar formulario

    const {nombre, email, mensaje} = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);

        return; //corta la ejecución del código
    }

// Alerta de éxito
    mostrarAlerta('Mensaje enviado correctamente');
});

function leerTexto(e) {
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;

    // console.log(datos);
}

// Alerta de envío y error (Refactorizado)

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    // Alerta desaparece en 3s
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

