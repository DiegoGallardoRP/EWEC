class Usuario{
    constructor(codigo,clave,nombre,apellidos,correo,puesto){
        this.codigo = codigo;
        this.clave = clave;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.correo = correo;
        this.puesto = puesto;
        this.fechaEntrada = new Date();
        this.estado = "A"
        this.fechaCambio= new Date();
        this.intentosFallidos=0;
        this.fechaUltimoAcceso= new Date();
    }
}