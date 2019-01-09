<html>
<body>
	<h1>Mad Libs Game</h1>
	<form action='/www' method='GET'>
		color: <input type='text' name='color' /><br/>
		color: <input type='text' name='color2' /><br/>
		receiver: <input type='text' name='last' /><br/>
		<input type='submit' value='Submit'/>
	</form>
	<?php
		$color = $_GET['color'];
		$color2 = $_GET['color2'];
		$last = $_GET['last'];
		if($color != '' && $color2 != '' && $last != ''){
			echo "Roses are $color <br/>";
			echo "$color2 are Blue <br/>";
			echo "I love $last <br/>";
		}
		
	?>
</body>
</html>