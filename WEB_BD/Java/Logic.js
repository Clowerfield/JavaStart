function check() {
    var name = document.getElementById("Regist");
    var male = document.getElementById("Male");
    var female = document.getElementById("Female");
    var dd = document.getElementById("dd");
    var mm = document.getElementById("mm");
    var yyyy = document.getElementById("yyyy");
    var now = new Date();
    var result = true;
    var regularname = /^([A-Za-z]+)|([А-Яа-я]+)$/
    var regulardate = /^\d{1,2}$/;
    var regularyear = /^\d{4}$/;
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    if (!(regularname.test(name.value)))
    {
        name.style.border = "1px solid red";
        return false;
    } 
    else 
    {
    if (regulardate.test(dd.value) && regulardate.test(mm.value) && regularyear.test(yyyy.value))
        {
            dd = Number(dd.value);
            mm = Number(mm.value);
           yyyy = Number(yyyy.value);
			var nupyy = yyyy%4;
			var devmm = mm%2;
            if ( mm < 1 || dd < 1 || dd > 31 || mm > 12 || yyyy > year)
            {
                document.getElementById("info").style = "color:red;display:block;margin-top: 8px;"
                document.getElementById("info").innerHTML = "Incorrect Date";
				
				if(dd > 31)
				{
					document.getElementById("dd").style.border = "2px solid red";
				}
                if(mm > 12 || mm < 1)
				{
					 document.getElementById("mm").style.border = "2px solid red";
				}
                if(yyyy > year)
				{
                document.getElementById("yyyy").style.border = "2px solid red";
				}
                return false;
                
            }
			else if(dd>30)
					{
						if(!devmm ? !(mm>6) : (mm>6))
						{
							document.getElementById("dd").style.border = "2px solid red";
							return false;
						}
					}
					else if(mm = 2)
						{
							if((!nupyy && dd>29) || (nupyy && dd>28))
							{
								document.getElementById("dd").style.border = "2px solid red";
								return false;
							}
						}
                if ((male.checked && (year - yyyy > 21)) || female.checked && (year - yyyy > 18))
                {
                    if (male.checked == true) {
                        alert("Введенное имя: " + name.value + "\nПол: " + male.value + "\nДата рождения: " + dd + "." + mm + "." + yyyy);
                    } else {
                        alert("Введенное имя: " + name.value + "\nПол: " + female.value + "\nДата рождения: " + dd + "." + mm + "." + yyyy);
                    }
                    return true;
                } 
                else{
                    if ((male.checked && (year - yyyy == 21)) || female.checked && (year - yyyy == 18))
                    {
                        if (month > mm) 
                        {
                            if (male.checked == true) {
                                alert("Введенное имя: " + name.value + "\nПол: " + male.value + "\nДата рождения: " + dd + "." + mm + "." + yyyy);
                            } else {
                                alert("Введенное имя: " + name.value + "\nПол: " + female.value + "\nДата рождения: " + dd + "." + mm + "." + yyyy);
                            }
                            return true;
                        } 
                        else{
                            if (month == mm) 
                            {
                                
                                if (day >= dd)
                                    {
                                        if (male.checked == true) {
                                            alert("Name was: " + name.value + "\nSex: " + male.value + "\nDate: " + dd + "." + mm + "." + yyyy);
                                        } else {
                                            alert("Name was: " + name.value + "\nSex: " + female.value + "\nDate: " + dd + "." + mm + "." + yyyy);
                                        }
                                        return true;
                                    }
                                else {
                                document.getElementById("info").style = "color:red;display:block;margin-top: 8px;"
                                document.getElementById("info").innerHTML = "Grow up, and Try again:(";
                                return false;
                                        }

                            }
                             else {
                                document.getElementById("info").style = "color:red;display:block;margin-top: 8px;"
                                document.getElementById("info").innerHTML = "Grow up, and Try again:";
                                return false;
                                }
                        }
                           
                    }
                     else {
                            document.getElementById("info").style = "color:red;display:block;margin-top: 8px;"
                            document.getElementById("info").innerHTML = "Grow up, and Try again:";
                            return false;
                        }
						
                }
               
            
            
                
                

            
        }
		else if (!(regulardate.test(name.value)) | !(regularyear.test(name.vale)))
		{
		 document.getElementById("info").style = "color:red;display:block;margin-top: 8px;"
         document.getElementById("info").innerHTML = "Wrong info";
        return false;
		} 
     
	}
}

