function suscribirse() {
    let subscripcion = document.querySelector("input[name='subscripcion']:checked");
    if (subscripcion) {
        let indice = listaUsuarios.findIndex((usuario) => usuario.codigo == usuarioASuscribirse.codigo);
        let fechaActual = new Date()
        let mes = fechaActual.getMonth();
        let year = fechaActual.getFullYear();
        let dia = fechaActual.getDate();
        if (subscripcion.value == "estandar") {                    
            mes=mes+1;
            if(mes>12){
                mes=mes-12;
                year=year+1;
            }
        }
        if (subscripcion.value == "superior") {
            mes=mes+5;
            if(mes>12){
                mes=mes-12;
                year=year+1;
            }
        }
        if (subscripcion.value == "premium") {
            year=year+1;
        }
        listaUsuarios[indice].tipoSub=subscripcion.value;
        listaUsuarios[indice].fechaFin=`${year}-${mes}-${dia}`;
        localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
        location.href="Inicio_sesion.html";
    } else {
        document.getElementById("error").className = "visible";
    }
}
function cambiarSub(){
    let subscripcion = document.querySelector("input[name='subscripcion']:checked");
    if (subscripcion) {
        let indice = listaUsuarios.findIndex((usuario) => usuario.codigo == usuarioASuscribirse.codigo);
        let fechaActualFin = new Date(`${usuarioASuscribirse.fechaFin}`)
        let mes = fechaActualFin.getMonth();
        let year = fechaActualFin.getFullYear();
        let dia = fechaActualFin.getDate();
        if (subscripcion.value == "estandar") {                    
            mes=mes+1;
            if(mes>12){
                mes=mes-12;
                year=year+1;
            }
        }
        if (subscripcion.value == "superior") {
            mes=mes+5;
            if(mes>12){
                mes=mes-12;
                year=year+1;
            }
        }
        if (subscripcion.value == "premium") {
            year=year+1;
        }
        listaUsuarios[indice].tipoSub=subscripcion.value;
        listaUsuarios[indice].fechaFin=`${year}-${mes}-${dia}`;
        localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
        location.href="Inicio_sesion.html";
    } else {
        document.getElementById("error").className = "visible";
    }
}
onload = () => {
    listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
    usuarioASuscribirse = JSON.parse(localStorage.getItem("usuarioASuscribirse"));
    if(usuarioASuscribirse.tipoSub==""){
        document.getElementById("botonSub").className="botonVisible";
        document.getElementById("botonSub").addEventListener("click", suscribirse);
    }else{   
        let contenedor=document.getElementById("subscripcionActual");
        let contenido=`Subscripcion actual: ${usuarioASuscribirse.tipoSub}`           
        document.getElementById("botonCamSub").className="botonVisible";
        document.getElementById("botonCamSub").addEventListener("click", cambiarSub);
        contenedor.insertAdjacentHTML("beforeend",contenido);
    }
}