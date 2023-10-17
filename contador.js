const fechaDestino = new Date("2023-11-26 00:00:00").getTime();
const interval = setInterval(() => {
    const ahora = new Date().getTime();
    const tiempoRestante = fechaDestino - ahora;

    if (tiempoRestante <= 0) {
        clearInterval(interval);
        document.getElementById("contador").innerHTML = "Hoy es el GP de Abu Dabi!";
    } else {
        const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);
        document.getElementById("contador").innerHTML = `
        <h5>Cuenta regresiva del GP de Abu Dabi</h5>
        <p class="text-warning" > ${dias} D, ${horas} hs, ${minutos} ms, ${segundos} seg</p>
        `;
    }
}, 1000);
