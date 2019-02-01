
<head>
	<meta charset = "utf-8">
	<title> Лабораторная работа №2 </title>
	<link rel="stylesheet" type="text/css" href="STYLE/Stylesheet.css" >
	<script src="Java/jquery.js"></script>
	<script src="Java/Logic.js"></script>
	<script src="Java/script.js"></script>
	<script src="Java/desizer.js"></script>
	
</head>
<?php
    $js = "JAVA/script.js";
    $title = "Lab_4.html";
    $style = "STYLE/Stylesheet.css";
?>

<?php 
	
	function Clear($value = "") {
	  $value = trim($value);
	  $value = stripslashes($value);
	  $value = strip_tags($value);
	  $value = htmlspecialchars($value);
	  $value = str_replace($value, ";", "<br>");
	  return $value;
	}
	function Show ($narray) { 
		if (isset($narray) && !empty($narray)) { 
			$temp=''; 
			switch ($narray) { 
				case $_GET: $ar = '$_GET'; break; 
				case $_POST: $ar = '$_POST'; break; 
				case $_SERVER: $ar = '$_SERVER'; break; 
				default: $ar = 'Error'; break; 
			} 
		
		echo "<text
			<h4>$ar:</h4>
			<table class=\"array\">"; 
		foreach ($narray as $key => $value){ 
			$temp = $key.' = '.Clear($value); 
			
			
			echo "
			<tr class=\"list\" style=\"font-size: 10px; font-family: \"Arial Narrow\";\">
				<td class=\"element\" style = \"border-style: solid; border-width: 1px;
	border-color: rgb(49, 111, 160);\">
	
					$key 
				</td>
				<td class=\"element\" style = \"border-style: solid; border-width: 1px;
	border-color: rgb(49, 111, 160);\">
					$value
				</td>
			</tr>";
		}
		echo "</table>"; 
		} 
		
	} 
?>               
	<div class="Console">
		<?php
		echo "<h1>Console<a href='caller.php'><input type='button''value=\"P\"></a></h1>";
    	//Show($_GET);
			//Show($_POST);
		//Show($_SERVER);
		?>
		<div class="Div_table">
			<div class="Tbl_Row">
				<div class="Tbl_Cell">Имя</div>
				<div class="Tbl_Cell">Фамилия</div>
				<div class="Tbl_Cell">Отчество</div>
				<div class="Tbl_Cell">Возраст</div>
				<div class="Tbl_Cell">Пол</div>
				<div class="Tbl_Cell">Долг</div>
			</div>
			<div class="Tbl_Row">
				<div class="Tbl_Cell">Абдул</div>
				<div class="Tbl_Cell">Абдулаев</div>
				<div class="Tbl_Cell">Абдулаевич</div>
				<div class="Tbl_Cell">34</div>
				<div class="Tbl_Cell">Муж</div>
				<div class="Tbl_Cell">123.00</div>
			</div>
			<div class="Tbl_Row">
				<div class="Tbl_Cell">Иван</div>
				<div class="Tbl_Cell">Иванов</div>
				<div class="Tbl_Cell">Иванович</div>
				<div class="Tbl_Cell">18</div>
				<div class="Tbl_Cell">Муж</div>
				<div class="Tbl_Cell">2345.00</div>
			</div>
			<div class="Tbl_Row">
				<div class="Tbl_Cell">Полина</div>
				<div class="Tbl_Cell">Петрова</div>
				<div class="Tbl_Cell">Петровна</div>
				<div class="Tbl_Cell">45</div>
				<div class="Tbl_Cell">Жен</div>
				<div class="Tbl_Cell">1267.24</div>
			</div>
			<div class="Tbl_Row">
				<div class="Tbl_Cell">Абдул</div>
				<div class="Tbl_Cell">Абдулаев</div>
				<div class="Tbl_Cell">Абдулаевич</div>
				<div class="Tbl_Cell">34</div>
				<div class="Tbl_Cell">Муж</div>
				<div class="Tbl_Cell"><br></div>
			</div>
		</div>
		
	<h1>PHP GD</h1>
		

