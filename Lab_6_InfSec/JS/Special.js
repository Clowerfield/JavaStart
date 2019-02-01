function Equilibrium(chars, size){
	var t = "";
	
	if(chars.length < size){
		t = chars;
		for(var j = 0; j < (size - t.length); j++){
			chars = "0" + chars;
		}
	}
	return chars;
}

//function WolframMod(val, pow, mod){
	//var request = new XMLHttpRequest();
	//var attr = 0;
	 //request.onreadystatechange = function() 
  //{
   // if (request.readyState == 4 && request.status == 200) 
	//{                    
	//	var html = request.responseText;
//		attr = request.getElementById('scannerresult_0200_1').title;
  //  }
//	 if (request.readyState == 4 && request.status == 403 && request.status == 404) 
	//{                    
	//	alert("request.status");
    //}
  //}
  //request.open("GET","https://www.wolframalpha.com/widget/input/?input=%5B%2F%2Fmath%3A" + val +"%5E" + pow + "mod" + mod +"%2F%2F%5D&id=c07cc70f1e81887dfd0971d3fe17cfcd");
  //request.send();
 // return attr;
//}
//window.open("https://www.wolframalpha.com/input/?i=" + val + "%5E" + pow + "mod+" + mod).focus();
//"https://www.wolframalpha.com/widget/input/?input=%5B%2F%2Fmath%3A" + val +"%5E" + pow + "mod" + mod +"%2F%2F%5D&id=c07cc70f1e81887dfd0971d3fe17cfcd"