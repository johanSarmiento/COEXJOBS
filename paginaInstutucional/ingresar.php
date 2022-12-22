<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Ingresar</title>
</head>
<body>
    <section class="contenedor Ingresar">
        <main class="contenedor divRegistro">
                <h1>Registrate</h1>
                <form action="ingresar.php" method="" class="registroForm">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Usuario</span>
                        <input type="text" class="form-control" placeholder="Usuario" name="Usuario">
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Contraseña</span>
                        <input type="password" class="form-control" placeholder="Constraseña" name="Contraseña">
                    </div>

                    <button type="submit" class="btn btn-light">Submit</button>     
                </form>
        </main>
    </section>

    <?php 
        $usuario = $_GET["Usuario"];
        $contraseña = $_GET["Contraseña"];

        if ($usuario=="admin" && $contraseña=="12345") {
            header("location: ./basededatos.php");
        }
    ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>