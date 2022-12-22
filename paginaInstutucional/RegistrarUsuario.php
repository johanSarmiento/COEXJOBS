<?php 

include ("conectarBD.php");

$bdNombre = isset($_GET["use_fir_nam"]);
$bdApellido = isset($_GET["use_las_nam"]);
$bdUsuario = isset($_GET["use_use"]);
$bdCorreo = isset($_GET["use_ema"]);
$bdContraseña = isset($_GET["use_pas"]);

echo $bdNombre;

function registrarUsuario ($bdNombre, $bdApellido, $bdUsuario, $bdCorreo, $bdContraseña,$conn){
    // $consultarUsuarios = "INSERT INTO tblusurs (use_rol_id,use_fir_nam,use_las_nam,use_use_nam,use_pas,use_ema)  VALUES (5,'$bdNombre','$bdApellido','$bdUsuario','$bdCorreo','$bdContraseña);";
    
    $consultarUsuarios = "INSERT INTO tblusurs (use_rol_id,use_fir_nam,use_las_nam,use_use,use_pas,use_ema) VALUES(5,\"$bdNombre\",\"$bdApellido\",\"$bdUsuario\",\"$bdContraseña\",\"$bdCorreo\");";
    $result = mysqli_query($conn,$consultarUsuarios);

    return $result;

}

$consultresult = registrarUsuario($bdNombre, $bdApellido, $bdUsuario, $bdCorreo, $bdContraseña,$conn);
// if ($consultresult) {
//     header("location: ./index.php");
// }

?>