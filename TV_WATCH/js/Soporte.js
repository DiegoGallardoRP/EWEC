function subirPregunta(codigo) {
<<<<<<< HEAD
=======
    console.log(codigo);
>>>>>>> c5338802b498802ddff302174c61352c9c75a5db
    let pregunta = document.getElementById("preguntaTexto").value;
    localStorage.setItem(`pregunta${codigo}`, pregunta);
    alert('Pregunta enviada con éxito');
}
<<<<<<< HEAD

function subirRespuesta(codigo) {
    let respuesta = document.getElementById(`respuesta${codigo}`).value;
    localStorage.setItem(`respuesta${codigo}`, respuesta);
    mostrarPreguntasYRespuestas();
    alert('Respuesta subida con éxito');
}

function verSubscripción(){
    let usuario = JSON.parse(sessionStorage.getItem("usuarioActual"));
    localStorage.setItem("usuarioASuscribirse",JSON.stringify(usuario));
    location.href="Subscripcion.html";
}

function borrarRespuesta(codigo){
    localStorage.removeItem(`respuesta${codigo}`);
    alert('Respuesta borrada');
    mostrarPreguntasYRespuestas();
}

function mostrarPreguntasYRespuestas(){
    
    let contenedor = document.getElementById("preguntasUsuarios");
    contenedor.innerHTML='';
        let contenido = `<h1>Preguntas frecuentes</h1>`;
        contenedor.insertAdjacentHTML("beforeend",contenido);
        let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
        listaUsuarios.forEach(usuario => {
            contenido='';
            let preguntasUsuario = localStorage.getItem(`pregunta${usuario.codigo}`);
            let respuestasUsuario = localStorage.getItem(`respuesta${usuario.codigo}`);
            console.log(respuestasUsuario);
            if (preguntasUsuario) {
                if (usuarioActual.admin == "S") {
                    contenido += `<p>Usuario: ${usuario.nombre}</p>`;
                }
                contenido += `<p>Pregunta: ${preguntasUsuario}`;
                if (respuestasUsuario) {
                    contenido += ` <a id="mas${usuario.codigo}">+</a><a id="menos${usuario.codigo}">-</a></p><p id="respuesta${usuario.codigo}">Respuesta: ${respuestasUsuario}`;
                    if(usuarioActual.admin=="S"){
                        contenido+=`<img src="./imagenes/papelera.png" class="papelera" onclick="borrarRespuesta('${usuario.codigo}')">`;
                    }
                    contenido+=`</p>`;
                } else {
                    if (usuarioActual.admin == "S") {
                        contenido += `<p>Respuesta: <input type="text" id="respuesta${usuario.codigo}"></p>`;
                        contenido += `<p><button type="button" onclick="subirRespuesta(${usuario.codigo})">Subir respuesta</button></p>`;
                    }
                }            
            }
            contenedor.insertAdjacentHTML("beforeend", contenido); 
            $(`#menos${usuario.codigo}`).hide();

            $(`#mas${usuario.codigo}`).click(()=>{
                $(`#mas${usuario.codigo}`).hide();
                $(`#menos${usuario.codigo}`).show();
                $(`#respuesta${usuario.codigo}`).slideDown();
            });
            $(`#menos${usuario.codigo}`).click(()=>{
                $(`#mas${usuario.codigo}`).show();
                $(`#menos${usuario.codigo}`).hide();
                $(`#respuesta${usuario.codigo}`).slideUp();
            });
                   
        })
}
onload = () => {    
    usuarioActual = JSON.parse(sessionStorage.getItem("usuarioActual"));
    mostrarPreguntasYRespuestas();
    if (usuarioActual.admin != "S") {
        $("#ajustesAdmin").hide();
        document.getElementById("botonPreguntas").addEventListener("click", () => {
             subirPregunta(usuarioActual.codigo);
             mostrarPreguntasYRespuestas();
        });
    }else{
        $("#pregunta").hide();
        $("#botonPreguntas").hide();
=======
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
>>>>>>> c5338802b498802ddff302174c61352c9c75a5db
    }
}