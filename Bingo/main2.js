onload=()=>{
    $.getJSON("partidas.json",{},pintarPartidas);
}
function pintarPartidas(datos){
    datos.forEach(partida=>{
        $('#tablaPartidasFuturas tbody').append(`<tr>
        <td>${partida.Fecha}</td>
        <td>${partida.Hora}</td>
        <td>${partida.NumCartones}</td>
        <td>${partida.Premio}</td>
        <td><button type='button' onclick='generarPartida(${partida.Premio},${partida.NumCartones})'>Comprar</button></td>
        </tr>`)
    })    
}
function generarPartida(premio,numero){
    $('#premio').text(premio);
    $('#numero').text(numero);
    for(let i=0;i<10;i++){
        $fila=$('<tr></tr>').appendTo('#tablaNumerosActuales');
        for(let j=0;j<10;j++){
            $columna=$(`<td>${i*10+j}</td>`).appendTo($fila);
        }
    }
    generarCarton();
    intervalo=setInterval(()=>{$.getJSON('consultaPartidaActual.php',{},pintarPartida)},1000);
}
function generarCarton(){
    $('#tablaCarton').append(``);
}
function pintarPartida(partida){
    console.log(partida.NumerosActuales)
    partida.NumerosActuales.forEach(numero=>{
        $(`#tablaNumerosActuales td:eq(${numero})`).css({"background-color":"green"});
    })
}