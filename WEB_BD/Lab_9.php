<!DOCTYPE html>
<html lang ="ru">
<head>
	<meta charset = "utf-8">
	<title> Лабораторная работа №2 </title>
	<link rel="stylesheet" type="text/css" href="STYLE/Stylesheet.css" >
	<script src="Java/Logic.js"></script>
	<script src="Java/script.js"></script>
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
			<form action="" onsubmit="return check();">
			<div class="login">
              <u>Name</u>
					<input type="text" id="Regist" name="login" placeholder="Name" class="log_in" pattern="^(.+[A-Za-z])|(.+[А-Яа-я])$"
       title="Only Latin or Cirilick chars" required>
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
					<input type="number" id="dd" name="Day" size="2" class="day" placeholder="  DD" pattern="^\d{1,2}$"
       title="Only 2 numbers" required min="1" max="31">
					<br>
				<span>Mounth</span>
					<input type="number" id="mm" name="Mounth" size="2" class="mounth" placeholder="  MM" pattern="^\d{1,2}$"
       title="Only 2 numbers" required min="1" max="12">
					<br>
				<span>Year</span>	
					<input type="number" id="yyyy" name="Year" size="4" class="year" placeholder="  YYYY" pattern="^\d{1,4}$"
       title="Only 4 numbers" required min="1" max="2018" >
				
                </div>
					<input type="submit" id="submit"  value="Submit">
			<br>
			</div>
			
			</form>
			<div class ="nig">
			<img id ="ng" src="IMG/Nig.png"vspace="4">
			<p class="clear"></p>
			</div>
		</div>
		<div class ="empty"></div>
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