function mostrarUsuario() {
    let usuario = JSON.parse(sessionStorage.getItem("usuarioActual"));
    document.getElementById("nombreUsuario").textContent = `${usuario.nombre}`;
}
function cargarMultimedia() {
    let detalleMulti = JSON.parse(sessionStorage.getItem("detalleMulti"));
    //Recupera la lista entera de multimedia
    const listaMulti = JSON.parse(localStorage.getItem("listaMultimedia"));
    if (detalleMulti) {
            detalleMulti = new Multimedia(
            detalleMulti.tipo,
            detalleMulti.titulo,
            detalleMulti.director,
            detalleMulti.categoria,
            detalleMulti.foto,
            detalleMulti.link
        );
        // Llamar al método mostrarDetalles para actualizar la página
        detalleMulti.mostrarDetalles();
        document.getElementById("cruz").addEventListener("click", () => { anadirAListaMulti(detalleMulti) });
        let carruselMulti = '';
        carruselMulti += `<ul><li>`;
        listaMulti.forEach(multi => {
            if (multi.categoria == detalleMulti.categoria && multi.titulo != detalleMulti.titulo) {
                carruselMulti += `<img class="fotoRecomendado" src="./imagenes/${multi.foto}" onclick="mostrarMultiDetalle('${multi.titulo}')">`;
            }
        })
        carruselMulti += `</li></ul>`;
        document.body.insertAdjacentHTML("beforeend", carruselMulti);
    } else {
        document.body.innerHTML = "<p>No se encontró la información.</p>";
    }
}
function anadirAListaMulti(multiData) {
    //Guardo la peli en una lista que está en localStorage
    let codigoUsuario = usuario.codigo;
    let multi = new Multimedia(multiData.tipo, multiData.titulo, multiData.director, "Mi lista", multiData.foto, multiData.link)
    multi.anadirAMiLista(codigoUsuario);
}

function mostrarMultiDetalle(titulo) {
    const listaMulti = JSON.parse(localStorage.getItem("listaMultimedia"));
    const multiSeleccionada = listaMulti.find(multi => multi.titulo == titulo);
    if (multiSeleccionada) {
        sessionStorage.setItem("detalleMulti", JSON.stringify(multiSeleccionada));
        location.href = "MultimediaInfo.html";
    }
}
//Función para ver si ya tiene multimedia en su lista, si es así la cruz cambia a un tick
function comprobarMultimedia(usuario){
    let codigo=usuario.codigo;
    let listaMultimediaUsuario = JSON.parse(localStorage.getItem(`lista${codigo}`));
    if(listaMultimediaUsuario){
        let detalleMulti=JSON.parse(sessionStorage.getItem("detalleMulti"));
    }
}

onload = () => {
    let usuarioGuardado = sessionStorage.getItem("usuarioActual");
    usuario = JSON.parse(usuarioGuardado);
    mostrarUsuario();
    cargarMultimedia();
    //Comprobamos si ya tiene multimedia en su lista para que no pueda añadirla infinitas veces
    comprobarMultimedia(usuario);
}