<!DOCTYPE HTML>

<html>

<head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="stylesheet" href="STYLE/Stylesheet.css">
		<script src="Java/jquery.js"></script>
        <script src="Java/script.js"></script>
		<script src="Java/info.js"></script>
		
        <title>Лабораторная работа №6</title>
</head> 

<body>
	
		<?php
   			 require_once "header.php"
		?> 
		
	
<?php	
		echo "
		<div class=\"shop\">
		
		<style type =\"text/css\">
		.row{
			display : inline-flex
			
		}
		.goods{
			font-family: Verdana;
			border-style: solid;
			border-color: rgb(49, 111, 160);
			border-width: 1px;
			font-size: 12px;
			float: left;
			width: 180px;
			margin-top: 15px;
			margin-left: 10px;
			padding-bottom: 5px;
			padding-left: 15px;
			}
		.shop{
			width: 425px;
			display: inline-block;
		}
		.sinfo{
			display: none;
		}
		</style>
		<h1>E-Shop</h1>";	
		//<form action='' onclick='return loadDoc();'>";		
$DD = new DOMDocument();
		$DD -> loadXML(file_get_contents("e_Shop.xml"));
		$pairs = $DD -> getElementsByTagName("pair");
		$serials = $DD -> getElementsByTagName("serial");
		$brands = $DD -> getElementsByTagName("brand");
		$prices = $DD -> getElementsByTagName("price");
		$colors = $DD -> getElementsByTagName("color");
		$materials = $DD -> getElementsByTagName("material");
		$years = $DD -> getElementsByTagName("year");
		$images = $DD -> getElementsByTagName("image");
		$X = $images->length;
		echo "  <p> Goods in Line:$X</p>";
	for($i=0; $i < $X; $i++)
	{
		$id = $pairs->item($i) -> getAttribute('id');
		if($i%2 == 0)
		echo "<div class='row'>";
		echo "<div class=\"goods\"><br>";
		//$serial = $serials[$i] -> textContent;
		$brand = $brands->item($i) -> textContent;
		//$price = $prices[$i] -> textContent;
		//$color = $colors[$i] -> textContent;
		//$material = $materials[$i] -> textContent;
		$year = $years->item($i) -> textContent;
		$image = $images->item($i) -> textContent;
		
		echo "<u><b>$brand of $year<br></b></u><br>";
		//echo "<a href= 'javascript:loadDoc($id)'><image src='$image' height='100px'><br></a>";
		echo "<a class = '$id'><image src='$image' height='100px'><br></a>";
		echo "<div class ='sinfo' id = '$id'>";
		//echo "<div class ='field'> $color $material</div>";
		//echo "<div class ='field'><b>Serial Number:</b> $serial<br><b>Price:</b> $price UAH<br></div> ";
		echo "<div class ='texture'></div>";
		echo "<div class ='uinfo'></div> ";
		echo "</div></div> ";
		if($i%2 != 0)
			echo "</div>";
	}
	//echo "</form>";
	echo"</div>";
	?>
		<?php
   			require_once "footer.php";
		?>
		
</body>
