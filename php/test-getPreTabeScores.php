<?php
/**
 * Created by PhpStorm.
 * User: zhyere_ducksworth
 * Date: 3/5/20
 * Time: 9:26 PM
 */



require_once './dbcontroller.php';

//Create connection
$conn = new DBController();

$data = array();
$ClassDetailID = $_POST['ClassDetailID'];


$sql="select * from tblPreTabeTestScores where fkClassDetailID='$ClassDetailID' order by SubmitDate ASC ";
$result = $conn->runSelectQuery($sql);

if ($result->num_rows > 0) {

    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

$output = array();
echo json_encode($data);


