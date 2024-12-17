<?php
$_POST = json_decode(file_get_contents('php://input'), true);
$usuario=$_POST["usuario"];
$clave=$_POST["clave"];
if ($usuario=="juan" && $clave=="1234"){
    session_start();
    $_SESSION["usuario"]=$usuario;
    echo '{"estado":"OK"}';
} else {
    echo '{"estado":"ERROR"}';
}
?>