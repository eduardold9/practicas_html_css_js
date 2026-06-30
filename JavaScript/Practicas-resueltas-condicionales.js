// Ejercicio 1
let edad = 28;

if (edad >= 18)
{
    console.log("Eres mayor de edad")
} else {
     console.log("Eres menor de edad")   
}

//Ejercicio 2
let temperatura = 18;

if (temperatura >= 22)
{
    console.log("Hace calor")
} else {
     console.log("Hace frío")   
}

// Ejercicio 3
let num = 10;

for (num; num <= 10; num++) {
    console.log(num);
}

// Ejercicio 4
let numpares = 0;

for (numpares; numpares <= 20; numpares) {
    if (numpares % 2 === 0) 
    {
        console.log(numpares);
    }
}

// Ejercicio 5

let nota = 7.22;

if (nota <= 4.99) {
    console.log("Alumno suspenso");    
}
else {
    console.log("Alumno aprobado");
}

// Ejercicio 6

const nombre = "Eduardo";

for (nombre; nombre <= 10; nombre++) {
    console.log(nombre);
}

// Ejercicio 7


let suma = 0;

for (let numero = 1; numero <= 10; numero++)
{
    suma = suma + numero;
}
console.log(suma);

// Ejercicio 8

let contador = 10;

while (contador >= 1) {
    console.log(contador);
    contador--;
}

// Ejercicio 9

let saldo = 0;

for (let mes = 1; mes <= 12; mes++) {
    saldo += 50;
    console.log("Mes " + mes + ": " + saldo + "€");
}

// Ejercicio 10

let alturamin = 190;

if (alturamin >= 120) {
    console.log("La altura " + alturamin + " que has indicado es superior a 120 cm. Puedes pasar.");    
}
else {
    console.log("La altura " + alturamin + " que has indicado es inferior a 120 cm. No puedes pasar.");  
}