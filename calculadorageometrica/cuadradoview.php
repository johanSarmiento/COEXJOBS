<?php 

if (isset($_GET['resultadoArea'])) {
	$resultadoArea = $_GET['resultadoArea'];
} else {
	$resultadoArea = 0;
}

if (isset($_GET['resultadoPerimetro'])) {
	$resultadoPerimetro = $_GET['resultadoPerimetro'];
} else {
	$resultadoPerimetro = 0;
}

 ?>

<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Cuadrado</title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<section class="container cuadrado calculadora">
		<div class="container divcuadrado divcalculadora">
			<header class="titulo">
				<h1>Cuadrados</h1>
			</header>
			<main>
				<form action="cuadracontroler.php" method="get">
					<div class="datosCuadra">
						<label>Lado 1</label><br>
						<input type="number" name="lado1" required min="1"><br>
						<label>Lado 2</label><br>
						<input type="number" name="lado2" required min="1"><br>
						<input type="submit" name="calcular" value="calcular">
					</div>
					<div class="resultados">
						<label for="">Area:</label>
						<label for=""><?php echo $resultadoArea;?></label><br>
						<label for="">Perimetro: </label>
						<label for=""><?php echo $resultadoPerimetro;?></label>
					</div>	
				</form>
			</main>
		</div>
	</section>
</body>
</html>