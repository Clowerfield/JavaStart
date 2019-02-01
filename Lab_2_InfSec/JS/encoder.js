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


function GetChannel(string){
	var duration = string.length / 11;
	var chanel = "";
	for(var i = 0; i < (duration * 2); i++){
	chanel += Equilibrium((((Math.floor(Math.random() * 255) + 1).toString(2)).charCodeAt(0)).toString(2),8);
	chanel += Equilibrium((((Math.floor(Math.random() * 255) + 1).toString(2)).charCodeAt(0)).toString(2),4);
	chanel += Equilibrium((((Math.floor(Math.random() * 255) + 1).toString(2)).charCodeAt(0)).toString(2),2);

	}
	return chanel;
}

function GetContainer(string){
	var duration = string.length / 11;
	var chanel = "";
	for(var i = 0; i < (duration * 2); i++){
	chanel += Equilibrium((((Math.floor(Math.random() * 255) + 1).toString(2)).charCodeAt(0)).toString(2),8);
	chanel += Equilibrium((((Math.floor(Math.random() * 255) + 1).toString(2)).charCodeAt(0)).toString(2),4);

	}
	return chanel;
}

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

function ChangeSegment(receiver, sender){
	bin = "";
	for(var i = 0; i < receiver.length; i++){
		if(i < sender.length)bin += sender[i];
		else bin += receiver[i];
	}
	return bin;
}
function ChangerCharOne(receiver, sender){
	var bin = "";
	var index = 0;
	for(var i = 0; i < receiver.length; i++){
		if(receiver[i] == "1" && index != sender.length){
				bin += CharicXOR(sender[index], receiver[i]);
				index ++;
		}
		else bin += receiver[i];
	}
	return bin;
}
function CharicXOR(chara, charb){
	if(chara == "1" || charb == "0" || chara == "0" || charb == "1"){
		if(chara != charb) return "1";
		else return "0";
	}
	return "*";
}