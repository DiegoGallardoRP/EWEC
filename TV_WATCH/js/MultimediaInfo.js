function mostrarUsuario() {
    let usuario = JSON.parse(sessionStorage.getItem("usuarioActual"));
    document.getElementById("nombreUsuario").textContent = `${usuario.nombre}`;
}

function cargarMultimedia() {
    detalleMulti = JSON.parse(sessionStorage.getItem("detalleMulti"));
    let indice = miLista.findIndex((multi) => multi.titulo == detalleMulti.titulo);

    // Recupera la lista entera de multimedia
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
        if (indice == -1) {
            $('#x').hide();
            $('#cruz').show();
        } else {
            $('#cruz').hide();
            $('#x').show();
        }
        // Llamar al método mostrarDetalles para actualizar la página
        detalleMulti.mostrarDetalles();

        contenedor = document.getElementById("pelisSimilares");
        contenedor.innerHTML = '';
        let carruselMulti = '';
        carruselMulti += `<ul><li>`;
        listaMulti.forEach(multi => {
            if (multi.categoria == detalleMulti.categoria && multi.titulo != detalleMulti.titulo) {
                carruselMulti += `<img class="fotoRecomendado" src="./imagenes/${multi.foto}" onclick="mostrarMultiDetalle('${multi.titulo}')">`;
            }
        })
        carruselMulti += `</li></ul>`;
        contenedor.insertAdjacentHTML("beforeend", carruselMulti);
    } else {
        document.body.innerHTML = "<p>No se encontró la información.</p>";
    }
}

function anadirAListaMulti(multiData) {
    //Guardo la peli en una lista que está en localStorage
    let codigoUsuario = usuario.codigo;
    let multi = new Multimedia(multiData.tipo, multiData.titulo, multiData.director, "Mi lista", multiData.foto, multiData.link)
    multi.anadirAMiLista(codigoUsuario);

    miLista=JSON.parse(localStorage.getItem(`lista${usuario.codigo}`));
    cargarMultimedia();
}

function eliminarDeListaMulti(multiData){
    let indice=miLista.findIndex((multi)=>multi.titulo==detalleMulti.titulo);
    miLista.splice(indice,1);
    alert('Peli quitada de tu lista');

    localStorage.setItem(`lista${usuario.codigo}`, JSON.stringify(miLista));
    cargarMultimedia();
}

function mostrarMultiDetalle(titulo) {
    const listaMulti = JSON.parse(localStorage.getItem("listaMultimedia"));
    const multiSeleccionada = listaMulti.find(multi => multi.titulo == titulo);
    if (multiSeleccionada) {
        sessionStorage.setItem("detalleMulti", JSON.stringify(multiSeleccionada));
        location.href = "MultimediaInfo.html";
    }
}

function verSubscripción(){
    localStorage.setItem("usuarioASuscribirse",JSON.stringify(usuario));
    location.href="Subscripcion.html";
}

onload = () => {
    
    $('#cruz').hide();
    $('#x').hide();

    usuario = JSON.parse(sessionStorage.getItem("usuarioActual"));
    miLista = JSON.parse(localStorage.getItem(`lista${usuario.codigo}`))||[];
    mostrarUsuario();
    cargarMultimedia();

    if(usuario.admin!="S"){
        $('.ajustesAdmin').hide();
    }

    document.getElementById("cruz").addEventListener("click", () => { anadirAListaMulti(detalleMulti) });
    document.getElementById("x").addEventListener("click", () => { eliminarDeListaMulti(detalleMulti) });
}