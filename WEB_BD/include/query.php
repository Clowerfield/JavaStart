<?php
	$title = "index.html";
	$style = "css/style.css";
	$news_title = "Товары";
	$jq = "<script src=\"js/modalWinJQforDB.js\"></script>";
	require_once "include/header.php";
	require_once "include/init.php";
?>
<div class="goods-catalog">
    <form action="query.php" method="POST" >
		<select name="section">
		<?php
			$section = $select->select_section($db);
			for($i=0;$i<count($section);$i++)
			{
				echo '<option value="'.$section[$i]['section_name'].'">'.$section[$i]['section_name'].'</option>';
			}
		?>
		</select>
    	<button type="submit" name="sended" value="1">Выбрать</button>
    </form>
</div>
<?php
	if(isset($_POST['sended']) && $_POST['sended'] == 1)
    {
		$its = $select->select_items_from_category($db,$_POST['section'],0,0);
		if(count($its)>0){
			echo"<ul class=\"list-item\">";
			for($i=0; $i < count($its); $i++)
			{
				$img=$select->select_image($db,$its[$i]['id'],0,3);
				$rev=$select->select_review($db,$its[$i]['id'],0,4);
				echo "
					<li class=\"item clearfix\">
						<div class=\"img-container clearfix\">";
							if(count($img)>0){
								echo "<a rel=\"group".$i."\"  data-fancybox=\"gallery\"  href=".$img[0]['path']." id=\"fancy-click\"><img class=\"img-item\" src=".$img[0]['path']." alt=". $its[$i]['item_name']."></a>
									<a rel=\"group".$i."\"  data-fancybox=\"gallery\"  href=".$img[1]['path']." id=\"fancy-click\"><img class=\"img-item small\" src=".$img[1]['path']." alt=". $its[$i]['item_name']."></a>
									<a rel=\"group".$i."\"  data-fancybox=\"gallery\"  href=".$img[2]['path']." id=\fancy-click\"><img class=\"img-item small\"  src=".$img[2]['path']." alt=". $its[$i]['item_name']."></a>";
							}else echo "Картинки не были найдены!";
						echo "</div>
								<div class=\"info\">
								<!--name -->
									<span class=\"info-text\">Название препарата: ". $its[$i]['item_name'].';'."</span>
								<!--brand_name -->
									<span class=\"info-text\">Производитель: ". $its[$i]['brand_name'].';'."</span>
								<!--maker -->	
									<span class=\"info-text\">Описание : ".$its[$i]['description'].';'."</span>
								<!--price -->	
									<span class=\"info-text\">Цена : ". $its[$i]['price'].'грн;'."</span>
									<span class=\"info-text\" id=\"info-text\"><a href=\"#\" onclick=\"showDesc('".$its[$i]['id']."');\">подробне...</a></span>
									<button class=\"order\">Купить</button>
								</div>
								<div class=\"review\">
									<span class=\"info-text\">Комментарии:</span>";
									if(count($img)>0){
										for($j=0; $j<count($rev);$j++){
											echo "<span class=\"rev_head\">Имя : ". $rev[$j]['reviewer_name']."</span>
											<span class=\"rev_head\">email : ". $rev[$j]['email']."</span>  	
											<span class=\"rev_head\">ip : ". $rev[$j]['ip']."</span>
											<span class=\"info-text\">Комментарий : ". $rev[$j]['comment']."</span>"; 
										}	 
									}else echo "Комментариев не найдено!"; 	
						echo'</div>
					</li>';
			}
			echo"</ul>";
		}else echo "Товаров не найдено!";
	}
	require_once "modalwin.php";
	require_once "include/footer.php";
?>