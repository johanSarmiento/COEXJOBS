<?php 

include ("conectarBD.php");
$consulat = "SELECT * FROM `TBLUSERS`";
$query = mysqli_query($conn,$consulat);

?>

<?php 
    include("conectarBD.php");
    $getRoles = "SELECT * FROM TBLROLES order by rol_id";
    $getRoles2 = mysqli_query($conn,$getRoles);
?>

<?php 
    // include("conectarBD.php");
    // $getRoles = "SELECT * FROM tblusurs WHERE usu_rol_id = '$rolId'";
    // $getRoles2 = mysqli_query($conn,$getRoles);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <script>
        $('.editbtn').on('click', function() {
           $tr=$(this).closest('tr');
           var datos=$tr.children("td").map(function() {
            return $(this).text();
           })
           $('#nombre').val(datos[0]);
           $('#apellido').val(datos[1]);
           $('#usuario').val(datos[2]);
           $('#contraseña').val(datos[3]);
           $('#email').val(datos[4]);
        });
    </script>
    <title>Base de datos</title>
</head>
<body>
    <section class="contenedor basededatos">
        <nav class="contenedor Usuario"> 
            <div>
                <button class="btn bg-dark text-light " data-bs-toggle="modal" data-bs-target="#nuevoUsario">Nuevo Usuario</button>
            </div>
        </nav>
        <table class="table table-striped tablabase">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">First name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">user name</th>
                    <th scope="col">password</th>
                    <th scope="col">email</th>
                    <th scope="col">editar</th>
                </tr>
            </thead>
            <tbody>
                    <?php                    

                        while($row=mysqli_fetch_array($query)): 
                    ?>
                            <tr>
                                <th><?php echo $row["use_rol_id"]?></th>
                                <th><?php echo $nombre = $row["use_fir_nam"]?></th>
                                <th><?php echo $apellido = $row["use_las_nam"]?></th>
                                <th><?php echo $usuario = $row["use_use_nam"]?></th>
                                <th><?php echo $contrsena = $row["use_pas"]?></th>
                                <th><?php echo $email = $row["use_ema"]?></th>
                                <th>
                                    <button class="btn bg-success text-light editbtn"  data-bs-toggle="modal" data-bs-target="#actualizar">Actuazilar</button> 
                                    <button class="btn bg-danger text-light">Eliminar</button>
                                </th>
                            </tr>

                    <?php 
                        endwhile;
                    ?>
            </tbody>
        </table>
    </section>

    <section class="modales">

        <!-- MODAL NUEVO USAURIO -->
        <div class="modal fade" id="nuevoUsario" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Registrar</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                
            <form action="nuevoUsario.php" method="GET" class="registroForm">
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
                        
                        
                <select name="opcionDB">

                    <?php 
                        while ($row = mysqli_fetch_array($getRoles2)): 
                    ?>

                    <option value="<?php echo $row["rol_id"] ?>"><?php echo $row["rol_nom"]?></option>   

                    <?php 
                        endwhile;
                    ?>
                    

                </select>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
            </form>
            </div>
        </div>
        </div>    

        <!-- ACTUALIZAR USUARIO -->
        <div class="modal fade" id="actualizar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Registrar</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                
            <form action="actulizar.php" method="GET" class="registroForm">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Nombre</span>
                    <input type="text" class="form-control" value="" name="use_fir_nam" id="nombre" required>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Apellido</span>
                    <input type="text" class="form-control" placeholder="Apellido" name="use_las_nam" id="apellido" required>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Usuario</span>
                    <input type="text" class="form-control" placeholder="Usuario" name="use_use_nam" id="usuario" required>
                </div>

                <div class="input-group mb-3">
                    <input type="mail" class="form-control" placeholder="Nombre Correo" name="use_ema" id="email" required>
                    <span class="input-group-text" id="basic-addon2">@correo.com</span>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Contrasena</span>
                    <input type="text" class="form-control" placeholder="Constraseña" name="use_pas" id="contraseña" required>
                </div> 
                        
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
            </form>
            </div>
        </div>
        </div>   
  
    </section>
</body>
</html>