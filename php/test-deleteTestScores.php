<?php

session_start();

require_once 'dbcontroller.php';
$conn = new DBController();

$TestID = $conn->sanitize($_POST['TestID']);

$sql = "DELETE FROM tblTests WHERE TestID = \"$TestID\"";

$result = $conn->runDeleteQuery($sql);

echo json_encode($result);
?>

