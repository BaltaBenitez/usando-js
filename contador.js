const tituloDeEseDia = "2023-11-26 00:00:00";
const fechaObjetivo = new Date(tituloDeEseDia).getTime();

const cuentaRegresiva = () => {
  const ahora = new Date().getTime();
  const tiempoRestante = fechaObjetivo - ahora;
  const contador = document.getElementById("contador");

  if (tiempoRestante <= 0) {
    contador.innerHTML = `<h5>La Proxima temporada empieza el 29 de Febrero</h5>`;
    return;
  }

  const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

  contador.innerHTML = `
    <h5>Cuenta regresiva para el GP de Abu Adabi</h5>
    <p class="text-warning">${dias} D, ${horas} hs, ${minutos} ms, ${segundos} seg</p>
  `;
};

cuentaRegresiva();

setInterval(cuentaRegresiva, 1000);
