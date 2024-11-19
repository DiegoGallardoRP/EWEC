function mostrarUsuario() {
    let usuario = JSON.parse(sessionStorage.getItem("usuarioActual"));
    document.getElementById("nombreUsuario").textContent = `${usuario.nombre}`;
}
<<<<<<< HEAD

function cargarMultimedia() {
    detalleMulti = JSON.parse(sessionStorage.getItem("detalleMulti"));
    let indice = miLista.findIndex((multi) => multi.titulo == detalleMulti.titulo);

    // Recupera la lista entera de multimedia
    const listaMulti = JSON.parse(localStorage.getItem("listaMultimedia"));
    if (detalleMulti) {
        detalleMulti = new Multimedia(
=======
function cargarMultimedia() {
    let detalleMulti = JSON.parse(sessionStorage.getItem("detalleMulti"));
    //Recupera la lista entera de multimedia
    const listaMulti = JSON.parse(localStorage.getItem("listaMultimedia"));
    if (detalleMulti) {
            detalleMulti = new Multimedia(
>>>>>>> c5338802b498802ddff302174c61352c9c75a5db
            detalleMulti.tipo,
            detalleMulti.titulo,
            detalleMulti.director,
            detalleMulti.categoria,
            detalleMulti.foto,
            detalleMulti.link
        );
<<<<<<< HEAD
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
=======
        // Llamar al método mostrarDetalles para actualizar la página
        detalleMulti.mostrarDetalles();
        document.getElementById("cruz").addEventListener("click", () => { anadirAListaMulti(detalleMulti) });
>>>>>>> c5338802b498802ddff302174c61352c9c75a5db
        let carruselMulti = '';
        carruselMulti += `<ul><li>`;
        listaMulti.forEach(multi => {
            if (multi.categoria == detalleMulti.categoria && multi.titulo != detalleMulti.titulo) {
                carruselMulti += `<img class="fotoRecomendado" src="./imagenes/${multi.foto}" onclick="mostrarMultiDetalle('${multi.titulo}')">`;
            }
        })
        carruselMulti += `</li></ul>`;
<<<<<<< HEAD
        contenedor.insertAdjacentHTML("beforeend", carruselMulti);
=======
        document.body.insertAdjacentHTML("beforeend", carruselMulti);
>>>>>>> c5338802b498802ddff302174c61352c9c75a5db
    } else {
        document.body.innerHTML = "<p>No se encontró la información.</p>";
    }
}
<<<<<<< HEAD

=======
>>>>>>> c5338802b498802ddff302174c61352c9c75a5db
function anadirAListaMulti(multiData) {
    //Guardo la peli en una lista que está en localStorage
    let codigoUsuario = usuario.codigo;
    let multi = new Multimedia(multiData.tipo, multiData.titulo, multiData.director, "Mi lista", multiData.foto, multiData.link)
    multi.anadirAMiLista(codigoUsuario);
<<<<<<< HEAD

    miLista=JSON.parse(localStorage.getItem(`lista${usuario.codigo}`));
    cargarMultimedia();
}

function eliminarDeListaMulti(multiData){
    let indice=miLista.findIndex((multi)=>multi.titulo==detalleMulti.titulo);
    miLista.splice(indice,1);
    alert('Peli quitada de tu lista');

    localStorage.setItem(`lista${usuario.codigo}`, JSON.stringify(miLista));
    cargarMultimedia();
=======
>>>>>>> c5338802b498802ddff302174c61352c9c75a5db
}

function mostrarMultiDetalle(titulo) {
    const listaMulti = JSON.parse(localStorage.getItem("listaMultimedia"));
    const multiSeleccionada = listaMulti.find(multi => multi.titulo == titulo);
    if (multiSeleccionada) {
        sessionStorage.setItem("detalleMulti", JSON.stringify(multiSeleccionada));
        location.href = "MultimediaInfo.html";
    }
}
<<<<<<< HEAD

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
=======
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
>>>>>>> c5338802b498802ddff302174c61352c9c75a5db
}