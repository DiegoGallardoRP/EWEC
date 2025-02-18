<?php
if (isset($_POST['fotos'])) {
    header('Content-Type: application/json');  // Asegúrate de que se envíe como JSON
    echo '[{"nombre":"audi.png","tamano":50},
            {"nombre":"bmw.png","tamano":100}]';
}
?>
