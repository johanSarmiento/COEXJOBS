<?php 
include "figurasgeometricas.php";

class Circulos extends figurasgeometricas {

    public $radio;

    function __construct(){}

    public function calcularArea(){
        $resultadoArea = M_PI*pow($this->radio,2);
        return $resultadoArea;
    }
    public function calcularPerimetro(){
        $resultadoPerimetro = 2*M_PI*$this->radio;
        return $resultadoPerimetro;
    }
}

?>