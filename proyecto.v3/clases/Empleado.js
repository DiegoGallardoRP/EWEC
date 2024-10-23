class Empleado{
    constructor(codigo,dni,nombre,apellidos,puesto,foto,estado,nomina,contacto,curriculum){
        this.codigo=codigo;
        this.dni=dni;
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.nomina=nomina;
        this.puesto=puesto;
        this.foto=foto;
        this.estado=estado || "N";
        this.nomina=nomina||"";
        this.contacto=contacto||"";
        this.curriculum=curriculum||"";
    }
}