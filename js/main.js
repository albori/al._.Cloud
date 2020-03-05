		var hosts = '192.168.43.166';
window.onload = function () {
		var numb;
		$('.fon').click(function () {
			$(".popappv").css('display', 'none');
		});
		$("#closezak").click(function (e) {
			e.preventDefault();
			$(".popappv").css('display', 'flex');
				$.ajax({
					url: 'http://'+hosts+'/admin/php/viewzak.php',
					type: 'POST',
					data: {numb: numb, login:window.localStorage.getItem("login"),close:'on'},
					success:function (data) {
						$("#lorem").html('');
						$("#lorem").append(data);
					}
			})
		})
		function onloadwindo() {
			$('#viewzak').click(function () {
			$(".popappv").css('display', 'flex');
				$.ajax({
					url: 'http://'+hosts+'/admin/php/viewzak.php',
					type: 'POST',
					data: {numb: numb, login:window.localStorage.getItem("login")},
					success:function (data) {
						$("#lorem").html('');
						$("#lorem").append(data);
					}
			})
			});
			$.ajax({
			url:'http://'+hosts+'/admin/php/stols.php',
			type: 'POST',
			data:danie,
			success: function (dada) {
				stolas.innerHTML = '';
				$("#stols").append(dada);
				$(".box").click(function () {
					numb = this.innerText;
					if ($(this).attr('class') == 'box active') {
						$('.popapzanes').addClass('active');
					};
					if ( $(this).attr('class') == 'box zak' ) {
						// alert('<p>stol zakazano</p>');
						$('.popapzaks').addClass('active');
					};
					if ( $(this).attr('class') == 'box' ) {
						$('.addsts').addClass('active');
						var numsul = this.innerText;
						var stulform = document.getElementById('stuls');
						var stulform1 = document.getElementById('stolfer');
						stulform.value = numsul;
						stulform.value = numsul;
						stulform1.innerHTML = numsul;
						$('ul').removeClass('dn');
						$('#colvogoster').addClass('dn');
					}
					});

			}
		});
		}
		onloadwindo()
		var danie;
		var stolas = document.getElementById('stols');

		var lolo = document.getElementsByClassName('popap');
			$(".box").click(function () {
				if ($(this).attr('class') == 'active box') {
					// alert("stol zanet");
					$('.popapzanes').addClass('active');
				};
				if ( $(this).attr('class') == 'zak box' ) {
					// alert('<p>stol zakazano</p>');
					$('.popapzaks').addClass('active');
				};
				if ( $(this).attr('class') == 'box' ) {
					$('.addsts').addClass('active');
				}
			});
			$('#clearkart').click(function (e) {
				e.preventDefault();
				korzink.innerHTML = '';

			})
			 $('#zakaz').click(function (e) {
			 	e.preventDefault();
			 	$(".realkart").removeClass('active');
			 });
			 $(".somka").click(function () {
			 	proverkakozr();
			 	$(".realkart").addClass('active');
			 	$('#korzink button').click(function (e) {
					if (this.getAttribute('id') == 'delb') {
						var hir = this.className;
						// $("#"+hir+"").html(null);
						$("#"+hir+"").remove();
						// deleteContents($("#"+hir+""));
						proverkakozr();
					};
				});
			 })
			 $(".closes").click(function(e) {
				 	e.preventDefault()
				 	$(".popap").removeClass('active');
			 });
			 $(".cartsclose").click(function(e) {
				 	e.preventDefault()
				 	$(".realkart").removeClass('active');
			 });

			$('li').click(function (e) {
				var kolvog = this.innerHTML;
				var gos = document.getElementById('numer');
				gos.value = kolvog;
				$('ul').addClass('dn');
				$('#colvogoster').removeClass('dn');
			})

				var inpuser = document.getElementById('nameuser');
				var inpuser1 = document.getElementById('nameusertext');
				inpuser.value = window.localStorage.getItem("login");
				inpuser1.innerHTML = window.localStorage.getItem("login");
				$("#sends").click(function (e) {
					e.preventDefault();
					korzink.innerHTML = '';
					var danie = $("#colvogoster").serialize();
					$.ajax({
				    	url: 'http://'+hosts+'/admin/php/zakza.php',
				    	type: 'POST',
				    	data: danie,
				    	success: function (data) {
				    		$("#zakaz").append(data);
				    	}
				    	})
			});

					var korzink = document.getElementById('korzink');
					function proverkakozr() {
						console.log(korzink.innerHTML)
						if (korzink.innerHTML == '' || korzink.innerHTML == '<a id="sendzakz">отправить</a>') {
							korzink.innerHTML = '';
						}else{
							var sendzakz = document.getElementById('sendzakz');
							if (sendzakz) {
							}else{
								$("#korzink").append('<a id="sendzakz">отправить</a>')
							}
						};
						$('#sendzakz').click(function (e) {
								e.preventDefault();
								var stolfer = document.getElementById('stolfer');
						       var dannis = $("#senxokx").serialize();
						       dannis += '&oficiats='+window.localStorage.getItem("login")+'&stolnomer='+stolfer.innerHTML+'';
						       console.log(dannis)
								$.ajax({
								url: 'http://'+hosts+'/admin/php/primzak.php',
								type: 'POST',
								data: dannis,
								success: function (data) {
								// $("#mian").append(data);
								$("#stols").append(data);
								var bererer = document.getElementById('zakaz');
								bererer.innerHTML = '';
								korzink.innerHTML = '';
								$(".realkart").removeClass('active');
								$('#stols').toggleClass('show');
								onloadwindo();
								},
								error: function  (e) {
									alert('error');
								}
								});
						});
					};
			$('#reload').click(function(e) {
			 window.location.href = window.location.href;
					});
			$("#exits").click(function(e) {
				e.preventDefault();
			 window.localStorage.clear();
			 window.location.href = 'index.html';
			});


}
