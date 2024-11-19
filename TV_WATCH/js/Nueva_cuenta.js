function enviarDatos() {
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let clave1 = document.getElementById("clave1").value;
    let clave2 = document.getElementById("clave2").value;
    let fecha = document.getElementById("fecha").value;
    let fechaNacimiento = new Date(document.getElementById("fecha").value);

    let patronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let fechaActual = new Date();
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    if (clave1 !== clave2 || nombre == "" || clave1 == "" || correo == "") {
        $(".error").show();
    } else if (!patronCorreo.test(correo) || correo == "") {
        $(".errorCorreo").show();
    } else if (fecha == "" || edad < 18) {
        $(".errorFecha").show();
    } else {
        let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
        let usuarioExistente = listaUsuarios.find((usuario) => usuario.nombre == nombre && usuario.correo == correo);

        if (usuarioExistente) {
            alert("Este usuario ya está registrado.");
        } else {
            let nuevoUsuario = new Usuario(
                String(listaUsuarios.length + 1),
                clave1,
                nombre,
                correo
            );
            guardarUsuario(nuevoUsuario);
            location.href = "Subscripcion.html";
        }
    }
}

function guardarUsuario(usuario) {
    let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
    listaUsuarios.push(usuario);
    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
    localStorage.setItem("usuarioASuscribirse",JSON.stringify(usuario));
}

onload=()=>{
    $(".error").hide();
    $(".errorCorreo").hide();
    $(".errorFecha").hide();

    $(".error").css("color","red");
    $(".errorCorreo").css("color","red");
    $(".errorFecha").css("color","red");

    $('a').eq(0).click(()=>{
        $(".errorCorreo").hide();
    })

    $('a').eq(1).click(()=>{
        $(".errorFecha").hide();
    })

    //x del error de usuario y contraseña
    $('a').eq(2).click(()=>{
        $(".error").hide();
    })
}