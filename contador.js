const countdown = (season) => {
    const fechaObjetivo = season === "2023" ? "2023-11-26 00:00:00" : "2024-02-29 00:00:00";
    const mensajeTemporada = season === "2023" ? "GP de Abu Dabi" : "Temporada 2024 de F1";
  
    return new Promise((resolve, reject) => {
      const fechaDestino = new Date(fechaObjetivo).getTime();
  
        const interval = setInterval(() => {
            const ahora = new Date().getTime();
            const tiempoRestante = fechaDestino - ahora;
  
                if (tiempoRestante <= 0) {
                clearInterval(interval);
                resolve(`Hoy es el ${mensajeTemporada}!`);
                } else {
                const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
                const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
                const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);
        
                const countdownMessage = `
                    <h5>Cuenta regresiva del ${mensajeTemporada}</h5>
                    <p class="text-warning">${dias} D, ${horas} hs, ${minutos} ms, ${segundos} seg</p>
                `;
                resolve(countdownMessage);
                }
        }, 1000);
    });
};

countdown("2023").then((message) => {
    document.getElementById("contador").innerHTML = message;
}).catch((error) => {
    console.error(error);
});

countdown("2024").then((message) => {
    document.getElementById("contador2024").innerHTML = message;
}).catch((error) => {
    console.error(error);
});