
function change_color() {
	var x = Math.floor(Math.random() * 256);
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);

	$("body").css("background", "rgb(" + x + "," + y + "," + z + ")");
}

$('#form').submit(function (e) {
	if ($('#name').val() == "") {
		alert("Имя не заполнено!");
		$('#name').attr('class', 'error');
		return false;
	}
	if ($('#pass').val().length <= 4) {
		alert("Слишком короткий пароль! (пароль должен быть больше 4-х символов)");
		$('#pass').attr('class', 'error');
		return false;
	}
	if ($('#pass2').val() != $('#pass').val()) {
		alert("Пароли не совпадают!");
		$('#pass2').attr('class', 'error');
		return false;
	}
	if ( ($('#email').val().indexOf("@") == -1) && ($('#email').val().length > 0) ) {
		alert("Неверный адрес электронной почты!");
		$('#email').attr('class', 'error');
		return false;
	}
	if ($('#email').val().length < 1) {
		alert("Введите адрес электронной почты!");
		$('#email').attr('class', 'error');
		return false;
	}
	if ($('#text').val().length < 10) {
		alert("Слишком маленькое сообщение!");
		$('#text').attr('class', 'error');
		return false;
	}

	return true;
});
