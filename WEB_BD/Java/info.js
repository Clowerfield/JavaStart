function loadDoc(id) 
{
	var  record;
   
          var ajax = new XMLHttpRequest();
     
		record = document.getElementsByClassName("sinfo");
		 for(var i = record.length - 1; i >= 0; i--)
		 {
			 record[i].style.display = "none";
		 };
		 
  ajax.onreadystatechange = function() 
  {
    if (ajax.readyState == 4 && ajax.status == 200) 
	{
		infos = JSON.parse(ajax.responseText);
		sinfo = document.getElementById(id);
		sinfo.style.display = 'inline-block';
		fields = sinfo.getElementsByClassName("field");
		fields[0].innerHTML = infos.color + " " + infos.material; 
		fields[1].innerHTML = "<b>Serial Number:</b>" + infos.serial + " <b>Price:</b> " + infos.price + " UAH";
    }
  }
  ajax.open("GET", "myax.php?id=" + id + "&date=" + (new Date()).getSeconds(), true);
  ajax.send();
}


$(document).ready(function()
	{
	
    $("a").on('click',function()
		{  
	$(".sinfo").css("display", "none");
	$(".mafia").remove();
	
		var id = $(this).attr('class');
		$.ajax(
			{
			type: "GET",
			url: "e_Shop.xml",
			cache: false,
			dataType: "xml",
			success: function(xml)
				{	
				$(xml).find('eshop').each(function()
					{
					$(this).find("pair#" + id).each(function(){
						var color = $(this).find("color").text();
						var material = $(this).find("material").text();
						var serial = $(this).find("serial").text();
						var price = $(this).find("price").text();
							//alert(color + "\n" + material + "\n" + serial + "\n" + price);
						 $(".sinfo#" + id).css("display", "inline-block");
						$(".texture").append('<span class="mafia">' + color + " " + material +'</span>');
						$(".uinfo").append('<span class="mafia">' + "\n <b>Serial Number: </b>" + serial + "\n<b>Price: </b>" + price + ' UAH</span>');
						});
					});
				},
				 error: function(){
				alert('Request Failed');
				}
			});
		});
		
	});
				

		