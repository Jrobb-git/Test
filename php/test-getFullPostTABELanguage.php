<?php

require_once './dbcontroller.php';

//Create connection
$conn = new DBController();

$data = array();
$ClassDetailID = $_POST['ClassDetailID'];


$sql="select SubmitDate, ScaledScore, Level, GradeLevel, NRSLevel from tlkpTABELanguageLevel join tblTabe where fkClassDetailID='$ClassDetailID'
AND tblTabe.ScaledScore > tlkpTABELanguageLevel.BeginScore AND tblTabe.ScaledScore < tlkpTABELanguageLevel.EndScore
AND tblTabe.SubTest='Language' AND tblTabe.TestType='PostTabe'";


$result = $conn->runSelectQuery($sql);

if ($result->num_rows > 0) {

    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}
$output = array();
echo json_encode($data);
