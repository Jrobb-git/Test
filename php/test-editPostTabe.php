<?php

require_once 'dbcontroller.php';
$conn=new DBController();

//read post parameters
$SubTest=$_POST['SubTest'];
$ScaledScore=$_POST['ScaledScore'];
$SubmitDate=$_POST['SubmitDate'];
$ClassDetailID=$_POST['ClassDetailID'];
$TabeID=$_POST['TabeID'];

$sql="UPDATE tblPostTabeTestScores set tblPostTabeTestScores.SubTest='$SubTest', ScaledScore='$ScaledScore', SubmitDate='$SubmitDate' where TabeID='$TabeID'";
$result=$conn->runQuery($sql);


echo json_encode($result);

?>
