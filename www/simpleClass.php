<hmtl>
	<body>
		<?php 
			class Student{
				var $name;
				var $age;
				var $gpa;

				function __construct($sName, $sAge, $sGpa){
					$this->name = $sName;
					$this->age = $sAge;
					$this->gpa = $sGpa;
				}

				function honorChecker(){
					echo "Name: $this->name<br/>";
					echo "Age: $this->age<br/>";
					echo "GPA: $this->gpa<br/>";
					echo "He/she an honor student? ";
					if($this->gpa <= 2.5){
						return "Yes <br/>";
					}
					return "No <br/>";
				}
			}

			$student1 = new Student("Kira", 16, 1.0);
			$student2 = new Student("Natsu", 18, 3.0);

			echo $student1->honorChecker();
			echo $student2->honorChecker();
		?>
	</body>
</html>