$(document).ready(function(){
	$("#submit").on('click',function()
		{    
				var now = new Date();
				var result = true;
				var year = now.getFullYear();
				var month = now.getMonth() + 1;
				var day = now.getDate();
				var regularname = new RegExp('^([A-Za-z]+)|([А-Яа-я]+)$');
				var regulardate = new RegExp('^\\d{1,2}$');
				var regularyear = new RegExp('^\\d{4}$');
				
				$(".mafia").remove();
				  var a = regulardate.test($("#dd").value);
				  var a1 = regularname.test($("#Regist")[0].value);
				  var a2 = $('#Male').prop("checked");
				  var a2 = $('#Female').prop("checked");
				  
			if (!(regularname.test($("#Regist")[0].value)))
			{
			   $("#Regist").css("border-color", "red");
				return false;
			} 
				else 
			{
			if (regulardate.test($("#dd")[0].value) & regulardate.test($("#mm")[0].value) & regularyear.test($("#yyyy")[0].value))
				{
					var dd = Number($("#dd")[0].value);
					var mm = Number($("#mm")[0].value);
					var yyyy = Number($("#yyyy")[0].value);
					var nupyy = yyyy%4;
					var devmm = mm%2;
					if ( mm < 1 || dd < 1 || dd > 31 || mm > 12 || yyyy > year)
					{
					   $(".Idat").css("color", "red");
					   $(".Idat").append('<span class="mafia">Incorrect data input</span>');
						
						if(dd > 31)
						{
							 $("#dd").css("border-color", "red");
						}
						if(mm > 12 || mm < 1)
						{
							 $("#mm").css("border-color", "red");
						}
						if(yyyy > year)
						{
							$("#yyyy").css("border-color", "red");
						}
						return false;
						
					}
					else if(dd>30)
							{
								if(!devmm ? !(mm>6) : (mm>6))
								{
									 $("#dd").css("border-color", "red");
									return false;
								}
							}
							else if(mm == 2)
								{
									if((!nupyy && dd>29) || (nupyy && dd>28))
									{
										 $("#mm").css("border-color", "red");
										return false;
									}
								}
						if (( $('#Male').prop("checked") && (year - yyyy > 21)) || $('#Female').prop("checked") && (year - yyyy > 18))
						{
							if ($('#Male').prop("checked") == true) {
								alert("Name was: " + $("#Regist")[0].value + "\nSex: " + $("#Male")[0].value + "\nDate: " + dd + "." + mm + "." + yyyy);
							} else {
								alert("Name was: " + $("#Regist")[0].value + "\nSex: " + $("#Female")[0].value + "\nDate: " + dd + "." + mm + "." + yyyy);
							}
							return true;
						} 
						else{
							if (($('#Male').prop("checked") && (year - yyyy == 21)) || $('#Female').prop("checked")&& (year - yyyy == 18))
							{
								if (month > mm) 
								{
									if (male.checked == true) {
										alert("Name was: " +  $("#Regist")[0].value + "\nSex: " + $("#Male")[0].value + "\nDate: " + dd + "." + mm + "." + yyyy);
									} else {
										alert("Name was: " +  $("#Regist")[0].value + "\nSex: " + $("#Female")[0].value + "\nDate: " + dd + "." + mm + "." + yyyy);
									}
									return true;
								} 
								else{
									if (month == mm) 
									{
										if (day >= dd)
											{
												if ($('#Male').prop("checked") == true) {
													alert("Name was: " + $("#Regist")[0].value + "\nSex: " + $("#Male")[0].value + "\nDate: " + dd + "." + mm + "." + yyyy);
												} else {
													alert("Name was: " + $("#Regist")[0].value + "\nSex: " + $("#Female")[0].value + "\nDate: " + dd + "." + mm + "." + yyyy);
												}
												return true;
											}
										else {
										 $("#dd").css("border-color", "red");
										 $(".Idat").css("color", "red");
										 $(".Idat").append('<span class="mafia">Incorrect data input: Age</span>');
										return false;
												}
									}
									 else {
										 $("#mm").css("border-color", "red");
										 $(".Idat").css("color", "red");
										 $(".Idat").append('<span class="mafia">Incorrect data input: Age</span>');
										return false;
										}
								}
							}
							 else {
									 $("#yyyy").css("border-color", "red");
									  $(".Idat").css("color", "red");
									  $(".Idat").append('<span class="mafia">Incorrect data input: Age</span>');
									return false;
								}
						}
				}
				if (!(regulardate.test($("#Regist")[0].value)) | !(regularyear.test($("#Regist")[0].vale)))
				{
				  $(".Idat").css("color", "red");
				  $(".Idat").append('<span class="mafia">Incorrect data input</span>');
				return false;
				} 
			 
			}
		}); 
});