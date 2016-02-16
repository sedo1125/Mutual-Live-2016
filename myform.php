<?php


// if (isset( $_POST["Name"]) && isset($_POST["Email"])) {
if (true) {
$conn = new mysqli("localhost", "seadong1", "s3ad0n9!", "seadong1_Contact");
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  } 
echo "Connected successfully";

  $email = $_POST["Email"];
  $Fname = $_POST["FName"];
  $Lname = $_POST["LName"];
  $Zip = $_POST["Zip"];
  $Age = $_POST["Age"];


  $sql = "INSERT INTO tblML (Email, Fname, Lname, Zip, Age) VALUES ('$email', '$Fname', '$Lname', '$Zip', '$Age')";
  
  // Print response from MySQL
  if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();
}
?>