<?php
include_once 'connection.php';


// $sql= "SELECT * FROM users;";
// $result= mysqli_query($conn,$sql);





// if(!$result){
//     http_response_code(404);
//     die(mysqli_error($conn));

//     $q = $conn->query($sql);
// }

// // for($i=0; $i<mysqli_num_rows($result); $i++){
// //     echo($i>0?',':'').json_encode(mysqli_fetch_object($result));
// // }

// $personsarray = array();
// while($row =mysqli_fetch_assoc($result)){
//     $personsarray[] = $row;
// }
// echo json_encode($personsarray);

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
        // echo htmlspecialchars($row);
        $user_data=['username' => $row['user_name'], 'email'=> $row['user_email'], 'img' => $row['img']];
 endwhile; 
//  print_r($user_data);
 echo json_encode($user_data)
 ?>