function controlSum(string){
	var number = parseInt(String(string), 2);
	var C11 = Equilibrium((number%11).toString(2), 4);
	var C13 = Equilibrium((number%13).toString(2), 4);
	var C14 = Equilibrium((number%14).toString(2), 4);
	var C15 = Equilibrium((number%15).toString(2), 4);
	alert("C11:" + C11 + "\nC13:" + C13 + "\nC14:" + C14 + "\nC15:" + C15);
	return string += C11 + C13 + C14 + C15;
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

function Equalation(cstring, dstring, reter){
	var csum = "";
	var dsum = "";
	
	var subds = dstring.substr(0, dstring.length - 16);
	var nstring = controlSum(subds);
	
	for(var i = dstring.length-1; i > (dstring.length - 17); i--){
		csum = nstring[i] + csum;
		dsum = cstring[i] + dsum;
	}
	alert(csum + "\n" + dsum);
	if(csum != dsum){ 
		alert("dismissing");
		var arr = Butcher(nstring, 8);
		var lar = ByteRepres(arr, true);	
		if(reter)return cstring;
		else return false;
		}
	if(reter)return nstring;
	else return true;
}
function ByteRepres(arr, res){
	var lar = [];
	for(i = 0; i < arr.length; i++){
		var slice = arr[i];
		var parity = 0;
		for(j = 0; j < (slice.length - 1); j++){
			if(slice[j] == "1") parity = !parity;
		}
		if(parity) parity = "1";
		else parity = "0";
		if(slice[slice.length - 1] != parity){
			alert(i + " block damaged");
			if(res)lar.push(slice);
			else lar.push(i);
		}
			
	}
	return lar;
}
function Parity(arrs, arrp, str, cstring, dstring){
	var pack = "";
	var proro = "";
	var pac = "";
	for (var i = 0; i < arrs.length; i++){
		pack = arrs[i];
		for(var j = 0; j < pack.length; j++){
			var pac = pack.substr(0, string.length - string.length - 1 + j) + crasher(pack[j]) + pack.substr(string.length - string.length + j, string.length);
			if(Equalation(cstring, Inserter(dstring, pac, arrp[j]), false)) return pac;
		}
	}
	return pack;
}

function Inserter(string, pack, numb){
	return string.substr(0, (8 * numb)) + pack + string.substr((8 * numb)+8, string.length);
}

function Butcher(string, size){
	var slice = "";
	var arr = [];
	for(var i= 0; i < string.length; i++){
		slice += string[i];
		if(((i+1)%size) == 0){
			arr.push(slice);
			slice = "";
		}
	}
	return arr;
}