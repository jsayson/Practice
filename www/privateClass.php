<html>
<body>
	<?php
		class PrivateClass{
			public $name;
			private $grade;

			function __construct($pName, $pGrade){
				$this->name = $pName;
				$this->setGrade($pGrade);
			}

			function getGrade(){
				return $this->grade;
			}

			function setGrade($sGrade){
				if($sGrade <= 5 && $sGrade >= 1){					
					$this->grade = $sGrade;
				}
				else{
					$this->grade = 0;
				}

			}

			// function viewer(){
			// 	echo "Name: $this->name <br/>";
			// 	echo "Grade: $this->grade <br/>";
			// }

		}

		$classified = new PrivateClass("Kira", 3);
		// $classified->setGrade; 
		echo $classified->getGrade();
		// echo $classified->viewer();

	?>
</body>
</html>