function calcular(precioCarne) {
    const costoDeCria = precioCarne * 0.28;
    const costoDeFeedlot = precioCarne * 0.25;
    const costoDeFrigorifico = precioCarne * 0.06;
    const costoDeCarniceria = precioCarne * 0.14;
    const ganancias = precioCarne * 0.10;
    const impuestos = precioCarne * 0.27;

    const totalCostos = costoDeCria + costoDeFeedlot + costoDeFrigorifico + costoDeCarniceria;
    const Totalganancias = ganancias;
    const impuestosTotal = impuestos;

    let salida = `Detalles de la CARNE:
    - Costo de Cría: $${costoDeCria.toFixed(2)}
    - Costo de Feedlot: $${costoDeFeedlot.toFixed(2)}
    - Costo de Frigorífico: $${costoDeFrigorifico.toFixed(2)}
    - Costo de la Carnicería: $${costoDeCarniceria.toFixed(2)}
    -------------------------
    - Total de Costos: $${totalCostos.toFixed(2)}
    --- Las Ganancias: $${Totalganancias.toFixed(2)}
    ---- Impuestos: $${impuestosTotal.toFixed(2)}`;

    return salida;
}

function calcularPan (precioPan) {
    const costosDePan = precioPan * 0.57;
    const impuestosPan = precioPan * 0.18;
    const gananciasPanaderia = precioPan * 0.18;

    const resultadoPan = costosDePan;
    const resultadoPan2 = impuestosPan;
    const resultadoPan3 = gananciasPanaderia;

    let salidaPan = `RESUMEM:
    - Costos del Pan: $${resultadoPan.toFixed(2)}
    - Ganacias de la Panaderia: $${resultadoPan2.toFixed(2)}
    ----
    - Impuestos: $${resultadoPan3.toFixed(2)}`;
    
    return salidaPan;
}