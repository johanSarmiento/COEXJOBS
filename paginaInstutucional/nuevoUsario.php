<?php 
include("conectarBD.php");

$idRol=$_GET["opcionDB"];
$bdNombre = $_GET["use_fir_nam"];
$bdApellido = $_GET["use_las_nam"];
$bdUsuario = $_GET["use_use"];
$bdContrasena = $_GET["use_pas"];
$bdCorreo = $_GET["use_ema"];

if (isset($_GET["opcionDB"]) && isset($_GET["use_fir_nam"]) && isset($_GET["use_las_nam"]) && isset($_GET["use_use"]) && isset($_GET["use_ema"]) && isset($_GET["use_pas"])) {
    
$consultarUsuarios = "INSERT INTO `TBLUSERS` (`use_rol_id`,`use_fir_nam`, `use_las_nam`, `use_use_nam`, `use_pas`, `use_ema`) VALUES ('$idRol','$bdNombre','$bdApellido','$bdUsuario','$bdContrasena','$bdCorreo')";

$resultConsul = mysqli_query($conn,$consultarUsuarios);      
if ($resultConsul) {
    header("location: ./basededatos.php");
    echo "regsitro exitoso";
 }

} else {
    echo "regsitro no exitoso";
}
?>