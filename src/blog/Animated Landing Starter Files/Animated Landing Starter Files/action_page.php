
<?php
$user = "user_name";
$password = "password";
$host = "host_name";
$dbase = "database_name";
$table = "table_name";

$name= $_POST['name'];

$email= $_POST['mail'];


// Connection to DBase
$dbc= mysqli_connect($host,$user,$password, $dbase)
or die("Unable to select database");


$query= "INSERT INTO $table  ". "VALUES ('$name', '$email')";

mysqli_query ($dbc, $query)
or die ("Error querying database");

echo 'You have been successfully added.' . '<br>';

mysqli_close($dbc);

?>
