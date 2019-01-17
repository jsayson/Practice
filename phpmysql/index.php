<?php  include "connect.php"; ?>
<html>
<body>
	<h1>PHP + MySQL</h1>
	<h3>Students Lists</h3>
	<?php
	$sql = "SELECT s.id, CONCAT(s.lastName,', ',s.firstName) as name, s.gender, s.major, CONCAT(a.lastName,', ', a.firstName) as adviser FROM students as s JOIN advisers as a ON a.adviser_id=s.adviserId ORDER BY s.id ASC";
	$res = mysqli_query($conn, $sql);
	// $row = mysqli_num_rows($res);
	if(mysqli_num_rows($res) > 0){
		echo "<table><tr>
			<th>Id</th>
			<th>Name</th>
			<th>Gender</th>
			<th>Course</th>
			<th>Adviser</th></tr>";
		while($row = mysqli_fetch_assoc($res)){
			// $name = strtoupper(substr($row['name'], 0, 1)).substr($row['name'], 1).", ".;
			$name = $row["name"];
			echo "<tr><td>".$row["id"]."</td>
				<td>".$name."</td>
				<td>".$row["gender"]."</td>
				<td>".$row["major"]."</td>
				<td>".$row["adviser"]."</td>
				</tr>";
		}
		echo "</table>";
	} 
	?>
</body>
</html>