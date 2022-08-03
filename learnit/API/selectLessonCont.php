<?php
  include_once "./connection.php";

  $id_un = $_REQUEST['id_un'];
  $id_cr = $_REQUEST['id_cr'];

  $sql = "SELECT * FROM less_content WHERE un_id = '$id_un' AND cr_id = '$id_cr'";
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