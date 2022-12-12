<?php 
if (isset($_GET["alturaTrian"]) && isset($_GET["baseTrian"])) {

    include "triangulos.php";

    $Triangulo = new Triangulos();

    $Triangulo->altura=$_GET["alturaTrian"];
    $Triangulo->base=$_GET["baseTrian"];

    $resultadoArea = $Triangulo->calcularArea();
    $resultadoPerimetro = $Triangulo->calcularPerimetro();
    
    if (isset($resultadoArea) && isset($resultadoPerimetro)) {
        header ("location: trianguloview.php?resultadoArea=".$resultadoArea."&resultadoPerimetro=".$resultadoPerimetro);
    } else {
        header ("location: index.html?error=404");
    }
}
?>