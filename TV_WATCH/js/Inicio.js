        onload=()=>{
            esAdmin = false;
<<<<<<< HEAD
            
            //jquery divs
            $("#ajustesAdmin").hide();
            $("#divMulti").hide();
            $("#botonCancelar").click(()=>{
                $("#divMulti").hide();
            });
=======
            listaMultimedia=JSON.parse(localStorage.getItem("listaMultimedia"));
>>>>>>> c5338802b498802ddff302174c61352c9c75a5db
            //Variables para el carrusel de películas
            paginaActualPorCategoria = {};
            elementosPorPagina = 4;
            //Categorias de las películas
<<<<<<< HEAD
            listaCategoria = ["Mi lista", "Terror", "Ciencia Ficcion", "Comedia", "Accion","Animacion"];
            tipoSeleccionado = "todos";

            cargarMultimedia();
            mostrarUsuario();

=======
            listaCategoria = ["Mi lista", "Terror", "Ciencia Ficcion", "Comedia", "Animacion"];
            tipoSeleccionado = "todos";
            cargarMultimedia();
            mostrarUsuario();
>>>>>>> c5338802b498802ddff302174c61352c9c75a5db
            obtenerMultimediaDeUsuario(JSON.parse(sessionStorage.getItem("usuarioActual")));
            //Crear los eventos para los botones para que solo tengan un evento
            //Boton para borrar
            document.getElementById("botonBorrar").addEventListener("click",()=>{
                let titulo = document.getElementById("nombre").value.trim();
                let indice = listaMultimedia.findIndex(multi => multi.titulo.toLowerCase() == titulo.toLowerCase() && multi.categoria == categoriaGlobal);
                if (indice !== -1) {
                    listaMultimedia.splice(indice, 1);
                    mostrarMultimediaPorCategoria(listaMultimedia);
<<<<<<< HEAD
                    localStorage.setItem("listaMultimedia",JSON.stringify(listaMultimedia));
                    alert(`"${titulo}" ha sido eliminada.`);
                    $("#divMulti").hide();
=======
                    alert(`"${titulo}" ha sido eliminada.`);
                    document.getElementById("divMulti").className = "oculto";
>>>>>>> c5338802b498802ddff302174c61352c9c75a5db
                    document.getElementById("nombre").value = "";
                } else {
                    alert("No se encontró ese título");
                }
            });
<<<<<<< HEAD
            
            //Boton para añadir
            document.getElementById("botonGuardar").addEventListener("click", () => {
                let tipo = document.querySelector("input[name='tipoMulti']:checked");
                if (tipo && document.getElementById("nombre").value != "" && document.getElementById("director").value != "" && document.getElementById("fotoPeli").value!=""&&document.getElementById("trailer").value != "") {
                    listaMultimedia.push(new Multimedia(tipo.value, document.getElementById("nombre").value, document.getElementById("director").value, categoriaGlobal, 
                    document.getElementById("fotoPeli").value,document.getElementById("trailer").value))
                    alert('Multimedia añadido');
                    $("#divMulti").hide();
                    mostrarMultimediaPorCategoria(listaMultimedia);
                    localStorage.setItem("listaMultimedia",JSON.stringify(listaMultimedia));
                    document.getElementById("nombre").value = "";
                    document.getElementById("director").value = "";
                    document.getElementById("fotoPeli").value="";
=======
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
>>>>>>> c5338802b498802ddff302174c61352c9c75a5db
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
<<<<<<< HEAD
            if(esAdmin){
                $("#ajustesAdmin").show();
=======
            document.getElementById("perfil").addEventListener("click",()=>{location.href="Ajustes_Usuario"});
            if(esAdmin){
                document.getElementById("ajustesAdmin").className="visible";
>>>>>>> c5338802b498802ddff302174c61352c9c75a5db
            }
        }

        function cargarMultimedia() {
<<<<<<< HEAD
            listaMultimedia = JSON.parse(localStorage.getItem("listaMultimedia"));
            if(!listaMultimedia){
                listaMultimedia = [];
                //"Mi lista", "Terror", "Ciencia Ficcion", "Comedia", "Accion","Animacion"
                //Terror
                listaMultimedia.push(new Multimedia("peli", "IT", "Stephen King", "Terror", "it.jpg", "https://www.youtube.com/watch?v=_oBZ_zTz0Nw"));
                listaMultimedia.push(new Multimedia("peli", "Alien", "David Fincher", "Terror", "alien.jpg", "https://www.youtube.com/watch?v=jQ5lPt9edzQ"));
                listaMultimedia.push(new Multimedia("peli", "Halloween", "Rob Zombie", "Terror", "halloween.jpg", "https://www.youtube.com/watch?v=T5ke9IPTIJQ"));
                listaMultimedia.push(new Multimedia("peli", "Scream", "Rob Zombie", "Terror", "scream.jpg", "https://www.youtube.com/watch?v=i3J6ACKQ7K0"));
                listaMultimedia.push(new Multimedia("serie", "Ash vs evil dead", "Sam Raimi", "Terror", "ash.jpg", "https://www.youtube.com/watch?v=i3J6ACKQ7K0"));
                listaMultimedia.push(new Multimedia("serie", "American horror story", "Sam Raimi", "Terror", "ahs.jpg", "https://www.youtube.com/watch?v=i3J6ACKQ7K0"));
                //Ciencia Ficcion
                listaMultimedia.push(new Multimedia("peli", "Spiderman", "Sam Raimi", "Ciencia Ficcion", "spiderman.jpg", "https://www.youtube.com/watch?v=t06RUxPbp_c"));
                listaMultimedia.push(new Multimedia("peli", "Spiderman 2", "Sam Raimi", "Ciencia Ficcion", "spiderman2.jpg", "https://www.youtube.com/watch?v=0EhKGAfNBBw"));
                listaMultimedia.push(new Multimedia("peli", "Spiderman 3", "Sam Raimi", "Ciencia Ficcion", "spiderman3.jpg", "https://www.youtube.com/watch?v=e5wUilOeOmg"));
                listaMultimedia.push(new Multimedia("serie", "Moon Knight", "Sam Raimi", "Ciencia Ficcion", "moonk.jpg", "https://www.youtube.com/watch?v=x7Krla_UxRg"));
                listaMultimedia.push(new Multimedia("serie", "DARK", "Sam Raimi", "Ciencia Ficcion", "dark.jpg", "https://www.youtube.com/watch?v=ESEUoa-mz2c"));
                listaMultimedia.push(new Multimedia("serie", "Perdidos", "Sam Raimi", "Ciencia Ficcion", "perdidos.jpg", "https://www.youtube.com/watch?v=qMXAsu64-Ws"));

                //Comedia
                listaMultimedia.push(new Multimedia("peli", "Inactividad Paranormal", "Michael Tiddes", "Comedia", "inact.jpg", "https://www.youtube.com/watch?v=KyvprW6vn-I"));
                listaMultimedia.push(new Multimedia("peli", "¿Quién asesinó al capitán Alex?", "Nabwana I.G.G.", "Comedia", "capAlex.jpg", "https://www.youtube.com/watch?v=BymeLkZ7GqM"));
                listaMultimedia.push(new Multimedia("peli", "Barbie", "Greta Gerwig", "Comedia", "barbie.jpg", "https://www.youtube.com/watch?v=vsJgLu3PIno"));
                listaMultimedia.push(new Multimedia("serie", "Cómo conocí a vuestra madre", "Carter Bays Craig Thomas", "Comedia", "madre.jpg", "https://www.youtube.com/watch?v=90OxzHzvWSg"));
                listaMultimedia.push(new Multimedia("serie", "Dos hombres y medio", "Chuck Lorre", "Comedia", "dosh.jpg", "https://www.youtube.com/watch?v=90OxzHzvWSg"));
                //Accion
                listaMultimedia.push(new Multimedia("peli", "Pulp fiction", "Quentin Tarantino", "Accion", "pf.jpg", "https://www.youtube.com/watch?v=ZFYCXAG6fdo"));
                listaMultimedia.push(new Multimedia("peli", "DJANGO", "Quentin Tarantino", "Accion", "django.jpg", "https://www.youtube.com/watch?v=CLofzNkIqAc"));
                listaMultimedia.push(new Multimedia("serie", "Cobra kai", "Jon Hurwitz", "Accion", "cobra.jpg", "https://www.youtube.com/watch?v=CLofzNkIqAc"));
                listaMultimedia.push(new Multimedia("serie", "Equipo A", "Joe Carnahan", "Accion", "equipoa.jpg", "https://www.youtube.com/watch?v=CLofzNkIqAc"));
                listaMultimedia.push(new Multimedia("serie", "John Wick", "Chad Stahelski", "Accion", "jw.jpg", "https://www.youtube.com/watch?v=CLofzNkIqAc"));
                
                //Animacion
                listaMultimedia.push(new Multimedia("serie", "Bob Esponja", "Stephen Hillenburg", "Animacion", "bobesponja.jpg", "https://www.youtube.com/watch?v=v94Cbb76qfc"));
                listaMultimedia.push(new Multimedia("serie", "Gravity Falls", "Alex Hirsch", "Animacion", "gf.jpg", "https://www.youtube.com/watch?v=yfUDIPUETUg"));
                listaMultimedia.push(new Multimedia("peli", "Gato con botas el último deseo", "Joel Crawford", "Animacion", "gato2.jpg", "https://www.youtube.com/watch?v=7afDrYLajRk"));
                listaMultimedia.push(new Multimedia("peli", "Super Mario Bros", "Joel Crawford", "Animacion", "mario.jpg", "https://www.youtube.com/watch?v=_1f2RLdxQfA"));
                listaMultimedia.push(new Multimedia("serie", "Smiling friends", "Joel Crawford", "Animacion", "smiling.jpg", "https://www.youtube.com/watch?v=_1f2RLdxQfA"));

                localStorage.setItem("listaMultimedia",JSON.stringify(listaMultimedia));
            }
            mostrarMultimediaPorCategoria(listaMultimedia);
=======
            if(!listaMultimedia){
                listaMultimedia=[];
                listaMultimedia.push(new Multimedia("peli", "IT", "Stephen King", "Terror", "it.jpg", "https://www.youtube.com/watch?v=_oBZ_zTz0Nw"));
                listaMultimedia.push(new Multimedia("peli", "Alien", "David Fincher", "Terror", "alien.jpg", ""));
                listaMultimedia.push(new Multimedia("peli", "Inactividad Paranormal", "Michael Tiddes", "Comedia", "inact.jpg", ""));
                listaMultimedia.push(new Multimedia("serie", "Cómo conocí a vuestra madre", "Carter Bays Craig Thomas", "Comedia", "madre.jpg", "https://www.youtube.com/watch?v=90OxzHzvWSg"));

                localStorage.setItem("listaMultimedia",JSON.stringify(listaMultimedia));
            }
            
>>>>>>> c5338802b498802ddff302174c61352c9c75a5db
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
<<<<<<< HEAD
        
=======
>>>>>>> c5338802b498802ddff302174c61352c9c75a5db
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
<<<<<<< HEAD
            $("#divMulti").show();
            $("#botonGuardar").show();
            $("#datosGuardar").show();
            $("#botonBorrar").hide();
=======
            document.getElementById("divMulti").className = "oculto";
            document.getElementById("divMulti").className = "visible";
            document.getElementById("botonGuardar").className = "visible";
            document.getElementById("datosGuardar").className = "visible";
            document.getElementById("botonBorrar").className = "oculto";            
            document.getElementById("botonCancelar").addEventListener("click", () => { document.getElementById("divMulti").className = "oculto"; });
>>>>>>> c5338802b498802ddff302174c61352c9c75a5db
        }
        //Borrar multimedia
        function borrarMultimedia(categoria) {
            categoriaGlobal=categoria;
<<<<<<< HEAD
            $("#divMulti").show();
            $("#botonGuardar").hide();
            $("#datosGuardar").hide();
            $("#botonBorrar").show();            
=======
            document.getElementById("divMulti").className = "visible";
            document.getElementById("botonBorrar").className = "visible";
            document.getElementById("datosGuardar").className = "oculto";
            document.getElementById("botonGuardar").className = "oculto";
            document.getElementById("botonCancelar").addEventListener("click", () => { document.getElementById("divMulti").className = "oculto"; });
>>>>>>> c5338802b498802ddff302174c61352c9c75a5db
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