class Usuario{
    constructor(codigo,clave,nombre,correo,tipoSub,fechaFin,admin){
        this.codigo=codigo;
        this.clave=clave;
        this.nombre=nombre;
        this.correo=correo;
        this.tipoSub=tipoSub||"";
        this.fechaFin=fechaFin||new Date();
        this.admin=admin||"N";
        //S/N ---> SI/NO     
    }
    //Editar usuario
    editarUsuario(nuevoCodigo, nuevoNombre, nuevoCorreo, nuevaClave, nuevoTipoSub, nuevaFechaFin, admin,
        listaUsuarios){
        this.codigo=nuevoCodigo;
        this.nombre=nuevoNombre;
        this.correo=nuevoCorreo;
        this.clave=nuevaClave;
        this.tipoSub=nuevoTipoSub;
        this.fechaFin=nuevaFechaFin;

        //buscar el índice del usuario a editar
        let indice=listaUsuarios.findIndex(usuario=>usuario.codigo==this.codigo);
        if(indice!=-1){
            listaUsuarios[indice]=this;
            localStorage.setItem("listaUsuarios",JSON.stringify(listaUsuarios));
            //Solo cambiará usuario actual si estamos modificando al usuario actual, no a todos los usuarios
                       
            return true;
        }
        return false;
    }
    //Mostrar información del usuario para editarlo
    mostrarInformacion() {
        document.getElementById("nombre").value = this.nombre;
        document.getElementById("correo").value = this.correo;
    }
    //Comprobar fecha subscripcion
    tieneSuscripcionActiva() {
        let fechaActual = new Date();
        let fechaUsuario = new Date(this.fechaFin);
        if(fechaUsuario > fechaActual){
            return true;
        }else{
            return false;
        }
    }
}