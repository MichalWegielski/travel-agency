<?php
$host = 'localhost';
$username = 'root'; 
$password = ''; 
$database = 'opinie_db'; 

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Błąd połączenia: " . $conn->connect_error);
}

$name = $_POST['user-name'];
$desc = $_POST['user-opinion'];

$sql = "INSERT INTO opinie (autor, opinia) VALUES ('$name', '$desc')";

if ($conn->query($sql) === TRUE) {
    header("Location: ../templates/index.html");
    exit();
} else {
    echo "Błąd: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
