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
   			 require "header.php"
		?> 
	<div class ="Area">
	<label for="Regist"><h1 class ="LNh">Log In</h1> </label>
		<div class ="most">
	<div class ="Right">
		<div class ="void">
		<div class ="Middle">
			<div id ="News">
			<form action="" method="POST" onsubmit="Lab_12.php">
			<div class="login">
              
					<input type="text" id="Login" name="login" placeholder="Login" class="log_in" pattern="^[A-Za-z0-9]+$"
       title="Only Latin or Cirilick chars" >
					<input type="text" id="Pass" name="pass" placeholder="Password" class="log_in" pattern="^[A-Za-z0-9]+$"
       title="Simple password" >
                </div>
					<input type="submit" id="submit" name="Login" value="Login" style="width: 60px; margin-left: 20px">
					<input type="submit" id="submit" name="Exit" value="Exit" style="width: 60px; margin-left: 20px">
				
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
		<?php 
		
		 // определяем начальные данные
   // $db_host = '10.3.2.90';
     $db_host = 'localhost';
   // $db_name = 'web535a';
     $db_name = 'eshop';
	 $db_username = 'root';
   // $db_username = 'uweb535a';
	 #$db_password = '12349';
	 $serial_detector = false;
	 $db_table_to_show = "users";
	 
    // соединяемся с сервером базы данных
    $connect_to_db = mysqli_connect($db_host, $db_username, $db_password)
    or die("Could not connect: " . mysqli_error());
	
    // подключаемся к базе данных
    mysqli_select_db( $connect_to_db, $db_name)
    or die("Could not select DB: " . mysqli_error());
			if (isset($_POST['Login']))
			{
				 $qr_result = mysqli_query($connect_to_db, "select * from " . $db_table_to_show ." where Login = '". $_POST['login']."';")
				or die(mysqli_error($connect_to_db));
			}
			$data = mysqli_fetch_array($qr_result);

			//if($data['id']) $serial_detector = true;
			if ((isset($_POST['Login']))&!$_SESSION['permission']&($data['Password']==$_POST['pass']))
			{
				if($data['Permission'] == 'admin')
				{	
				$_SESSION['permission'] = true;
				$time_escape = time() + 30;
				header("Refresh:0");
				}
			}
			if (isset($_POST['Exit']) | ($time_escape == time()))
			{
				$_SESSION['permission'] = false;
				header("Refresh:0");
			}
			
		?>
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
	<?php
   			 require_once "footer.php"
		?> 
</body>