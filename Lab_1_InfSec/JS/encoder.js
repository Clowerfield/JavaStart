function ToBinary(string){
	var tmp = "";
	var t = "";
	var bin = "";
	for(var i= 0; i < string.length; i++){
	tmp += (string.charCodeAt(i)).toString(2);
	if(tmp.length < 11){
		t = tmp;
		for(var j = 0; j < (11 - t.length); j++){
			tmp = "0" + tmp;
		}
	}
	bin += tmp;
	tmp = "";
	}
	return bin;
}


function ToExtendedBlock(block){
	var ublock = "";
	var eblock =[];
	var tmp = "";
	for(var i = 0; i < block.length; i++){
		ublock = block[i];
		
		for(var j =0; j < ublock.length; j++){
			if(j == 0)
			tmp += "00";
			if(j == 1 || j == 4)
			tmp += 0;
			tmp += ublock[j];	
		}
		eblock.push(tmp);
		tmp = "";
	}
	return eblock;
}

function ToShieldBlock(block){
	var ublock = "";
	var sblock =[];
	var tmp = "";
	var r = [];
	for(var i = 0; i < block.length; i++){
		ublock = block[i];
		r = seeker(ublock)
		
		for(var j =0; j < ublock.length; j++){
			switch(j){
				case 0: tmp += r[1]; break;
				case 1: tmp += r[2]; break;
				case 3: tmp += r[3]; break;
				case 7: tmp += r[4]; break;
				default:  tmp += ublock[j];
			}
			
		}
		sblock.push(tmp);
		tmp = "";
	}
	return sblock;
}
function seeker(ublock){
		var r1, r2, r3, r4;
		var r = [];
		for(var j =0; j < ublock.length; j++){
			if(((j%2))&&(ublock[j] == 1)) r1 = !r1;
			if(((j%4) && ((j%4)!=3))&&(ublock[j] == 1)) r2 = !r2;
			if(((j%8) && ((j%8)!=7) && ((j%8)!=2) && ((j%8)!=1))&&(ublock[j] == 1)) r3 = !r3;
			if((j > 6)&&(ublock[j] == 1)) r4 = !r4;
		}
		
		if(r1) r[1] = 1;
		else r[1] = 0;
		if(r2) r[2] = 1;
		else r[2] = 0;
		if(r3) r[3] = 1;
		else r[3] = 0;
		if(r4) r[4] = 1;
		else r[4] = 0;
		return r;
		}

function ToString(block){
	var bin = "";
	for(var i= 0; i < block.length; i++){
		bin+= block[i];
	}
	return bin;
}

function SpecialEncoder(string){
	var bin = "";
	for(var i= 0; i < string.length-1; i++){
	switch(string[i]){
case "а": bin += "1010011000000000"; break;
case "б": bin += "1010011000000011"; break;
case "в": bin += "1010011000000101"; break;
case "г": bin += "1010011000000110"; break;
case "д": bin += "1010011000001001"; break;
case "е": bin += "1010011000001010"; break;
case "ё": bin += "1010011000001010"; break;
case "ж": bin += "1010011000001100"; break;
case "з": bin += "1010011000001111"; break;
case "и": bin += "1010011000110000"; break;
case "й": bin += "1010011000110011"; break;
case "к": bin += "1010011000110101"; break;
case "л": bin += "1010011000110110"; break;
case "м": bin += "1010011000111001"; break;
case "н": bin += "1010011000111010"; break;
case "о": bin += "1010011000111100"; break;
case "п": bin += "1010011000111111"; break;
case "р": bin += "1010011001010000"; break;
case "с": bin += "1010011001010011"; break;
case "т": bin += "1010011001010101"; break;
case "у": bin += "1010011001010110"; break;
case "ф": bin += "1010011001011001"; break;
case "х": bin += "1010011001011010"; break;
case "ц": bin += "1010011001011100"; break;
case "ч": bin += "1010011001011111"; break;
case "ш": bin += "1010011001100000"; break;
case "щ": bin += "1010011001100011"; break;
case "ъ": bin += "1010011001100101"; break;
case "ы": bin += "1010011001100110"; break;
case "ь": bin += "1010011001101001"; break;
case "э": bin += "1010011001101010"; break;
case "ю": bin += "1010011001101100"; break;
case "я": bin += "1010011001101111"; break;
case " ": bin += "1001000010010000"; break;

case "А": bin += "1010100100000000"; break;
case "Б": bin += "1010100100000011"; break;
case "В": bin += "1010100100000101"; break;
case "Г": bin += "1010100100000110"; break;
case "Д": bin += "1010100100001001"; break;
case "Е": bin += "1010100100001010"; break;
case "Ё": bin += "1010100100001010"; break;
case "Ж": bin += "1010100100001100"; break;
case "З": bin += "1010100100001111"; break;
case "И": bin += "1010100100110000"; break;
case "Й": bin += "1010100100110011"; break;
case "К": bin += "1010100100110101"; break;
case "Л": bin += "1010100100110110"; break;
case "М": bin += "1010100100111001"; break;
case "Н": bin += "1010100100111010"; break;
case "О": bin += "1010100100111100"; break;
case "П": bin += "1010100100111111"; break;
case "Р": bin += "1010100101010000"; break;
case "С": bin += "1010100101010011"; break;
case "Т": bin += "1010100101010101"; break;
case "У": bin += "1010100101010110"; break;
case "Ф": bin += "1010100101011001"; break;
case "Х": bin += "1010100101011010"; break;
case "Ц": bin += "1010100101011100"; break;
case "Ч": bin += "1010100101011111"; break;
case "Ш": bin += "1010100101100000"; break;
case "Щ": bin += "1010100101100011"; break;
case "Ъ": bin += "1010100101100101"; break;
case "Ы": bin += "1010100101100110"; break;
case "Ь": bin += "1010100101101001"; break;
case "Э": bin += "1010100101101010"; break;
case "Ю": bin += "1010100101101100"; break;
case "Я": bin += "1010100101101111"; break;

	}
}
	return bin;
}