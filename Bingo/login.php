<?php
$usuario=$_POST["usuario"];
$clave=$_POST["clave"];
if ($usuario=="juan" && $clave=="1234"){
    session_start();
    $_SESSION["usuario"]=$usuario;
    $_SESSION["NumerosActuales"]=[];
    echo '{"estado":"OK"}';
} else {
    echo '{"estado":"ERROR"}';
}
?>