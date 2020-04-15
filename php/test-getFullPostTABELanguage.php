<?php

require_once './dbcontroller.php';

//Create connection
$conn = new DBController();

$data = array();
$ClassDetailID = $_POST['ClassDetailID'];


$sql="select SubmitDate, ScaledScore, Level, GradeLevel, NRSLevel from tlkpTABELevel join tblPostTabeTestScores where fkClassDetailID='$ClassDetailID'
AND tblPostTabeTestScores.ScaledScore > tlkpTABELevel.BeginScore AND tblPostTabeTestScores.ScaledScore < tlkpTABELevel.EndScore
AND tblPostTabeTestScores.SubTest='Language' AND tlkpTABELevel.Subject = 'Language'";


$result = $conn->runSelectQuery($sql);

if ($result->num_rows > 0) {

    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}
$output = array();
echo json_encode($data);
