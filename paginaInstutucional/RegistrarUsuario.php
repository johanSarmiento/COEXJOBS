<?php 

include ("conectarBD.php");

$bdNombre = $_GET["use_fir_nam"];
$bdApellido = $_GET["use_las_nam"];
$bdUsuario = $_GET["use_use"];
$bdCorreo = $_GET["use_ema"];
$bdContrasena = $_GET["use_pas"];

echo $bdNombre." <br>";
echo $bdApellido." <br>";
echo $bdUsuario." <br>";
echo $bdCorreo." <br>";
echo $bdContrasena." <br>";

if (isset($_GET["use_fir_nam"]) && isset($_GET["use_las_nam"]) && isset($_GET["use_use"]) && isset($_GET["use_ema"]) && isset($_GET["use_pas"])) {
    
    $consultresult = registrarUsuario($bdNombre, $bdApellido, $bdUsuario, $bdCorreo, $bdContrasena,$conn);       

} else {
    echo "regsitro no exitoso";
}



function registrarUsuario ($bdNombre, $bdApellido, $bdUsuario, $bdCorreo, $bdContrasena,$conn){   

   $consultarUsuarios = "INSERT INTO `TBLUSERS` (`use_fir_nam`, `use_las_nam`, `use_use_nam`, `use_pas`, `use_ema`) VALUES ('$bdNombre','$bdApellido','$bdUsuario','$bdContrasena','$bdCorreo')";
    
    // $consultarUsuarios = "INSERT INTO tblusurs (use_rol_id,use_fir_nam,use_las_nam,use_use,use_pas,use_ema) VALUES(5,\"$bdNombre\",\"$bdApellido\",\"$bdUsuario\",\"$bdContraseña\",\"$bdCorreo\");";
    $result = mysqli_query($conn,$consultarUsuarios);

    if ($result) {
        // header("location: ./index.php");
        echo "regsitro exitoso";
     }

    return $result;
}


?>