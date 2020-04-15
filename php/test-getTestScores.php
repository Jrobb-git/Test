<?php

require_once './dbcontroller.php';
$conn = new DBController();

$ClassDetailID = $_POST['ClassDetailID'];

$sql = "SELECT * FROM tblTests where fkClassDetailID='$ClassDetailID' order by TestDate ASC";

$result = $conn->runSelectQuery($sql);

$data = array();

if($result -> num_rows > 0)
{
    while($row = $result -> fetch_assoc()) {
        $data[] = $row;
    }
}

echo json_encode($data);


?>