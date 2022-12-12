<?php

if (isset($_GET["radioCir"])) {
    include "circulos.php";

    $circulos = new Circulos();

    $circulos->radio = $_GET["radioCir"];

    $resultadoArea = $circulos->calcularArea();
    $resultadoPerimetro = $circulos->calcularPerimetro();
    
    if (isset($resultadoArea) && isset($resultadoPerimetro)) {
		header ("location: circuloview.php?resultadoArea=".$resultadoArea."&resultadoPerimetro=".$resultadoPerimetro);	
	} else {
		header ("location: index.html?error=404");
	}
}

?>