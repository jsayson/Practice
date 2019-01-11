<html>
<body>
	<h1>Palindrome Checker</h1>
	<form action='palindromechecker.php' method='GET'>
		Text: <input type='text' name='word' /><br/>
		<input type='submit' value='submit' />
	</form>
	<?php 
		$word = $_GET['word'];
		$result;
		function analyze($res){
			for($i = 0; $i < strlen($res); $i++){
				if($res[$i] == $res[strlen($res)-1-$i]){
					$result .= $res[strlen($res)-1-$i];
				}
				else{
					$result = "not!";
				}
			}
			return $result;
		}
		$go = analyze($word);

		echo $go;
	?>
</body>
</html>
