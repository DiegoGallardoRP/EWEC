class Multimedia {
    constructor(tipo, titulo, director, categoria, foto, link) {
        //serie/pelicula
        this.tipo = tipo;
        this.titulo = titulo;
        this.director = director;
        this.categoria = categoria;
        this.foto = foto;
        this.link = link || "";
    }
    //Editar peli
    
    //Mostrar Info multimedia
    mostrarDetalles() {
        document.getElementById("tituloMulti").textContent = this.titulo;
        document.getElementById("directorMulti").textContent = this.director;
        document.getElementById("categoriaMulti").textContent = this.categoria;
        document.getElementById("fotoMulti").src = `./imagenes/${this.foto}`;
        document.getElementById("fotoMulti").addEventListener("click", () => { 
            if (this.link) {
                window.open(this.link, "_blank");
            }
        });
    }
    //añadir peli a lista del usuario
    anadirAMiLista(codigoUsuario) {
        let listaMultimediaUsuario = JSON.parse(localStorage.getItem(`lista${codigoUsuario}`)) || [];

        // Evitar duplicados en "Mi lista"
        const existe = listaMultimediaUsuario.some(multi =>
            multi.titulo.toLowerCase() === this.titulo.toLowerCase() &&
            multi.categoria === "Mi lista"
        );

        if (!existe) {
            const multimediaParaLista = new Multimedia(this.tipo, this.titulo, this.director, "Mi lista", this.foto, this.link);
            listaMultimediaUsuario.push(multimediaParaLista);
            localStorage.setItem(`lista${codigoUsuario}`, JSON.stringify(listaMultimediaUsuario));
            alert(`"${this.titulo}" ha sido añadida a tu lista.`);
        } else {
            alert(`"${this.titulo}" ya está en tu lista.`);
        }
    }
}