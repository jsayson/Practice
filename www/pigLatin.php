<html>
<body>
	<h1>Pig Latin</h1>
	<a href="https://en.wikipedia.org/wiki/Pig_Latin" target="blank">Click here for more info</a><br/><br/>
	<form>
		Word: <input type="text" name="word" /><br/>
		<input type="submit" value="submit" />
	</form>
	<?php
		if(isset($_GET["word"]) || $_GET["word"] != ""){
			$word = $_GET["word"];
			$vowels = array("A" , "E", "I", "O", "U", "a", "e", "i", "o", "u");
			$cons = array('b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x','y', 'z');
			for($v = 0; $v < count($vowels); $v++){
				if($word[0] == $vowels[$v]){
					$newWord = substr($word, 1).$word[0]."way";
				}
			}
			for($c = 0; $c < count($cons); $c++){
				if($word[0] == $cons[$c]){
					$newWord = substr($word, 1).$word[0]."ay";
				}
				if($word[0] == $cons[$c] && $word[1] == $cons[$c]){
					$newWord = substr($word, 2).substr($word, 0, 2)."ay";
				}
			}
			echo $newWord;
		}
	?>
</body>
</html>