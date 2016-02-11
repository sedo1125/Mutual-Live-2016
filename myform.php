<?php


// if (isset( $_POST["Name"]) && isset($_POST["Email"])) {
if (true) {
$conn = new mysqli("localhost", "root", "root", "dbmutual");
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  } 
echo "Connected successfully";

  $name = $_POST["Name"];
  $email = $_POST["Email"];


  $sql = "INSERT INTO tblcontact (Name, Email ) VALUES ('$name', '$email')";
  
  // Print response from MySQL
  if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();
}
?>