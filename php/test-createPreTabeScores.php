<?php
require_once './dbcontroller.php';

$conn = new DBController();
if(!$conn)
{
    exit("Unable to connect to DB server");
}
$ClassDetailID = $conn->sanitize($_POST['ClassDetailID']);
$SubTest = $conn->sanitize($_POST['SubTest']);
$SubmitDate = $conn->sanitize($_POST['SubmitDate']);
$ScaledScore = $conn->sanitize($_POST['ScaledScore']);



$sql = "INSERT INTO tblPreTabeTestScores (fkClassDetailID,SubTest, SubmitDate,ScaledScore)
 VALUES ('$ClassDetailID ','$SubTest','$SubmitDate','$ScaledScore')";



$result = $conn->createRecord($sql);
?>
