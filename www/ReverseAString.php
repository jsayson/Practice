<html>
<body>
	<h1>Reverse a String</h1>
	<form action='ReverseAString.php' method='GET'>
		Enter a word: <input type='text' name='theWord' /><br/>
		<input type='submit' value='submit' />
	</form>
	<?php
		$theWord = $_GET['theWord']; 
		class Word{
			private $word;
			private $enteredWord;

			function __construct($tWord){
				$this->setTheWord($tWord);
			}

			function setTheWord($sTWord){
				$reverse;
				// echo strlen($sTWord);
				for($i = 0; $i < strlen($sTWord); $i++){
					$reverse .= $sTWord[(strlen($sTWord)-$i)-1];
				}
				$this->enteredWord = $sTWord;
				$this->word = $reverse;
			}

			function getTheWord(){
				echo "Entered word: $this->enteredWord<br/>";
				echo "Reversed word: $this->word <br/>";
			}
		}
		$setWord = new Word($theWord);
		if($theWord!=""){
			$setWord->getTheWord();
		}
	?>
</body>
</html>