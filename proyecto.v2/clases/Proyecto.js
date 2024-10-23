class Proyecto{
    constructor(codigo,nombre,descripcion,
                cliente,fechaInicio,fechaLimite,tipo,
                presupuestoInicial,responsable){
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaLimite = fechaLimite;
        this.estado = "P";
        this.cliente = cliente;
        this.tipo = tipo;
        this.presupuestoInicial = presupuestoInicial;
        this.responsable = responsable;
    }
    verDetalle(){

    }
}