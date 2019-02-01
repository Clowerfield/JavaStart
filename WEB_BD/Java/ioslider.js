$(document).ready(function(){
	
        $("#Allin").on('click',function()
		{    
			$(".chequery input").each(function()
			{
				$(this).prop("checked", true)
			});
		});         
		$("#Allout").on('click',function()
		{    
			$(".chequery input").each(function()
			{
				$(this).prop("checked", false)
			});
		}); 
		$("#Invert").on('click',function()
		{
			$(".chequery input").each(function()
			{
				
					$(this).prop("checked", !$(this).prop("checked"))
			
			});
		});  
		$(".jslider-pointer").on('click',function()
		{
			$(".chequery input").each(function()
			{
				$(this).prop("checked", false)
			});
			var N = Math.round(18 * $('.jslider-value span').html()/100);
			var i = 0;
				 $( ".chequery input" ).each(function(i)
				 {
					 $(this).prop("checked", true); 
					 if (i == N - 1| N == 0) 
					 {
						 return false;
					 }
				 });
			
		});
});