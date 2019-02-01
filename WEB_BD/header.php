<?php session_start();?>
<header>
	<a name="top"></a>
			<a href="Lab_2.html"><div id="Ball"></div></a>
			<div class ="Navy">
			<span class ="lrg"><a href="Lab_12.php">HOME PAGE</a></span>
			<span class ="sml"><a href="Lab_2.html">NEWS</a></span>
			<span class ="mid"><a href="Lab_8.php">PLAYERS</a></span>
			<span class ="mid"><a href="Lab_10.php">MANAGE</a></span>
			<span class ="big"><a href="caller.php">CONSOLE</a></span>
			<span class ="big"><a href="Lab_9.php">SPONSORS</a></span>
			<span class ="mid"><a href="index.php">TICKETS</a></span>
			<?php if($_SESSION['permission'])echo '<span class ="mid"><a href="admin.php">ADMIN</a></span> 
			<span class ="sextra"></span>'; 
			else echo '<span class ="extra"></span>'?>
		</div>
		<div class ="Left">
		<h1 class ="Rh">Rating</h1>
		<div class="rate">
			<p>Chicago Bulls<br></p>
			<p>Minesota Timberwolfs<br></p>
			<p>Los Angeles Lakers<br></p>
			<p>Hustom Rockets<br></p>
			<p>Phinix Suns<br></p>
			<p>New York Nicks<br></p>
			<p>Washington Billets<br></p>
			<p>New Jersey Nets<br></p>
			<p>Seatlle Supersonics<br></p>
			<p><br></p>
			<span class= "ratend">:: view detailed rating</span>
		</div>
		<h1 class ="FCh">Fan`s Club</h1>
		<img id="fan" src="IMG/Rec.png"vspace="4">
	</div>
</header>
<?php error_reporting(E_ERROR | E_PARSE);?>