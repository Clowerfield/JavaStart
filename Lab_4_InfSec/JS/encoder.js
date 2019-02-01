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


function Seeder(string, len){
	var length = 2 *(string.length);
	var number = parseInt(String(string), 2);
	if(len)return length;
	else return number;
}

function RandGen(val, len){
	var A = 17;
	var C = 3;
	return (A * val + C)% len;
}
function LinerQueuee(val, len, numb){
var tmp = val;
var queue = [];
for(var i = 0; i < numb; i++){
		queue.push(RandGen(tmp, len));
		tmp = RandGen(tmp, len);
	}
	return queue;
}


function CharicXOR(chara, charb){
	if(chara == "1" || charb == "0" || chara == "0" || charb == "1"){
		if(chara != charb) return "1";
		else return "0";
	}
	return "*";
}