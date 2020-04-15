<?php
require_once './dbcontroller.php';

$conn = new DBController();
if(!$conn)
{
    exit("Unable to connect to DB server");
}
$ClassDetailID = $conn->sanitize($_POST['ClassDetailID']);
$TestType = $conn->sanitize($_POST['TestType']);
$SubTest = $conn->sanitize($_POST['SubTest']);
$TestDate = $conn->sanitize($_POST['TestDate']);
$TestScore = $conn->sanitize($_POST['TestScore']);



$sql = "INSERT INTO tblTests (fkClassDetailID,TestType,SubTest, TestDate,TestScore)
 VALUES ('$ClassDetailID ','$TestType','$SubTest','$TestDate','$TestScore')";


$result = $conn->createRecord($sql);
?>
