//Funciones multimedia
function mostrarMultimedia(){ 
    let contenedor=document.getElementById("multimedia");
    contenedor.insertAdjacentHTML("beforeend","<h1>Multimedia</h1>");
    listaMultimedia.forEach(multi=>{
        let contenido='';
        contenido+=`<p>Tipo: <input type="text" id="tipo${multi.titulo}"></p>`;
        contenido+=`<p>Titulo: <input type="text" id="titulo${multi.titulo}"></p>`;
        contenido+=`<p>Director: <input type="text" id="director${multi.titulo}"></p>`;
        contenido+=`<p>Categoria: <input type="text" id="categoria${multi.titulo}"></p>`;
        contenido+=`<p>Foto: <input type="text" id="foto${multi.titulo}"></p>`;
        contenido+=`<p>Link: <input type="text" id="link${multi.titulo}"></p><br>`;
        contenido+=`<img src="papelera.jpg" onclick="borrar${multi.titulo}">`;

        contenedor.insertAdjacentHTML("beforeend",contenido);

        document.getElementById(`tipo${multi.titulo}`).value=multi.tipo;
        document.getElementById(`titulo${multi.titulo}`).value=multi.titulo;
        document.getElementById(`director${multi.titulo}`).value=multi.director;
        document.getElementById(`categoria${multi.titulo}`).value=multi.categoria;
        document.getElementById(`foto${multi.titulo}`).value=multi.foto;
        document.getElementById(`link${multi.titulo}`).value=multi.link;
    })
}

function modificarMultimedia(){
    listaMultimedia.forEach(multi=>{
        let nuevoTipo=document.getElementById(`tipo${multi.titulo}`).value.trim();
        let nuevoTitulo=document.getElementById(`titulo${multi.titulo}`).value.trim();
        let nuevoDirector=document.getElementById(`director${multi.titulo}`).value.trim();
        let nuevaCategoria=document.getElementById(`categoria${multi.titulo}`).value.trim();
        let nuevaFoto=document.getElementById(`foto${multi.titulo}`).value.trim();
        let nuevoLink=document.getElementById(`link${multi.titulo}`).value.trim();

        multi.editarMultimedia(nuevoTipo,nuevoTitulo,nuevoDirector,nuevaCategoria,nuevaFoto,nuevoLink,listaMultimedia);
    })
}

function borrarMultimedia(titulo){
    let indice=listaMultimedia.findIndex(multi=>multi.titulo==titulo);
    
}
//Funciones usuarios
function mostrarUsuarios() {
    let contenedor = document.getElementById("usuarios");
    contenedor.insertAdjacentHTML("beforeend","<h1>Usuarios</h1>");
    listaUsuarios.forEach(usuario => {
        if (usuario.admin != "S") {
            let contenido = '';
            contenido += `<p>Codigo: <input type="text" id="codigo${usuario.codigo}"></p>`;
            contenido += `<p>Nombre: <input type="text" id="nombre${usuario.codigo}"></p>`;
            contenido += `<p>Correo: <input type="text" id="correo${usuario.codigo}"></p>`;
            contenido += `<p>Tipo de subscripcion: <input type="text" id="tipoSub${usuario.codigo}"></p>`;
            contenido += `<p>Fecha fin subscripción: <input type="text" id="fechaFin${usuario.codigo}"></p><br>`;

            contenedor.insertAdjacentHTML("beforeend", contenido);

            document.getElementById(`codigo${usuario.codigo}`).value = usuario.codigo;
            document.getElementById(`nombre${usuario.codigo}`).value = usuario.nombre;
            document.getElementById(`correo${usuario.codigo}`).value = usuario.correo;
            document.getElementById(`tipoSub${usuario.codigo}`).value = usuario.tipoSub;
            document.getElementById(`fechaFin${usuario.codigo}`).value = usuario.fechaFin;
        }
    })
}

function modificarUsuarios() {
    listaUsuarios.forEach(usuario => {
        if (usuario.admin != "S") {
            let nuevoCodigo = document.getElementById(`codigo${usuario.codigo}`).value.trim();
            let nuevoNombre = document.getElementById(`nombre${usuario.codigo}`).value.trim();
            let nuevoCorreo = document.getElementById(`correo${usuario.codigo}`).value.trim();
            let nuevoTipoSub = document.getElementById(`tipoSub${usuario.codigo}`).value.trim();
            let nuevaFechaFin = document.getElementById(`fechaFin${usuario.codigo}`).value.trim();
            console.log(listaUsuarios)
            usuario.editarUsuario(nuevoCodigo,nuevoNombre,nuevoCorreo,usuario.clave,nuevoTipoSub,nuevaFechaFin,"S",listaUsuarios);
        }
    })        

    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
    console.log(listaUsuarios);
    alert("Se han modificado los usuarios");
}
onload = () => {
    listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")).map(
        usuarioData => new Usuario(
        usuarioData.codigo,
        usuarioData.clave,
        usuarioData.nombre,
        usuarioData.correo,
        usuarioData.tipoSub,
        usuarioData.fechaFin,
        usuarioData.admin
    ));
    listaMultimedia = JSON.parse(localStorage.getItem("listaMultimedia")).map(
        multiData=>new Multimedia(
            multiData.tipo,
            multiData.titulo,
            multiData.director,
            multiData.categoria,
            multiData.foto,
            multiData.link
    ));
    mostrarUsuarios();
    mostrarMultimedia();
}