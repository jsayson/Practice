<?php 
	$server = "127.0.0.1";
	$username = "root";
	$password = "";
	$dbname = "sample";
	$success;

	$conn = mysqli_connect($server, $username, $password, $dbname);

	if(!$conn){
		die("Connected Failed: ".mysqli_connect_error());
	}
	$success = "success";
?>