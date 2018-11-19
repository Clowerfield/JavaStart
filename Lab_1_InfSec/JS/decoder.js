function ToBlock(queue){
	var array = [];
	var slice = "";
	
	for(var i= 0; i < queue.length; i++){
		slice += queue[i];
		if((i+1)%11 == 0){
			array.push(slice);
			slice = "";
		}
		if((i == queue.length - 1)&&((i+1)%11 != 0)){
			var sal = slice;
			for(var j = 0; j < (11 - sal.length); j++){
				slice += 0;
			}
			array.push(slice);
			slice = "";
		}
	}
	
	return array;
}
function ToBrokenBlock(queue){
	var array = [];
	var slice = "";
	
	for(var i= 0; i < queue.length; i++){
		slice += queue[i];
		if((i+1)%15 == 0){
			array.push(slice);
			slice = "";
		}	
	}
	
	return array;
}

function RepairBlock(array, rule){
	var ublock = "";
	var eblock = "";
	var rblock =[];
	var fblock =[];
	var tmp = "";
	var r = [];
	for(var i = 0; i < array.length; i++){
		ublock = array[i];
		r = seeker(ublock);
		var pos = parseInt(String(r[4]) + r[3] + r[2] + r[1], 2);
		
		if(pos)eblock += Resurrect(pos, ublock);
		else eblock += ublock;
		
		rblock.push(eblock);
		
		for(var j =0; j < eblock.length; j++){
			if((j != 0) && (j != 1) && (j != 3) && (j != 7))tmp += eblock[j]
		}
		fblock.push(tmp);
		eblock = "";
		tmp = "";
	}
	switch(rule){
	case "recover": return rblock;
	case "final": return fblock;
	default: return fblock;
	}
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

function SpecialDecoder(string){
	var bin = "";
	var arr = Butcher(string, 16);
	var slice = "";
	for(var i= 0; i < arr.length; i++){
	slice += arr[i];
	switch(slice){
case "1010011000000000": bin += "а" ; break;
case "1010011000000011": bin += "б" ; break;
case "1010011000000101": bin += "в" ; break;
case "1010011000000110": bin += "г" ; break;
case "1010011000001001": bin += "д" ; break;
case "1010011000001010": bin += "е" ; break;
case "1010011000001010": bin += "ё" ; break;
case "1010011000001100": bin += "ж" ; break;
case "1010011000001111": bin += "з" ; break;
case "1010011000110000": bin += "и" ; break;
case "1010011000110011": bin += "й" ; break;
case "1010011000110101": bin += "к" ; break;
case "1010011000110110": bin += "л" ; break;
case "1010011000111001": bin += "м" ; break;
case "1010011000111010": bin += "н" ; break;
case "1010011000111100": bin += "о" ; break;
case "1010011000111111": bin += "п" ; break;
case "1010011001010000": bin += "р" ; break;
case "1010011001010011": bin += "с" ; break;
case "1010011001010101": bin += "т" ; break;
case "1010011001010110": bin += "у" ; break;
case "1010011001011001": bin += "ф" ; break;
case "1010011001011010": bin += "х" ; break;
case "1010011001011100": bin += "ц" ; break;
case "1010011001011111": bin += "ч" ; break;
case "1010011001100000": bin += "ш" ; break;
case "1010011001100011": bin += "щ" ; break;
case "1010011001100101": bin += "ъ" ; break;
case "1010011001100110": bin += "ы" ; break;
case "1010011001101001": bin += "ь" ; break;
case "1010011001101010": bin += "э" ; break;
case "1010011001101100": bin += "ю" ; break;
case "1010011001101111": bin += "я" ; break;
case "1001000010010000": bin += " " ; break;
                        
case "1010100100000000": bin += "А" ; break;
case "1010100100000011": bin += "Б" ; break;
case "1010100100000101": bin += "В" ; break;
case "1010100100000110": bin += "Г" ; break;
case "1010100100001001": bin += "Д" ; break;
case "1010100100001010": bin += "Е" ; break;
case "1010100100001010": bin += "Ё" ; break;
case "1010100100001100": bin += "Ж" ; break;
case "1010100100001111": bin += "З" ; break;
case "1010100100110000": bin += "И" ; break;
case "1010100100110011": bin += "Й" ; break;
case "1010100100110101": bin += "К" ; break;
case "1010100100110110": bin += "Л" ; break;
case "1010100100111001": bin += "М" ; break;
case "1010100100111010": bin += "Н" ; break;
case "1010100100111100": bin += "О" ; break;
case "1010100100111111": bin += "П" ; break;
case "1010100101010000": bin += "Р" ; break;
case "1010100101010011": bin += "С" ; break;
case "1010100101010101": bin += "Т" ; break;
case "1010100101010110": bin += "У" ; break;
case "1010100101011001": bin += "Ф" ; break;
case "1010100101011010": bin += "Х" ; break;
case "1010100101011100": bin += "Ц" ; break;
case "1010100101011111": bin += "Ч" ; break;
case "1010100101100000": bin += "Ш" ; break;
case "1010100101100011": bin += "Щ" ; break;
case "1010100101100101": bin += "Ъ" ; break;
case "1010100101100110": bin += "Ы" ; break;
case "1010100101101001": bin += "Ь" ; break;
case "1010100101101010": bin += "Э" ; break;
case "1010100101101100": bin += "Ю" ; break;
case "1010100101101111": bin += "Я" ; break;
default : bin += "*" ; break;
	}
	slice = "";
}
	return bin;
}