window.onload = function () {
		var hosts = '192.168.43.166';

	$("#login").click(function(e) {
		e.preventDefault();
		var dannie = $("#avtorizesn").serialize();
		$.ajax({
		url:'http://'+hosts+'/php/login.php',
		type: 'POST',
		data:dannie,
		success: function (data) {
			if (data == '') {
				alert('message?: DOMString')
			}else{
				alert('sd')
			}
			$("#boes").append(data);
			if (boe == true) {
				var log = document.getElementById('logins').innerHTML;
				var password = document.getElementById('pasw').innerHTML;
				window.localStorage.setItem("login", log);
				window.localStorage.setItem("password", password);
				window.location.href = "main.html";
			}
		}
	})
	});
};