function suscribirse() {
    let subscripcion = document.querySelector("input[name='subscripcion']:checked");
    if (subscripcion) {
        if(!verificarTarjeta()){
            $('#errorTar').show();
            return;
        }
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
        $('#error').show();
        document.getElementById("error").className = "visible";
    }
}

function verificarTarjeta(){
    let numeroTarjeta=parseInt(document.getElementById('numeroTarjeta').value.trim());
    let titularTarjeta=document.getElementById('titularTarjeta').value.trim();
    let fechaExpiracion=document.getElementById('fechaExpiracion').value.trim();
    let cvvTarjeta=document.getElementById('cvvTarjeta').value.trim();

    let patronTitular = /^[a-zA-Z\s]+$/;
    let patronFecha = /^(0[1-9]|1[0-2])\/\d{2}$/;
    let patronCvv = /^\d{3}$/;

    if(!numeroTarjeta.NaN&&patronTitular.test(titularTarjeta)&&patronFecha.test(fechaExpiracion)&&patronCvv.test(cvvTarjeta)){
        return true;
    }else{
        return false;
    }
}

//Método solo para usuarios que tienen sub
function cambiarSub(){
    let subscripcion = document.querySelector("input[name='subscripcion']:checked");

    if(!verificarTarjeta()){
        $('#errorTar').show();
        return;
    }

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
        $("#error").show();
    }
}
onload = () => { 
    $('#errorSub').hide();  
    $('#errorSub').css({"color":"red"}); 
    $('#errorTar').hide();  
    $('#errorTar').css({"color":"red"}); 
    usuarioActual=JSON.parse(sessionStorage.getItem("usuarioActual"));
    listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
    usuarioASuscribirse = JSON.parse(localStorage.getItem("usuarioASuscribirse"));
    $("#error").hide();
    if(usuarioASuscribirse.tipoSub==""){   
        $("#navegador").hide();
        $("#botonSub").click(suscribirse);
        $("#botonCamSub").hide();
    }else{
        $("#botonSub").hide();
        $("#botonCamSub").click(cambiarSub);
        let contenedor=document.getElementById("subscripcionActual");
        let contenido=`Subscripcion actual: ${usuarioASuscribirse.tipoSub}`;        
        contenedor.insertAdjacentHTML("beforeend",contenido);
    }
    if(usuarioActual.admin!="S"){
        $('#ajustesAdmin').hide();
    }
}