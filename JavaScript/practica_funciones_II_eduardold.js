// Ejercicio 1

console.log("Estoy aprendiendo JavaScript paso a paso");

// Ejercicio 2

let resultado = 8*3;

console.log("Este es el resultado de la multiplicacion ocho por tres: " , resultado);

// Ejercicio 3

console.log("JavaScript se ejecuta en el navegador");

// Ejercicio 4

let resultado = 144/12;

console.log("Este es el resultado de la división 144 entre 12: " , resultado);

// Ejercicio 5

console.log("Inicio del programa");
console.log("Fin del programa");

// Ejercicio 6

let producto = teclado;

console.log("Este es el resultado de la variable: " , producto);

// Ejercicio 7

const iva = 21;

console.log("Este es el valor del IVA habitualmente: " , iva);

// Ejercicio 8

let precioBase = 49.99;

console.log("Este es precio del producto " + precioBase);

// Ejercicio 9

// Ejercicio 10

let mensajeBienvenida = "Bienvenidx al curso inclusivo de diseno web";

console.log(mensajeBienvenida);

// Ejercicio 11

let cantidadProductos = 22;

console.log("Este es la cantidad de productos solicitados: " , cantidadProductos);

// Ejercicio 12



// Ejercicio 13

let nombreCurso = "Administracion de Sistemas Operativos";
const duracionHoras = 250;

console.log("Este es el nombre del curso que repites: " , cantidadProductos + ", con una duración de " , duracionHoras , "horas");

// Ejercicio 14

let puntuacion = "8.84";

console.log("Esta es tu nota: " + puntuacion);

// Ejercicio 15

const herramientas = ["VisualStudio", "Git", "Moodle"];

console.log("Este es el contenido del array: " , herramientas);

// Ejercicio 16

let stockDisponible = 20;

if (stockDisponible > 0)
{
    console.log("Producto disponible")
} else {
     console.log("Producto agotado")   
}

// Ejercicio 17

let notaFinal = 8;

if (notaFinal >= 5)
{
    console.log("Evaluación superada")
} else {
     console.log("Evaluación no superada")
}

// Ejercicio 18

const modoUsuario = true;

if (modoUsuario = true)
{
    console.log("Modo oscuro activado")
} else {
     console.log("Modo claro activado")
}

// Ejercicio 19

let numeroIntentos = 2;

if (numeroIntentos <= 3)
{
    console.log("Puedes seguir intentándolo")
} else {
     console.log("Has superado el número de intentos")
}

// Ejercicio 20

let rolUsuario = "usuario";

if (rolUsuario = "admin")
{
    console.log("Tienes permisos de administrador")
} else {
     console.log("Tienes permisos limitados")
}

// Ejercicio 21

let num = 3;

for (num; num <= 12; num++) {
    console.log(num);
}

// Ejercicio 22

let limite = 30;

for (limite; limite <= 30; limite++) {
    console.log(limite);
}

// Ejercicio 23

let multiplica = 3;
let limite = 10;

for (limite; limite <= 10; limite++) {
    console.log("Este es el resultado de " , limite*multiplica)
}

// Ejercicio 24

let colores = ["Naranja", "Verde", "Rojo"];

while (colores, colores++) {
    console.log("El semáforo puede indicar color " , color)
}

// Ejercicio 25
for (let countdown = 10; countdown >= 1; countdown--) {
    console.log(countdown);
}

// Ejercicio 26

function mostrarMensaje() {
    console.log("Función ejecutada correctamente");
}

mostrarMensaje();

// Ejercicio 27

function calcularTriple(numero) {
    return numero * 3;
}

let resultado = calcularTriple(5);
console.log(resultado);

// Ejercicio 28

const crearSaludo = function(nombre) {
    return "Bienvenido/a, " + nombre;
};

console.log(crearSaludo("Eduardo"));

// Ejercicio 29

function esMayorQueCien(numero) {
    return numero > 100;
}

// Ejercicio 30

let descuento = 10;

function aplicarDescuento(precio) {
    return precio - descuento;
}

// Ejercicio 31

const unirPalabras = function(palabra1, palabra2) {
    return palabra1 + " " + palabra2;
};

// Ejercicio 32

let impuesto = 5;

function sumarImpuesto(precio) {
    return precio + impuesto;
}

// Ejercicio 33

function obtenerPrimeraLetra(palabra) {
    return palabra[0];
}

// Ejercicio 34

const calcularAreaRectangulo = function(base, altura) {
    return base * altura;
};

// Ejercicio 35

let mensajeFinal = "Proceso completado con éxito";

function mostrarMensajeFinal() {
    return mensajeFinal;
}