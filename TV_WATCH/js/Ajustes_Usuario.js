function aceptarCambios(lista){
    let nombre=document.getElementById("nombre").value.trim();
    let correo=document.getElementById("correo").value.trim();
    let nuevaClave=document.getElementById("claveNueva").value.trim();
    let claveActual=document.getElementById("claveActual").value.trim();
    let claveActual2=document.getElementById("claveActual2").value.trim();
    let patronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if(nombre!=""&&correo!=""&&patronCorreo.test(correo)&&claveActual==usuarioActual.clave&&claveActual==claveActual2&&nuevaClave!=""){
        let exito=usuarioActual.editarUsuario(usuarioActual.codigo,nombre,correo,nuevaClave,
        usuarioActual.tipoSub,usuarioActual.fechaFin,usuarioActual.admin,listaUsuarios);        
        
        if(exito){
            usuarioActual=new Usuario(usuarioActual.codigo,nuevaClave,nombre,correo,usuarioActual.tipoSub,usuarioActual.fechaFin,usuarioActual.admin);
            sessionStorage.setItem("usuarioActual",JSON.stringify(usuarioActual));
            alert("Cambios realizados");
            location.href="Inicio.html";  
        }else{
            alert("ERROR: Los cambios no se han realizado");
        }                
    }else{
        $('#error').show();
    }
    
}

function verSubscripción(){
    let usuario = JSON.parse(sessionStorage.getItem("usuarioActual"));
    localStorage.setItem("usuarioASuscribirse",JSON.stringify(usuario));
    location.href="Subscripcion.html";
}

onload=()=>{
    $('#error').hide();
    usuarioActual=JSON.parse(sessionStorage.getItem("usuarioActual"));
    listaUsuarios=JSON.parse(localStorage.getItem("listaUsuarios"));
    //Transformar el usuarioActual
    usuarioActual = new Usuario(usuarioActual.codigo, usuarioActual.clave, usuarioActual.nombre, usuarioActual.correo, usuarioActual.tipoSub, 
    usuarioActual.fechaFin, usuarioActual.admin);

    if(usuarioActual.admin!="S"){
        $('.ajustesAdmin').hide();
    }

    indice = listaUsuarios.findIndex((usuario) => usuario.codigo == usuarioActual.codigo);

    usuarioActual.mostrarInformacion();

    document.getElementById("botonAceptar").addEventListener("click",()=>{
        aceptarCambios(listaUsuarios);
    })
}