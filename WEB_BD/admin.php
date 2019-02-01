<head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="stylesheet" href="STYLE/Stylesheet.css">
		<script src="Java/jquery.js"></script>
        <script src="Java/script.js"></script>
		<script src="Java/info.js"></script>
		
        <title>Лабораторная работа №12</title>
</head> 
<body>
	<?php require_once "header.php"?>
	<main class="db_admin">
		<h1>Admin Panel</h1>
	<?php if($_SESSION['permission']) echo '<form action="" method="POST" onsubmit="admin.php">';
	else  echo '<b>PAGE IS NOT VALID</b><br>'?>
		<span class="cortage">
			<input type="text" name="Table"  placeholder="Table Name" pattern="^\w+$"
       title="Only Letters&Numbers" required min="1" max="12"></input>
			<input type="text" name="Serial" placeholder="Serial Number" pattern="^[A-Z0-9]+$"
       title="Only High Case Letters&Numbers" required min="3" max="8"></input>
			<input type="text" name="Brand"  placeholder="Brand Name" pattern="^\w+$"
       title="Only Letters&Numbers" required min="1" max="12"></input>
			<input type="text" name="Price" placeholder="Price" pattern="^\d+$"
       title="Only Numbers" required min="1" max="9"></input>
			<input type="text" name="Color" placeholder="Color" pattern="^(.+[A-Za-z])$"
       title="Only Letters" required min="1" max="12"></input>
			<input type="text" name="Material" placeholder="Material" pattern="^(.+[A-Za-z])$" 
	   title="Only Letters" required min="1" max="12"></input>
			<input type="text" name="Yearr" placeholder="Year of Production" pattern="^\d+$"
       title="Only Numbers" required min="1" max="4"></input>
			<input type="text" name="Image" placeholder="Path to an Image"></input>
		</span><br>
		<input type="text" class="bd_id" name="id" placeholder="id" pattern="^\d+$"
       title="Only Numbers" min="0" max="4" ></input>
		<input type="submit"  value="Insert" name="Insert">
		<input type="submit"  value="Delete" name="Delete"><br><br><br>
		<?php if($_SESSION['permission']) echo '</form>';?>
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
	 if (isset($_POST['Table']))
	 {
		 switch($_POST['Table'])
		 {
			case "favorites": $db_table_to_show = $_POST['Table']; break;
			case "shoes": $db_table_to_show = $_POST['Table']; break;
			case "boots": $db_table_to_show = $_POST['Table']; break;
			default: $db_table_to_show = "favorites"; echo "<i>Standart table used: Wrong name of table</i>";
		 }
	 }
    // соединяемся с сервером базы данных
    $connect_to_db = mysqli_connect($db_host, $db_username, $db_password)
    or die("Could not connect: " . mysqli_error());

    // подключаемся к базе данных
    mysqli_select_db( $connect_to_db, $db_name)
    or die("Could not select DB: " . mysqli_error());

 if (isset($_POST['Serial']))
			{
				 $qr_result = mysqli_query($connect_to_db, "select * from " . $db_table_to_show ." where Serial = '". $_POST['Serial']."';")
				or die(mysqli_error($connect_to_db));
			}
			$data = mysqli_fetch_array($qr_result);
			if($data['id']) $serial_detector = true;
if(isset($_POST['Delete']))
			{
				$qr_result = mysqli_query($connect_to_db, "delete from " . $db_table_to_show ." where Serial = '". $_POST['Serial']."';")
				or die(mysqli_error($connect_to_db));
			}
if((isset($_POST['Insert']))& !$data['id'])
			{
				$qr_result = mysqli_query($connect_to_db, "insert into " . $db_table_to_show ." values('"
				. $_POST['id']."','"
				. $_POST['Serial']."','"
				. $_POST['Brand']."','"
				. $_POST['Price']."','"
				. $_POST['Color']."','" 
				. $_POST['Material']."','"
				. $_POST['Yearr']."',\""
				. $_POST['Image']."\");")or die(mysqli_error($connect_to_db));
			}
else echo "Row is not Inserted :: ";
	mysqli_close($connect_to_db);
?>
<span>Serial:<?php if($serial_detector)echo "Already Exists in "; else echo "Is Normal in "?></span>
<span>Table:<?php echo $db_table_to_show ?></span>
</main>
	<?php require_once "footer.php";?>               
</body>