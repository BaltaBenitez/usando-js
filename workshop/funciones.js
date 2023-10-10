const productos = [
    {id: 1, nombre:"AMF1 2023 Official Team Jacket", talle: "S, M y XL", imagen:"https://shop.astonmartinf1.com/cdn/shop/products/AMA23JKT01-ASTON-MARTIN-ARAMCO-COGNIZANT-F1-2023-OFFICIAL-TEAM-JACKET.1.v2_1024x1024.jpg?v=1676280858", precio: 195.00, categoria: "campera"},{id: 2, nombre:"Kimoa Alonso x AMF1 Lifestyle Wind Breaker - Black", talle: "S, M, L y XL", imagen:"https://shop.astonmartinf1.com/cdn/shop/products/FV_PF_ES_P_02_1024x1024.jpg?v=1682664398", precio: 110.00, categoria: "campera"} ,{id: 3, nombre:"AMF1 2023 Lifestyle Hoody", talle: "S, M y X", imagen:"https://shop.astonmartinf1.com/cdn/shop/files/AMA23KSW03-Aston-Martin-Aramco-Cognizant-F1-Lifestyle-Hoody-Black.a_1024x1024.jpg?v=1683185287", precio: 90.00, categoria: "buzo"},{id: 4, nombre:"AMF1 2023 Official Fernando Alonso T-Shirt", talle: "XS, S, M y XL", imagen:"https://shop.astonmartinf1.com/cdn/shop/products/AMA23KTS07-ASTON-MARTIN-ARAMCO-COGNIZANT-F1-2023-OFFICIAL-TEAM-DRIVER-T-SHIRT-FA-MALE.5_1024x1024.jpg?v=1676284760", precio: 58.00, categoria: "remera"},{id: 5, nombre:"AMF1 2023 Official Lance Stroll T-Shirt", talle: "XS, S, M y XL", imagen:"https://shop.astonmartinf1.com/cdn/shop/products/AMA23KTS06-ASTON-MARTIN-ARAMCO-COGNIZANT-F1-2023-OFFICIAL-TEAM-DRIVER-T-SHIRT-LS-MALE.3_1024x1024.jpg?v=1676284671", precio: 58.00, categoria: "campera"},{id: 6, nombre:"AMF1 2023 Official Team Cap - Black", talle: "O-S", imagen:"https://shop.astonmartinf1.com/cdn/shop/products/AMA23HEA03-ASTON-MARTIN-ARAMCO-COGNIZANT-F1-2023-OFFICIAL-TEAM-CAP-BLACK.1_1024x1024.jpg?v=1675758269", precio: 37.50, categoria: "gorra"}, {id: 7, nombre:"AMF1 2023 Official Fernando Alonso Cap - Green", talle: "O-S", imagen:"https://shop.astonmartinf1.com/cdn/shop/products/AMA23HEA09-ASTON-MARTIN-ARAMCO-COGNIZANT-F1-2023-OFFICIAL-TEAM-DRIVER-FERNANDO-ALONSO-CAP-GREEN_1024x1024.jpg?v=1675759341", precio: 37.50, categoria: "gorra"}, {id: 8, nombre:"AMF1 2023 Official Kids Lance Stroll Cap - Green", talle: "O-S", imagen:"https://shop.astonmartinf1.com/cdn/shop/products/AMCF1-2023-ecom-plate3_0005_Layer62copy_1024x1024.jpg?v=1675763668", precio: 37.50, categoria: "gorra"}
];

const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

const mostrarProductos = () => {
    const productos = cargarProductosLS();
    let contenidoHTML = "";

    productos.forEach(producto => {
        contenidoHTML += `
            <div class="col-md-3 mb-5 text-center">
                <div class="card text-bg-success">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">$${producto.precio}</p>
                        <a href="#" class="btn btn-warning" onclick="agregarAlCarrito(${producto.id})">Agregar</a>
                    </div>
                </div>
            </div>`;
    });

    document.getElementById("productos__HTML").innerHTML = contenidoHTML;
};

const mostrarCarrito = () => {
    const productos = cargarCarritoLS();
    let contenidoHTML;

    if (cantProductosCarrito() > 0){
        contenidoHTML = `<table class="table">`;
        
        productos.forEach(producto => {
            contenidoHTML += `<tr>
            <td><img src="${producto.imagen}" alt="${producto.nombre}" width="64"></td>
            <td class="align-middle">${producto.nombre}</td>
            <td class="align-middle">${producto.precio}</td>
            <td class="align-middle text-end"><i class="fa-solid fa-trash text-danger" onclick="EliminarProductor(${producto.id})"></i></td>
            </tr>`;
        });
        
        contenidoHTML += `<tr>
        <td class="text-end"></td>
        <td colspan="2" class="text-end"> Total $ ${sumaProductosCarrito()}</td>
        <td></td>
        </tr>
        </table>`;
    } else {
        contenidoHTML += `<div class="alert alert-danger" role="alert">
        El carrito esta vacio
      </div>`
    };

    document.getElementById("carrito__HTML").innerHTML = contenidoHTML;
};

const guardarCarritoLS = (carrito) => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const cargarCarritoLS = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const agregarAlCarrito = (id) =>{
    const carrito = cargarCarritoLS();
    const producto = buscarPructos(id);
    carrito.push(producto);
    guardarCarritoLS(carrito);
    MostarBotonCarrito();
};

const EliminarProductor = (id) => {
    const carrito = cargarCarritoLS();
    const nuevoCarrito = carrito.filter(item => item.id !== item.id);
    guardarCarritoLS(nuevoCarrito);
    mostrarCarrito();
    MostarBotonCarrito();
};

const buscarPructos = (id) => {
    const productos = cargarProductosLS();
    let producto = productos.find(item => item.id === item.id);
    return producto;
};

const estaEnElCarrito = (id) => {
    const productos = cargarProductosLS();
    return productos.some(item => item.id === item.id)
};

const cantProductosCarrito = () => {
    const carrito = cargarCarritoLS();
    return carrito.leght;
};

const sumaProductosCarrito = () => {
    const carrito = cargarCarritoLS();
    return carrito.reduce((acumulador, item) => acumulador += item.precio, 0);
};

const MostarBotonCarrito = () => {
    let totalCarrito = document.getElementById("totalCarrito");
    totalCarrito.innerHTML = cantProductosCarrito();
}