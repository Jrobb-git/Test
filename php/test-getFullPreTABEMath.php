<?php

require_once './dbcontroller.php';

//Create connection
$conn = new DBController();

$data = array();
$ClassDetailID = $_POST['ClassDetailID'];


$sql="select SubmitDate, ScaledScore, Level, GradeLevel, NRSLevel from tlkpTABELevel join tblPreTabeTestScores where fkClassDetailID='$ClassDetailID'
AND tblPreTabeTestScores.ScaledScore > tlkpTABELevel.BeginScore AND tblPreTabeTestScores.ScaledScore < tlkpTABELevel.EndScore
AND tblPreTabeTestScores.SubTest='Math' AND tlkpTABELevel.Subject = 'Math'";

$result = $conn->runSelectQuery($sql);

if ($result->num_rows > 0) {

    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

$output = array();
echo json_encode($data);
