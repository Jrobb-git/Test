<?php
require_once './dbcontroller.php';

$conn = new DBController();
if(!$conn)
{
    exit("Unable to connect to DB server");
}
$ClassDetailID = $conn->sanitize($_POST['ClassDetailID']);
$Subject = $conn->sanitize($_POST['Subject']);
$Date = $conn->sanitize($_POST['Date']);
$Score = $conn->sanitize($_POST['Score']);


$sql = "INSERT INTO tblGED (fkClassDetailID,Subject, Date,Score)
 VALUES ('$ClassDetailID ','$Subject','$Date','$Score')";



$result = $conn->createRecord($sql);
?>
