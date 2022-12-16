<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Comauxi</title>
</head>
<body>
    <nav class="contenedor navbarIns">
        <div class="contenedor navleft">
            <h2 class="logo">COMAUXI</h2>
            <a href="">Quienes Somos</a>
            <a href="">Mision</a>
            <a href="">Vision</a>
        </div>
        <div class="navright">
            <a href="">Ingresar</a>
            <a href="Registrar.php">Registrarse</a>
        </div>
    </nav>
    <?php  
        include "home.php";
        include "QuienesSomos.php";
        include "Mision.php";
        include "Vision.php";
    ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>