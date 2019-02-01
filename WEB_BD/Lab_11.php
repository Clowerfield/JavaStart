<head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="stylesheet" href="STYLE/Stylesheet.css">
		<script src="Java/jquery.js"></script>
        <script src="Java/script.js"></script>
		<script src="Java/info.js"></script>
		
        <title>Лабораторная работа №11</title>
</head> 
<body>

<?php 
require_once "header.php";
?>
<div class="shop">
<h1>E-Shop</h1>	
<script>
$(document).ready(function(){	
   $(".page").on('click',function()
		{    
			$('form#send').submit();
		});
	$("a").on('click',function()
		{    
			var id = $(this).attr('class');	
			$.ajax(
			{
			type: "GET",	
			cache: false,
			success: function()
				{	
					
					$(".sinfo").each(function(){
						$(this).css("display", "none");
					});
					$(".goods").each(function(){
						$(this).find("div#" + id).each(function()
						{
							$(this).css("display", "inline-block");
						});
					});
						
				},
				 error: function(){
				alert('Request Failed');
				}
			});
		});
		
});
</script>
<?php
 $page = 'favorites';
  if (isset($_POST['page']))
			{
				if ($_POST['page']=="favorites") $page='favorites';
				if ($_POST['page']=="shoes") $page='shoes';
				if ($_POST['page']=="boots") $page='boots';
			}
?>
<div class="choser">
<form id="send" onclick="Lab_11.php" method="POST">
	<input name="page" class="page" <?php if( $page=='favorites') echo 'checked' ?> type= "radio" id ="db_All" value="favorites">
	<input name="page" class="page" <?php if( $page=='shoes') echo 'checked' ?> type= "radio" id ="db_Shoes" value="shoes">
	<input name="page" class="page" <?php if( $page=='boots') echo 'checked' ?> type= "radio" id ="db_Boots" value="boots">
	<span class="page_receiver" ><?php echo $page?></span></span>
</form>
</div>
<?php  
echo "
		
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
		
		</style>";
	error_reporting(E_ERROR | E_PARSE);
    // определяем начальные данные
   // $db_host = '10.3.2.90';
     $db_host = 'localhost';
   // $db_name = 'web535a';
     $db_name = 'eshop';
	 $db_username = 'root';
   // $db_username = 'uweb535a';
	 #$db_password = '12349';
	$db_table_to_show = $page;
	
    // соединяемся с сервером базы данных
    $connect_to_db = mysqli_connect($db_host, $db_username, $db_password)
    or die("Could not connect: " . mysqli_error());

    // подключаемся к базе данных
    mysqli_select_db( $connect_to_db, $db_name)
    or die("Could not select DB: " . mysqli_error());

    // выбираем все значения из таблицы "student"
    $qr_result = mysqli_query($connect_to_db, "select * from " . $db_table_to_show)
    or die(mysqli_error());

    // выводим на страницу сайта заголовки HTML-таблицы
  
  
   // выводим в HTML-таблицу все данные клиентов из таблицы MySQL 
   $i = 0;
  while($data = mysqli_fetch_array($qr_result)){ 
	if($i%2 == 0)
		echo "<div class='row'>";
    echo "<div class = 'goods' id=". $data['id'] .">";
	echo '<br><u><b>' . $data['Brand'] . ' of ';
	echo ' ' . $data['Yearr'] . '</b></u> <br><br>';
	echo '<a class = '.  $data['id'] .'><img src=' . $data['Image'] . ' height="100px"></a><br>';
	
	
	$id =  $data['id'];	
	echo '<div class = "sinfo" id='. $id .'> <b>Serial Number: </b>' . $data['Serial'] . ' <br>
	<b>Price: </b>' . $data['Price'] . ' UAH<br> '
	. $data['Color'] . ' '
	. $data['Material'] . ' </div>';
	
	
    echo '</div>';
	if($i%2 != 0)
			echo "</div>";
		$i++;
  }
  
    echo '</tbody>';
  echo '</table>';

    // закрываем соединение с сервером  базы данных
    mysqli_close($connect_to_db);
	
?><code lang="php">

</div>
<?php 
require_once "footer.php";
?>
<body>