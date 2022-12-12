<?php 

include 'figurasgeometricas.php';

class Cuadrados extends Figurasgeometricas
{
	public $lado1;
	public $lado2;
	
	function __construct()
	{
		// code...
	}

	public function calcularArea()
	{
		$resultadoArea = $this->lado1*$this->lado2;

		return $resultadoArea;
	}

	public function calcularPerimetro()
	{
		$resultadoPerimetro = ($this->lado1*2)+($this->lado2*2);
		return $resultadoPerimetro;
	}
}

 ?>