// 1er algoritmo
/* let entrada1 = prompt("ingre su Nombre, por favor");
let entrada2 = prompt("ingre su Apellido, por favor");
let salida = "¡Holaa!" + " " + entrada1 + " " + entrada2 + ".";
alert(salida) */
//2do alggoritmo
/* let tuplata = prompt("Ingrese el precio");
let valorCompleto = parseFloat(tuplata);
let porcentajeIva = 21;
const montoIVA = (valorCompleto * porcentajeIva) / 100;
const precioSinIVA = valorCompleto - montoIVA;

alert("El monto sin el IVA es $" + precioSinIVA.toFixed(2));  */

// 1er algoritmo con if else y operadores
/* let PesoCorporal = parseFloat(prompt("Ingrese su peso"));
let Altura = parseFloat(prompt("Ingrese su altura"));
let imc = PesoCorporal / (Altura * Altura);
const resultado = "IMC " + imc.toFixed(3);

if (imc < 18.5) {
    alert("Peso inferior al normal" + " " + resultado );
} else if ((imc >= 18.5) && (imc <= 24.9)) {
    alert("Tiene un peso normal" + " " + resultado );
} else if ((imc >= 25.0) && (imc <= 29.0)) {
    alert("Peso superior al nomal" + " " + resultado );
} else if (imc > 30) {
    alert("tiene obesidad" + " " + resultado );
} */

let entrada = prompt("elija entre azul o rojo");
let azul = 110;
let rojo = 3000;
const azulff = "Ganaste " + azul + " puntos!";
const rojoff = "Ganaste " + rojo + " puntos!";
if (entrada === "azul"){
    alert(azulff);
} else if (entrada === "rojo"){
    alert(rojoff);
}