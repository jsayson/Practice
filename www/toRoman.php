<html>
<body>
	<h1>To Roman Numerals Convertions</h1>
	<form>
		Number <input type='number' name='number' /><br/>
		<input type='submit' value='submit' />
	</form>
	<?php
	$number = $_GET['number'];
	// 1 = I 5 = V 10 = X 50 = L 100 = C 500 = D = IↃ 1000 = M
	$roman = array("M", "CM", "D", "CD", "C", "LX", "L", "XL", "X", "IX", "VI", "V", "IV", "I");
	$equalToRoman = array(1000, 900, 500, 400, 100, 60, 50, 40, 10, 9, 6, 5, 4, 1); 
	// echo count($roman);
	// echo count($equalToRoman);
	$converted;
	if($number != ''){
		echo $number.'<br>';
		for($i = 0; $i < count($roman); $i++){
			for($j = 0; $j < count($roman); $j++){
				if($number>=$equalToRoman[$j] && $number < 1001){
					$number -= $equalToRoman[$j];
					$converted .= $roman[$j];
					break;
				}
			}
		}
		echo $converted;
	}
	?>
</body>
</html>