<?php
require("acceso_mysql2.php");
if (isset($_POST["matricula"])){
   $matricula = $_POST["matricula"];
   $stmt = $dbh->prepare("SELECT * FROM coches WHERE matricula = ?");
   $stmt->execute([$matricula]);     
   if ($stmt->fetch()){
        echo '{"estado":"error","mensaje":"matricula existente"}'; 
   } else {
        if (isset($_POST["marca"]) && 
            isset($_POST["modelo"]) && 
            isset($_POST["cilindrada"]) && 
            isset($_POST["fecha"]) && 
            isset($_POST["foto"])){

            $marca = htmlspecialchars($_POST["marca"]);
            $modelo = $_POST["modelo"];
            $cilindrada = htmlspecialchars($_POST["cilindrada"]);
            $fecha = htmlspecialchars($_POST["fecha"]);
            $foto = htmlspecialchars($_POST["foto"]);
            $stmt = $dbh->prepare("INSERT INTO coches (matricula, marca,modelo,cilindrada,fecha,foto) VALUES(?,?,?,?,?,?)");
            $stmt->execute([$matricula,$marca,$modelo,$cilindrada,$fecha,$foto]);
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