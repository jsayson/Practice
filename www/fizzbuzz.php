<html>
<body>
	<?php 
	echo "<h1>FizzBuzz Program</h1>";
	for($i = 1 ; $i < 101; $i++){
		// echo "$i<br/>";
		if($i % 3 == 0 && $i % 5 == 0){
			echo "$i - FizzBuzz<br/>";
		}
		else if($i % 3 == 0){
			echo "$i - Fizz<br/>";
		}
		else if($i % 5 == 0){
			echo "$i - Buzz<br/> ";
		}
		else{
			echo "$i<br/>";
		}
	}
	?>
</body>
</html>