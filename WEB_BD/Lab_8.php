<!DOCTYPE html>
<html>
<head>
	<meta charset = "utf-8">
	<title> Лабораторная работа №8 </title>
	<link rel="stylesheet" type="text/css" href="STYLE/Stylesheet.css" >
	<script src="Java/jquery.js"></script>
	
	<!-- bin/jquery.slider.min.css -->
	<link rel="stylesheet" href="slider/css/jslider.css" type="text/css">
	<link rel="stylesheet" href="slider/css/jslider.blue.css" type="text/css">
	<link rel="stylesheet" href="slider/css/jslider.plastic.css" type="text/css">
	<link rel="stylesheet" href="slider/css/jslider.round.css" type="text/css">
	<link rel="stylesheet" href="slider/css/jslider.round.plastic.css" type="text/css">
  <!-- end -->

	
	
	<!-- bin/jquery.slider.min.js -->
	<script type="text/javascript" src="slider/js/jshashtable-2.1_src.js"></script>
	<script type="text/javascript" src="slider/js/jquery.numberformatter-1.2.3.js"></script>
	<script type="text/javascript" src="slider/js/tmpl.js"></script>
	<script type="text/javascript" src="slider/js/jquery.dependClass-0.1.js"></script>
	<script type="text/javascript" src="slider/js/draggable-0.1.js"></script>
	<script type="text/javascript" src="slider/js/jquery.slider.js"></script>
  <!-- end -->
	<script src="Java/script.js"></script>
	<script src="Java/ioslider.js"></script>
	<script src="Java/Logic.js"></script>
	<style type="text/css" media="screen">
	  body { background: #EEF0F7; }
	 .layout { padding: 50px; font-family: Georgia, serif; }
	 .layout-slider { margin-left: 10px; margin-bottom: 60px; width: 95%; }
	 .layout-slider-settings { font-size: 12px; padding-bottom: 10px; }
	 
	</style>
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
			<div id ="News">
				
				<div class="login">
				  <u>Name</u>
					<input type="text" id="Regist" name="login" placeholder="Name" class="log_in">
				</div>
				<div class="radio">
					<span>Male</span>
					<input name="state" checked type="radio" id="Male" value="Male" >
					<span>Female</span>
					<input name="state" type="radio" id="Female" value="Female">
				</div>
				<div class="Date">
					<p class="date"><u>Date</u></p>
					<span>Day</span>
					<input type="text" id="dd" name="Day" size="2" class="day" placeholder="  DD">
					<br>
					<span>Mounth</span>
					<input type="text" id="mm" name="Mounth" size="2" class="mounth" placeholder="  MM" >
					<br>
					<span>Year</span>	
					<input type="text" id="yyyy" name="Year" size="4" class="year" placeholder="  YYYY">
					
				</div>
				<input type="button"  value="Submit" id="submit">
				
				<div class="Idat"></div>
				<br>
				<div class = "chequery">
					<input type="checkbox">
					<input type="checkbox">
					<input type="checkbox">
					<input type="checkbox">
					<input type="checkbox">
					<input type="checkbox">
					<input type="checkbox">
					<input type="checkbox">
					<input type="checkbox">
					<input type="checkbox">
					<input type="checkbox">
					<input type="checkbox">
					<input type="checkbox">
					<input type="checkbox">
					<input type="checkbox">
					<input type="checkbox">
					<input type="checkbox">
					<input type="checkbox">
				</div>
				
			</div>
			
			<div class ="nig">
			<img id ="ng" src="IMG/Nig.png"vspace="4">
			<p class="clear"></p>
			</div>
		</div>
		
		<div class ="empty"></div>
		 <div class="layout-slider">
					<input id="SliderSingle" type="slider" name="price" value="20" />
				</div>
				<script type="text/javascript" charset="utf-8">
					jQuery("#SliderSingle").slider({ from: 1, to: 100, step: 1, scale: [0, '|', 25, '|', 50, '|', 75, '|', 100], format: { format: '##', locale: 'de' }, dimension: '&nbsp;%', skin: "plastic" });
				</script>
				<div class = "musicbox">
					<input type="button" value="Check" id= "Allin">
					<input type="button" value="Clear" id="Allout">
					<input type="button" value="Invert" id="Invert">
				</div>
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