
window.onload = function Input_String(){
	var StartString = prompt("Ввод ФИО здесь", "Вдовиченко Александр Александрович");
	var ASCII = ToBinary(StartString);
	var lineQueue = LinerQueuee(Seeder(ASCII, 0), Seeder(ASCII, 1), 20);
	document.getElementById('BinaryQ').innerHTML = ASCII;
	document.getElementById('LinerQ').innerHTML = lineQueue;
	document.getElementById('LinerB').innerHTML = concat(lineQueue);
	var MQuee = MQueue(ASCII, 20, 0);
	document.getElementById('MgenQ').innerHTML = MQuee;
	document.getElementById('MgenB').innerHTML = concat(MQuee);
	var Gam = MQueue(ASCII, 20, 1);
	document.getElementById('GammQ').innerHTML = Gam;
	
	var LinGenIst = MonoBit(concat(lineQueue));
	var LinGenIInd = TestBitSerial(concat(lineQueue));
	var MGenIst = MonoBit(concat(MQuee));
	var MGenIInd = TestBitSerial(concat(MQuee));
	
	document.getElementById('MLG').innerHTML = LinGenIst;
	document.getElementById('MMG').innerHTML = MGenIst;
	document.getElementById('LBLG').innerHTML = LinGenIInd;
	document.getElementById('LBMG').innerHTML = MGenIInd;
}                                                      
                                                       
                                                      