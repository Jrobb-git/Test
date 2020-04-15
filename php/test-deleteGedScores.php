<?php

session_start();

require_once 'dbcontroller.php';
$conn = new DBController();

$GED_ID = $conn->sanitize($_POST['GED_ID']);

$sql = "DELETE FROM tblGED WHERE GED_ID = \"$GED_ID\"";

$result = $conn->runDeleteQuery($sql);

echo json_encode($result);
?>

