function subirPregunta(codigo) {
    console.log(codigo);
    let pregunta = document.getElementById("preguntaTexto").value;
    localStorage.setItem(`pregunta${codigo}`, pregunta);
    alert('Pregunta enviada con éxito');
}
function subirRespuesta(codigo) {
    let respuesta = document.getElementById(`respuesta${codigo}`).value;
    localStorage.setItem(`respuesta${codigo}`, respuesta);
    alert('Respuesta subida con éxito');
}
onload = () => {
    usuarioActual = JSON.parse(sessionStorage.getItem("usuarioActual"));
    let contenedor = document.getElementById("preguntasUsuarios");
    let contenido = `<h1>Preguntas frecuentes</h1>`;
    contenedor.insertAdjacentHTML("beforeend",contenido);
    let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
    listaUsuarios.forEach(usuario => {
        contenido='';
        let preguntasUsuario = localStorage.getItem(`pregunta${usuario.codigo}`);
        let respuestasUsuario = localStorage.getItem(`respuesta${usuario.codigo}`);
        if (preguntasUsuario) {
            if (usuarioActual.admin == "S") {
                contenido += `<p>Usuario: ${usuario.nombre}</p>`;
            }
            contenido += `<p>Pregunta: ${preguntasUsuario}</p>`;
            if (respuestasUsuario) {
                contenido += `<p>Respuesta: ${respuestasUsuario}</p>`;
            } else {
                if (usuarioActual.admin == "S") {
                    contenido += `<p>Respuesta: <input type="text" id="respuesta${usuario.codigo}"></p>`;
                    contenido += `<p><button type="button" onclick="subirRespuesta(${usuario.codigo})">Subir respuesta</button></p>`;
                }
            }            
        }
        contenedor.insertAdjacentHTML("beforeend", contenido);        
    })
    
    console.log(usuarioActual)
    if (usuarioActual.admin != "S") {
        document.getElementById("pregunta").className="visible";
        document.getElementById("botonPreguntas").className = "visible";
        document.getElementById("botonPreguntas").addEventListener("click", () => {
            subirPregunta(usuarioActual.codigo);
        });
    }
}