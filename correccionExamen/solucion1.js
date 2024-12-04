onload=()=>{    
    cargarSelect();
    //document.getElementsByClassName('btn-submit')[0];
    document.getElementsByClassName('btn-submit')[0].addEventListener("click",validar);
}
function cargarSelect(){
    let contenedor=document.getElementById('articulo');
    articulos.forEach(articulo=>{
        let option=`<option value=${articulo.codigo}>${articulo.descripcion}`;
        contenedor.insertAdjacentHTML("beforeend",option);
    })
}
function validar(event){
    let error=false;

    let cajaDNI=document.getElementById('solicitante');
    let solicitante=cajaDNI.value.trim();

    let cajaFecha=document.getElementById('fechaEntrega');
    let fecha=cajaFecha.value.trim();
    
    let cajaArticulo=document.getElementById('articulo');
    let articulo=cajaArticulo.value;

    let cajaTipo=document.getElementById('tipo');
    let tipo=cajaTipo.value.trim();
    let listaTipos=["alimento", "agua", "ropa", "medicina", "otros1", "otros2", "otros3", "otros4","otros5", "otros6","otros7", "otros8", "otros9","otros10"];

    let cajaCantidad=document.getElementById('cantidad');
    let cantidad=cajaCantidad.value.trim();

    //Validar DNI
    if(solicitante==""||!/^[0-9]{8}[A-Z]{1}$/.test(solicitante)){        
        //Error DNI
        cajaDNI.insertAdjacentHTML("afterend","<label>El DNI no es correcto</label>");
        error=true;
    }

    //Validar fecha
    if(validarFecha(fecha)){
        //Error fecha
        cajaFecha.insertAdjacentHTML("afterend","<label>La fecha no es correcta</label>");
    } 

   //Validar articulo
   let indiceArt=articulos.findIndex(articuloLista=>articuloLista.codigo==articulo);
   if(indiceArt==-1){
        //Error articulo
        cajaArticulo.insertAdjacentHTML("afterend","<label>El articulo no es correcto</label>");
        error=true;
   }

   //Validar tipo
   let indice=listaTipos.findIndex(tipoLista=>tipoLista==tipo);
   if(indice==-1){
        //Error tipo
        cajaTipo.insertAdjacentHTML("afterend","<label>El tipo no es correcto</label>");
        error=true;
   }

   //Validar cantidad
   if(isNaN(cantidad)||(indiceArt!=-1&&parseInt(cantidad)>=articulos[indiceArt].stock)){
        error=true;
        //Error cantidad        
        cajaCantidad.insertAdjacentHTML("afterend","<label id='errorCantidad'>La cantidad no es correcta</label>");
        articulos[indiceArt].stock=articulos[indiceArt].stock-cantidad;
   }

    if(error){    
        //Que no se refresque
        event.preventDefault();        
    }else{
        let lista=[];
        let peticion={"dni_solicitante":`${solicitante}`,
                    "cantidad_solicitada":`${cantidad}`,
                    "fecha_entrega":`${fecha}`,
                    "codigo_articulo":`${articulo}`};
        //Si existe peticiones, lo buscamos
        if(sessionStorage.getItem("peticiones")){
            lista=JSON.parse(sessionStorage.getItem("peticiones"));
            let indicePeticiones=lista.findIndex(peticion=>peticion.dni_solicitante==solicitante&&peticion.codigo_articulo==articulo);
            if(indicePeticiones!=-1){
                //Modifica la peticion
                lista[indicePeticiones].cantidad_solicitada=lista[indicePeticiones].cantidad_solicitada+cantidad;
                lista[indicePeticiones].fecha_entrega=fecha;

                sessionStorage.setItem("peticiones",JSON.stringify(lista));
            }else{
                //La peticion no existe, así que se crea
                lista.push(peticion);
            }
        }else{
            lista.push(peticion);
            sessionStorage.setItem("peticiones",JSON.stringify(lista));
        }
        
    }
}

function validarFecha(fecha){
    let arrayFecha=fecha.split('/');
    //AAAA/DD/MM
    fecha=new Date(`${arrayFecha[0]}-${arrayFecha[2]}-${arrayFecha[1]}`);

    //Fecha dos días después 
    let fecha2=new Date();
    fecha2=new Date(`${fecha2.getFullYear()}-${fecha2.getMonth()}-${fecha2.getDate()+2}`);

    //Fecha una semana después
    let fecha7=new Date();
    fecha7=new Date(`${fecha7.getFullYear()}-${fecha7.getMonth()}-${fecha7.getDate()+7}`);

    if(fecha<fecha2&&fecha>fecha7){
        return true;
    }else{
        return false;
    }
}