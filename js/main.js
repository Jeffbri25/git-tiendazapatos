
// PRODUCTOS
const productos = [
    // Zpatos para Hombre
    {
        id: "hombre1",
        titulo: "Mocasines Negro",
        imagen: "./img/hombre/hombre1.jpg",
        categoría: {
            nombre: "Hombre",
            id: "Hombre",
        },
        precio: 60,
    },
    {
        id: "hombre2",
        titulo: "Dolce Gabbana",
        imagen: "./img/hombre/hombre2.jpg",
        categoría: {
            nombre: "Hombre",
            id: "Hombre",
        },
        precio: 40,
    },
    {
        id: "hombre3",
        titulo: "Casual",
        imagen: "./img/hombre/hombre3.jpg",
        categoría: {
            nombre: "Hombre",
            id: "Hombre",
        },
        precio: 55,
    },
    {
        id: "Hombre4",
        titulo: "Oxford",
        imagen: "./img/hombre/hombre4.jpg",
        categoría: {
            nombre: "Hombre",
            id: "Hombre",
        },
        precio: 70,
    },
    {
        id: "Hombre5",
        titulo: "Berluti",
        imagen: "./img/hombre/hombre5.jpg",
        categoría: {
            nombre: "Hombre",
            id: "Hombre",
        },
        precio: 85,
    },
    {
        id: "Hombre6",
        titulo: "Oxford",
        imagen: "./img/hombre/hombre6.jpg",
        categoría: {
            nombre: "Hombre",
            id: "Hombre",
        },
        precio: 80,
    },
    // Zapatos de Mujer
    {
        id: "mujer1",
        titulo: "Blucher",
        imagen: "./img/mujer/mujer1.jpg",
        categoría: {
            nombre: "Mujer",
            id: "Mujer",
        },
        precio: 50,
    },
    {
        id: "mujer2",
        titulo: "Sandalia",
        imagen: "./img/mujer/mujer2.jpg",
        categoría: {
            nombre: "Mujer",
            id: "Mujer",
        },
        precio: 35,
    },
    {
        id: "mujer3",
        titulo: "Cowboy Boots",
        imagen: "./img/mujer/mujer3.jpg",
        categoría: {
            nombre: "Mujer",
            id: "Mujer",
        },
        precio: 20,
    },
    {
        id: "mujer4",
        titulo: "Monk",
        imagen: "./img/mujer/mujer4.jpg",
        categoría: {
            nombre: "Mujer",
            id: "Mujer",
        },
        precio: 55,
    },
    {
        id: "mujer5",
        titulo: "Dockside",
        imagen: "./img/mujer/mujer5.jpg",
        categoría: {
            nombre: "Mujer",
            id: "Mujer",
        },
        precio: 70,
    },
    {
        id: "mujer6",
        titulo: "Mocasines Gris",
        imagen: "./img/mujer/mujer6.jpg",
        categoría: {
            nombre: "Redes",
            id: "Mujer",
        },
        precio: 65,
    },


    // Zapatos para niños
    {
        id: "niños1",
        titulo: "Mocasines",
        imagen: "./img/niños/niños1.jpg",
        categoría: {
            nombre: "Niños",
            id: "Niños",
        },
        precio: 25,
    },
    {
        id: "niños2",
        titulo: "Oxford",
        imagen: "./img/niños/niños2.jpg",
        categoría: {
            nombre: "Niños",
            id: "Niños",
        },
        precio: 35,
    },
    {
        id: "niños3",
        titulo: "Knit Sneakers",
        imagen: "./img/niños/niños3.jpg",
        categoría: {
            nombre: "Niños",
            id: "Niños",
        },
        precio: 20,
    },
    {
        id: "niños4",
        titulo: "Casual Flexi",
        imagen: "./img/niños/niños4.jpg",
        categoría: {
            nombre: "Niños",
            id: "Niños",
        },
        precio: 33,
    },
    {
        id: "niños5",
        titulo: "Nike",
        imagen: "./img/niños/niños5.jpg",
        categoría: {
            nombre: "Niños",
            id: "Niños",
        },
        precio: 70,
    },
    {
        id: "niños6",
        titulo: "Nautico",
        imagen: "./img/niños/niños6.jpg",
        categoría: {
            nombre: "Niños",
            id: "Niños",
        },
        precio: 55,
    },
    // Zapatos Deportivos
    {
        id: "Deportivos1",
        titulo: "Paradise",
        imagen: "./img/deportivos/deportivos1.jpg",
        categoría: {
            nombre: "Deportivos",
            id: "Deportivos",
        },
        precio: 70,
    },
    {
        id: " Deportivos2",
        titulo: "Puma",
        imagen: "./img/deportivos/deportivos2.jpg",
        categoría: {
            nombre: "Deportivos",
            id: "Deportivos",
        },
        precio: 60,
    },
    {
        id: "Deportivos3",
        titulo: "Maquina de Guerra",
        imagen: "./img/deportivos/deportivos3.jpg",
        categoría: {
            nombre: "Deportivos",
            id: "Deportivos",
        },
        precio: 80,
    },
    {
        id: "Deportivos4",
        titulo: "Terreneitor",
        imagen: "./img/deportivos/deportivos4.jpg",
        categoría: {
            nombre: "Deportivos",
            id: "Deportivos",
        },
        precio: 75,
    },
    {
        id: "Deportivos5",
        titulo: "New Balance",
        imagen: "./img/deportivos/deportivos5.jpg",
        categoría: {
            nombre: "Deportivos",
            id: "Deportivos",
        },
        precio: 120,
    },
    {
        id: "Deportivos6",
        titulo: "Adidas",
        imagen: "./img/deportivos/deportivos6.jpg",
        categoría: {
            nombre: "Deportivos",
            id: "Deportivos",
        },
        precio: 85,
    },
];




const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numero = document.querySelector("#numero");



function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="producto-precio">${producto.precio}</p>
        <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
    `;

        contenedorProductos.append(div);
    });

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", e => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id !== "todos") {
            const productoCategoria = productos.find(
                producto => producto.categoría.id === e.currentTarget.id
            );
            tituloPrincipal.innerText = productoCategoria.categoría.nombre;

            const productosBoton = productos.filter(
                producto => producto.categoría.id === e.currentTarget.id
            );
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    });
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumero();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumero() {
    let nuevoNumero = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numero.innerText = nuevoNumero;
}

// Obtener el número de productos en el carrito del almacenamiento local
const numeroCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"))?.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
);

// Actualizar el número en el carrito
numero.textContent = numeroCarrito || "0";