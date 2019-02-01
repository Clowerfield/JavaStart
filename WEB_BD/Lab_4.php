<!DOCTYPE HTML>

<html>

<head>
        <meta http-equiv="Content-Type" content="text/css; charset=UTF-8" />
        <link rel="stylesheet" href="STYLE/Stylesheet.css">
        <script src="Java/script.js"></script>
        <title>Лабораторная работа №4</title>
</head> 

<body>
	
		<?php
   			 require_once "header.php";
		?> 
		<?php
   			 include 'check.php';
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
										<?php
											if(!isset($name))
											$name = "";
											?>
										<?php
											if(!isset($styleName))
											$styleName = "log_in";
											?>
									<input type="text" id="Regist" name="login" placeholder="Name" class="<?php echo $styleName ?>" value="<?php echo $name ?>">
								</div>
								<div class="radio">
									<span>Male</span>
									<input name="state" checked type="radio" id="Male" value="Male" >
									<span>Female</span>
									<input name="state" type="radio" id="Female" value="Female">
								</div>
								<div class="Date">
									<p class="date"><u>Date</u></p>
									  <?php
											if(!isset($day))
											$day = "";
										?>
										<?php
											if(!isset($styleday) || $styleday == "")
											$styleday = "day";
										?>
									<span>Day</span>
									<input type="text" name="Day" size="2" class="<?php echo $styleday ?>" placeholder="  DD" value="<?php echo $day ?>">
									<br>
										<?php
											if(!isset($month))
											$month= "";
											?>
										<?php
											if(!isset($stylemonth) || $stylemonth == "")
											$stylemonth = "mounth";
										?>
									<span>Mounth</span>
									<input type="text" name="Mounth" size="2" class="<?php echo $stylemonth ?>" placeholder="  MM" value="<?php echo $month ?>" >
									<br>
									<?php
										if(!isset($year))
										$year= "";
									?>
									<?php
										if(!isset($styleyear) || $styleyear == "")
										$styleyear = "year";
									?>
									<span>Year</span>	
									<input type="text" name="Year" size="4" class="<?php echo $styleyear ?>" placeholder="  YYYY" value="<?php echo $year ?>">
				
								</div>
								<input type="submit" id="submit"  value="Submit">
								<br>	
								<?php
									if(!isset($res))
									$res = "";
								?>								
								<span id="error"></span>
								<span id="info" class="info"><?php echo $res ?></span>
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
	