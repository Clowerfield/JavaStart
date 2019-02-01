
window.onload = function Input_String(){
	var StartString = prompt("Ввод ФИО здесь", "Вдовиченко Александр Александрович");
	var ASCII = ToBinary(StartString);
	var IntVal = ToZipBlock(ASCII);
	var WorkKeyIn = [];
	document.getElementById('BinaryQ').innerHTML = ASCII;
	document.getElementById('IntegerQ').innerHTML = IntVal;
	document.getElementById('OpenKey').innerHTML = KeyGen(0);
	document.getElementById('CloseKey').innerHTML = KeyGen(1);
	
	document.getElementById('EncryptInt').innerHTML = CryptInt(IntVal, 0);
	document.getElementById('EncryptBin').innerHTML = IntToBin(CryptInt(IntVal, 0), 0);
	document.getElementById('EncryptChar').innerHTML = ToChar(IntToBin(CryptInt(IntVal, 0),0));
	var CKey = KeyGen(1);
	var CloseKeyIn = prompt("Получившийся закрытый ключ: \nD = " + CKey[0], CKey[0]);
	WorkKeyIn.push(CloseKeyIn);
	CloseKeyIn = prompt("Получившийся закрытый ключ: \nN = " + CKey[1], CKey[1]);
	WorkKeyIn.push(CloseKeyIn);
	
	document.getElementById('DecryptInt').innerHTML =  WorkKeyCrypt(CryptInt(IntVal, 0), CKey);
	document.getElementById('DecryptBin').innerHTML = IntToBin(WorkKeyCrypt(CryptInt(IntVal, 0), CKey), 0);
	document.getElementById('DecryptChar').innerHTML = ToChar(IntToBin(WorkKeyCrypt(CryptInt(IntVal, 0), CKey)), 0);
	document.getElementById('DecryptChar').innerHTML = WolframMod(1, 2, 3);
	}

