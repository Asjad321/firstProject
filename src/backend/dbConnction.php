<?php
$localhost = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "csrdb";

$conn = new mysqli($localhost, $username, $password,$dbname);
mysqli_set_charset($conn, 'utf-8');

if($conn->connect_error){
	die("Error: ". $conn->connect_error);
}

?>