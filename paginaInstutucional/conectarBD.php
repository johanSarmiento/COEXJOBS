<?php

$host = "localhost";
$user = "root";
$pass = "";
$database = "LOGIN";
$conn = mysqli_connect($host, $user, $pass, $database,3310);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>