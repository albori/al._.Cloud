        var hosts = '192.168.43.166';

window.onload = function () {
	$('.popappv').click(function () {
		popapclse();
	});
	$('#off').click(function () {
		popapclse();
	})
		function popapclse() {
			$('.popappv').css('display', 'none');
		}
	// alert('message?: DOMString')
	var ids;
		$.ajax({
    	url: 'http://'+hosts+'/admin/php/povar.php',
    	type: 'POST',
    	success: function (data) {
    		$("#main-povar").append(data);
    	}
    	});
}

$('#on').click(function (e) {
    e.preventDefault();
		$.ajax({
        url: 'http://'+hosts+'/admin/php/povar1.php',
    	type: 'POST',
    	data:{name:''+ids+''},
    	success: function (data) {
    		$("#main-povar").append(data);
    		console.log(ids)
    		$('#'+ids+'').html('Выполнен');
    		$('#'+ids+'').css('background', '#00ff10');
    	}
})
	});