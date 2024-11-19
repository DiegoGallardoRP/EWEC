//Funciones multimedia
function mostrarMultimedia() { 
    let contenedor = document.getElementById("multimedia");
    contenedor.innerHTML = ""; // Limpiar contenido previo

    let contenido = `
        <h1>Multimedia</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Título</th>
                    <th>Director</th>
                    <th>Categoría</th>
                    <th>Foto</th>
                    <th>Link</th>
                    <th>Borrar</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>`;

    listaMultimedia.forEach(multi => {
        contenido += `<tr>
                <td><input type="text" id="tipo${multi.titulo}" value="${multi.tipo}"></td>
                <td><input type="text" id="titulo${multi.titulo}" value="${multi.titulo}"></td>
                <td><input type="text" id="director${multi.titulo}" value="${multi.director}"></td>
                <td><input type="text" id="categoria${multi.titulo}" value="${multi.categoria}"></td>
                <td><input type="text" id="foto${multi.titulo}" value="${multi.foto}"></td>
                <td><input type="text" id="link${multi.titulo}" value="${multi.link}"></td>
                <td><img src="./imagenes/papelera.png" class="papelera" onclick="borrarMultimedia('${multi.titulo}')"></td>
                <td><img src="./imagenes/lapiz.png" class="lapiz" onclick="editarMultimedia('${multi.titulo}')"></td>
            </tr>`;
    });

    contenido += `</tbody></table>`;

    contenedor.insertAdjacentHTML("beforeend",contenido); 
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
        alert("Se ha modificado multimedia");
    })
}

function editarMultimedia(titulo){
    let indice=listaMultimedia.findIndex((multi)=>multi.titulo==titulo);
    if(indice!=-1){
        let nuevoTipo=document.getElementById(`tipo${titulo}`).value.trim();
        let nuevoTitulo=document.getElementById(`titulo${titulo}`).value.trim();
        let nuevoDirector=document.getElementById(`director${titulo}`).value.trim();
        let nuevaCategoria=document.getElementById(`categoria${titulo}`).value.trim();
        let nuevaFoto=document.getElementById(`foto${titulo}`).value.trim();
        let nuevoLink=document.getElementById(`link${titulo}`).value.trim();
        listaMultimedia[indice].editarMultimedia(nuevoTipo,nuevoTitulo,nuevoDirector,nuevaCategoria,nuevaFoto,nuevoLink,listaMultimedia);
        alert(`${titulo} fue editado`);
    }
}

function borrarMultimedia(titulo){
    let indice=listaMultimedia.findIndex(multi=>multi.titulo==titulo);
    if(indice!=-1){
        listaMultimedia.splice(indice,1);
        localStorage.setItem("listaMultimedia",JSON.stringify(listaMultimedia));
        mostrarMultimedia();
    }
    
}

function mostrarDivNuevaMultimedia(){
    $('#nuevaMultimedia').show();
}

function cancelarMultimedia(){
    $('#nuevaMultimedia').hide();
}

function crearMultimedia(){
    let tipo=document.querySelector("input[name='tipoMulti']:checked").value;
    let titulo=document.getElementById("titulo").value.trim();
    let director=document.getElementById("director").value.trim();
    let categoria=document.querySelector("input[name='categoria']:checked").value;
    let foto=document.getElementById("fotoPeli").value.trim();
    let link=document.getElementById("trailer").value.trim();

    if(tipo.value!="" && titulo!=""&&director!=""&&categoria!=""&&foto!=""&&link!=""){
        let indice=listaMultimedia.findIndex((multimedia)=>multimedia.titulo==titulo);
        if(indice==-1){
            listaMultimedia.push(new Multimedia(tipo,titulo,director,categoria,foto,link));
            localStorage.setItem("listaMultimedia",JSON.stringify(listaMultimedia));
            mostrarMultimedia();
        }else{
            alert("Esa película ya existe");
        }
    }
}


