var listaEmpleados=[];
function cargarEmpleados(){
    listaEmpleados.push(new Empleado(1,"12345678A","Nico","Rioja","emp1.jpg"));
    listaEmpleados.push(new Empleado(2,"18926735B","Raul","Castellon","emp2.jpg"));
    listaEmpleados.push(new Empleado(3,"28936748C","Fernando","Rojas","emp3.jpg"));
    listaEmpleados.push(new Empleado(4,"29035462D","Nico","Rioja","emp4.jpg"));
    listaEmpleados.push(new Empleado(5,"12736453E","Nico","Rioja","emp5.jpg"));
}
function mostrarEmpleados(){
listaEmpleados.forEach((empleado)=>{
    let codigo=`<tr>
    <td><img src="${empleado.foto}"></td>
    <td>${empleado.nombre} ${empleado.apellidos}</td>
    <td>${empleado.puesto}</td>
    
    </tr>`;
    document.getElementsByTagName("tbody")[0].insertAdjacentHTML("beforeed",codigo);
})
}
onload=()=>{
    cargarEmpleados();
    mostrarEmpleados();
}
