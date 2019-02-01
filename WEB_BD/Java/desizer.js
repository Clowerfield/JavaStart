
$(document).ready(function()
	{
		$(".sizable").on('click',function()
		{  
			var id = $(this).attr('id');
			/*var path;
			$(".sizable" + id).find("image").each(function(path){
				return path= $(this).attr("src");
			});
			alert(id, path)*/
			$.post("sizedown.php", function Start(id)
			{
				$(".sizable#" + id).html();
			});
		});
	});	
