<?php
require "connection.php";

$post_title = $_REQUEST['post_title'];
$post_body  = $_REQUEST['post_body'];
$user_id    = $_REQUEST['user_id'];

$sql = "INSERT INTO post (post_title,post_body,user_id) VALUES (?,?,?)";
$result  = $conn->prepare($sql);

$result->execute([$post_title,$post_body,$user_id]);

?>