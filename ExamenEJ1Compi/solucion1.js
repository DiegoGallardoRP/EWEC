onload = () => {
    cargarSelect();
    document.getElementsByClassName("btn-submit")[0].addEventListener("click", validar);
}

function cargarSelect() {
    const opcionesSelect = document.getElementById("articulo");
    let texto = "";
    articulos.forEach(element => {
        texto += `<option value="${element.codigo}">${element.codigo}</option>`;
    });
    opcionesSelect.insertAdjacentHTML("beforeend", texto);

}

//Pasamos como parámetro el evento del botón para después impedir que refresque si hay errores
function validar(event) {
    //Cuando le demos al botón borramos los mensajes de error que se hayan escrito:
    let listaErrores=[...document.getElementsByClassName('error')];
    listaErrores.forEach(error=>{
        error.remove();
    })    

    let DNIerror = "";
    let tipoError = "";
    let CantidadError = "";
    let fechaError = "";
    let articuloError = "";

    let cajaDNI = document.getElementById("solicitante").value.trim();
    let cajaArticulo = document.getElementById("articulo").value;
    let cajaCantidad = document.getElementById("cantidad").value.trim();
    let cajaTipo = document.getElementById("tipo").value.trim();
    let cajaFecha = document.getElementById("fechaEntrega").value.trim();

    //Cambio el siguiente if ya que hay varios ifs para una verificación
    //Cambio el if de forma de que si está mal escrito el DNI o está vacío, da error
    //También cambiamos los mensajes de error para poder trabajar mejor con ellos
    if (cajaDNI == ""||!/^[0-9]{8}[A-Z]{1}$/.test(cajaDNI)) {
        DNIerror = "<span class='error'>DNI erroneo o vacío</span>";
    }  
    
    //Para la fecha usaremos una funcion que devolverá true o false, si devuelve true da error
    if(validarFecha(cajaFecha)){
        fechaError="<span class='error'>Fecha no válida</span>";
    }

    //Voy a cambiar las condiciones de cantidad y articulo para facilitar las condiciones
    /*Condiciones originales de cantidad y artículos
    if(cajaArticulo == -1){
        articuloError = "Caja vacia";
    }
    if(cajaCantidad == ""){
        CantidadError = " Caja vacia";
    }
    if(/`{0-9}$/.test(cajaCantidad)){
        CantidadError = " El valor no es numerico";
    }
    if(cajaCantidad > 0 && cajaCantidad != "" && !isNaN(cajaCantidad)){
        articulos.forEach(elemento => {
            if(cajaArticulo == elemento.codigo){
                if(cajaCantidad > elemento.stock){
                    CantidadError = " Cantidad superior de stock";
                }
            }
        })
    }*/
   //Mi método para resolverlo:

   //Condiciones artículo
    if(cajaArticulo==-1){
        articuloError="<span class='error'>Artículo no seleccionado</span>";
        CantidadError="<span class='error'>La cantidad es errónea</span>";
    }else{
        //Condiciones cantidad, solo lo consultamos si encontramos el artículo ya que si no se encuentra no tiene sentido consultar la cantidad
        //Si está vacío o no es un número o está fuera de stock, da error
        if(cajaCantidad==""||isNaN(cajaCantidad)){
                CantidadError="<span class='error'>La cantidad es errónea</span>";
        }
    }   

    
    /*if(cajaTipo == ""){
        tipoError = " Caja vacia";
    }

    let listaTipo=["alimento", "agua","ropa", "medicina","otros1", "otros2","otros3","otros4","otros5", "otros6","otros7", "otros8", "otros9","otros10"];
    if(listaTipo.indexOf(cajaTipo)){
        tipoError = " Tipo no existe";
    }*/

    //Cambiamos las condiciones de tipos para optimizarlo y que solo haya un if
    let listaTipo=["alimento", "agua","ropa", "medicina","otros1", "otros2","otros3","otros4","otros5", "otros6","otros7", "otros8", "otros9","otros10"];
    //De la siguiente forma tomamos el valor de la caja y si no encuentra su índice da error
    let indiceTipo=listaTipo.findIndex(tipo=>cajaTipo==tipo);
    if(indiceTipo==-1){
        tipoError="<span class='error'>Tipo incorrecto</span>";
    }

    /*Hay que añadir una cosa antes y es que si uno de los errores no está vacío, 
    debe prevenir el evento de refrescar la página, voy a modificar el contenido de algunos if*/
    if(DNIerror != ""){
        let resaltarError = document.getElementById("solicitante");
        resaltarError.insertAdjacentHTML("afterend", DNIerror);
        event.preventDefault();
    }
    if(fechaError!=""){
        let resaltarError=document.getElementById("fechaEntrega");
        resaltarError.insertAdjacentHTML("afterend", fechaError);
        event.preventDefault();
    }
    if(articuloError != ""){
        let resaltarError = document.getElementById("articulo");
        resaltarError.insertAdjacentHTML("afterend", articuloError);
        event.preventDefault();

    }
    if(CantidadError != ""){
        let resaltarError = document.getElementById("cantidad");
        resaltarError.insertAdjacentHTML("afterend", CantidadError);
        event.preventDefault();

    }
    if(tipoError != ""){
        let resaltarError = document.getElementById("tipo");
        resaltarError.insertAdjacentHTML("afterend", tipoError);
        event.preventDefault();

    }

    if(DNIerror == "" && articuloError == "" && CantidadError == "" && tipoError == ""){
        let lista = [];
        //Creamos la peticion como objeto
        let peticion={"dni_solicitante":`${solicitante}`,"cantidad_solicitada":`${cantidad}`,
                    "fecha_entrega":`${fecha}`,"codigo_articulo":`${articulo}`};
        //lista[cajaDNI, cajaCantidad, cajaArticulo];
        if (sessionStorage.getItem("peticiones")) {
            lista = JSON.parse(sessionStorage.getItem("peticiones"));
            //Como ya ha encontrado la lista, ahora debemos ver si esa misma petición ya existe
            let indicePeticion=lista.findIndex(peticion=>{
                peticion.dni_solicitante==cajaDNI&&peticion.codigo_articulo==cajaArticulo;
            })
            if(indicePeticion!=-1){
                //Encuentra la peticion
                lista[indicePeticion].cantidad_solicitada=cajaCantidad;
                lista[indicePeticion].fecha_entrega=cajaFecha;
                sessionStorage.setItem("peticiones",JSON.stringify(lista));
            }else{
                lista.push(peticion);
                sessionStorage.setItem("peticiones",JSON.stringify(lista));
            }
        }else{
            lista.push(peticion);
            //Creamos el session storage si no existe ya
            sessionStorage.setItem("peticiones",JSON.stringify(lista));
        }
    }

    /* if (cajaDNI == "") {
         error = true;
     }
     if (error) {
 
     } else {
         let lista = [];
         if (sessionStorage.getItem("peticiones")) {
             lista = JSON.parse(sessionStorage.getItem("peticiones"));
         }
 
 
 
         sessionStorage.setItem("peticiones", JSON.stringify(lista));
     }*/
}
//Funcion para validar la fecha
function validarFecha(fecha){
    let arrayFecha=fecha.split('/');
    //AAAA/DD/MM
    fecha=new Date(`${arrayFecha[0]}-${arrayFecha[2]}-${arrayFecha[1]}`);

    //Fecha dos días después 
    let fecha2=new Date();
    fecha2.setDate(fecha2.getDate()+2);

    //Fecha una semana después
    let fecha7=new Date();
    fecha7.setDate(fecha7.getDate()+7);

    if(fecha<fecha2&&fecha>fecha7){
        return true;
    }else{
        return false;
    }
}