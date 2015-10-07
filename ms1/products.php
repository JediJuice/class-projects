<?php
	$product = $_GET['product'];

	if ($product == 1)  {
		$pcs  = "You get a mac";
	} else if ($product == 2)  {
		$pcs = 'You get a Ubuntu, almost as cool as mac.';
	} else if ($product == 3)  {
		$pcs = 'Windows and the blue screen of death';
	} else {
		$pcs = " That choice is invalid";
	}
?>	

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="styles.css">
</head>
<body>

	<?php include "header.php" ?> <!-- this points to navigation -->
			
	<div class='products'>	
		<h1><?php echo $pcs ?></h1
	</div>

	<?php include "footer.php" ?> <!-- this points to my footer info -->

</body>
</html>