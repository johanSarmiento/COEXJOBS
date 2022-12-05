<?php 
    $num1 = $_GET["num1"];
    $num2 = $_GET["num2"];
    $rel = $num1+$num2;
    header("location:index.php?rel=".$rel)
    ?>
