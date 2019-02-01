function RestoreCharOne(receiver, sender){
	var bin = "";
	for(var i = 0; i < sender.length; i++){
		if(sender[i] == "1"){
				bin += CharicXOR(sender[i], receiver[i]);
		}
	}
	return bin;
}

function ToChar(string){
	var bin = "";
	var archar = [];
	var result = "";
	for(var i= 0; i < string.length; i++){
	bin += string[i];
	if((i+1)%11 == 0){
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

