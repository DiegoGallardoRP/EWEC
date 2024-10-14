class Alumno{
    constructor(nombre,apellidos,numeroMatricula,listaModulos){
        this.nombre=nombre || "SIN NOMBRE";
        this.apellidos=apellidos || "SIN APELLIDOS";
        this.numeroMatricula=numeroMatricula || 666;
        this.listaModulos=listaModulos || [];
    }
    mostrarDetalles(){
        let codigoHTMLDiv=`<div>
                    <p>Nombre:${this.nombre}</p>
                    <p>Apellidos:${this.apellidos}</p>
                    <p>Numero Matricula:${this.numeroMatricula}</p>
                    <p>Lista de modulos:${this.listaModulos}</p>
                </div>`;
        document.body.insertAdjacentHTML("beforeend",codigoHTMLDiv);
    }
    modificarMatricula(matricula){
        this.numeroMatricula=matricula;
    }
}