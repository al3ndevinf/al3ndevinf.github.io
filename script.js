// Partes de la computadora
const partes = [
    { img: "img/teclado.png", correcta: "Teclado", opciones: ["Teclado", "Ratón", "Monitor"] },
    { img: "img/raton.png", correcta: "Ratón", opciones: ["CPU", "Ratón", "Parlantes"] },
    { img: "img/monitor.png", correcta: "Monitor", opciones: ["Cámara Web", "Monitor", "Micrófono"] },
    { img: "img/parlantes.png", correcta: "Parlantes", opciones: ["Audífonos", "Parlantes", "CPU"] },
    { img: "img/impresora.png", correcta: "Impresora", opciones: ["Impresora", "Teléfono", "CPU"] },
    { img: "img/camara.png", correcta: "Cámara Web", opciones: ["Teclado", "CPU", "Cámara Web"] },
    { img: "img/cpu.png", correcta: "CPU", opciones: ["Ratón", "Audífonos", "CPU"] },
    { img: "img/microfono.png", correcta: "Micrófono", opciones: ["Micrófono", "Parlantes", "Monitor"] },
    { img: "img/radio.png", correcta: "Radio", opciones: ["Radio", "Parlantes", "Monitor"] },
    { img: "img/tv.png", correcta: "Televisor", opciones: ["Televisor", "Cámara Web", "Audífonos"] },
    { img: "img/celular.png", correcta: "Celular", opciones: ["Celular", "Cámara Web", "Audífonos"] },
    { img: "img/telefono.png", correcta: "Teléfono", opciones: ["Monitor", "Teléfono", "Audífonos"] },
    { img: "img/tablet.png", correcta: "Tablet", opciones: ["Teclado", "Tablet", "Audífonos"] },
    { img: "img/audifonos.png", correcta: "Audífonos", opciones: ["Teclado", "Cámara Web", "Audífonos"] }
];

let nivel = 0;
let nombreJugador = "";

// Función para iniciar el juego
function iniciarJuego() {
    nombreJugador = document.getElementById("nombreJugador").value;
    if (nombreJugador.trim() !== "") {
        document.getElementById("inicio").style.display = "none";
        document.getElementById("juego").style.display = "flex";
        iniciarNivel();
    } else {
        alert("Por favor, ingresa tu nombre para comenzar.");
    }
}

// Función para iniciar un nivel
function iniciarNivel() {
    if (nivel < partes.length) {
        document.getElementById("nivel").innerText = nivel + 1;
        document.getElementById("imagen").src = partes[nivel].img;
        generarOpciones(partes[nivel]);
    } else {
        mostrarPantallaFinal();
    }
}

// Función para generar opciones
function generarOpciones(parte) {
    const contenedor = document.getElementById("opciones");
    contenedor.innerHTML = "";

    parte.opciones.forEach(opcion => {
        const boton = document.createElement("button");
        boton.innerText = opcion;
        boton.onclick = () => verificarRespuesta(opcion, parte.correcta);
        contenedor.appendChild(boton);
    });
}

// Función para verificar la respuesta
function verificarRespuesta(opcionSeleccionada, respuestaCorrecta) {
    if (opcionSeleccionada === respuestaCorrecta) {
        nivel++;
        iniciarNivel();
    } else {
        alert("Respuesta incorrecta. ¡Inténtalo de nuevo!");
    }
}

// Función para mostrar la pantalla final
function mostrarPantallaFinal() {
    document.getElementById("juego").style.display = "none";
    document.getElementById("final").style.display = "flex";
    document.getElementById("nombreFinal").innerText = nombreJugador;
}

// Iniciar el primer nivel
nivel = 0;
