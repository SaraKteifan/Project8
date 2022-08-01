<?php
require "./connection.php";

$name    = $_REQUEST['name'];
$email   = $_REQUEST['email'];
$message = $_REQUEST['message'];



$sql = "INSERT INTO contact (name,email,message) VALUES (?,?,?)";
$result  = $conn->prepare($sql);

$result->execute([$name,$email,$message]);

?>