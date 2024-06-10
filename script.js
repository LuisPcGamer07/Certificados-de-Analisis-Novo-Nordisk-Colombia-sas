// Objeto para almacenar usuarios y contraseñas
const usuarios = {
    LFCZ: '1234',
    usuario2: 'contraseña2',
    usuario3: 'contraseña3',
    // Añade más usuarios y contraseñas según sea necesario
};

// Función para ocultar la imagen al iniciar sesión
function iniciarSesion(event) {
    event.preventDefault(); // Evitar el envío del formulario
    const usuario = document.getElementById('username').value;
    const contraseña = document.getElementById('password').value;

    // Verificar si el usuario y la contraseña son válidos
    if (usuarios.hasOwnProperty(usuario) && usuarios[usuario] === contraseña) {
        // Ocultar completamente la imagen del logo
        document.getElementById('logo').style.display = 'none';
        // Mostrar la siguiente sección
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('productos-section').style.display = 'block';
    } else {
        alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
}

// Función para mostrar los PDFs del producto seleccionado
function mostrarPDFs(producto, event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    // Seleccionar el contenedor de productos y PDFs
    const productosSection = document.getElementById('productos-section');
    const pdfContainer = document.getElementById('pdf-container');

    // Mostrar el contenedor de PDFs y ocultar el contenedor de productos
    pdfContainer.style.display = 'block';
    productosSection.style.display = 'none';

    // Ocultar todas las carpetas de productos excepto la seleccionada
    const carpetas = document.querySelectorAll('#carpetas-lista li');
    carpetas.forEach(carpeta => {
        carpeta.style.display = 'none';
    });

    // Agregar los enlaces a los PDFs en el contenedor
    pdfContainer.innerHTML = '';
    const pdfList = document.createElement('ul');

    // Ruta local donde se encuentran los PDFs del producto seleccionado
    const rutaLocal = 'C:/Users/LuisPcamer07/Documents/PAGINA WEB NOVO/PRODUCTOS/' + producto + '/';

    // Aquí agregamos los enlaces a los PDFs
    const pdfs = obtenerArchivosEnDirectorio(rutaLocal); // Función para obtener los nombres de los archivos en el directorio
    pdfs.forEach(pdf => {
        const listItem = document.createElement('li');
        const pdfLink = document.createElement('a');
        pdfLink.href = rutaLocal + pdf;
        pdfLink.textContent = pdf;
        pdfLink.target = '_blank'; // Para abrir el PDF en una nueva pestaña
        listItem.appendChild(pdfLink);
        pdfList.appendChild(listItem);
    });

    pdfContainer.appendChild(pdfList);
}

// Función para volver atrás desde la ventana de PDFs
function volverAProductos() {
    // Seleccionar el contenedor de productos y PDFs
    const productosSection = document.getElementById('productos-section');
    const pdfContainer = document.getElementById('pdf-container');

    // Mostrar el contenedor de productos y ocultar el contenedor de PDFs
    productosSection.style.display = 'block';
    pdfContainer.style.display = 'none';

    // Mostrar todas las carpetas de productos
    const carpetas = document.querySelectorAll('#carpetas-lista li');
    carpetas.forEach(carpeta => {
        carpeta.style.display = 'block';
    });
}

// Función para obtener los nombres de los archivos en un directorio local
function obtenerArchivosEnDirectorio(rutaDirectorio) {
    // Esta función debe ser implementada para que obtenga los nombres de los archivos en la ruta especificada
    // Puedes usar Node.js u otro método para acceder al sistema de archivos local y obtener los nombres de los archivos
    // Aquí te dejo un ejemplo básico usando Node.js
    // Requiere fs (File System) módulo
    const fs = require('fs');
    return fs.readdirSync(rutaDirectorio);
}

// Función para filtrar los productos según el texto ingresado en el buscador
function filtrarProductos() {
    const input = document.getElementById('buscador');
    const filter = input.value.toLowerCase();
    const ul = document.getElementById('carpetas-lista');
    const li = ul.getElementsByTagName('li');

    // Iterar sobre todos los elementos de la lista y ocultar aquellos que no coincidan con el filtro
    for (let i = 0; i < li.length; i++) {
        const a = li[i].getElementsByTagName('a')[0];
        const txtValue = a.textContent || a.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = '';
            } else {
                li[i].style.display = 'none';
            }
        }
    }