<div class="Resizer">	
	<form class="form_class" enctype="multipart/form-data" method="post" action="array.php" enctype="multipart/form-data">
		<input type="hidden" name="action" value="resize">
		<div>
			<span for="image">Choose file:</span>
			<input id="image" type="file" name="f_name">
		</div>
		<br>
		<div>Type a size:</div>
		<div>
			<span for="width">Width:</span>
			<input class="inp_field"  id="width" type="number" name="Width" min="1" required value=300>
		</div>
		<div>
			<span for="height">Height:</span>
			<input class="inp_field"  id="height" type="number" name="Height" min="1" required value=240>
		</div>
		<input type="submit" value="Resize">
	</form>
</div>


<?php
	if(is_uploaded_file(@$_FILES["f_name"]["tmp_name"]))
		{
			move_uploaded_file($_FILES["f_name"]["tmp_name"], "IMG/im_for_resize/".$_FILES["f_name"]["name"]);
			$src="IMG/im_for_resize/".$_FILES["f_name"]["name"];
			if(Resize($src,get_var("Width",'',''),get_var("Height",'','')))
			{
				$nPath="IMG/im_for_resize/"."resizedImage".$_FILES["f_name"]["name"];	
				echo "<div class='destination'>";
				echo "<span class='inf'><br>Result:<br></span><img style='max-width:100%;' src='$nPath'></img>";
				echo "<span class='inf'><br><br>Original:<br></span><img style='max-width:100%;' src='$src'></img>";
				echo "</div>";
			}
			else
				echo "Encoding Error!";
		}
		
	function get_var($str,$name_file,$default)
    {
        $ret_str=$default;
        if(isset($_POST[$str]))
        {
            $ret_str=htmlspecialchars($_POST[$str]);
        }
        elseif(isset($_GET[$str]))
        {
            $ret_str=htmlspecialchars($_GET[$str]);
        }
		elseif(isset($_FILES[$str][$name_file]))
        {
            $ret_str=($_FILES[$str][$name_file]);
        }
        return $ret_str;
	}
	
	function Resize($src,$width,$height)
    {
        $size = getimagesize($src);
        switch($size["mime"])
        {
            case "image/jpeg":$isrc = imagecreatefromjpeg($src); break;
            case "image/png":$isrc = imagecreatefrompng($src);break;
            case "image/bmp":$isrc = imagecreatefrombmp($src);break;
            case "image/gif":$isrc = imagecreatefromgif($src);break;
            default: return false;
		}
		
		if($isrc==false) return false;

		// intitalize watermark 
		$watermark_path = 'IMG/im_for_resize/watermark.png';
		$watermark = imagecreatefrompng($watermark_path);
		$watermark_width = imagesx($watermark);
		$watermark_height = imagesy($watermark);
		// end intitalize watermark 

        $ratioWidth = $size[0]/$width;
		$ratioHeight = $size[1]/$height;

        if($ratioWidth < $ratioHeight)
        {
            $destWidth = intval($size[0]/$ratioHeight);
            $destHeight = $height;
        }
        else
        {
            $destWidth = $width;
            $destHeight = intval($size[1]/$ratioWidth);
		}

		if ($size[1]<$height) {$destHeight = $size[1];}
		if ($size[0]<$width) {$destWidth = $size[0];}
		
		$idest = imagecreatetruecolor($destWidth, $destHeight);
		//Resize image
		imagecopyresampled($idest, $isrc, 0, 0, 0, 0, $destWidth, $destHeight, $size[0], $size[1]);
		//Add water mark to image (FIO)
		imagecopy($idest, $watermark, ($destWidth - $watermark_width)/2,0,0,0, $watermark_width, $watermark_height);
        $nPath="IMG/im_for_resize/"."resizedImage".$_FILES["f_name"]["name"];
		
        //Creating image 
        if(!imagejpeg($idest,$nPath,100))
            return false;
		
        imagedestroy($isrc);
        imagedestroy($idest);
        return true;
	}
	
	
	
?>
	
