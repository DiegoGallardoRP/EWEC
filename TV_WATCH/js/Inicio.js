        onload=()=>{
            esAdmin = false;
            listaMultimedia=JSON.parse(localStorage.getItem("listaMultimedia"));
            //Variables para el carrusel de películas
            paginaActualPorCategoria = {};
            elementosPorPagina = 4;
            //Categorias de las películas
            listaCategoria = ["Mi lista", "Terror", "Ciencia Ficcion", "Comedia", "Animacion"];
            tipoSeleccionado = "todos";
            cargarMultimedia();
            mostrarUsuario();
            obtenerMultimediaDeUsuario(JSON.parse(sessionStorage.getItem("usuarioActual")));
            //Crear los eventos para los botones para que solo tengan un evento
            //Boton para borrar
            document.getElementById("botonBorrar").addEventListener("click",()=>{
                let titulo = document.getElementById("nombre").value.trim();
                let indice = listaMultimedia.findIndex(multi => multi.titulo.toLowerCase() == titulo.toLowerCase() && multi.categoria == categoriaGlobal);
                if (indice !== -1) {
                    listaMultimedia.splice(indice, 1);
                    mostrarMultimediaPorCategoria(listaMultimedia);
                    alert(`"${titulo}" ha sido eliminada.`);
                    document.getElementById("divMulti").className = "oculto";
                    document.getElementById("nombre").value = "";
                } else {
                    alert("No se encontró ese título");
                }
            });
            //Boton para añadir
            document.getElementById("botonGuardar").addEventListener("click", () => {
                let tipo = document.querySelector("input[name='tipoMulti']:checked");
                if (tipo && document.getElementById("nombre").value != "" && document.getElementById("director").value != "" && document.getElementById("trailer").value != "") {
                    listaMultimedia.push(new Multimedia(tipo.value, document.getElementById("nombre").value, document.getElementById("director").value, categoriaGlobal, document.getElementById("trailer").value))
                    alert('Multimedia añadido');
                    document.getElementById("divMulti").className = "oculto";
                    mostrarMultimediaPorCategoria(listaMultimedia);
                    document.getElementById("nombre").value = "";
                    document.getElementById("director").value = "";
                    document.getElementById("trailer").value = "";
                } else {
                    alert("Debe rellenar todos los datos");
                }
            });
        }

        function mostrarUsuario() {
            let usuario = JSON.parse(sessionStorage.getItem("usuarioActual"));
            if (usuario.admin == "S") esAdmin = true;
            document.getElementById("nombreUsuario").textContent = `Bienvenido ${usuario.nombre}`;
            document.getElementById("perfil").addEventListener("click",()=>{location.href="Ajustes_Usuario"});
            if(esAdmin){
                document.getElementById("ajustesAdmin").className="visible";
            }
        }

        function cargarMultimedia() {
            if(!listaMultimedia){
                listaMultimedia=[];
                listaMultimedia.push(new Multimedia("peli", "IT", "Stephen King", "Terror", "it.jpg", "https://www.youtube.com/watch?v=_oBZ_zTz0Nw"));
                listaMultimedia.push(new Multimedia("peli", "Alien", "David Fincher", "Terror", "alien.jpg", ""));
                listaMultimedia.push(new Multimedia("peli", "Inactividad Paranormal", "Michael Tiddes", "Comedia", "inact.jpg", ""));
                listaMultimedia.push(new Multimedia("serie", "Cómo conocí a vuestra madre", "Carter Bays Craig Thomas", "Comedia", "madre.jpg", "https://www.youtube.com/watch?v=90OxzHzvWSg"));

                localStorage.setItem("listaMultimedia",JSON.stringify(listaMultimedia));
            }
            
        }

        //Funcion que muestra las pelis o series de cuatro en cuatro
        function mostrarMultimediaPorCategoria(lista) {
            let contenedor = document.getElementById("multimedia");
            contenedor.innerHTML = "";
            if (document.getElementById("categoriaSeccion")) document.getElementById("categoriaSeccion").remove();
            listaCategoria.forEach(categoria => {
                let listaMultimediaFiltrada = lista.filter(multi => multi.categoria == categoria && (tipoSeleccionado == "todos" || multi.tipo == tipoSeleccionado));
                if (!(categoria in paginaActualPorCategoria)) {
                    paginaActualPorCategoria[categoria] = 0;
                }
                let inicio = paginaActualPorCategoria[categoria] * elementosPorPagina;
                let fin = inicio + elementosPorPagina;
                let elementosPagina = listaMultimediaFiltrada.slice(inicio, fin);
                if (elementosPagina.length > 0) {
                    let seccionCategoria = `<div id="${categoria}"><h2>${categoria}</h2><ul class="listaMultimedia"><li>`;
                    elementosPagina.forEach(multi => {
                        seccionCategoria += `<img src="./imagenes/${multi.foto}" class="fotoMulti" onclick="mostrarMultiDetalle('${multi.titulo}')">`;
                    })
                    if (esAdmin) {
                        seccionCategoria += `<img src="./imagenes/cruz.png" class="cruz" onclick="anadirMultimedia('${categoria}')">`;
                        seccionCategoria += `<button type="button" onclick="borrarMultimedia('${categoria}')">Borrar</button>`;
                    }
                    seccionCategoria += '<p>';
                    if (paginaActualPorCategoria[categoria] > 0) {
                        seccionCategoria += `<button type="button" onclick="mostrarPaginaAnterior('${categoria}')">Página anterior</button>`;
                    }
                    if (fin < listaMultimediaFiltrada.length) {
                        seccionCategoria += `<button type="button" onclick="mostrarPaginaSiguiente('${categoria}')">Página siguiente</button>`;
                    }
                    seccionCategoria += '</p>';
                    contenedor.insertAdjacentHTML("beforeend", seccionCategoria);
                }
            })
        }
        //Funcion para mostrar solo pelis o series:
        function cambiarTipoMulti(tipo) {
            tipoSeleccionado = tipo;
            paginaActualPorCategoria = {};
            mostrarMultimediaPorCategoria(listaMultimedia);
        }
        //Funciones para moverse de página:
        function mostrarPaginaAnterior(categoria) {
            if (paginaActualPorCategoria[categoria] > 0) {
                paginaActualPorCategoria[categoria]--;
                mostrarMultimediaPorCategoria(listaMultimedia);
            }
        }
        function mostrarPaginaSiguiente(categoria) {
            paginaActualPorCategoria[categoria]++;
            mostrarMultimediaPorCategoria(listaMultimedia);
        }

        //Funcion barra de busqueda
        function filtrarPorTitulo() {
            let tituloBusqueda = document.getElementById("barraDeBusqueda").value;
            if (tituloBusqueda != "") {
                let contenedor = document.getElementById("multimedia");
                contenedor.innerHTML = "";
                var listaMultiFiltrada = listaMultimedia.filter((multi) => multi.titulo.toLocaleLowerCase().includes(tituloBusqueda.toLocaleLowerCase()));
                let contenido = `<ul><li>`;
                let cont = 1;
                listaMultiFiltrada.forEach(multi => {
                    contenido += `<img src="./imagenes/${multi.foto}" class="fotoMulti" onclick="mostrarMultiDetalle('${multi.titulo}')">`;
                    if (cont == 5) {
                        contenido += `<br>`;
                        cont = 0;
                    }
                    cont++;
                })
                contenido += `</li></ul>`;
                contenedor.insertAdjacentHTML("beforeend", contenido);
            } else {
                mostrarMultimediaPorCategoria(listaMultimedia);
            }
        }

        //Funcion categoria
        function filtrarPorCategoria() {
            let categoria = document.getElementById("filtroCategoria").value;
            if (categoria != "todas") {
                let contenedor = document.getElementById("multimedia");
                let cont = 1;
                contenedor.innerHTML = "";
                let contenido = "<ul><li>";
                listaMultimedia.forEach(multi => {
                    if (multi.categoria == categoria && (tipoSeleccionado == "todos" || multi.tipo == tipoSeleccionado)) {
                        contenido += `<img src="./imagenes/${multi.foto}" class="fotoMulti" onclick="mostrarMultiDetalle('${multi.titulo}')">`;
                        if (cont == 5) {
                            contenido += "<br>";
                            cont = 0;
                        }
                        cont++;
                    }
                })
                contenido += `</li></ul>`;
                contenedor.insertAdjacentHTML("beforeend", contenido);
            } else {
                mostrarMultimediaPorCategoria(listaMultimedia);
            }

        }

        //Añadir multimedia
        function anadirMultimedia(categoria) {
            categoriaGlobal=categoria;
            document.getElementById("divMulti").className = "oculto";
            document.getElementById("divMulti").className = "visible";
            document.getElementById("botonGuardar").className = "visible";
            document.getElementById("datosGuardar").className = "visible";
            document.getElementById("botonBorrar").className = "oculto";            
            document.getElementById("botonCancelar").addEventListener("click", () => { document.getElementById("divMulti").className = "oculto"; });
        }
        //Borrar multimedia
        function borrarMultimedia(categoria) {
            categoriaGlobal=categoria;
            document.getElementById("divMulti").className = "visible";
            document.getElementById("botonBorrar").className = "visible";
            document.getElementById("datosGuardar").className = "oculto";
            document.getElementById("botonGuardar").className = "oculto";
            document.getElementById("botonCancelar").addEventListener("click", () => { document.getElementById("divMulti").className = "oculto"; });
        }

        //Funcion detalle multimedia
        function mostrarMultiDetalle(titulo) {
            const multiSeleccionada = listaMultimedia.find(multi => multi.titulo == titulo);
            if (multiSeleccionada) {
                sessionStorage.setItem("detalleMulti", JSON.stringify(multiSeleccionada));
                location.href = "MultimediaInfo.html";
            }
        }
        //Funcion lista de peliculas del usuario
        function obtenerMultimediaDeUsuario(usuario) {
            let usuarioCodigo = usuario.codigo;
            let listaMultimediaUsuario = JSON.parse(localStorage.getItem(`lista${usuarioCodigo}`)) || [];
            if (listaMultimediaUsuario.length > 0) {
                listaMultimediaUsuario.forEach(multi => {
                    if (listaMultimedia.findIndex(M => multi.titulo.toLowerCase() == M.titulo.toLowerCase() && multi.categoria == M.categoria) == -1) {
                        listaMultimedia.push(new Multimedia(multi.tipo, multi.titulo, multi.director, multi.categoria, multi.foto, multi.link));
                    }
                })
            }
            mostrarMultimediaPorCategoria(listaMultimedia);
        }

        function verSubscripción(){
            let usuario = JSON.parse(sessionStorage.getItem("usuarioActual"));
            localStorage.setItem("usuarioASuscribirse",JSON.stringify(usuario));
            location.href="Subscripcion.html";
        }