<html>
<body>
	<h1>Count the vowels</h1>
	<form action='vowelCounter.php' method='GET'>
		Word: <input type='text' name='word' /><br/>
		<input type='submit' value='submit' /><br/>
	</form>
	<?php 
	$word = $_GET["word"];
	$vowelsFound = "";
	$vowelsCount;
	$vowels = array("A", "E", "I", "O", "U", "a", "e", "i", "o", "u");
	$index = 0;
	while($index < count($vowels)){
		for($i = 0; $i < strlen($word); $i++){
			if($vowels[$index] == $word[$i]){
				if($vowelsFound == ""){	
					$vowelsFound .= strtolower($word[$i]);	
				}
				else{
					for($j = 0; $j < strlen($vowelsFound); $j++){
						if($vowelsFound[$j] != $word[$i]){
							$vowelsFound .= strtolower($word[$i]);
						}
					}
				}
				$vowelsCount += 1;
			}
		}
		$index++;
	}
	echo "Word: $word <br/>";
	echo "Vowel/s found: $vowelsFound <br/>";
	echo "Total No. of Vowel/s: $vowelsCount";

	include "palindromechecker.php";
	?>
</body>
</html>