function WorkKeyCrypt(arr, key){
	var msg = [];
	var val;
	for(var i= 0; i < arr.length; i++){
	 msg.push( Math.pow(arr[i], key[0]) % key[1]);
	}
	return msg;
}

function ToChar(string){
	var str = string;
	var bin = "";
	var archar = [];
	var result = "";
	if(string.length < 11) str = Equilibrium(string, 11);
	for(var i= 0; i < str.length; i++){
	bin += str[i];
	if((bin.length)%11 == 0){
			archar.push(bin);
			bin = "";
		}
	}
	for(var i= 0; i < archar.length; i++){
		var number = parseInt(String(archar[i]), 2);
		result += String.fromCharCode(number)
	}
	return result;
}

