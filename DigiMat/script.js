
// ================= CAMBIO DE PANTALLAS =================

// Esta funcion oculta todas las pantallas y muestra la seleccionada.
function mostrarPantalla(nombre) {

    // Busca todas las secciones que tienen la clase pantalla.
    const pantallas = document.querySelectorAll(".pantalla");

    // Quita la clase activa de todas las secciones.
    pantallas.forEach(function(pantalla) {
        pantalla.classList.remove("activa");
    });

    // Aqui enseña la pantalla que el usuario selecciono.
    document.getElementById(nombre).classList.add("activa");

    // lleva a la pagina al inicio.
    window.scrollTo(0, 0);
}


// Esta funcion permite regresar al menu principal.
function volverMenu() {

    //Se muestra el menu.
    mostrarPantalla("menu");

    // Limpia los campos y resultados.
    document.querySelectorAll("input").forEach(function(campo) {
        campo.value = "";
    });

    document.querySelectorAll(".resultado").forEach(function(resultado) {
        resultado.textContent = "Aquí aparecerá tu resultado.";
    });
}


// ================= EJERCICIO 1: CUBO =================

// Calcula el cubo de un numero ingresado por el usuario.
function calcularCubo() {

    //  el numero escrito en el campo.
    let numero = document.getElementById("numeroCubo").value;

    // aqui convierte el dato a numero decimal.
    numero = Number(numero);

    // comprobacion de que el campo no este vacio.
    if (document.getElementById("numeroCubo").value.trim() === "") {
        document.getElementById("resultadoCubo").textContent =
            "Por favor, ingresa un número.";
        return;
    }

    // Eleva el numero a la tercera potencia.
    let cubo = numero ** 3;

    // Muestra el resultado en pantalla.
    document.getElementById("resultadoCubo").textContent =
        "El cubo de " + numero + " es: " + cubo;
}


// ================= EJERCICIO 2: AREA =================

// Calcula el area de un triangulo usando su base y altura.
function calcularArea() {

    // obtiene los valores ingresados.
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;

    // Verifica  que ambos campos tengan informacion.
    if (base.trim() === "" || altura.trim() === "") {
        document.getElementById("resultadoArea").textContent =
            "Por favor, completa los dos campos.";
        return;
    }

    // convertimod los valores a numeros.
    base = Number(base);
    altura = Number(altura);

    // Verifica que las medidas sean mayores que cero.
    if (base <= 0 || altura <= 0) {
        document.getElementById("resultadoArea").textContent =
            "La base y la altura deben ser mayores que cero.";
        return;
    }

    // Aplica la formula del area del triangulo.
    let area = (base * altura) / 2;

    // Muestra el area calculada.
    document.getElementById("resultadoArea").textContent =
        "El área del triángulo es: " + area + " metros cuadrados.";
}


// ================= EJERCICIO 3: PROMEDIO =================

// Calcula el promedio de las tres calificaciones.
function calcularPromedio() {

    // ingresa el nombre del estudiante.
    let nombre = document.getElementById("nombre").value.trim();

    // lee las tres calificaciones.
    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;
    let nota3 = document.getElementById("nota3").value;

    // Verifica que todos los campos estan completos.
    if (nombre === "" || nota1.trim() === "" ||
        nota2.trim() === "" || nota3.trim() === "") {

        document.getElementById("resultadoPromedio").textContent =
            "Por favor, completa todos los campos.";

        return;
    }

    // conversion de las calificaciones a nameros.
    nota1 = Number(nota1);
    nota2 = Number(nota2);
    nota3 = Number(nota3);

    // comprueba que las notas no sean negativas.
    if (nota1 < 0 || nota2 < 0 || nota3 < 0) {
        document.getElementById("resultadoPromedio").textContent =
            "Las calificaciones no pueden ser negativas.";
        return;
    }

    // Suma  las tres calificaciones y dividimos entre tres.
    let promedio = (nota1 + nota2 + nota3) / 3;

    // muestra el nombre del estudiante y su promedio.
    document.getElementById("resultadoPromedio").textContent =
        "El promedio de " + nombre + " es: " +
        promedio.toFixed(2) + " puntos.";
}


// ================= EJERCICIO 4: COMPARACION =================

// Compara dos numeros y calcula la diferencia entre ellos.
function compararNumeros() {

    // Obtenemos los dos valores ingresados.
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    // Revisamos que los campos no esten vacios.
    if (numero1.trim() === "" || numero2.trim() === "") {
        document.getElementById("resultadoComparacion").textContent =
            "Por favor, ingresa los dos números.";
        return;
    }

    // Convertimos los valores a numeros.
    numero1 = Number(numero1);
    numero2 = Number(numero2);

    // Calculamos la diferencia entre ambos numeros.
    let diferencia = Math.abs(numero1 - numero2);

    // Comparamos los valores para encontrar el mayor y el menor.
    if (numero1 > numero2) {

        document.getElementById("resultadoComparacion").innerHTML =
            "El número mayor es: " + numero1 +
            "<br>El número menor es: " + numero2 +
            "<br>La diferencia entre ambos es: " + diferencia;

    } else if (numero2 > numero1) {

        document.getElementById("resultadoComparacion").innerHTML =
            "El número mayor es: " + numero2 +
            "<br>El número menor es: " + numero1 +
            "<br>La diferencia entre ambos es: " + diferencia;

    } else {

        // Este mensaje aparece cuando los dos números son iguales.
        document.getElementById("resultadoComparacion").innerHTML =
            "Los dos números son iguales: " + numero1 +
            "<br>La diferencia entre ambos es: 0";
    }
}


// ================= CAMBIO DEL MUÑEQUITO =================

// Guardamos las dos imagenes que tendra el personaje.
const imagenesMuneco = [
    "imagenes/muneco1.png",
    "imagenes/muneco2.png"
];

// Esta variable indica cual imagen se esta mostrando.
let imagenActual = 0;

// Cambiamos la imagen cada tres segundos.
setInterval(function() {

    // Obtenemos el elemento de la imagen.
    const muneco = document.getElementById("imagenMuneco");

    // Agregamos una clase para realizar el movimiento.
    muneco.classList.add("mover");

    // Cambiamos a la siguiente imagen.
    imagenActual = (imagenActual + 1) % imagenesMuneco.length;

    // Colocamos la nueva imagen.
    muneco.src = imagenesMuneco[imagenActual];

    // Quitamos la clase para que vuelva a su posicion normal.
    setTimeout(function() {
        muneco.classList.remove("mover");
    }, 600);

}, 3000);
