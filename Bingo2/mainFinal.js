import { generaCartonAleatorio } from "./funcionesAuxiliares.js";

$(document).ready(()=>{
    cargarPartidasFuturas();
    cargarPartidaActual();
})
let intervalo;
async function cargarPartidaActual(){
    let respuesta = await fetch("consultaPartidaActual.php");
    let partida = await respuesta.json();
    if (partida.IdPartida != 0){
        $("#premio").text(partida.Premio);
        $("#numero").text(partida.NumCartones);
        generarTablaCarton(partida.IdPartida);
        generarTablaNumerosActuales(partida.NumerosActuales);
        intervalo=setTimeout(cargarPartidaActual,1000);
    } else {
        clearInterval(intervalo);
    }
}
function generarTablaNumerosActuales(listaNumeros){
    let contenido="";
    for(let i=0;i<10;i++){
        contenido+="<tr>";
        for(let j=0;j<10;j++){
            let valor = (i*10)+j+1;
            if (listaNumeros.some(numero=> numero==valor)){
                contenido+=`<td style="background-color:green">${valor}</td>`;
            } else {
                contenido+=`<td>${valor}</td>`;
            }
        }
        contenido+="</tr>";
    }
    $("#tablaNumerosActuales").html(contenido);
}
function generarTablaCarton(idPartida){
    let carrito=[];
    if (localStorage.getItem("carrito")){
        carrito=JSON.parse(localStorage.getItem("carrito"));
    }

    let posicionCarton=carrito.findIndex((partida)=>partida.IdPartida ==idPartida);
    
    let tabla=document.getElementById("tablaCarton");
    
    if (posicionCarton==-1){
        tabla.innerHTML="<tr><td>NO TIENES CARTON</td></tr>"
    } else {
        let carton = carrito[posicionCarton].Carton;
        let contenido="<tr>";
        carton.forEach (valor=>{
            contenido += `<td>${valor}</td>`;
        })
        contenido+="</tr>";
        tabla.insertAdjacentHTML("beforeend",contenido);
    }
}
let partidasFuturas=[];
async function cargarPartidasFuturas(){
    let respuesta = await fetch("partidas.json");
    partidasFuturas = await respuesta.json();
    pintarPartidasFuturas(partidasFuturas);
}

function pintarPartidasFuturas(lista){
    let $tbody = $("#tablaPartidasFuturas tbody").empty();
    lista.forEach(partida=>{
        let $fila=$("<tr></tr>").appendTo($tbody);
        $(`<td>${partida.Fecha}</td>`).appendTo($fila);
        $(`<td>${partida.Hora}</td>`).appendTo($fila);
        $(`<td>${partida.NumCartones}</td>`).appendTo($fila);
        $(`<td>${partida.Premio}</td>`).appendTo($fila);
        $(`<td><button type="button" onclick="comprarCarton(${partida.IdPartida})">COMPRAR</button></td>`)
            .appendTo($fila);
        /*$(`<td><button type="button">COMPRAR</button></td>`)
            .on("click",{"IdPartida":partida.IdPartida},comprarCarton)
            .appendTo($fila);*/
        
    })
}
window.comprarCarton = comprarCarton;
function comprarCarton(idPartida){
    let carrito=[];
    if (localStorage.getItem("carrito")){
        carrito=JSON.parse(localStorage.getItem("carrito"));
    }
    let entrada={
        "IdPartida":idPartida,
        "Carton":generaCartonAleatorio()
    }
    carrito.push(entrada);
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

function comprarCarton2(evento){
    let idPartida=evento.data.IdPartida;
    let carrito=[];
    if (localStorage.getItem("carrito")){
        carrito=JSON.parse(localStorage.getItem("carrito"));
    }
    let entrada={
        "IdPartida":idPartida,
        "carton":generaCartonAleatorio()
    }
    carrito.push(entrada);
    localStorage.setItem("carrito",JSON.stringify(carrito));
}


