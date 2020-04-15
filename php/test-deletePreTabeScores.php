<?php

session_start();

require_once 'dbcontroller.php';
$conn = new DBController();

$TabeID = $conn->sanitize($_POST['TabeID']);

$sql = "DELETE FROM tblPreTabeTestScores WHERE TabeID = \"$TabeID\"";

$result = $conn->runDeleteQuery($sql);

echo json_encode($result);
?>

