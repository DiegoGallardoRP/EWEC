onload = () => {
    cargarProyectos();
    pintarProyectos(listaProyectos);
    document.getElementById("nuevo").getElementsByTagName("p")[0].addEventListener("click",()=>
        document.getElementById("nuevo").className = "oculto");
}
function crearNuevo() {
    document.getElementById("nuevo").className = "visible";
    document.getElementById("guardar").className = "visible";
}
function volver() {
    location.href = "aterrizaje.html";
}
function imprimir() {
    window.print();
}
function ordenar(campo) {
    listaProyectos.sort((a, b) => {
        if (a[campo] > b[campo]) return 1;
        else return -1;
    });
    pintarProyectos(listaProyectos);
}
var listaProyectos = [];
function cargarProyectos() {
    listaProyectos.push(new Proyecto(1,
        "Proyecto 1",
        "",
        "1",
        new Date(),
        new Date(),
        "SW",
        1000,
        "Ana Marquez"));
    listaProyectos.push(new Proyecto(2,
        "Proyecto 2",
        "",
        "2",
        new Date(),
        new Date(),
        "Redes",
        2000,
        "Ana Marquez"));
    listaProyectos.push(new Proyecto(3,
        "Proyecto 3",
        "",
        "3",
        new Date(),
        new Date(),
        "IA",
        3000,
        "Julia Marquez"));
}
function crearDivNuevoCrear(){
    document.getElementById("nuevo").className = "visible";
    document.getElementById("guardar").className = "visible";
    document.getElementById("salvar").className = "oculto";
}
function eliminarProyecto(codigo) {
    let posicion = listaProyectos.findIndex((proyecto) => proyecto.codigo == codigo);
    if (posicion != -1) {
        listaProyectos.splice(posicion, 1);
        pintarProyectos(listaProyectos);
    }

}
function mostrarDivNuevo(codigo,accion) {
    document.getElementById("nuevo").className = "visible";
    document.getElementById("guardar").className = "oculto";
    if(accion=="ver"){
        document.getElementById("salvar").className = "oculto";
    }else{
        document.getElementById("salvar").className = "visible";
        document.getElementById("codigo").disabled=true;
    }
    document.getElementById("codigo").value = codigo;
    let posicion = listaProyectos.findIndex((proyecto) => proyecto.codigo == codigo);
    if (posicion != -1) {
        document.getElementById("nombre").value = listaProyectos[posicion].nombre;
        document.getElementById("descripcion").value = listaProyectos[posicion].descripcion;
        document.getElementById("fechaInicio").value = listaProyectos[posicion].fechaInicio;
        document.getElementById("fechaLimite").value = listaProyectos[posicion].fechaLimite;
        document.getElementById("estado").value = listaProyectos[posicion].estado;
        document.getElementById("cliente").value = listaProyectos[posicion].cliente;
        document.getElementById("tipo").value = listaProyectos[posicion].tipo;
        document.getElementById("presupuesto").value = listaProyectos[posicion].presupuestoInicial;
        document.getElementById("responsable").value = listaProyectos[posicion].responsable;
    }
}
function guardarNuevo(){
    let codigo = document.getElementById("codigo").value;
    let nombre = document.getElementById("nombre").value;
    let descripcion= document.getElementById("descripcion").value;
    let fechaInicio= document.getElementById("fechaInicio").value;
    let fechaLimite= document.getElementById("fechaLimite").value;
    let estado= document.getElementById("estado").value;
    let cliente= document.getElementById("cliente").value;
    let tipo= document.getElementById("tipo").value;
    let presupuesto= document.getElementById("presupuesto").value;
    let responsable= document.getElementById("responsable").value;
    let proyectoNuevo=new Proyecto(codigo,nombre,descripcion,fechaInicio,fechaLimite,estado,cliente,tipo,presupuesto,responsable,proyectoNuevo);
    listaProyectos.push(proyectoNuevo);
    pintarProyectos(listaProyectos);
}
function guardarCambios(){
    let codigo = document.getElementById("codigo").value;
    let nombre = document.getElementById("nombre").value;
    let descripcion= document.getElementById("descripcion").value;
    let fechaInicio= document.getElementById("fechaInicio").value;
    let fechaLimite= document.getElementById("fechaLimite").value;
    let estado= document.getElementById("estado").value;
    let cliente= document.getElementById("cliente").value;
    let tipo= document.getElementById("tipo").value;
    let presupuesto= document.getElementById("presupuesto").value;
    let responsable= document.getElementById("responsable").value;
    let proyectoModificado=new Proyecto(codigo,nombre,descripcion,fechaInicio,fechaLimite,estado,cliente,tipo,presupuesto,responsable,proyectoNuevo);
    let posicion = listaProyectos.findIndex((proyecto) => proyecto.codigo == codigo);
    if (posicion != -1) {
        listaProyectos[posicion]=proyectoModificado;
    }
}
function pintarProyectos(lista) {
    let tbody = document.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
    let texto = "";
    lista.forEach(elemento => {
        texto += `<tr>
                    <td>${elemento.codigo}</td>
                    <td>${elemento.nombre}</td>
                    <td>${elemento.presupuestoInicial}</td>
                    <td>
                        <img src="./imagenes/papelera.png" onclick="eliminarProyecto(${elemento.codigo})">
                        <img src="./imagenes/lupa.png" onclick="mostrarDivNuevo(${elemento.codigo},'ver')">
                        <img src="./imagenes/lapiz.png" onclick="mostrarDivNuevo(${elemento.codigo},'modificar')">
                    </td>
                </tr>`
    });
    tbody.insertAdjacentHTML("beforeend", texto);
}