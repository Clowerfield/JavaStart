function NoiseGenerator(P, string){
	var mass = [];
	for(var i = 0; i < (P*100); i++){
		mass.push(Math.floor(Math.random() * Math.floor(string.length)));
	}
	var brekable = "";
	for(var i = 0; i < string.length; i++){
		switch(i){
			case mass[0]: brekable += crasher(string[i]) ;break;
			case mass[1]: brekable += crasher(string[i]) ;break;
			case mass[2]: brekable += crasher(string[i]) ;break;
			case mass[3]: brekable += crasher(string[i]) ;break;
			case mass[4]: brekable += crasher(string[i]) ;break;
			case mass[5]: brekable += crasher(string[i]) ;break;
			default: brekable += string[i];
		}
		
	}
	return brekable;
}
function Resurrect(pos, block){
	var nblock = "";
	for(var i = 0; i < block.length; i++){
		if(i == (pos - 1)){
			nblock += crasher(block[i]);
		}
		else nblock += block[i];
		}
	return nblock;
}
function crasher(charr){
	switch(charr){
		case "1": return '0';break;
		case "0": return '1';break;
		default: return 0;
}
}
function Collisium(start, result){
	var c = 0;
	for(var i = 0; i < start.length; i++ ){
		if(start[i] != result[i]) c = c +1;
	}
	return c;
}