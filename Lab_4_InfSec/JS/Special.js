function concat(arr){
	str = "";
	for(var i = 0; i < arr.length; i++){
		str += arr[i].toString(2);
	}
	return str;
}
function TestBitSerial(str){
	var no = 0;
	var nl = 0;
	var noo = 0;
	var nol = 0;
	var nlo = 0;
	var nll = 0;
	var tmp = "";
	for(var i = 0; i < str.length; i++){
		switch(str[i]){
			case "0": no++; break;
			case "1": nl++; break;
		}
	}
	for(var i = 0; i < str.length; i += 2){
		tmp += str[i] + str[i + 1];
		switch(tmp){
			case "00": noo++; break;
			case "01": nol++; break;
			case "10": nlo++; break;
			case "11": nll++; break;
		};
		tmp = "";
	}
	return (4 * (noo * noo + nol * nol + nlo * nlo + nll * nll) / (str.length - 1)) - (2 * (no * no + nl * nl) / str.length) + 1;
}
function MonoBit(str){
	var no = 0;
	var nl = 0;
	for(var i = 0; i < str.length; i++){
		switch(str[i]){
			case "0": no++; break;
			case "1": nl++; break;
		}
	}
	return (no - nl)*(no - nl)/ (str.length);
}