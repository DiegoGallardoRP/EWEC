        onload=()=>{
            listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
            document.getElementById("botonEnviar").addEventListener("click",comprobarDatos);
        }
        function cargarUsuarios() {
            if (!listaUsuarios) {
                listaUsuarios = [
                    new Usuario("1", "1234", "Diego", "Diego@tv.com", "estandar", "2024-12-11", "S"),
                    new Usuario("2", "1234", "Michael", "Michael@tv.com",),
                    new Usuario("3", "1234", "James", "James@tv.com", "premium", "2025-11-11", "N")
                ];

                localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
            }
            return listaUsuarios;
        }
        cargarUsuarios();

        function comprobarDatos() {
            let nombre = document.getElementById("nombre").value;
            let clave = document.getElementById("clave").value;
            let usuarioEncontrado = listaUsuarios.find((usuario) => usuario.nombre == nombre && usuario.clave == clave);
            if (usuarioEncontrado) {
                //Reconstruir usuarioEnconrtrado para usar la función de fecha
                // usuarioEncontrado.tieneSuscripcionActiva = Usuario.tieneSuscripcionActiva;
                usuarioEncontrado = new Usuario(usuarioEncontrado.codigo,usuarioEncontrado.clave,usuarioEncontrado.nombre,usuarioEncontrado.correo,usuarioEncontrado.tipoSub,
                usuarioEncontrado.fechaFin,usuarioEncontrado.admin);

                sessionStorage.setItem("usuarioActual", JSON.stringify(usuarioEncontrado));

                if (usuarioEncontrado.tieneSuscripcionActiva()) {
                    location.href = "Inicio.html";
                } else {
                    localStorage.setItem("usuarioASuscribirse", JSON.stringify(usuarioEncontrado));
                    location.href = "Subscripcion.html";
                }
            } else {
                document.getElementById("error").className = "visible";
            }
        }
        function ocultar() {
            document.getElementById("error").className = "oculto";
        }