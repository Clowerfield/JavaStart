<!DOCTYPE html>
<html lang ="ru">
<head>
	<meta charset = "utf-8">
	<title> Лабораторная работа №10 </title>
	<link rel="stylesheet" type="text/css" href="STYLE/Stylesheet.css" >
	<script src="Java/jquery.js"></script>
	<script src="Java/Logic.js"></script>
	<script src="Java/script.js"></script>
	<script src="Java/graph.js"></script>
</head>
<body>
	<?php
   			 require_once "header.php"
		?> 
	<div class ="Area">
	<label for="Regist"><h1 class ="LNh">Registration</h1> </label>
		<div class ="most">
<div class="List">
	
	<div class ="Right">
		<div class ="void">
		<div class ="Middle">
			<canvas id="CircGram" width="400" height="250">
				
			</canvas>
			
		</div>
		<div class ="empty"></div>
		<div class="price" id="0"> _UAH</div>
			<div class="price" id="1"> _UAH</div>
			<div class="price" id="2"> _UAH</div>
			<div class="price" id="3"> _UAH</div>
			<div class="price" id="4"> _UAH</div>
		</div>
		<div class = "table">
			<div class ="lcol">
			<h3>Games Today</h3>
			<p>Chicago Bulls - Los Angeles Lakers 109 : 89</p>
			<p>New York Nicks - Seatle Supersonics 99 : 120</p>
			</div>
			<div class ="rcol">
			<h3>Games Tomorrow</h3>
			<p>Chicago Bulls - Los Angeles Lakers </p>
			<p>New York Nicks - Seatle Supersonics</p>
			<p>New Jersey Nets - Minesota Timberwolfs</p>
			</div>
		</div>
	</div>
</div>
</div>
	</div>
	<?php
   			 require_once "footer.php"
		?> 
</body>