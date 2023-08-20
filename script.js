const imagenes = document.querySelectorAll('.imagen');
let index = 0;

function mostrarImagen(index) {
imagenes.forEach((imagen, i) => {
    imagen.classList.toggle('mostrar', i === index);
});
}

function cambiarImagen() {
index = (index + 1) % imagenes.length;
mostrarImagen(index);
}

mostrarImagen(index);
setInterval(cambiarImagen, 3000); 






