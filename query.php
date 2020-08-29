<?php

date_default_timezone_set('IST');

$date = date("F j, Y, g:i a");

$id = uniqid();

$servername = "localhost";
$username = "healthcare_bhaskar";
$password = "BKPDADA5868";
$dbname = "healthcare_visitor_info";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO user_query (user_id, username, email, contact_number, query, date_time) VALUES ('$id', '$_POST[inputName_name]', '$_POST[inputEmail_name]','$_POST[inputNumber_name]', '$_POST[exampleFormControlTextarea1_name]', '$date')";

if (mysqli_query($conn, $sql)) {
  echo '<a href="query-success.html"></a>';
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
