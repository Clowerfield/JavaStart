function MoveQuee(string, gumb){
	var incbit = "0";
	var newstr = "";
	var gamm = "";
	for(var i = 0; i < string.length; i++){
		incbit = CharicXOR(incbit, string[i]);
	}
	newstr += incbit + string.substr(0, string.length - 1);
	gamm += string[string.length - 1];
	if(gumb) return gamm;
	else return newstr;
}

function MQueue(string, numb, Gam){
	var queue = [];
	var Gamm = "";
	var temp = string;
	for (var i = 0; i < numb; i++){
		queue.push(parseInt(String(MoveQuee(temp, 0)), 2));
		Gamm += MoveQuee(temp, 1);
		temp = MoveQuee(temp, 0);
	}
	if(Gam) return Gamm;
	else return queue;
}







