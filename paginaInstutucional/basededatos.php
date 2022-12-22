<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <title>Base de datos</title>
</head>
<body>
    <section class="contenedor basededatos">
        <table class="table table-striped tablabase">
            <thead>
                <tr>
                <th scope="col">id</th>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">user name</th>
                <th scope="col">password</th>
                <th scope="col">email</th>
                </tr>
            </thead>
            <tbody>
                    <?php 
                    include("conectarBD.php");
                    $consulat = $sql = "SELECT * FROM `tblusurs`;";
                    $query = mysqli_query($conn,$consulat);
                    $row = mysqli_fetch_array($query);
                    
                    while($row=mysqli_fetch_array($query)) ?>

                    <tr>
                        <th><?php echo $row["use_rol_id"]?></th>
                        <th><?php echo $row["use_fir_nam"]?></th>
                        <th><?php echo $row["use_las_nam"]?></th>
                        <th><?php echo $row["use_use"]?></th>
                        <th><?php echo $row["use_pas"]?></th>
                        <th><?php echo $row["use_ema"]?></th>
                    </tr>
            </tbody>
        </table>
    </section>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>