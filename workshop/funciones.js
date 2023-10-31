const productos = [
    {id: 1, nombre:"AMF1 2023 Official Team Jacket", talle: "S, M y XL", imagen:"https://shop.astonmartinf1.com/cdn/shop/products/AMA23JKT01-ASTON-MARTIN-ARAMCO-COGNIZANT-F1-2023-OFFICIAL-TEAM-JACKET.1.v2_1024x1024.jpg?v=1676280858", precio: 195.00, categoria: "campera"},
    {id: 2, nombre:"Kimoa AMF1 Lifestyle Wind Breaker", talle: "S, M, L y XL", imagen:"https://shop.astonmartinf1.com/cdn/shop/products/FV_PF_ES_P_02_1024x1024.jpg?v=1682664398", precio: 110.00, categoria: "campera"},
    {id: 3, nombre:"AMF1 2023 Lifestyle Hoody", talle: "S, M y X", imagen:"https://shop.astonmartinf1.com/cdn/shop/files/AMA23KSW03-Aston-Martin-Aramco-Cognizant-F1-Lifestyle-Hoody-Black.a_1024x1024.jpg?v=1683185287", precio: 90.00, categoria: "buzo"},
    {id: 4, nombre:"AMF1 2023 Official Alonso T-Shirt", talle: "XS, S, M y XL", imagen:"https://shop.astonmartinf1.com/cdn/shop/products/AMA23KTS07-ASTON-MARTIN-ARAMCO-COGNIZANT-F1-2023-OFFICIAL-TEAM-DRIVER-T-SHIRT-FA-MALE.5_1024x1024.jpg?v=1676284760", precio: 58.00, categoria: "remera"},
    {id: 5, nombre:"AMF1 2023 Official Stroll T-Shirt", talle: "XS, S, M y XL", imagen:"https://shop.astonmartinf1.com/cdn/shop/products/AMA23KTS06-ASTON-MARTIN-ARAMCO-COGNIZANT-F1-2023-OFFICIAL-TEAM-DRIVER-T-SHIRT-LS-MALE.3_1024x1024.jpg?v=1676284671", precio: 58.00, categoria: "campera"},
    {id: 6, nombre:"AMF1 2023 Official Team Cap - Black", talle: "O-S", imagen:"https://shop.astonmartinf1.com/cdn/shop/products/AMA23HEA03-ASTON-MARTIN-ARAMCO-COGNIZANT-F1-2023-OFFICIAL-TEAM-CAP-BLACK.1_1024x1024.jpg?v=1675758269", precio: 37.50, categoria: "gorra"},
    {id: 7, nombre:"AMF1 2023 Official Alonso Cap - Green", talle: "O-S", imagen:"https://shop.astonmartinf1.com/cdn/shop/products/AMA23HEA09-ASTON-MARTIN-ARAMCO-COGNIZANT-F1-2023-OFFICIAL-TEAM-DRIVER-FERNANDO-ALONSO-CAP-GREEN_1024x1024.jpg?v=1675759341", precio: 37.50, categoria: "gorra"},
    {id: 8, nombre:"AMF1 2023 Official Stroll Cap - Green", talle: "O-S", imagen:"https://shop.astonmartinf1.com/cdn/shop/products/AMCF1-2023-ecom-plate3_0005_Layer62copy_1024x1024.jpg?v=1675763668", precio: 37.50, categoria: "gorra"}
]; const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

const renderProductos = () => {
    const productos = cargarProductosLS();
    let contenidoHTML = "";

    productos.forEach(producto => {
        contenidoHTML += `<div class="col-md-3 mb-5 text-center">
        <div class="card bg-success">
        <a href="producto.html" onclick="guardarProductoLS(${producto.id})"><img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}"></a>
        <div class="card-body">
          <h5 class="card-title text-light">${producto.nombre}</h5>
          <p class="card-text"><b class="text-warning">$ ${producto.precio}</b></p>
          <a href="#" class="btn btn-info" onclick="agregarProductoCarrito(${producto.id})">Agregar</a>
        </div>
        </div>
        </div>`;
    });

    document.getElementById("contenido").innerHTML = contenidoHTML;
}

