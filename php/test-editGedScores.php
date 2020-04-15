<?php

require_once 'dbcontroller.php';
$conn=new DBController();

//read post parameters
$Subject=$_POST['Subject'];
$Score=$_POST['Score'];
$Date=$_POST['Date'];
$ClassDetailID=$_POST['ClassDetailID'];
$GED_ID=$_POST['GED_ID'];

$sql="UPDATE tblGED set tblGED.Subject='$Subject', Score='$Score', Date='$Date' where GED_ID='$GED_ID'";
$result=$conn->runQuery($sql);


echo json_encode($result);

?>
