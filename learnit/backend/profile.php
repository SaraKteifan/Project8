<?php
include_once 'connection.php';

$user_id = $_REQUEST['user_id'];


try {
    $sql = "SELECT * FROM student WHERE st_id ='$user_id'";

    $q = $conn->query($sql);
    $q->setFetchMode(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    die("Could not connect to the database $dbname :" . $e->getMessage());
}
$user_data=[];
 while ($row = $q->fetch()): 
        $user_data=['username' => $row['user_name'], 'email'=> $row['user_email'], 'img' => $row['img']];
 endwhile; 
 echo json_encode($user_data)
 ?>