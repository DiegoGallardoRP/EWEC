<?php
    session_start();
    if (!isset($_SESSION["NumerosActuales"])){
        $_SESSION["NumerosActuales"]=[];
    }
    do{
        $numero=rand(1,100);
    }while (in_array($numero,$_SESSION["NumerosActuales"]));
    array_push($_SESSION["NumerosActuales"],$numero);
    echo '{"IdPartida":1,"Premio":9, "NumCartones":10,"NumerosActuales":[' . 
    implode(",",$_SESSION["NumerosActuales"]) . ']}';
?>