<?php include "connect.php" ?>
<html>
<body>
	<h1>Advisers</h1>
	<?php 
	$sql = "SELECT adviser_id as id, CONCAT(lastName,', ',firstName) as name, major FROM advisers";
	$res = mysqli_query($conn, $sql);
	// echo mysqli_num_rows($res);
	if(mysqli_num_rows($res) > 0){
		echo "<table><tr><th>ID</th><th>Name</th><th>Major</th></tr>";
		while($row = mysqli_fetch_assoc($res)){
			echo "<tr><td>".$row["id"]."</td><td>".$row["name"]."</td><td>".$row["major"]."</td></tr>";
		}
		echo "<table/>";
	}
	?>
</body>
</html>