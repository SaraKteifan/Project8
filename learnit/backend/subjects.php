<?php
require "connection.php";

try {
    $sql = "SELECT * FROM subjects";

    $q = $conn->query($sql);
    $q->setFetchMode(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    die("Could not connect to the database $dbname :" . $e->getMessage());
}
$subjects=[];
 while ($row = $q->fetch()): 
        // echo htmlspecialchars($row);
        
        $newSubject=['sub_id' => $row['sub_id'],'sub_name' => $row['sub_name'], 'sub_img'=> $row['sub_img'], 'sub_view' => $row['sub_view']];
        array_push($subjects, $newSubject);
 endwhile; 
//  print_r($subjects);
 echo json_encode($subjects)
?>