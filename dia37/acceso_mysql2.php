<?php
  //Configuracion de la conexion a base de datos
  $bd_host = ;
  $bd_usuario = ;
  $bd_password = ;
  $bd_base = ;

  try {
    $dsn = "mysql:host=$bd_host;dbname=$bd_base";
    $dbh = new PDO($dsn, $bd_usuario, $bd_password);
} catch (PDOException $e){
    echo $e->getMessage();
}
?>