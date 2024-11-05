class Usuario{
    constructor(codigo,clave,nombre,correo,admin,estado){
        this.codigo=codigo;
        this.clave=clave;
        this.nombre=nombre;
        this.correo=correo;
        this.admin=admin||"N";
        //S/N ---> SI/NO
        this.estado=estado||"B";
        //A/B ---> ALTA/BAJA
    }
}