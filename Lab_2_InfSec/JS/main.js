
window.onload = function Input_String(){
	var StartString = prompt("Ввод ФИО здесь", "Вдовиченко Александр Александрович");
	var ASCII = ToBinary(StartString);
	var Chanellroad = GetChannel(ASCII);
	var Conteiner = GetContainer(ASCII);
	document.getElementById('BinaryQ').innerHTML = ASCII;
	document.getElementById('ContainerQ').innerHTML = Conteiner;
	document.getElementById('ChanelQ').innerHTML = Chanellroad;
	var Stored = ChangerCharOne(Conteiner, ASCII);
	var Sent = ChangeSegment(Chanellroad, Stored);
	document.getElementById('StoredQ').innerHTML = Stored;
	document.getElementById('SentQ').innerHTML = Sent;
	var Read = ToChar(RestoreCharOne(Sent, Conteiner));
	alert(Read);
}

