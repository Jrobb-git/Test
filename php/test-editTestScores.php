<?php

require_once 'dbcontroller.php';
$conn=new DBController();

//read post parameters
$TestType = $_POST['TestType'];
$SubTest=$_POST['SubTest'];
$TestScore=$_POST['TestScore'];
$TestDate=$_POST['TestDate'];
$ClassDetailID = $_POST['ClassDetailID'];
$TestID=$_POST['TestID'];


$sql="UPDATE tblTests set tblTests.TestType = '$TestType', SubTest='$SubTest',TestScore='$TestScore', TestDate='$TestDate' where TestID='$TestID'";
$result=$conn->runQuery($sql);


echo json_encode($result);

?>
