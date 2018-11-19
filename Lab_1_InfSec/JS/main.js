
window.onload = function Input_String(){
	var StartString = prompt("Ввод ФИО здесь", "Вдовиченко Александр Александрович");
	var massb = [];
	var ASCII = ToBinary(StartString);
	var Special = SpecialEncoder(StartString);
	document.getElementById('BinaryQxH').innerHTML = ASCII;
	document.getElementById('BinaryQxC').innerHTML = Special;
	var block = ToBlock(ASCII);
	var eblock = ToExtendedBlock(block);
	var sblock = ToShieldBlock(eblock);
	
	for(var i = 0; i < ToBlock(ASCII).length; i++)
	{
		massb[i] = document.getElementById('DevidedBQxH')
		massb[i].innerHTML += eblock[i];
		massb[i].innerHTML += '<br>';
		
		massb[i] = document.getElementById('SheldedDBQxH')
		massb[i].innerHTML += sblock[i];
		massb[i].innerHTML += '<br>';
	}
	var ShieldedString = ToString(sblock);
	
	document.getElementById('ShieldedQxH').innerHTML += ShieldedString;
	var P5 = NoiseGenerator(0.05, ShieldedString);
	var P3 = NoiseGenerator(0.03, ShieldedString);
	var P2 = NoiseGenerator(0.02, ShieldedString);
	var P1 = NoiseGenerator(0.01, ShieldedString);
	var P09 = NoiseGenerator(0.009, ShieldedString);
	
	document.getElementById('NoiseP5').innerHTML += P5;
	document.getElementById('NoiseP2').innerHTML += P3 +'<br>';
	document.getElementById('NoiseP2').innerHTML += P2;
	document.getElementById('NoiseP1').innerHTML += P1;
	document.getElementById('NoiseP09').innerHTML += P09;
	var Scuring5 = performance.now();
	var DP5 = ToBrokenBlock(P5);
	var Scuring3 = performance.now();
	var DP3 = ToBrokenBlock(P3);
	var Scuring2 = performance.now();
	var DP2 = ToBrokenBlock(P2);
	var Scuring1 = performance.now();
	var DP1 = ToBrokenBlock(P1);
	var Scuring09 = performance.now();
	var DP09 = ToBrokenBlock(P09);
	for(var i = 0; i < ToBrokenBlock(P5).length; i++)
	{
		massb[i] = document.getElementById('DevidedNoiseQ5')
		massb[i].innerHTML += DP5[i];
		massb[i].innerHTML += ' <br>';
		
		massb[i] = document.getElementById('DevidedNoiseQ3')
		massb[i].innerHTML += DP3[i];
		massb[i].innerHTML += ' <br>';
		
		massb[i] = document.getElementById('DevidedNoiseQ2')
		massb[i].innerHTML += DP2[i];
		massb[i].innerHTML += ' <br>';
		
		massb[i] = document.getElementById('DevidedNoiseQ1')
		massb[i].innerHTML += DP1[i];
		massb[i].innerHTML += ' <br>';
		
		massb[i] = document.getElementById('DevidedNoiseQ09')
		massb[i].innerHTML += DP09[i];
		massb[i].innerHTML += ' <br>';
	}
	var Repair5 = RepairBlock(DP5, "recover");
	var Repair3 = RepairBlock(DP3, "recover");
	var Repair2 = RepairBlock(DP2, "recover");
	var Repair1 = RepairBlock(DP1, "recover");
	var Repair09 = RepairBlock(DP09, "recover");
	 
	var Final5 = RepairBlock(DP5, "final");
	var Curing5 = performance.now() - Scuring5;
	var Final3 = RepairBlock(DP3, "final");
	var Curing3 = performance.now() - Scuring3;
	var Final2 = RepairBlock(DP2, "final");
	var Curing2 = performance.now() - Scuring2;
	var Final1 = RepairBlock(DP1, "final");
	var Curing1 = performance.now() - Scuring1;
	var Final09 = RepairBlock(DP09, "final");
	var Curing09 = performance.now() - Scuring09;
	for(var i = 0; i < ToBrokenBlock(P5).length; i++)
	{
		massb[i] = document.getElementById('RecoverNoiseQ5')
		massb[i].innerHTML += Repair5[i];
		massb[i].innerHTML += ' <br>';
		
		massb[i] = document.getElementById('RecoverNoiseQ3')
		massb[i].innerHTML += Repair3[i];
		massb[i].innerHTML += ' <br>';
		
		massb[i] = document.getElementById('RecoverNoiseQ2')
		massb[i].innerHTML += Repair2[i];
		massb[i].innerHTML += ' <br>';
		
		massb[i] = document.getElementById('RecoverNoiseQ1')
		massb[i].innerHTML += Repair1[i];
		massb[i].innerHTML += ' <br>';
		
		massb[i] = document.getElementById('RecoverNoiseQ09')
		massb[i].innerHTML += Repair09[i];
		massb[i].innerHTML += ' <br>';
		
		massb[i] = document.getElementById('FinalNoiseQ5')
		massb[i].innerHTML += Final5[i];
		massb[i].innerHTML += ' <br>';
		
		massb[i] = document.getElementById('FinalNoiseQ3')
		massb[i].innerHTML += Final3[i];
		massb[i].innerHTML += ' <br>';
		
		massb[i] = document.getElementById('FinalNoiseQ2')
		massb[i].innerHTML += Final2[i];
		massb[i].innerHTML += ' <br>';
		
		massb[i] = document.getElementById('FinalNoiseQ1')
		massb[i].innerHTML += Final1[i];
		massb[i].innerHTML += ' <br>';
		
		massb[i] = document.getElementById('FinalNoiseQ09')
		massb[i].innerHTML += Final09[i];
		massb[i].innerHTML += ' <br>';
	}
	var StringF5 = ToString(Final5);
	var StringF3 = ToString(Final3);
	var StringF2 = ToString(Final2);
	var StringF1 = ToString(Final1);
	var StringF09 = ToString(Final09);
	document.getElementById('StringFinalQ5').innerHTML += StringF5;
	document.getElementById('StringFinalQ3').innerHTML += StringF3;
	document.getElementById('StringFinalQ2').innerHTML += StringF2;
	document.getElementById('StringFinalQ1').innerHTML += StringF1;
	document.getElementById('StringFinalQ09').innerHTML += StringF09;
	
	alert(ToChar(StringF5) + " \nColisies = " + Collisium(ASCII, StringF5) + '\nCuring time = ' + Curing5 + "ms");
	alert(ToChar(StringF3) + " \nColisies = " + Collisium(ASCII, StringF3) + '\nCuring time = ' + Curing3 + "ms");
	alert(ToChar(StringF2) + " \nColisies = " + Collisium(ASCII, StringF2) + '\nCuring time = ' + Curing2 + "ms");
	alert(ToChar(StringF1) + " \nColisies = " + Collisium(ASCII, StringF1) + '\nCuring time = ' + Curing1 + "ms");
	alert(ToChar(StringF09) + " \nColisies = " + Collisium(ASCII, StringF09) + '\nCuring time = ' + Curing09 + "ms");
	
	var PSpecial = controlSum(Special);
	document.getElementById('BinaryQxCP').innerHTML += PSpecial;
	var C5 = NoiseGenerator(0.05, PSpecial);
	var C3 = NoiseGenerator(0.03, PSpecial);
	var C2 = NoiseGenerator(0.02, PSpecial);
	var C1 = NoiseGenerator(0.01, PSpecial);
	var C09 = NoiseGenerator(0.009, PSpecial);
	document.getElementById('NoiseC5').innerHTML += C5;
	document.getElementById('NoiseC3').innerHTML += C3;
	document.getElementById('NoiseC2').innerHTML += C2;
	document.getElementById('NoiseC1').innerHTML += C1;
	document.getElementById('NoiseC09').innerHTML += C09;
	var Cur5 = performance.now();
	alert(SpecialDecoder(Equalation(PSpecial, C5, true))+ " \nColisies = " + Collisium(Special, C5) + '\nCuring time = ' + (performance.now() - Cur5) + "ms");
	var Cur3 = performance.now();
	alert(SpecialDecoder(Equalation(PSpecial, C3, true))+ " \nColisies = " + Collisium(Special, C3) + '\nCuring time = ' + (performance.now() - Cur3) + "ms");
	var Cur2 = performance.now();
	alert(SpecialDecoder(Equalation(PSpecial, C2, true))+ " \nColisies = " + Collisium(Special, C2) + '\nCuring time = ' + (performance.now() - Cur2) + "ms");
	var Cur1 = performance.now();
	alert(SpecialDecoder(Equalation(PSpecial, C1, true))+ " \nColisies = " + Collisium(Special, C1) + '\nCuring time = ' + (performance.now() - Cur1) + "ms");
	var Cur09 = performance.now();
	alert(SpecialDecoder(Equalation(PSpecial, C09, true))+ " \nColisies = " + Collisium(Special, C09) + '\nCuring time = ' + (performance.now() - Cur09) + "ms");

}

