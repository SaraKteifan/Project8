<?php
include_once 'connection.php';

try {
    $sql = "SELECT * FROM comment ";

    $q = $conn->query($sql);
    $q->setFetchMode(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    die("Could not connect to the database $dbname :" . $e->getMessage());
}
$comments=[];
 while ($row = $q->fetch()): 
    array_push($comments,
        ['id ' => $row['id'], 'body'=> $row['body'], 'username' => $row['username'],
         'userId ' => $row['userId'], 'parentId' => $row['parentId'], 'createdAt' => $row['createdAt']]);
 endwhile; 
 echo json_encode($comments)
 ?>