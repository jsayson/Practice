<html>
	<body>
		<?php 
		class InheritThis{
			function functionOne(){
				echo "This is function one.";
			}
			function functionTwo(){
				echo "This is function two.";
			}
			function functionThree(){
				echo "this is function three.";
			}
		}

		class WillInherit extends InheritThis{
			function functionOne(){
				echo "This is function one from WillInherit";
			}
		}

		$inheritor = new InheritThis();
		$inheritor->functionTwo();

		$inheritor2 = new WillInherit();
		$inheritor2->functionOne();

		?>
	</body>
</html>