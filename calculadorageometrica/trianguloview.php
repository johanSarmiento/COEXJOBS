<?php 

if (isset($_GET["resultadoArea"])) {
    $resultadoArea = $_GET["resultadoArea"];
} else {
    $resultadoArea = 0;
}

if (isset($_GET["resultadoPerimetro"])) {
    $resultadoPerimetro = $_GET["resultadoPerimetro"];
} else {
    $resultadoPerimetro =1;     
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Triangulo</title>
</head>
<body>
    <section class="container triangulo calculadora">
        <div class="container divtriangulo divcalculadora">
            <header class="titulo"> 
                <h1>Triangulo</h1>  
            </header>
            <main>
				<form action="triangulocontroler.php" method="get">
					<div class="datosCuadra">
						<label>Ingrese la Altura de Triangulo</label><br>
						<input type="number" name="alturaTrian" required min="1"><br>
						<label>Ingrese la base del Triangulo</label><br>
						<input type="number" name="baseTrian" required min="1"><br>
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
