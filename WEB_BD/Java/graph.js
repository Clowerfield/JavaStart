$(document).ready(function()
	{
		$.ajax(
			{
			async: false,
			type: "GET",
			url: "e_Shop.xml",
			cache: false,
			dataType: "xml",
			success: function(xml)
				{	
				$(xml).find('eshop').each(function()
					{
					var N = 5;
					$(this).find("pair").each(function(i){
						var price = $(this).find("price").text();
						$(".price#" + i).prepend('<span class="mafia">' + price + '</span>');
						 if (i == N - 1) 
							{
							return false;
							}
						});
					});
				},
				 error: function(){
				alert('Request Failed');
				}
			});
		
		var c = document.getElementById("CircGram");
		var pnt = c.getContext("2d");
		var sum = 0;
			for(var i = 0; i < 5; i++)
			{
				sum += +$(".price#" + i).find(".mafia").text();
			}
		var pst1 = Math.round(100 * $(".price#" + 0).find(".mafia").text()/sum);
		var pst2 = Math.round(100 * $(".price#" + 1).find(".mafia").text()/sum);
		var pst3 = Math.round(100 * $(".price#" + 2).find(".mafia").text()/sum);
		var pst4 = Math.round(100 * $(".price#" + 3).find(".mafia").text()/sum);
		var pst5 = Math.round(100 * $(".price#" + 4).find(".mafia").text()/sum);
		var tmp = 0;
		var clr
		pnt.beginPath();
		pnt.arc(110, 120, 100, 0, 2 * Math.PI);
		pnt.stroke();
		pnt.closePath();
		
		
		function Drawer(pst, prev)
		{
			pnt.beginPath();
			pnt.moveTo(110,120);
			pnt.lineTo(110 + 100 * Math.cos(prev), 120 + 100 * Math.sin(prev));
				var nth = prev + (pst/50) * Math.PI;
				pnt.arc(110, 120, 100, prev, nth);
				tmp = nth;
			pnt.closePath();
			pnt.stroke();
			clr = "#6"+ pst + Math.round(prev) + Math.round(prev)+"6";
			pnt.fillStyle = clr;
			pnt.fill();
		}	
		
		Drawer(pst1, tmp);
		Drawer(pst2, tmp);
		Drawer(pst3, tmp);
		Drawer(pst4, tmp);
		Drawer(pst5, tmp);
	});