class Parrilla2023 {
    constructor(nombrecomple, numeroDelMonoplaza, escuderia) {
        this.piloto = nombrecomple;
        this.id = numeroDelMonoplaza;
        this.equipo = escuderia;
    }
}

const pilotosRegistrados = [];
const cantidad = 4;

pilotosRegistrados.push(new Parrilla2023("Fernando Alonso", 14, "Aston Martin"));
pilotosRegistrados.push(new Parrilla2023("Max Verstappen", 1, "Red Bull"));
pilotosRegistrados.push(new Parrilla2023("Lewis Hamilton", 44, "Mercedes"));

const registrarPiloto = () => {
    alert("Solo queda un asiento para el 2023 ");
    let entradaNombre = prompt("Ingrese su Nombre completo").toUpperCase();
    let entradaID = parseInt(prompt("Ingrese su número de la SUERTE"));

    if (isNaN(entradaID)) {
        alert("El número del monoplaza debe ser un número válido.");
        return;
    }

    let entradaEquipo = prompt("Ingrese su escudería").toUpperCase();

    const numeroCocheExistente = pilotosRegistrados.find(piloto => piloto.id === entradaID);
    if (numeroCocheExistente) {
        alert(`El número de coche ${entradaID} ya está registrado.`);
        return;
    }

    const nuevoPiloto = new Parrilla2023(entradaNombre, entradaID, entradaEquipo);
    pilotosRegistrados.push(nuevoPiloto);
}

while (pilotosRegistrados.length < cantidad) {
    registrarPiloto();
}

alert("Pilotos registrados:\n" + pilotosRegistrados.map(piloto => `${piloto.piloto} - ${piloto.id} - ${piloto.equipo}`).join("\n"));
