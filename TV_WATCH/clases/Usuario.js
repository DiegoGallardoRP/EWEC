class Usuario{
    constructor(codigo,clave,nombre,correo,admin,estado){
        this.codigo=codigo;
        this.clave=clave;
        this.nombre=nombre;
        this.correo=correo;
        this.admin=admin;
        //S/N ---> SI/NO
        this.estado=estado;
        //A/B ---> ALTA/BAJA
    }
}