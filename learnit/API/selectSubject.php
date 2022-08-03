<?php
  include_once "./connection.php";

  $id = $_REQUEST['id'];

  $sql = "SELECT * FROM subjects WHERE sub_id = '$id'";
  $sqlRun = mysqli_query($conn,$sql);
  $resultcheck = mysqli_num_rows($sqlRun);

  if ($resultcheck > 0) {
    echo "[";
    for($i=0;$i<mysqli_num_rows($sqlRun);$i++){
      echo($i>0?',':'').json_encode(mysqli_fetch_object($sqlRun), JSON_PRETTY_PRINT);
    }
    echo "]";
  }
  $conn->close();
?>