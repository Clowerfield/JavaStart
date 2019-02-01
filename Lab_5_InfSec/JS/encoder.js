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

function ToZipBlock(queue){
	var array = [];
	var slice = "";
	
	for(var i= 0; i < queue.length; i++){
		slice += queue[i];
		if((i+1)%8 == 0){
			array.push(ToInteger(slice));
			slice = "";
		}
		if((i == queue.length-1)&&((i+1)%8 != 0)){
			var sal = slice;
			for(var j = 0; j < (8 - sal.length); j++){
				slice = "0" + slice;
			}
			array.push(ToInteger(slice));
			slice = "";
		}
	}
	return array;
}

function CryptInt(arr, cls){
	var crypt = [];
	for(var i = 0; i < arr.length; i++){
		crypt.push(Crypter(arr[i], cls));
	}
	return crypt;
}
function ToInteger(string){
	return parseInt(String(string), 2);
}

function IntToBin(arr, add){
	var queue = "";
	for(var i = 0; i < arr.length; i++){
		if (add)queue += Equilibrium(arr[i].toString(2), 8);
		else queue += arr[i].toString(2)
	}
	return queue;
}

function KeyGen(cls){
	var key = [];
	var p = 13;
	var q = 23;
	var F = (p - 1) * (q - 1);
	var e = 17;
	var d = 233;
	
	
	if(cls)key.push(d);
	else key.push(e);
	key.push(p * q);
	
	 return key;
}

function Crypter(val, cls){
	var key = KeyGen(cls);
	var up = Math.pow(val, key[0]);
	var down = key[1];
	var msg = (up % down);
	return msg;
}

