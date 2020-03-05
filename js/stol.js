		var hosts = '192.168.43.166';
window.onload = function () {
	loadstols();
	var danie = $("#stol").serialize();
	$("#stolsend").click(function (e) {
		e.preventDefault();
		$.ajax({
		url:'http://''+hosts+''/admin/php/addstol.php',
		type: 'POST',
		data:danie,
		success: function (dada) {
			$("body").append(dada);
			loadstols();
		}
	});
	});
	$("#stoldel").click(function (e) {
		e.preventDefault();
		$.ajax({
		url:'http://''+hosts+''/admin/php/delstol.php',
		type: 'POST',
		data:danie,
		success: function (dada) {
			$("body").append(dada);
			loadstols();
		}
	});
	});
}


function loadstols() {
	var danie;
	var stolas = document.getElementById('stols');
	$.ajax({
		url:'http://''+hosts+''/admin/php/stols.php',
		type: 'POST',
		data:danie,
		success: function (dada) {
			stolas.innerHTML = '';
			$("#stols").append(dada);

$(".box").click(function (e) {
		var roma = document.getElementById('roma');
		roma.innerHTML = '';
		console.log(this.innerText);
		$("#roma").append('<select id="roma" name="'+this.innerText+'"><option>1</option><option>12</option><option>123</option></select>')
	});
		}
	});
}