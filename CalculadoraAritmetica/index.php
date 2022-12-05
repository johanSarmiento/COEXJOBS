<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora Aritmetica</title>
</head>
<body>
    <main>
        <form action="app.php" method="get">
        Numero Uno: <input type="text" name="num1" > <br>
        Numero Dos: <input type="text" name="num2" >  <br>
        <input type="submit" value="Resultado"> <br>
        <?php echo "El resultado es: ".$_GET["rel"]?>
        </form>
    </main>
</body>
</html>