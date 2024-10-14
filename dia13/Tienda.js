class Tienda{
    constructor(nombre, direccion, telefono,listavehiculo){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.listaVehiculos = [];
    }
    anadirVehiculo(vehiculo){
        this.listaVehiculos.push(vehiculo);
    }
    cargarVehiculos(){
        let vehiculo1=new Vehiculo("SEAT","LEON","BLANCO","1234ABC",10000,2000,2020,"foto1.jpeg",5);
        this.anadirVehiculo(vehiculo1);
    }
    mostrarVehiculosEnTabla(){
        let codigoHTML="<table><tbody>";
        this.listaVehiculos.forEach((vehiculo)=>{
            codigoHTML+="<tr>";
            for(let campo in vehiculo){
                if(campo=="foto"){
                    codigoHTML+=`<td>${campo}</td><td><img src="${vehiculo[campo]}"></td>`;
                }else{
                    codigoHTML+=`<td>${campo}</td><td>${vehiculo[campo]}</td>`;
                }
            }
            codigoHTML+="</tr>";
        })
        codigoHTML+="</tbody></table>";
        document.body.insertAdjacentHTML("beforeend",codigoHTML);
    }
}