const renderCarrito = () => {
    const productos = cargarCarritoLS();
    let contenidoHTML;

    if (cantProductosCarrito() > 0) {
        contenidoHTML = `<table class="table">
        <tr>
        <td colspan="7" class="text-end"><button class="btn btn-danger" onclick="vaciarCarrito()" title="Vaciar Carrito">Vaciar Carrito</button></td>
        </tr>`;

        productos.forEach(producto => {
            contenidoHTML += `<tr>
            <td><img src="${producto.imagen}" alt="${producto.nombre}" width="64"></td>
            <td class="align-middle">${producto.nombre}</td>
            <td class="align-middle">$ ${producto.precio}</td>
            <td class="align-middle"><button class="btn btn-success rounded-circle" onclick="decrementarCantidadProducto(${producto.id})">-</button> ${producto.cantidad} <button class="btn btn-success rounded-circle" onclick="incrementarCantidadProducto(${producto.id})">+</button></td>
            <td class="align-middle">$ ${producto.precio * producto.cantidad}</td>
            <td class="align-middle text-end"><img src="../images/trash.svg" alt="Eliminar" width="24" onclick="eliminarProductoCarrito(${producto.id})"></td>
            </tr>`;
        });

        contenidoHTML += `<tr">
        <td>&nbsp;</td>
        <td><b class="text-dark">Total</b></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td><b class="text-dark">$ ${sumaProductosCarrito()}</b></td>
        <td>&nbsp;</td>
        </tr>
        </table>`;
    } else {
        contenidoHTML = `<div class="alert alert-warning my-5 text-center" role="alert">El Carrito esta vacio!</div>`;
    }
    
    document.getElementById("contenido").innerHTML = contenidoHTML;
}

const guardarCarritoLS = (carrito) => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const cargarCarritoLS = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const guardarProductoLS = (id) => {
    localStorage.setItem("producto", JSON.stringify(id));
}

const cargarProductoLS = () => {
    return JSON.parse(localStorage.getItem("producto")) || [];
}

const vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    renderCarrito();
    renderBotonCarrito();
}

const agregarProductoCarrito = (id) => {
    const carrito = cargarCarritoLS();

    if (estaEnElCarrito(id)) {
        const producto = carrito.find(item => item.id === id);
        producto.cantidad += 1;
    } else {
        const producto = buscarProducto(id);
        producto.cantidad = 1;
        carrito.push(producto);
    }

    guardarCarritoLS(carrito);
    renderBotonCarrito();

    Toastify({
        text: "Prroducto agregado correctamente en el carrito.",
        duration: 2000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "lef", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        backgroundColor: "#ffc107",
        onClick: function(){} // Callback after click
      }).showToast();
}

const eliminarProductoCarrito = (id) => {
    const carrito = cargarCarritoLS();
    const nuevoCarrito = carrito.filter(item => item.id !== id);
    guardarCarritoLS(nuevoCarrito);
    renderCarrito();
    renderBotonCarrito();
}

const incrementarCantidadProducto = (id) => {
    const carrito = cargarCarritoLS();
    const producto = carrito.find(item => item.id === id);
    producto.cantidad += 1;
    guardarCarritoLS(carrito);
    renderCarrito();
    renderBotonCarrito();
}

const decrementarCantidadProducto = (id) => {
    const carrito = cargarCarritoLS();
    const producto = carrito.find(item => item.id === id);

    if (producto.cantidad > 1) {
        producto.cantidad -= 1;
        guardarCarritoLS(carrito);
        renderCarrito();
        renderBotonCarrito();
    } else {
        eliminarProductoCarrito(id);
    }
}

const buscarProducto = (id) => {
    const productos = cargarProductosLS();
    let producto = productos.find(item => item.id === id);

    return producto;
}

const estaEnElCarrito = (id) => {
    const productos = cargarCarritoLS();

    return productos.some(item => item.id === id);
}

const cantProductosCarrito = () => {
    const carrito = cargarCarritoLS();

    return carrito.reduce((acumulador, item) => acumulador += item.cantidad, 0);
}

const sumaProductosCarrito = () => {
    const carrito = cargarCarritoLS();

    return carrito.reduce((acumulador, item) => acumulador += item.precio * item.cantidad, 0);
}

const renderBotonCarrito = () => {
    let totalCarrito = document.getElementById("totalCarrito");
    totalCarrito.innerHTML = cantProductosCarrito();
}

const renderProducto = () => {
    const idProducto = cargarProductoLS();
    const producto = buscarProducto(idProducto);

    document.getElementById("imagenProducto").src = producto.imagen;
    document.getElementById("tituloProducto").innerHTML = producto.nombre;
    document.getElementById("descripcionProducto").innerHTML = "Talles en stock: " + producto.talle;
    document.getElementById("precioProducto").innerHTML = `<b class="text-light">$ ${producto.precio}</b>`;
    document.getElementById("botonAgregar").innerHTML= `<a href="#" class="btn btn-info" onclick="agregarProductoCarrito(${producto.id})">Agregar</a>`;
}