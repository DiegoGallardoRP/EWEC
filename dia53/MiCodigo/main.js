import { etiquetaResultado } from "./mi-nav.js";
onload=()=>{
    /* //SIN JQUERY
    fetch('consulta.php?ciudad=XXX')
    .then(datos=>datos.text())
    .catch(error=>console.log('ERROR'))
    .then(datos=>pintarSelect(datos))*/

    //CON JQUERY
    $.get('consulta.php',{'ciudad':'XXX'},pintarSelect)
}
function pintarSelect(datos){
    let valoresSelect=datos.split('|');
    let select=document.createElement('select');
    document.body.appendChild(select);
    valoresSelect.forEach(valor=>{
        let opcion=document.createElement('option');
        opcion.innerText=valor;
        select.appendChild(opcion);
    })
   /*let miselect=document.createElement('app-select')
   miselect.setAttribute('listaCoches',datos);
   document.body.appendChild(miSelect);*/
}
//De la siguiente forma se puede menter funciones siempre y cuando esté el onclick en la etiqueta que hayamos creado
/*function pintarCoches(){
    let contenedor=document.getElementsByTagName('div')[0];
    let texto='Coche';
    contenedor.insertAdjacentHTML('beforeend',texto);
}
window.pintarCoches=pintarCoches*/