<?php
require "connection.php";

try {
    $sql = "SELECT * FROM course";

    $q = $conn->query($sql);
    $q->setFetchMode(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    die("Could not connect to the database $dbname :" . $e->getMessage());
}
$courses=[];
 while ($row = $q->fetch()): 
        // echo htmlspecialchars($row);
        
        $newCourse=['cr_id' => $row['cr_id'],'cr_img' => $row['cr_img'], 'cr_name'=> $row['cr_name'], 'cr_view' => $row['cr_view'], 'tp_id' => $row['tp_id'],'weeks' => $row['weeks'], 'hpw'=> $row['hpw'], 'num_of_unit' => $row['num_of_unit']];
        array_push($courses, $newCourse);
 endwhile; 
//  print_r($subjects);
 echo json_encode($courses)
?>