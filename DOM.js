const nav = document.getElementById("nav__container");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

//Gallery
const images = document.querySelectorAll(".gallery__img");

images.forEach((image) => {
    image.addEventListener('click', () => {
        const imageUrl = image.getAttribute('src');
        const imageAlt = image.getAttribute('alt');
        Swal.fire({
            title: 'Temporada 2023',
            //text: 'Aston Martin',
            imageUrl: imageUrl,
            imageWidth: 800,
            imageHeight: 370,
            imageAlt: imageAlt,
            confirmButtonColor: '#198754',
            confirmButtonText: 'Salir',
            footer: '<a href="https://www.instagram.com/astonmartinf1/?hl=es" class="masFotos">Más Fotos</a>'
        });
    });
});

const sR = ScrollReveal ({
    distance: `65px`,
    duration: 2600,
    delay: 450,
    reset: true,
});

sR.reveal(`.hero__text`,{delay:200, origin: `top`,});
sR.reveal(`.hero__img`,{delay:200, origin: `top`,});
sR.reveal(`.div__redes`,{delay:200, origin: `left`,});
sR.reveal(`.gallery`,{delay:200, origin: `left`,});
  
  