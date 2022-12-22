<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Registrarte</title>
</head>
<body>
    <section class="contenedor registrarse">
        <main class="contenedor divRegistro">
            <h1>Registrate</h1>
            <form action="RegistrarUsuario.php" method="GET" class="registroForm">

                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Nombre</span>
                    <input type="text" class="form-control" placeholder="nombre" name="use_fir_nam" required>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Apellido</span>
                    <input type="text" class="form-control" placeholder="Apellido" name="use_las_nam" required>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Usuario</span>
                    <input type="text" class="form-control" placeholder="Usuario" name="use_use" required>
                </div>

                <div class="input-group mb-3">
                    <input type="mail" class="form-control" placeholder="Nombre Correo" name="use_ema" required>
                    <span class="input-group-text" id="basic-addon2">@correo.com</span>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Contrasena</span>
                    <input type="text" class="form-control" placeholder="Constraseña" name="use_pas" required>
                </div>

                <button type="submit" class="btn btn-light">Submit</button>     
            </form>
        </main>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>