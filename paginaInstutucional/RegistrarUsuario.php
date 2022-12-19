<?php 

include ("conectarBD.php");
$bdNombre = isset($_POST["Nombre"]);
$bdApellido = isset($_POST["Apellido"]);
$bdUsuario = isset($_POST["Usuario"]);
$bdCorreo = isset($_POST["Correo"]);
$bdContraseña = isset($_POST["Contraseña"]);

function registrarUsuario ($bdNombre, $bdApellido, $bdUsuario, $bdCorreo, $bdContraseña,$conn){
    $consultarUsuarios = "INSERT INTO TBLUSERS (use_rol_id,use_fir_nam,use_las_nam,use_use_nam,use_pas,use_ema)  VALUES ('$bdNombre','$bdApellido','$bdUsuario','$bdCorreo','$bdContraseña);";
    
    $result = mysqli_query($conn,$consultarUsuarios);

    return $result;

}

?>