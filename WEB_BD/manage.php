
<link rel="stylesheet" type="text/css" href="STYLE/Stylesheet.css" >
	<script src="Java/script.js"></script>
<?php
    $js = "JAVA/script.js";
    $style = "STYLE/Stylesheet.css";
	
    require_once "header.php";

	$start_dir='./';
	$pathRegex = '/^\.\/[^(\/\.\.\/)][a-zA-Z0-9\.\-_\/]*$/';
	$errormes = '';

	if(isset($_REQUEST['Ruler']) && (preg_match($pathRegex, $_REQUEST['Ruler']) === 1) && file_exists($_REQUEST['Ruler'])) 
	{ 
		$directory = $_REQUEST['Ruler']; 
	} 
	else 
	{ 
		$directory = $start_dir; 
	}
  	function dir_size($dir) 
	{
		$totalsize=0;
		if ($dirstream = @opendir($dir)) 
		{
			while (false !== ($filename = readdir($dirstream))) 
			{
				if ($filename!="." && $filename!="..")
				{
					if (is_file($dir."/".$filename))
						$totalsize+=filesize($dir."/".$filename);
		 
					if (is_dir($dir."/".$filename))
						$totalsize+=dir_size($dir."/".$filename);
				}
			}
		}
		closedir($dirstream);
		return $totalsize;
	}
	
	function bInPOW($number){
  $POW = " B";
  if($number>1024)
	{
		$number/=1024;
		$POW = " KB";
		if($number>1024)
		{
			$number/=1024;
			$POW = " MB";
		}
	}
  $number = round($number, 2);
  $final_result = $number.$POW;
  return $final_result;
 }
	function checkDir($directory)
	{
		if(is_dir($directory)) 
		{
		   $files = scandir($directory);
		   for($i=1; $i< count($files); $i++)
		   {
				if($files[$i]=='..')
				{
                    if($directory=='./')
                    {
                        $nextdir=$directory;
                    }
                    else
					{
                    	$pos = strrpos($directory,'/',-2);
                    	$nextdir = substr_replace($directory," ",$pos+1);
                    }
                        
                }
                else
				{ 
					$nextdir = $directory.$files[$i].'/';
				}
			   $type = filetype("$directory/$files[$i]");
			   if($type=="dir")
			   {
			   		$size = bInPOW(dir_size($files[$i]));
			   }
			   else
			   		$size = bInPOW(filesize("$directory/$files[$i]"));
			   $date = date("F d Y H:i:s.", filectime($directory."\/".$files[$i]));
			   if($type == "dir")
					{
						echo "<style type =\"text/css\">
							.content
								{
									border-style: solid; 
									border-width: 1px;
									border-color: rgb(49, 111, 160);
								}
						
							</style>
							<tr>
								<td class=\"content\" style>
								<a href=\"?Ruler=$nextdir\">$files[$i]</a>
								</td>
								<td class=\"content\"> $type </td>
								<td class=\"content\"> $size </td>
								<td class=\"content\"> $date </td>
							</tr>";}
					}
				for($i = 0; $i<count($files);$i++)
				{
					$type = filetype($directory."\/".$files[$i]);
					$size = bInPOW(filesize("$directory/$files[$i]"));
					$date = date("F d Y H:i:s.", filectime($directory."\/".$files[$i]));
					if( $type != "dir")
					{
						echo "
						<tr>
							<td class=\"content\">$files[$i]</td>
							<td class=\"content\"> $type </td>
							<td class=\"content\"> $size </td>
							<td class=\"content\"> $date </td>
						</tr>";
					}
				}
		}
	}
	
	function clean($value = "") 
	{
		$value = trim($value);
		$value = htmlspecialchars_decode($value);
		$value = htmlentities($value);
		return $value;
	}
/*function quick_sort($array)
{
	$length = count($array);
	
	// base case test, if array of length 0 then just return array to caller
	if($length <= 1){
		return $array;
	}
	else{
	
		// select an item to act as our pivot point, since list is unsorted first position is easiest
		$pivot = $array[0];
		
		// declare our two arrays to act as partitions
		$left = $right = array();
		
		// loop and compare each item in the array to the pivot value, place item in appropriate partition
		for($i = 1; $i < count($array); $i++)
		{
			if($array[$i] < $pivot){
				$left[] = $array[$i];
			}
			else{
				$right[] = $array[$i];
			}
		}
		
		// use recursion to now sort the left and right lists
		return array_merge(quick_sort($left), array($pivot), quick_sort($right));
	}
}

$sorted = quick_sort($unsorted);
print_r($sorted);*/
 ?>
 <body>
 

 <div class ="Area">
 <form action="<?php echo htmlentities($_SERVER['PHP_SELF']) ?>" method="post">

 <h1>File Manager</h1>
   <table class="FileManager">
	  <tr>
		  <th class="thead">Name</th>
		  <th class="thead">Type</th>
		  <th class="thead">Size</th>
		  <th class="thead">Date</th>
	  </tr>
	  <?php checkDir($directory);?>
	</table>

	<p><input type="radio" name="Sorter" value="ByDate">
	Sort By Date</p>
	<p><input type="radio" name="Sorter" value="BySize">
	Sort By Size</p>
	<p><input type="radio" name="Sorter" value="ByName">
	Sort by Name</p>
</form>
</div>
<?php
    require_once "footer.php";
?>

</body>