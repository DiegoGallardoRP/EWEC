<?php
    if(isset($_GET['codigo'])){
        echo'{"status":1,"mensaje":"El codigo es '.$_GET['codigo'].'"}';
    }else{
        echo'{"status":0,"mensaje":"Error"}';
    }
?>