//Funciones usuarios
function mostrarUsuarios() {
    let contenedor = document.getElementById("usuarios");
    contenedor.innerHTML = ""; 

    let contenido = `<h1>Usuarios</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Tipo de Subscripción</th>
                    <th>Fecha Fin Subscripción</th>
                    <th>Borrar</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>`;

    listaUsuarios.forEach(usuario => {
        if (usuario.admin != "S") { 
            contenido += `<tr>
                    <td><input type="text" id="codigo${usuario.codigo}" value="${usuario.codigo}"></td>
                    <td><input type="text" id="nombre${usuario.codigo}" value="${usuario.nombre}"></td>
                    <td><input type="text" id="correo${usuario.codigo}" value="${usuario.correo}"></td>
                    <td><input type="text" id="tipoSub${usuario.codigo}" value="${usuario.tipoSub}"></td>
                    <td><input type="text" id="fechaFin${usuario.codigo}" value="${usuario.fechaFin}"></td>
                    <td><img src="./imagenes/papelera.png" class="papelera" onclick="borrarUsuario('${usuario.codigo}')"></td>
                    <td><img src="./imagenes/lapiz.png" class="lapiz" onclick="editarUsuario('${usuario.codigo}')"></td>
                </tr>`;
        }
    });

    contenido += `</tbody></table>`;

    contenedor.insertAdjacentHTML("beforeend",contenido); 
}

function modificarUsuarios() {
    listaUsuarios.forEach(usuario => {
        if (usuario.admin != "S") {
            let nuevoCodigo = document.getElementById(`codigo${usuario.codigo}`).value.trim();
            let nuevoNombre = document.getElementById(`nombre${usuario.codigo}`).value.trim();
            let nuevoCorreo = document.getElementById(`correo${usuario.codigo}`).value.trim();
            let nuevoTipoSub = document.getElementById(`tipoSub${usuario.codigo}`).value.trim();
            let nuevaFechaFin = document.getElementById(`fechaFin${usuario.codigo}`).value.trim();
            usuario.editarUsuario(nuevoCodigo,nuevoNombre,nuevoCorreo,usuario.clave,nuevoTipoSub,nuevaFechaFin,"N",listaUsuarios);
        }
    })        
    mostrarUsuarios();
    alert("Se han modificado los usuarios");
}

function editarUsuario(codigo){
    let indice=listaUsuarios.findIndex((usuario)=>usuario.codigo==codigo);
    if(indice!=-1){
            let nuevoCodigo = document.getElementById(`codigo${codigo}`).value.trim();
            let nuevoNombre = document.getElementById(`nombre${codigo}`).value.trim();
            let nuevoCorreo = document.getElementById(`correo${codigo}`).value.trim();
            let clave=listaUsuarios[indice].clave;
            let nuevoTipoSub = document.getElementById(`tipoSub${codigo}`).value.trim();
            let nuevaFechaFin = document.getElementById(`fechaFin${codigo}`).value.trim();
            
        listaUsuarios[indice].editarUsuario(nuevoCodigo,nuevoNombre,nuevoCorreo,clave,nuevoTipoSub,nuevaFechaFin,"N",listaUsuarios);
        mostrarUsuarios();
        alert(`El usuario ${codigo} fue editado`);
    }
}

function borrarUsuario(codigo){
    let indice=listaUsuarios.findIndex((usuario)=>usuario.codigo==codigo);
    if(indice!=-1){
        listaUsuarios.splice(indice,1);
        localStorage.setItem("listaUsuarios",JSON.stringify(listaUsuarios));
        mostrarUsuarios();
    }
    alert('Usuario borrado');
}

function mostrarDivNuevoUsuario(){
    $('#nuevoUsuario').show();    
}

function crearUsuario(){
    let clave=document.getElementById('claveUsuario').value.trim();
    let nombre=document.getElementById('nombreUsuario').value.trim();
    let correo=document.getElementById('correoUsuario').value.trim();
    let admin=document.querySelector("input[name='admin']:checked");
    if(clave!=""&&nombre!=""&&correo!=""&&admin){
        let codigo=listaUsuarios.length+1;
        listaUsuarios.push(new Usuario(codigo,clave,nombre,correo,"",new Date(),admin.value));
        localStorage.setItem("listaUsuarios",JSON.stringify(listaUsuarios));
        alert('usuario añadido');
        mostrarUsuarios();
        
    }else{
        alert('No se pudo añadir al usuario nuevo');
    }
    console.log(listaUsuarios);
}

function cancelarUsuario(){
    $('#nuevoUsuario').hide();
    document.getElementById('claveUsuario').value="";
    document.getElementById('nombreUsuario').value="";
}

function verSubscripción(){
    let usuario = JSON.parse(sessionStorage.getItem("usuarioActual"));
    localStorage.setItem("usuarioASuscribirse",JSON.stringify(usuario));
    location.href="Subscripcion.html";
}

onload = () => {
    $('#nuevoUsuario').hide();
    $('#nuevaMultimedia').hide();
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