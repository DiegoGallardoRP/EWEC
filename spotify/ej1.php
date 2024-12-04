<?php
    require("acceso_mysql2.php");
    $stmt = $dbh->prepare("SELECT d.*, a.nombre FROM `discos` d, `artistas` a WHERE a.id=d.id_artista");
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $stmt->execute();
    while ($disco=$stmt->fetch()) {
            $arrayDiscos[] = array_map('utf8_encode', $disco);
    }
    //enviamos el array como objeto JSON
    echo json_encode($arrayDiscos);
?>