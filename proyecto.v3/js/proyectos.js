var listaProyectos=[]; //
function cargarProyectos(){ ///
    listaProyectos.push(new Proyecto(1,
                                     "Proyecto 1",
                                     "Descripcion proyecto 1",
                                     "1",
                                    new Date(),
                                    new Date(),
                                    "SW",
                                    1000,
                                    "Ana Marquez"));
    listaProyectos.push(new Proyecto(2,
                                     "Proyecto 2",
                                     "Descripcion proyecto 1",
                                     "2",
                                    new Date(),
                                    new Date(),
                                    "Redes",
                                    2000,
                                    "Ana Marquez"));
    listaProyectos.push(new Proyecto(3,
                                     "Proyecto 3",
                                     "Descripcion proyecto 1",
                                     "3",
                                    new Date(),
                                    new Date(),
                                    "IA",
                                    3000,
                                    "Julia Marquez"));
}
onload = ()=>{
    cargarProyectos();
    pintarProyectos(listaProyectos);
    document.getElementById("nuevo")
            .getElementsByTagName("p")[0]
            .addEventListener("click",()=> document.getElementById("nuevo").className="oculto")
}


function volver(){
    location.href="aterrizaje.html"
}
function imprimir(){
    window.print();
}
function ordenar(campo){
    listaProyectos.sort((a,b)=>{
        if (a[campo]>b[campo])return 1;
        else return -1;
    });
    pintarProyectos(listaProyectos);
}
function mostrarDivNuevoCrear(){
    document.getElementById("nuevo").className="visible";
    document.getElementById("guardar").className="visible";
    document.getElementById("salvar").className="oculto";
}

function eliminarProyecto(codigo){
    let posicion=listaProyectos.findIndex((proyecto)=>proyecto.codigo==codigo);
    if (posicion!=-1){
        listaProyectos.splice(posicion,1);
        pintarProyectos(listaProyectos);
    }
}
function mostrarDivNuevo(codigo,accion){
    document.getElementById("nuevo").className="visible";
    document.getElementById("guardar").className="oculto";
    if (accion=='ver'){
        document.getElementById("salvar").className="oculto";
    }else {
        document.getElementById("salvar").className="visible";
        document.getElementById("codigo").disabled = true;
    }
    document.getElementById("codigo").value=codigo;
    let posicion=listaProyectos.findIndex((proyecto)=>proyecto.codigo==codigo);
    if (posicion!=-1){
        document.getElementById("presupuestoInicial").value=listaProyectos[posicion].presupuestoInicial;
        document.getElementById("nombre").value=listaProyectos[posicion].nombre;
        document.getElementById("descripcion").value=listaProyectos[posicion].descripcion;
        document.getElementById("cliente").value=listaProyectos[posicion].cliente;
    }
}

function guardarNuevo(){

}
function guardarCambios(){

}
function pintarProyectos(lista){
    let tbody=document.getElementsByTagName("tbody")[0];
    tbody.innerHTML="";
    let texto="";
    lista.forEach(elemento => {
        texto+=`<tr>
            <td>${elemento.codigo}</td>
            <td>${elemento.nombre}</td>
            <td>${elemento.presupuestoInicial}</td>
            <td><img src="./imagenes/papelera.jpg" width="50px" 
                onclick="eliminarProyecto(${elemento.codigo})"/>
                <img src="./imagenes/lupa.jpg" width="50px" 
                onclick="mostrarDivNuevo(${elemento.codigo},'ver')"/>
                <img src="./imagenes/lapiz.jpg" width="50px" 
                onclick="mostrarDivNuevo(${elemento.codigo},'modificar')"/>
            </td>
        </tr>`
    });
    tbody.insertAdjacentHTML("beforeend",texto);
}