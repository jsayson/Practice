<html>
<body>
	<h1>Collatz Conjucture</h1>
	<form action='collatzConjucture.php' method='GET'>
		Enter a number: <input type="number" name='number' /><br/>
		<input type='submit' value='submit' />
	</form>
	<?php 
	$x = $_GET["number"];
	$steps = 0;
	if($x == 1 || $x == ""){
		echo "Invalid input/number must be greater than 1";
	}
	else{
		while($x >= 1){
			echo "value: ".$x."</br>";
			if($x % 2 == 0){
				$x = $x / 2;
			}
			else if($x == 1){
				$x = 0;
			}
			else{
				$x = ($x*3)+1;
			}
			$steps += 1;
		}
		echo "Number of steps to reach number 1: <strong>".$steps."</strong><br/>";
	}
	?>
</body>
</html>