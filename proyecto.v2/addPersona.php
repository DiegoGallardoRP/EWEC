<?php
 $nombre = $_REQUEST["nombre"];
 $apellidos = $_REQUEST["apellidos"];
 $open = fopen("./ejemploJSON.txt","w+");
 $texto = fread($open, filesize("/pruebas/ejemploJSON.txt"));
 $texto= str_replace("]",`,{"nombre":"$nombre","apellidos:"$apellidos"}`,$texto); 
 $texto = $texto . "]";
 fclose($open);
 $open = fopen("./ejemploJSON.txt","w+"); 
 fwrite($open, $texto);
 fclose($open);
 echo "OK";
 
?>
