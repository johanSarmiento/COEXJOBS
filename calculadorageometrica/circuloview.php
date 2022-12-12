<?php

if (isset($_GET["resultadoArea"])) {
    $resultadoArea = $_GET["resultadoArea"];
} else {
    $resultadoArea = 0;
}

if (isset($_GET["resultadoPerimetro"])) {
    $resultadoPerimetro = $_GET["resultadoPerimetro"];
} else {
    $resultadoPerimetro = 0;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Circulo</title>
</head>
<body>
    <section class="container circulo calculadora">
        <div class="container divCirculo divcalculadora">
            <header class="titulo">
                <h1>Circulo</h1>
            </header>
            <main>
            <form action="circulocontroler.php" method="get">
                <div class="datosCir">
                     <label>Ingrese el radio del circulo</label><br>
                    <input type="number" name="radioCir" required min="1"><br>
                    <input type="submit" name="calcular" value="calcular">
                </div>
                <div class="resultadosCir">
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