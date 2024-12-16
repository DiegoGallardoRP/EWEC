<?php
require("acceso_mysql2.php");
$_POST = json_decode(file_get_contents('php://input'), true);
if (isset($_POST["matricula"])){
   $matricula = $_POST["matricula"];
   $stmt = $dbh->prepare("SELECT * FROM coches WHERE matricula = ?");
   $stmt->execute([$matricula]);     
   if ($stmt->fetch()){
        echo '{"estado":"error","mensaje":"matricula existente"}'; 
   } else {
        if (isset($_POST["marca"]) && 
            isset($_POST["modelo"]) && 
            isset($_POST["kilometros"]) && 
            isset($_POST["precio"]) && 
            isset($_POST["color"]) && 
            isset($_POST["foto"]) && 
            isset($_POST["id_cliente"])){

            $marca = htmlspecialchars($_POST["marca"]);
            $modelo = $_POST["modelo"];
            $kilometros = htmlspecialchars($_POST["kilometros"]);
            $precio = htmlspecialchars($_POST["precio"]);
            $color = htmlspecialchars($_POST["color"]);
            $foto = htmlspecialchars($_POST["foto"]);
            $id_cliente = htmlspecialchars($_POST["id_cliente"]);
            $stmt = $dbh->prepare("INSERT INTO coches (matricula, marca,modelo,color,kilometros,precio,foto,id_cliente) VALUES(?,?,?,?,?,?,?,?)");
            $stmt->execute([$matricula,$marca,$modelo,$color,$kilometros,$precio,$foto,$id_cliente]);
            if ($stmt->rowCount()==0){
                echo '{"estado":"error","mensaje":"No se ha podido dar de alta"}'; 
            } else {
                echo '{"estado":"ok"}';
            }
        } else {
            echo '{"estado":"error","mensaje":"faltan campos"}';
        }
   }
} else {
   echo '{"estado":"error","mensaje":"falta matricula"}';
}
?>