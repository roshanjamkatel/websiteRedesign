<?php

$user = "user_name";
$password = "password";
$host = "host_name";
$dbase = "database_name";
$table = "table_name";

$from= 'email_to_be_sent_from';//specify here the address that you want email to be sent from

$subject= $_POST['subject'];
$body= $_POST['body'];

// Connection to DBase
$dbc= mysqli_connect($host,$user,$password, $dbase)
or die("Unable to select database");

$query= "SELECT * FROM $table";
$result= mysqli_query ($dbc, $query)
or die ('Error querying database.');

while ($row = mysqli_fetch_array($result)) {
$name= $row['name'];

$email= $row['email'];

$msg= "Hello $name ,\n$body";
mail($email, $subject, $msg, 'From:' . $from);
echo 'Email sent to: ' . $email. '<br>';
}

mysqli_close($dbc);
?>
