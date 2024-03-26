<?php
$host = 'localhost';
$username = 'root'; 
$password = ''; 
$database = 'opinie_db'; 

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Błąd połączenia: " . $conn->connect_error);
}

$sql = "SELECT * FROM opinie";
$result = $conn->query($sql);

$opinie = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $opinie[] = $row;
    }
}

$conn->close();

echo json_encode($opinie);
?>
