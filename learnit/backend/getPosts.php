<?php
require "connection.php";

try {
    $sql = "SELECT * FROM post JOIN student ON user_id=st_id ORDER BY post_id DESC";

    $q = $conn->query($sql);
    $q->setFetchMode(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    die("Could not connect to the database $dbname :" . $e->getMessage());
}
$posts=[];
 while ($row = $q->fetch()): 
        // echo htmlspecialchars($row);
        
        $newPost=['post_id' => $row['post_id'],'post_title' => $row['post_title'], 'post_body'=> $row['post_body'], 'user_id' => $row['user_id'], 'created_at' => $row['created_at'], 'user_name' => $row['user_name']];
        array_push($posts, $newPost);
 endwhile; 
//  print_r($subjects);
 echo json_encode($posts)
?>