// simulador de la CARNE
const precioCarne = parseFloat(prompt("Ingrese el precio que usted pagó por la Caerne"));

if (isNaN(precioCarne)) {
    alert("Por Favor. Ingrese un precio válido");
} else {
    let salida = calcular(precioCarne);
    alert(salida);
    console.log(salida);
}

// simulador de PAN

const precioPan = parseFloat(prompt("Ingrese el precio que usted pagó por el PAN"));

if (isNaN(precioPan)) {
    alert("POR FAVOR. Infrese un precio válido");
} else {
    let salidaPan = calcularPan(precioPan);
    alert(salidaPan);
    console.log(salidaPan);
}
